import Image from "next/image";

export function AboutSection() {
  return (
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
  );
}
