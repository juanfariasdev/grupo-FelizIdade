import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const allTestimonials = [
  { name: "Sílvia Rocha", text: "Participar do Grupo FelizIdade transformou minha vida. Encontrei amigos verdadeiros e novas paixões.", avatar: "SR" },
  { name: "Maria Silva", text: "As atividades são incríveis! Cada semana é uma nova aventura. Nunca pensei que me divertiria tanto na terceira idade.", avatar: "MS" },
  { name: "João Pereira", text: "O apoio e o carinho que recebi aqui não têm preço. Somos uma grande família.", avatar: "JP" },
  { name: "Ana Costa", text: "Desde que entrei para o grupo, minha saúde melhorou e minha alegria de viver voltou com força total. Recomendo de coração!", avatar: "AC" },
  { name: "Carlos Andrade", text: "É um espaço maravilhoso de convivência, aprendizado e alegria. Sou muito grato por fazer parte.", avatar: "CA" },
];

export function TestimonialsSection() {
  const inspiringTestimonial = allTestimonials[0].text;
  const selectedTestimonial = allTestimonials.find(t => t.text === inspiringTestimonial);
  const otherTestimonials = allTestimonials.filter(t => t.text !== inspiringTestimonial).slice(0, 2);

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-[#2A4088] text-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm font-medium">Depoimentos</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Histórias que Inspiram</h2>
          <p className="max-w-2xl mx-auto text-white/90 text-lg">
            Veja o que nossos membros dizem sobre fazer parte da nossa comunidade.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          <Card className="lg:col-span-2 flex flex-col justify-center bg-white/10 border-white/20 p-8 rounded-xl shadow-lg text-white">
            <CardContent className="p-0">
              <blockquote className="text-xl md:text-2xl font-headline font-semibold leading-snug">
                “{inspiringTestimonial}”
              </blockquote>
            </CardContent>
            <CardFooter className="p-0 mt-6 flex items-center gap-4">
              {/* <Avatar className="h-12 w-12 border-2 border-white/30">
                <AvatarImage src={`https://placehold.co/48x48.png`} alt={`Foto de ${selectedTestimonial?.name}`} data-ai-hint="woman portrait" />
                <AvatarFallback className="bg-black/20 font-semibold text-white">{selectedTestimonial?.avatar}</AvatarFallback>
              </Avatar> */}
              <div>
                <p className="font-semibold text-white">{selectedTestimonial?.name}</p>
                <p className="text-base text-white/80">Membro do Grupo</p>
              </div>
            </CardFooter>
          </Card>

          <div className="space-y-8">
            {otherTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 rounded-xl shadow-md border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* <Avatar>
                      <AvatarImage src={`https://placehold.co/40x40.png`} alt={`Foto de ${testimonial.name}`} data-ai-hint="person portrait" />
                      <AvatarFallback className="bg-black/20 font-semibold text-white">{testimonial.avatar}</AvatarFallback>
                    </Avatar> */}
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-white/80 text-base mt-2">“{testimonial.text}”</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
