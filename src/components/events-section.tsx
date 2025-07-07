import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const schedule = [
  { days: "Segunda/Quarta", time: "7:30", location: "Atividade Física - PSF Gruta" },
  { days: "Segunda/Quarta", time: "8:30", location: "Atividade Física - Salão da Assistência Social" },
  { days: "Segunda/Quarta", time: "14:00", location: "Atividade Física - PSF Jardim" },
  { days: "Segunda/Quarta", time: "15:00", location: "Atividade Física - PSF Caic" },
  { days: "Terça/Quinta", time: "7:30", location: "Atividade Física - Poliesportivo" },
  { days: "Terça/Quinta", time: "8:30", location: "Atividade Física - Praça da Juventude" },
  { days: "Terça/Quinta", time: "14:00", location: "Atividade Física - PSF São Benedito" },
];

export function EventsSection() {
  return (
    <section id="events" className="relative w-full py-16 md:py-24">
        <div className="absolute inset-0">
            <Image
            src="https://placehold.co/1920x1080.png"
            alt="Idosos se exercitando em um parque"
            fill
            className="object-cover"
            data-ai-hint="seniors exercising"
            />
            <div className="absolute inset-0 bg-primary/90" />
        </div>

      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-white md:px-6">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm font-medium">Eventos</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Nossa Agenda</h2>
          <p className="max-w-2xl mx-auto text-white/90 md:text-lg">
            Confira nossa programação semanal de atividades físicas. Mantenha-se ativo e saudável conosco!
          </p>
        </div>
        <Card className="mt-12 shadow-lg rounded-xl bg-white/10 border-white/20 backdrop-blur-sm text-white">
          <Table>
            <TableHeader>
              <TableRow className="border-b-white/30 hover:bg-white/10">
                <TableHead className="w-[180px] font-headline text-base text-white">Dias</TableHead>
                <TableHead className="w-[120px] font-headline text-base text-white">Horário</TableHead>
                <TableHead className="font-headline text-base text-white">Atividade e Local</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map((item, index) => (
                <TableRow key={index} className="border-b-white/30 last:border-0 hover:bg-white/10">
                  <TableCell className="font-medium">{item.days}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <div className="mt-8 text-center">
          <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 shadow-md rounded-full">
            <Link href="#contact">Fale conosco</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
