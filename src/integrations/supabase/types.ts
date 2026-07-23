export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      access_grants: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          kind: string
          sector_slug: string
          student_id: string
          track_slug: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          kind: string
          sector_slug: string
          student_id: string
          track_slug: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          kind?: string
          sector_slug?: string
          student_id?: string
          track_slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "access_grants_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      attempts: {
        Row: {
          answers: Json
          id: string
          quiz_id: string
          score: number
          student_id: string
          taken_at: string
          total: number
        }
        Insert: {
          answers: Json
          id?: string
          quiz_id: string
          score: number
          student_id: string
          taken_at?: string
          total: number
        }
        Update: {
          answers?: Json
          id?: string
          quiz_id?: string
          score?: number
          student_id?: string
          taken_at?: string
          total?: number
        }
        Relationships: [
          {
            foreignKeyName: "attempts_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attempts_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      edicts: {
        Row: {
          deadline: string | null
          description_md: string
          id: string
          kind: string
          published_at: string
          sector_slug: string | null
          source_url: string | null
          title: string
          track_slug: string
        }
        Insert: {
          deadline?: string | null
          description_md?: string
          id?: string
          kind: string
          published_at?: string
          sector_slug?: string | null
          source_url?: string | null
          title: string
          track_slug: string
        }
        Update: {
          deadline?: string | null
          description_md?: string
          id?: string
          kind?: string
          published_at?: string
          sector_slug?: string | null
          source_url?: string | null
          title?: string
          track_slug?: string
        }
        Relationships: []
      }
      lessons: {
        Row: {
          content_md: string
          generated_at: string
          id: string
          lesson_slug: string
          module_slug: string
          sector_slug: string
          title: string
          track_kind: string
          track_slug: string
        }
        Insert: {
          content_md: string
          generated_at?: string
          id?: string
          lesson_slug: string
          module_slug: string
          sector_slug: string
          title: string
          track_kind: string
          track_slug: string
        }
        Update: {
          content_md?: string
          generated_at?: string
          id?: string
          lesson_slug?: string
          module_slug?: string
          sector_slug?: string
          title?: string
          track_kind?: string
          track_slug?: string
        }
        Relationships: []
      }
      payment_requests: {
        Row: {
          amount_kz: number
          created_at: string
          id: string
          kind: string
          sector_name: string
          sector_slug: string
          status: string
          student_id: string
          track_name: string
          track_slug: string
        }
        Insert: {
          amount_kz: number
          created_at?: string
          id?: string
          kind: string
          sector_name: string
          sector_slug: string
          status?: string
          student_id: string
          track_name: string
          track_slug: string
        }
        Update: {
          amount_kz?: number
          created_at?: string
          id?: string
          kind?: string
          sector_name?: string
          sector_slug?: string
          status?: string
          student_id?: string
          track_name?: string
          track_slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_requests_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      progress: {
        Row: {
          completed_at: string
          lesson_id: string
          student_id: string
        }
        Insert: {
          completed_at?: string
          lesson_id: string
          student_id: string
        }
        Update: {
          completed_at?: string
          lesson_id?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "progress_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      quizzes: {
        Row: {
          generated_at: string
          id: string
          lesson_id: string
          questions: Json
        }
        Insert: {
          generated_at?: string
          id?: string
          lesson_id: string
          questions: Json
        }
        Update: {
          generated_at?: string
          id?: string
          lesson_id?: string
          questions?: Json
        }
        Relationships: [
          {
            foreignKeyName: "quizzes_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: true
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      revision_queue: {
        Row: {
          id: string
          last_result: string | null
          lesson_id: string
          next_review_at: string
          question_index: number
          quiz_id: string
          streak: number
          student_id: string
          updated_at: string
        }
        Insert: {
          id?: string
          last_result?: string | null
          lesson_id: string
          next_review_at?: string
          question_index: number
          quiz_id: string
          streak?: number
          student_id: string
          updated_at?: string
        }
        Update: {
          id?: string
          last_result?: string | null
          lesson_id?: string
          next_review_at?: string
          question_index?: number
          quiz_id?: string
          streak?: number
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "revision_queue_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "revision_queue_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "revision_queue_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      simulado_attempts: {
        Row: {
          answers: Json
          duration_sec: number
          id: string
          kind: string
          score: number
          sector_slug: string
          student_id: string
          taken_at: string
          total: number
          track_slug: string
        }
        Insert: {
          answers?: Json
          duration_sec: number
          id?: string
          kind: string
          score: number
          sector_slug: string
          student_id: string
          taken_at?: string
          total: number
          track_slug: string
        }
        Update: {
          answers?: Json
          duration_sec?: number
          id?: string
          kind?: string
          score?: number
          sector_slug?: string
          student_id?: string
          taken_at?: string
          total?: number
          track_slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "simulado_attempts_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          created_at: string
          id: string
          phone: string
          surname: string
        }
        Insert: {
          created_at?: string
          id?: string
          phone: string
          surname: string
        }
        Update: {
          created_at?: string
          id?: string
          phone?: string
          surname?: string
        }
        Relationships: []
      }
      study_plans: {
        Row: {
          created_at: string
          id: string
          kind: string
          sector_slug: string
          student_id: string
          target_date: string
          track_slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          kind: string
          sector_slug: string
          student_id: string
          target_date: string
          track_slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          kind?: string
          sector_slug?: string
          student_id?: string
          target_date?: string
          track_slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_plans_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
