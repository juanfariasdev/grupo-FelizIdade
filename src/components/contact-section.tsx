import { Phone, MapPin, Globe } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Button } from "./ui/button";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.096l-.534 1.956 1.984-.524zm-2.48-6.009c-.046-.076-.318-.501-.363-.547-.046-.046-.546-.02-.746-.02-.199 0-.462.076-.697.346-.236.272-.904.881-.904 2.146s.929 2.481 1.049 2.631c.12.149 1.812 2.766 4.39 3.826 2.576 1.06 2.576.711 3.031.665.456-.046 1.43-.581 1.626-.946.197-.364.197-.682.126-.757-.07-.076-.248-.125-.492-.224-.245-.099-1.43-.702-1.666-.781-.235-.078-.401-.125-.572.125-.17.249-.631.78-.772.925-.14.148-.282.174-.478.025-.197-.149-1.125-.411-2.143-1.319-.801-.71-1.34-1.586-1.488-1.862-.149-.276-.025-.412.1-.547.125-.124.276-.312.411-.462.146-.149.183-.248.276-.421.095-.171.048-.311-.025-.436-.075-.125-.572-.682-.772-.925z"/>
    </svg>
  );

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto grid max-w-7xl items-start gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Seja você também um integrante do Grupo FelizIdade!</h2>
            <p className="text-accent-foreground/90 md:text-lg">
              Preencha o formulário abaixo para entrar em contato. Se preferir, fale conosco pelo WhatsApp ou venha nos visitar.
            </p>
          </div>
          <div className="space-y-4">
            <ContactForm />
            <a href="https://wa.me/553532957045" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-[#25D366] hover:bg-[#1EBE57] text-white">
                <WhatsAppIcon className="h-5 w-5 mr-2"/>
                Entrar em contato pelo WhatsApp
              </Button>
            </a>
          </div>
        </div>
        <div className="space-y-6 flex flex-col h-full">
          <div className="overflow-hidden rounded-xl shadow-lg border border-accent-foreground/20 flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7415.351620605852!2d-45.921803!3d-21.676465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca135d751e224d%3A0x2580060b89fe90d2!2sPra%C3%A7a%20Ant%C3%B4nio%20Carlos%20-%20Machado%2C%20MG%2C%2037750-000!5e0!3m2!1spt-BR!2sbr!4v1751913391285!5m2!1spt-BR!2sbr"
              className="w-full h-full min-h-[400px]"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-accent-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Endereço</h3>
                <p className="text-accent-foreground/90">Praça Antônio Carlos, 101 - Centro, Machado - MG, 37750-000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-accent-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Telefone</h3>
                <p className="text-accent-foreground/90">(35) 3295-7045</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="h-6 w-6 text-accent-foreground flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Site</h3>
                <a href="https://www.machado.mg.gov.br" target="_blank" rel="noopener noreferrer" className="text-accent-foreground/90 hover:text-accent-foreground transition-colors">
                  www.machado.mg.gov.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
