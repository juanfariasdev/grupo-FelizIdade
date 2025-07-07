import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const galleryImages = [
  {
    src: "https://placehold.co/600x400.png",
    alt: "Grupo em atividade de jardinagem",
    hint: "seniors gardening",
    title: "Jardinagem Terapêutica",
    description: "Conectando-se com a natureza e fortalecendo amizades."
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "Aula de dança para idosos",
    hint: "seniors dancing",
    title: "Ritmo e Alegria",
    description: "Nossas aulas de dança mantêm o corpo e a alma em movimento."
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "Passeio do grupo no parque",
    hint: "seniors park",
    title: "Passeio no Parque",
    description: "Manhãs de sol, ar fresco e boa companhia durante nossas caminhadas."
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "Oficina de artesanato",
    hint: "seniors craft",
    title: "Arte e Criatividade",
    description: "Descobrindo talentos e criando peças únicas em nossas oficinas."
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "Comemoração de aniversário",
    hint: "seniors party",
    title: "Celebrando a Vida",
    description: "Cada aniversário é um motivo para festejar em grande estilo."
  },
  {
    src: "https://placehold.co/600x400.png",
    alt: "Grupo jogando cartas",
    hint: "seniors playing cards",
    title: "Tarde de Jogos",
    description: "Jogos de cartas e tabuleiro para exercitar a mente e dar boas risadas."
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-accent">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-lg bg-white/30 px-3 py-1 text-sm font-medium text-accent-foreground">Galeria</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-accent-foreground">Nossos Momentos Felizes</h2>
          <p className="max-w-2xl mx-auto text-accent-foreground/90 md:text-lg">
            Uma imagem vale mais que mil palavras. Explore os momentos de alegria e companheirismo que compartilhamos.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group flex flex-col transition-shadow hover:shadow-xl bg-card">
              <div className="overflow-hidden">
                <Image
                  src={image.src}
                  width={600}
                  height={400}
                  alt={image.alt}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  data-ai-hint={image.hint}
                />
              </div>
              <CardContent className="flex-grow p-6">
                <h3 className="font-headline text-xl font-bold text-accent-foreground">{image.title}</h3>
                <p className="mt-2 text-accent-foreground/80">{image.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="rounded-full bg-primary text-white hover:bg-primary/90">
                  <Link href="#">Ver fotos</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
