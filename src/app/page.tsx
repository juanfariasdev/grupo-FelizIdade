import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Heart, Users, Calendar, Link as LinkIcon, Phone, MapPin, Handshake, Sun, Paintbrush, Music } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const allTestimonials = [
  { name: "Sílvia Rocha", text: "Participar do Grupo FelizIdade transformou minha vida. Encontrei amigos verdadeiros e novas paixões.", avatar: "SR" },
  { name: "Maria Silva", text: "As atividades são incríveis! Cada semana é uma nova aventura. Nunca pensei que me divertiria tanto na terceira idade.", avatar: "MS" },
  { name: "João Pereira", text: "O apoio e o carinho que recebi aqui não têm preço. Somos uma grande família.", avatar: "JP" },
  { name: "Ana Costa", text: "Desde que entrei para o grupo, minha saúde melhorou e minha alegria de viver voltou com força total. Recomendo de coração!", avatar: "AC" },
  { name: "Carlos Andrade", text: "É um espaço maravilhoso de convivência, aprendizado e alegria. Sou muito grato por fazer parte.", avatar: "CA" },
];

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Grupo em atividade de jardinagem", hint: "seniors gardening" },
  { src: "https://placehold.co/600x400.png", alt: "Aula de dança para idosos", hint: "seniors dancing" },
  { src: "https://placehold.co/600x400.png", alt: "Passeio do grupo no parque", hint: "seniors park" },
  { src: "https://placehold.co/600x400.png", alt: "Oficina de artesanato", hint: "seniors craft" },
  { src: "https://placehold.co/600x400.png", alt: "Comemoração de aniversário", hint: "seniors party" },
  { src: "https://placehold.co/600x400.png", alt: "Grupo jogando cartas", hint: "seniors playing cards" },
];

const events = [
  {
    date: "25 AGO",
    title: "Caminhada no Parque",
    description: "Uma manhã revigorante com uma caminhada leve e um piquenique.",
    icon: Sun,
  },
  {
    date: "05 SET",
    title: "Oficina de Pintura",
    description: "Explore sua criatividade com nossa oficina de pintura em tela.",
    icon: Paintbrush,
  },
  {
    date: "18 SET",
    title: "Baile da Primavera",
    description: "Celebre a chegada da estação com muita música e dança.",
    icon: Music,
  },
];

const resources = [
  {
    title: "Portal do Envelhecimento",
    description: "Notícias, artigos e pesquisas sobre o envelhecimento ativo e saudável.",
    href: "#",
    icon: LinkIcon,
  },
  {
    title: "Serviços de Saúde Local",
    description: "Encontre informações sobre os postos de saúde e hospitais da região.",
    href: "#",
    icon: Heart,
  },
  {
    title: "Direitos da Pessoa Idosa",
    description: "Conheça o Estatuto do Idoso e seus direitos como cidadão.",
    href: "#",
    icon: Handshake,
  },
];

export default function Home() {
  const inspiringTestimonial = allTestimonials[0].text;
  const selectedTestimonial = allTestimonials.find(t => t.text === inspiringTestimonial);
  const otherTestimonials = allTestimonials.filter(t => t.text !== inspiringTestimonial).slice(0, 2);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-gray-800">
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
          <Button asChild className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm">
            <Link href="#contact">Junte-se a Nós</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                        Celebrando a Vida em Todas as Idades
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto text-lg text-gray-600">
                        No Grupo FelizIdade, descobrimos novas amizades, compartilhamos experiências e vivemos cada momento com alegria e vitalidade.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                            <Link href="#contact">Quero Participar</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="shadow-sm">
                            <Link href="#about">Saiba Mais</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" className="w-full py-16 md:py-24 bg-card">
          <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Sobre Nós</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Nossa Missão: Conectar e Inspirar</h2>
              <p className="text-gray-600 md:text-lg">
                O Grupo FelizIdade nasceu do desejo de criar um ambiente acolhedor e vibrante para a terceira idade. Nossa missão é promover o bem-estar, a socialização e o aprendizado contínuo, oferecendo atividades que enriquecem o corpo, a mente e a alma.
              </p>
              <p className="text-gray-600 md:text-lg">
                Valorizamos a amizade, o respeito e a alegria de viver. Ao longo de nossa história, construímos uma comunidade unida, onde cada membro é parte essencial de nossa grande família.
              </p>
            </div>
            <div className="flex justify-center">
                <Image
                    src="https://placehold.co/600x500.png"
                    width={600}
                    height={500}
                    alt="Membros do Grupo FelizIdade sorrindo"
                    className="rounded-xl shadow-lg"
                    data-ai-hint="happy seniors group"
                />
            </div>
          </div>
        </section>
        
        <section id="testimonials" className="w-full py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="text-center space-y-4">
                    <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Depoimentos</div>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Histórias que Inspiram</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 md:text-lg">
                        Veja o que nossos membros dizem sobre fazer parte da nossa comunidade.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                    <Card className="lg:col-span-2 flex flex-col justify-center bg-primary/10 border-primary/20 p-8 rounded-xl shadow-lg">
                        <CardContent className="p-0">
                            <blockquote className="text-xl md:text-2xl font-headline font-semibold leading-snug text-primary-foreground">
                                “{inspiringTestimonial}”
                            </blockquote>
                        </CardContent>
                        <CardFooter className="p-0 mt-6 flex items-center gap-4">
                           <Avatar className="h-12 w-12 border-2 border-primary/30">
                                <AvatarImage src={`https://placehold.co/48x48.png`} data-ai-hint="woman portrait" />
                                <AvatarFallback>{selectedTestimonial?.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-primary-foreground">{selectedTestimonial?.name}</p>
                                <p className="text-sm text-primary-foreground/80">Membro do Grupo</p>
                            </div>
                        </CardFooter>
                    </Card>

                    <div className="space-y-8">
                    {otherTestimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-card rounded-xl shadow-md">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                     <Avatar>
                                        <AvatarImage src={`https://placehold.co/40x40.png`} data-ai-hint="person portrait" />
                                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p className="text-gray-600 text-sm mt-2">“{testimonial.text}”</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                    </div>
                </div>
            </div>
        </section>

        <section id="gallery" className="w-full py-16 md:py-24 bg-card">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Galeria</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Nossos Momentos Felizes</h2>
              <p className="max-w-2xl mx-auto text-gray-600 md:text-lg">
                Uma imagem vale mais que mil palavras. Explore os momentos de alegria e companheirismo que compartilhamos.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-xl group">
                  <Image
                    src={image.src}
                    width={600}
                    height={400}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={image.hint}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="w-full py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Eventos</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Nossa Agenda</h2>
              <p className="max-w-2xl mx-auto text-gray-600 md:text-lg">
                Fique por dentro das próximas atividades. Sempre há algo novo e emocionante acontecendo!
              </p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto space-y-8">
                {events.map((event, index) => (
                    <div key={index} className="flex items-start gap-6 p-4 rounded-lg hover:bg-card transition-colors">
                        <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg p-4 h-24 w-24 text-center">
                            <span className="text-3xl font-bold tracking-tighter">{event.date.split(' ')[0]}</span>
                            <span className="text-sm font-medium uppercase">{event.date.split(' ')[1]}</span>
                        </div>
                        <div className="flex-1 pt-2">
                           <h3 className="text-xl font-bold font-headline">{event.title}</h3>
                           <p className="text-gray-600 mt-1">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </section>

        <section id="resources" className="w-full py-16 md:py-24 bg-card">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Recursos</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Links Úteis</h2>
              <p className="max-w-2xl mx-auto text-gray-600 md:text-lg">
                Acesse informações e serviços importantes para o seu bem-estar.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {resources.map((resource, index) => (
                <Card key={index} className="bg-background/50 hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4 pb-4">
                        <div className="bg-primary/20 p-3 rounded-lg">
                            <resource.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg font-headline">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-600">{resource.description}</p>
                    </CardContent>
                    <CardFooter>
                         <Button variant="link" asChild className="p-0 h-auto text-primary">
                            <a href={resource.href} target="_blank" rel="noopener noreferrer">
                                Acessar Recurso
                            </a>
                        </Button>
                    </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-16 md:py-24">
          <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Contato</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Fale Conosco</h2>
              <p className="text-gray-600 md:text-lg">
                Tem alguma dúvida ou quer se juntar ao nosso grupo? Envie uma mensagem! Estamos ansiosos para ouvir de você.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(11) 98765-4321</span>
                </div>
                 <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Rua da Alegria, 123 - São Paulo, SP</span>
                </div>
              </div>
            </div>
            <Card className="p-6 bg-card shadow-lg rounded-xl">
              <ContactForm />
            </Card>
          </div>
        </section>
      </main>

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
            <Link href="#" aria-label="Facebook" className="text-gray-500 hover:text-primary"><Users className="h-5 w-5"/></Link>
            <Link href="#" aria-label="Instagram" className="text-gray-500 hover:text-primary"><Calendar className="h-5 w-5"/></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
