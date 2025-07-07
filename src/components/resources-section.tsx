import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Heart, Link as LinkIcon, Handshake } from "lucide-react";

const resources = [
  {
    title: "Serviços de Saúde Local",
    description: "Encontre informações sobre os postos de saúde e hospitais da região.",
    href: "https://www.google.com/maps/search/psf/@-21.6818261,-45.923356,15z?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
    icon: Heart,
  },
  {
    title: "Direitos da Pessoa Idosa",
    description: "Conheça o Estatuto do Idoso e seus direitos como cidadão.",
    href: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-pessoa-idosa/direitos",
    icon: Handshake,
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Recursos</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Links Úteis</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Acesse informações e serviços importantes para o seu bem-estar.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-background/50 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-headline">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-600">{resource.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="p-0 h-auto text-primary text-base">
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
  );
}
