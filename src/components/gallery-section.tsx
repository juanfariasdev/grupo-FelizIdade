import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Piquenique from "../assets/galeria/piquenique.jpg"
import Forro from "../assets/galeria/forro.png"
import Carnaval from "../assets/galeria/carnaval.png"
import Baile from "../assets/galeria/baile-anos-60.jpg"
import AtvFisica from "../assets/galeria/atv-fisica.jpg"
import Arraia from "../assets/galeria/arraia.jpg"



const galleryImages = [
  {
    src: Piquenique,
    alt: "Grupo em um piquenique",
    hint: "seniors picnic",
    title: "Piquenique",
    description: "Momentos de confraternização e alegria ao ar livre, fortalecendo nossos laços de amizade."
  },
  {
    src: Forro,
    alt: "Grupo dançando forró",
    hint: "seniors dancing",
    title: "Forró",
    description: "Muita dança e animação ao som do tradicional forró, celebrando a cultura e o movimento."
  },
  {
    src: Carnaval,
    alt: "Grupo celebrando o carnaval",
    hint: "seniors carnival",
    title: "Carnaval",
    description: "Folia, fantasias e marchinhas para celebrar a maior festa popular com muita alegria contagiante."
  },
  {
    src: Baile,
    alt: "Grupo em um baile dos anos 60",
    hint: "seniors 60s party",
    title: "Baile dos Anos 60",
    description: "Uma viagem no tempo com os maiores sucessos dos anos dourados, relembrando grandes momentos."
  },
  {
    src: AtvFisica,
    alt: "Grupo praticando atividade física",
    hint: "seniors exercising",
    title: "Atividade Física",
    description: "Cuidando da saúde e do bem-estar com exercícios em grupo, sempre com disposição e energia."
  },
  {
    src: Arraia,
    alt: "Grupo em uma festa junina",
    hint: "seniors june party",
    title: "Arraiá",
    description: "A tradição e a alegria das festas juninas com muita diversão, comidas típicas e danças."
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
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 shadow-md">
                <Link href="https://drive.google.com/drive/u/1/folders/1HS_Uz9OxE4reZVVas-c4FXnrLGFm33GJ" target="_blank" rel="noopener noreferrer">Ver tudo</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
