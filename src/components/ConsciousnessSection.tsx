import peleLogo from "@/assets/PelePraDentro.png";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/utils";
import { Heart, MessageCircle, Users2 } from "lucide-react";

export default function ConsciousnessSection() {
    const initiatives = [
        {
            icon: Heart,
            title: "Escuta Ativa Terapêutica",
            description: "Sessões individuais de acolhimento e terapia, oferecendo um espaço seguro para expressão e cura.",
            message: "Olá! Tenho interesse na Escuta Ativa Terapêutica. Gostaria de saber mais informações e como participar."
        },
        {
            icon: Users2,
            title: "Rodas de Conversa",
            description: "Encontros em grupo que promovem o compartilhamento de experiências e apoio mútuo.",
            message: "Olá! Tenho interesse nas Rodas de Conversa. Gostaria de saber mais informações e como participar."
        },
        {
            icon: MessageCircle,
            title: "Palestras Educativas",
            description: "Apresentações informativas para comunidades, escolas e organizações sobre prevenção e conscientização.",
            message: "Olá! Tenho interesse nas Palestras Educativas. Gostaria de saber mais informações e como contratar."
        }
    ];

    return (
        <section id="da-pele-para-dentro" className="py-20 bg-gradient-hero text-primary-foreground anchor-offset">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
                        <img
                            src={peleLogo}
                            alt="Logo Da Pele para Dentro"
                            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain pointer-events-none select-none hover-scale transition-smooth"
                        />
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-center sm:text-left">
                            Da Pele para Dentro
                        </h2>
                    </div>
                    <div className="w-20 sm:w-24 h-1 bg-primary-foreground/60 mx-auto mb-6 sm:mb-8 rounded-full" />
                    <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 px-4">
                        Da Pele para Dentro nasceu com a missão de promover reflexão e conscientização sobre a dependência química, que muitas vezes se disfarça em outras dores emocionais e ainda é tratada com preconceito. A proposta é olhar além da superfície e enxergar a realidade interna de cada ser humano: falar de dor, mas principalmente de esperança, acolhimento e caminhos reais de recuperação.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mt-4 px-4">
                        A ação se desenvolve através da escuta terapêutica fundamentada no Método Âncora® (integrando práticas de acolhimento à hipnoterapia para regulação emocional e manejo de gatilhos), rodas de conversa para troca de vivências e palestras educativas para empresas e comunidades.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 px-4 md:px-0 reveal reveal-stagger">
                    {initiatives.map((initiative, index) => (
                        <div
                            key={index}
                            className="bg-primary-foreground/10 backdrop-blur-sm p-6 sm:p-7 md:p-8 rounded-xl hover-lift transition-smooth border border-primary-foreground/20 flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <initiative.icon className="w-12 h-12 text-primary-foreground mx-auto animate-pulse-soft" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-center">
                                {initiative.title}
                            </h3>
                            <p className="text-center leading-relaxed opacity-90 mb-6 flex-grow">
                                {initiative.description}
                            </p>
                            <Button asChild className="w-full bg-white text-primary hover:bg-white/90 font-semibold shadow-lg">
                                <a
                                    href={buildWhatsAppLink(initiative.message)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Saiba Mais
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}