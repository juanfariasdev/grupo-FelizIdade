import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import IdososBackground from "../assets/idosos_background.png";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={IdososBackground}
          alt="Grupo de idosos felizes"
          fill={true}
          className="object-cover"
          priority={true}
          data-ai-hint="happy seniors group"
        />
        <div className="absolute inset-0 bg-blue-900/70" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Celebrando a Vida em Todas as Idades
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200">
            Somos um grupo dedicado ao bem-estar e integração dos idosos da cidade de Machado. Aqui, você encontra informações sobre eventos, atividades e muito mais.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="shadow-md rounded-full bg-primary text-white hover:bg-primary/90">
              <Link href="#contact">Quero Participar</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-accent text-white hover:bg-accent/90 shadow-md">
              <Link href="#about">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
