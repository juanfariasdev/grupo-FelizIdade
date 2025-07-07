import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../assets/logo.png"
import LogoPrefeitura from "../assets/logo_prefeitura.png"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-full">
          <Link href="#">
            <Image
              src={Logo}
              width={200}
              height={60}
              alt="Logo do Grupo FelizIdade, um coração estilizado ao lado do nome"
              data-ai-hint="group logo"
              className="h-16 w-auto"
            />
          </Link>
          <div className="h-12 w-px bg-border hidden lg:block" />
          <a href="https://www.machado.mg.gov.br" target="_blank" rel="noopener noreferrer" className="hidden lg:block flex items-center">
            <Image
              src={LogoPrefeitura}
              width={150}
              height={50}
              alt="Logo da Prefeitura de Machado, patrocinador do grupo"
              data-ai-hint="sponsor logo"
              className="h-12 w-auto"
            />
          </a>
        </div>
        
        <div className="flex items-center gap-4">
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
      </div>
    </header>
  );
}
