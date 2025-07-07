import { Phone, MapPin, Globe } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
        <div className="space-y-6">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Contato</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Fale Conosco</h2>
          <p className="text-muted-foreground md:text-lg">
            Tem alguma dúvida ou quer se juntar ao nosso grupo? Entre em contato ou venha nos visitar. Estamos ansiosos para ouvir de você.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Endereço</h3>
                <p className="text-muted-foreground">Praça Antônio Carlos, 101 - Centro, Machado - MG, 37750-000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Telefone</h3>
                <p className="text-muted-foreground">(35) 3295-7045</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Site</h3>
                <a href="https://www.machado.mg.gov.br" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  www.machado.mg.gov.br
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl shadow-lg border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7415.351620605852!2d-45.921803!3d-21.676465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca135d751e224d%3A0x2580060b89fe90d2!2sPra%C3%A7a%20Ant%C3%B4nio%20Carlos%20-%20Machado%2C%20MG%2C%2037750-000!5e0!3m2!1spt-BR!2sbr!4v1751913391285!5m2!1spt-BR!2sbr"
            className="w-full h-full aspect-[4/3]"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </section>
  );
}
