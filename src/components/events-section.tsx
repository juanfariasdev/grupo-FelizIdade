import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
  );
}
