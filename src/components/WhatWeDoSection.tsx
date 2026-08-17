import espacoVozImg from "@/assets/espacoVoz.png";
import { BookOpen, Mic, Smartphone, Users } from "lucide-react";

export default function WhatWeDoSection() {
    const services = [
        {
            icon: BookOpen,
            title: "Cursos e Treinamentos",
            description: "Capacitação intensiva para profissionais, monitores e terapeutas em dependência química com certificação pelo Instituto Vozes Fortes."
        },
        {
            icon: Users,
            title: "Produção Editorial",
            description: "Dar vida às histórias reais através de podcast e literatura: narrativas que sensibilizam, inspiram e mostram que há solução possível e real."
        },
        {
            icon: Mic,
            title: "Ações de Conscientização",
            description: "Da Pele para Dentro: escuta ativa terapêutica, rodas de conversa e palestras para comunicar, acolher e conscientizar comunidades."
        },
        {
            icon: Smartphone,
            title: "Projetos Digitais",
            description: "App com inteligência artificial, conteúdos educativos, ferramentas de reflexão e conexão direta com redes de apoio especializadas."
        }
    ];

    return (
        <section id="o-que-fazemos" className="py-20 bg-gradient-section anchor-offset">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6">
                        <h2 className="text-3xl sm:text-section text-primary-dark font-bold">
                            O Que Fazemos
                        </h2>
                        <img
                            src={espacoVozImg}
                            alt="Damos Espaço à Sua Voz"
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain pointer-events-none select-none hover-scale transition-smooth"
                            loading="lazy"
                            width={96}
                            height={96}
                        />
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                        O Instituto Vozes Fortes nasce do compromisso em dar voz a quem luta contra a dependência química e a codependência. Nosso propósito é educar, conscientizar e formar profissionais e comunidades para lidar com um dos maiores desafios sociais e de saúde pública do nosso tempo. Fundado por Mônica Casagrande Neto – educadora, escritora, conselheira e terapeuta especialista em dependência química e hipnoterapia – o projeto conecta experiência de vida, conhecimento técnico e acolhimento humano.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 reveal reveal-stagger">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-card p-6 sm:p-8 rounded-xl shadow-card hover-lift transition-smooth flex flex-col justify-between h-full border border-border/60"
                        >
                            <div>
                                <div className="mb-6 flex justify-start">
                                    <div className="p-3 bg-primary/10 rounded-xl">
                                        <service.icon className="w-8 h-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-primary-dark mb-3 text-left">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-muted-foreground text-left leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}