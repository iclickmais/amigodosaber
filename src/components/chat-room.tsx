import React, { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { ScreenContainer } from "./screen-container";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  content: string;
  created_at: string;
  author_name: string;
  author_id: string;
}

interface OnlineUser {
  studentId: string;
  surname: string;
}

export function ChatRoom() {
  const { user, isAuthenticated } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const studentId = user?.openId; // Assuming openId is the studentId

  // Fetch initial messages
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("/api/chat/getMessages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ limit: 50 }),
      });
      const data = await response.json();
      setMessages(data);
    };
    fetchMessages();
  }, []);

  // Fetch initial online users
  useEffect(() => {
    const fetchOnlineUsers = async () => {
      const response = await fetch("/api/chat/getOnlineStudents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ limit: 50 }),
      });
      const data = await response.json();
      setOnlineUsers(data);
    };
    fetchOnlineUsers();
  }, []);

  // Realtime subscription for messages
  useEffect(() => {
    const channel = supabase
      .channel("chat-room")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "chat_messages_with_profiles" },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as ChatMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Realtime subscription for presence
  useEffect(() => {
    if (!studentId) return;

    const presenceChannel = supabase.channel("student-presence", {
      config: { presence: { key: studentId } },
    });

    presenceChannel.on("presence", { event: "sync" }, () => {
      const newState = presenceChannel.presenceState();
      const currentOnlineUsers: OnlineUser[] = [];
      for (const studentIdKey in newState) {
        const presence = newState[studentIdKey][0] as { studentId: string; surname: string };
        currentOnlineUsers.push({ studentId: presence.studentId, surname: presence.surname });
      }
      setOnlineUsers(currentOnlineUsers);
    });

    presenceChannel.on("presence", { event: "join" }, ({ newPresences }) => {
      newPresences.forEach((presence) => {
        const p = presence as { studentId: string; surname: string };
        setOnlineUsers((prev) => {
          if (!prev.some((u) => u.studentId === p.studentId)) {
            return [...prev, { studentId: p.studentId, surname: p.surname }];
          }
          return prev;
        });
      });
    });

    presenceChannel.on("presence", { event: "leave" }, ({ leftPresences }) => {
      leftPresences.forEach((presence) => {
        const p = presence as { studentId: string; surname: string };
        setOnlineUsers((prev) => prev.filter((u) => u.studentId !== p.studentId));
      });
    });

    presenceChannel.subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        // Update presence on subscribe
        await presenceChannel.track({ studentId, surname: user?.name || "Anónimo" });
        // Also update backend presence table
        await fetch("/api/chat/updatePresence", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ studentId, isOnline: true }),
        });
      }
    });

    // Cleanup on unmount
    return () => {
      if (studentId) {
        presenceChannel.untrack();
        fetch("/api/chat/updatePresence", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ studentId, isOnline: false }),
        });
      }
      supabase.removeChannel(presenceChannel);
    };
  }, [studentId, user?.name]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "" || !studentId) return;

    await fetch("/api/chat/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentId, content: newMessage }),
    });

    setNewMessage("");
  };

  if (!isAuthenticated) {
    return (
      <ScreenContainer className="flex items-center justify-center p-4">
        <p className="text-foreground">Por favor, faça login para participar do chat.</p>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer className="flex-1 flex flex-col p-4">
      <h1 className="text-2xl font-bold text-foreground mb-4">Sala de Bate-papo</h1>

      <div className="flex-1 flex flex-row overflow-hidden">
        {/* Online Users Sidebar */}
        <div className="w-1/4 bg-surface p-2 rounded-lg mr-4">
          <h2 className="font-semibold text-foreground mb-2">Online ({onlineUsers.length})</h2>
          <ScrollArea className="h-[calc(100%-2rem)]">
            {onlineUsers.map((u) => (
              <p key={u.studentId} className="text-muted text-sm py-1">
                {u.surname}
              </p>
            ))}
          </ScrollArea>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 flex flex-col bg-surface p-4 rounded-lg">
          <ScrollArea className="flex-1 mb-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "mb-2 p-2 rounded-lg max-w-[70%]",
                  msg.author_id === studentId
                    ? "self-end bg-primary text-primary-foreground ml-auto"
                    : "self-start bg-muted text-muted-foreground mr-auto"
                )}
              >
                <p className="font-semibold text-sm">{msg.author_name}</p>
                <p>{msg.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {new Date(msg.created_at).toLocaleTimeString()}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Message Input */}
          <div className="flex gap-2">
            <Input
              className="flex-1"
              placeholder="Digite a sua mensagem..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <Button onClick={handleSendMessage}>Enviar</Button>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
}
