import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import LogoPrefeitura from "../assets/logo_prefeitura.png"

export function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <Link href="#">
          <Image
            src={LogoPrefeitura}
            width={200}
            height={60}
            alt="Grupo FelizIdade"
            data-ai-hint="group logo"
            className="h-10 w-auto"
          />
        </Link>
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Grupo FelizIdade. Todos os direitos reservados.
          <br/>
          Site produzido por <a href="https://juanpablofarias.com" className="underline" target="_blank">Alunos do de Bacharel em Sistemas de Informação</a> - IF Sul de Minas Campus Machado
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://facebook.com/prefeiturademachado" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-primary"><Facebook className="h-5 w-5"/></Link>
          <Link href="https://instagram.com/prefeiturademachado" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-primary"><Instagram className="h-5 w-5"/></Link>
        </div>
      </div>
    </footer>
  );
}
