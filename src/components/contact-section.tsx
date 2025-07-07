import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
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
  );
}
