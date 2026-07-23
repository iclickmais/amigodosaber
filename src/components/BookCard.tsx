import { Link } from "@tanstack/react-router";
import { Star, MessageCircle } from "lucide-react";
import { BookCover } from "./BookCover";
import type { Book } from "@/lib/library-data";
import { formatPrice, whatsappCheckoutUrl } from "@/lib/library-data";

export function BookCard({ book }: { book: Book }) {
  const checkoutUrl = whatsappCheckoutUrl(book);

  return (
    <div className="group flex flex-col gap-3 cv-auto">
      <Link
        to="/livro/$id"
        params={{ id: book.id }}
        className="flex flex-col gap-3 h-full"
      >
        <div className="relative transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-glow">
          <BookCover book={book} />
        </div>
        <div className="flex flex-col gap-1 px-1 flex-1">
          <h3 className="font-serif text-base leading-tight text-foreground line-clamp-2 group-hover:text-gold transition-colors">
            {book.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-1">{book.author}</p>
          <div className="mt-1 flex items-center justify-between">
            <span className="font-serif text-lg text-gold">
              {formatPrice(book.price)}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-current text-gold" strokeWidth={0} />
              {book.rating}
            </span>
          </div>
        </div>
      </Link>
      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-lg bg-gold/10 px-3 py-2 text-xs font-medium text-gold transition-all hover:bg-gold hover:text-primary-foreground border border-gold/30 hover:border-gold"
        onClick={(e) => e.stopPropagation()}
      >
        <MessageCircle className="h-3.5 w-3.5" />
        Comprar
      </a>
    </div>
  );
}
