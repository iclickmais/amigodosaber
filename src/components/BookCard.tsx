import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { BookCover } from "./BookCover";
import type { Book } from "@/lib/library-data";
import { formatPrice } from "@/lib/library-data";

export function BookCard({ book }: { book: Book }) {
  return (
    <Link
      to="/livro/$id"
      params={{ id: book.id }}
      className="group flex flex-col gap-3 cv-auto"
    >

      <div className="relative transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-glow">
        <BookCover book={book} />
      </div>
      <div className="flex flex-col gap-1 px-1">
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
  );
}
