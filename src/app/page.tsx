import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Heart, Users, Calendar, Link as LinkIcon, Phone, MapPin, Handshake } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const allTestimonials = [
  { name: "Sílvia Rocha", text: "Participar do Grupo FelizIdade transformou minha vida. Encontrei amigos verdadeiros e novas paixões.", avatar: "SR" },
  { name: "Maria Silva", text: "As atividades são incríveis! Cada semana é uma nova aventura. Nunca pensei que me divertiria tanto na terceira idade.", avatar: "MS" },
  { name: "João Pereira", text: "O apoio e o carinho que recebi aqui não têm preço. Somos uma grande família.", avatar: "JP" },
  { name: "Ana Costa", text: "Desde que entrei para o grupo, minha saúde melhorou e minha alegria de viver voltou com força total. Recomendo de coração!", avatar: "AC" },
  { name: "Carlos Andrade", text: "É um espaço maravilhoso de convivência, aprendizado e alegria. Sou muito grato por fazer parte.", avatar: "CA" },
];

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

const schedule = [
  { days: "Segunda/Quarta", time: "7:30", location: "Atividade Física - PSF Gruta" },
  { days: "Segunda/Quarta", time: "8:30", location: "Atividade Física - Salão da Assistência Social" },
  { days: "Segunda/Quarta", time: "14:00", location: "Atividade Física - PSF Jardim" },
  { days: "Segunda/Quarta", time: "15:00", location: "Atividade Física - PSF Caic" },
  { days: "Terça/Quinta", time: "7:30", location: "Atividade Física - Poliesportivo" },
  { days: "Terça/Quinta", time: "8:30", location: "Atividade Física - Praça da Juventude" },
  { days: "Terça/Quinta", time: "14:00", location: "Atividade Física - PSF São Benedito" },
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
          <Button asChild className="hidden md:flex shadow-sm rounded-full bg-primary text-white hover:bg-primary/90">
            <Link href="#contact">Junte-se a Nós</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Grupo de idosos felizes"
              fill={true}
              className="object-cover"
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
                    Somos um grupo dedicado ao bem-estar e integração dos idosos da cidade de Machado. Aqui, você encontra informações sobre as atividades, depoimentos, apoiadores e muito mais.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                      <Button asChild size="lg" className="shadow-md rounded-full bg-primary text-white hover:bg-primary/90">
                          <Link href="#contact">Quero Participar</Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full">
                          <Link href="#about">Saiba Mais</Link>
                      </Button>
                  </div>
              </div>
          </div>
        </section>

        <section id="about" className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-5xl space-y-12 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">SOBRE NÓS</h2>
              <p className="mx-auto max-w-3xl md:text-lg">
                O Grupo FelizIdade é uma iniciativa da Secretaria de Saúde de Machado, MG, criada para promover o envelhecimento ativo e saudável. Nosso propósito é oferecer um espaço​ de convivência, aprendizado e troca de experiências, onde os idosos possam se sentir valorizados e integrados à comunidade. Através de atividades recreativas, educativas e sociais, buscamos fortalecer os vínculos familiares e comunitários, contribuindo para uma vida mais feliz e plena.
              </p>
            </div>
            <div className="space-y-16">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="order-2 md:order-1 space-y-4 text-left">
                  <h3 className="font-headline text-3xl font-bold">Nossa Missão</h3>
                  <p>
                    Nossa missão é proporcionar um ambiente acolhedor e estimulante, onde os idosos possam desfrutar de uma vida ativa, saudável e cheia de significado. Queremos fortalecer os vínculos sociais, promover o aprendizado contínuo e valorizar a experiência de cada participante, contribuindo para um envelhecimento com qualidade e alegria.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <Image
                    src="https://placehold.co/600x400.png"
                    width={600}
                    height={400}
                    alt="Grupo de idosos em atividade comunitária"
                    className="rounded-lg shadow-xl"
                    data-ai-hint="seniors community"
                  />
                </div>
              </div>
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                   <Image
                    src="https://placehold.co/600x400.png"
                    width={600}
                    height={400}
                    alt="Idosos sorrindo e se abraçando"
                    className="rounded-lg shadow-xl"
                    data-ai-hint="seniors smiling"
                  />
                </div>
                <div className="space-y-4 text-left">
                  <h3 className="font-headline text-3xl font-bold">Nossos Valores</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li><strong>Respeito:</strong> Valorizamos a trajetória e a individualidade de cada idoso.</li>
                    <li><strong>Inclusão:</strong> Promovemos atividades que atendem a diferentes interesses e capacidades.</li>
                    <li><strong>Companheirismo:</strong> Criamos um espaço de amizade, solidariedade e apoio mútuo.</li>
                    <li><strong>Saúde e Bem-estar:</strong> Focamos em atividades que estimulam a saúde física e mental.</li>
                    <li><strong>Integração:</strong> Incentivamos a participação dos idosos na comunidade, fortalecendo sua conexão com a sociedade.</li>
                  </ul>
                </div>
              </div>
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
                    <Card className="lg:col-span-2 flex flex-col justify-center bg-red-100/50 border-primary/20 p-8 rounded-xl shadow-lg">
                        <CardContent className="p-0">
                            <blockquote className="text-xl md:text-2xl font-headline font-semibold leading-snug text-gray-800">
                                “{inspiringTestimonial}”
                            </blockquote>
                        </CardContent>
                        <CardFooter className="p-0 mt-6 flex items-center gap-4">
                           <Avatar className="h-12 w-12 border-2 border-primary/30">
                                <AvatarImage src={`https://placehold.co/48x48.png`} data-ai-hint="woman portrait" />
                                <AvatarFallback>{selectedTestimonial?.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-gray-800">{selectedTestimonial?.name}</p>
                                <p className="text-sm text-gray-600">Membro do Grupo</p>
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

        <section id="events" className="w-full py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Eventos</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Nossa Agenda</h2>
              <p className="max-w-2xl mx-auto text-gray-600 md:text-lg">
                Confira nossa programação semanal de atividades físicas. Mantenha-se ativo e saudável conosco!
              </p>
            </div>
            <Card className="mt-12 shadow-lg rounded-xl">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px] font-headline text-base">Dias</TableHead>
                    <TableHead className="w-[120px] font-headline text-base">Horário</TableHead>
                    <TableHead className="font-headline text-base">Atividade e Local</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedule.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.days}</TableCell>
                      <TableCell>{item.time}</TableCell>
                      <TableCell>{item.location}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
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
