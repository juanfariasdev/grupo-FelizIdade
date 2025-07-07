import Link from "next/link";
import { Heart, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="flex items-center gap-2 font-headline text-xl font-bold text-primary">
          <Heart className="h-6 w-6" />
          <span>Grupo FelizIdade</span>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Grupo FelizIdade. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://facebook.com/prefeiturademachado" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-primary"><Facebook className="h-5 w-5"/></Link>
          <Link href="https://instagram.com/prefeiturademachado" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-primary"><Instagram className="h-5 w-5"/></Link>
        </div>
      </div>
    </footer>
  );
}
