import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../assets/logo.png"
import LogoPrefeitura from "../assets/logo_prefeitura.png"
import { Facebook, Instagram, Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-full">
          <Link href="#" aria-label="Página inicial do Grupo FelizIdade">
            <Image
              src={Logo}
              width={200}
              height={60}
              alt="Grupo FelizIdade, um coração estilizado ao lado do nome"
              data-ai-hint="group logo"
              className="h-16 w-auto"
            />
          </Link>
          <div className="h-12 w-px bg-border hidden lg:block" />
          <a href="https://www.machado.mg.gov.br" target="_blank" rel="noopener noreferrer" className="hidden lg:block flex items-center" aria-label="Site da Prefeitura de Machado">
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
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
            <nav className="flex items-center gap-6 text-sm font-medium">
                <Link href="#about" className="transition-colors hover:text-primary">Sobre Nós</Link>
                <Link href="#gallery" className="transition-colors hover:text-primary">Galeria</Link>
                <Link href="#events" className="transition-colors hover:text-primary">Eventos</Link>
                <Link href="#contact" className="transition-colors hover:text-primary">Contato</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="https://facebook.com/prefeiturademachado" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-primary"><Facebook className="h-5 w-5"/></Link>
              <Link href="https://instagram.com/prefeiturademachado" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-primary"><Instagram className="h-5 w-5"/></Link>
            </div>
            <Button asChild className="shadow-sm rounded-full bg-primary text-white hover:bg-primary/90">
                <Link href="#contact">Junte-se a Nós</Link>
            </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Abrir menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                    <SheetClose asChild>
                        <Link href="#" aria-label="Página inicial do Grupo FelizIdade">
                            <Image
                                src={Logo}
                                width={180}
                                height={54}
                                alt="Grupo FelizIdade"
                                className="h-14 w-auto"
                                />
                        </Link>
                    </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <div className="flex h-full flex-col justify-between py-8">
                <nav className="flex flex-col gap-6 text-lg font-medium text-center">
                    <SheetClose asChild>
                        <Link href="#about" className="transition-colors hover:text-primary">Sobre Nós</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="#gallery" className="transition-colors hover:text-primary">Galeria</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="#events" className="transition-colors hover:text-primary">Eventos</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="#contact" className="transition-colors hover:text-primary">Contato</Link>
                    </SheetClose>
                </nav>
                <div className="space-y-6">
                    <SheetClose asChild>
                        <Button asChild className="w-full shadow-sm rounded-full bg-primary text-white hover:bg-primary/90 text-base" size="lg">
                            <Link href="#contact">Junte-se a Nós</Link>
                        </Button>
                    </SheetClose>
                    <div className="flex items-center justify-center gap-6">
                        <Link href="https://facebook.com/prefeiturademachado" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-primary"><Facebook className="h-7 w-7"/></Link>
                        <Link href="https://instagram.com/prefeiturademachado" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-primary"><Instagram className="h-7 w-7"/></Link>
                    </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
