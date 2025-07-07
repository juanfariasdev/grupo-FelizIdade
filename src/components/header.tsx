import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
          <Heart className="h-7 w-7" />
          <span>Grupo FelizIdade</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#about" className="transition-colors hover:text-primary">Sobre Nós</Link>
          <Link href="#gallery" className="transition-colors hover:text-primary">Galeria</Link>
          <Link href="#events" className="transition-colors hover:text-primary">Eventos</Link>
          <Link href="#contact" className="transition-colors hover:text-primary">Contato</Link>
        </nav>
        <Button asChild className="hidden md:flex shadow-sm rounded-full bg-primary text-white hover:bg-primary/90">
          <Link href="#contact">Junte-se a Nós</Link>
        </Button>
      </div>
    </header>
  );
}
