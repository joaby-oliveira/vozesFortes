import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/utils";
import { HelpCircle, MessageCircleQuestion } from "lucide-react";

export default function FaqSection() {
    const faqs = [
        {
            question: "O atendimento e a escuta terapêutica são sigilosos?",
            answer:
                "Sim, com absoluto sigilo e ética. Nossas ações de acolhimento, escuta ativa e terapia seguem rigorosos padrões de confidencialidade e respeito à privacidade de cada pessoa atendida.",
        },
        {
            question: "Como funcionam as ações do projeto Da Pele para Dentro?",
            answer:
                "O projeto Da Pele para Dentro desenvolve rodas de conversa, palestras educativas e escuta terapêutica fundamentada no Método Âncora® (integrando métodos de acolhimento à hipnoterapia). O objetivo é apoiar na regulação emocional, manejo de gatilhos e conscientização profunda sobre a dependência química e codependência.",
        },
        {
            question: "Quem pode se inscrever nos Cursos e Treinamentos?",
            answer:
                "Nossos cursos atendem profissionais da saúde, educadores, assistentes sociais, gestores de RH/empresas, familiares e pessoas em recuperação interessadas em atuar como monitores, conselheiros ou terapeutas certificados pelo Instituto Vozes Fortes.",
        },
        {
            question: "Como as empresas podem se tornar parceiras ou patrocinadoras?",
            answer:
                "Empresas podem apoiar por meio de patrocínio institucional, contratação de palestras corporativas e workshops sobre saúde mental e prevenção, além da cocriação de ações de responsabilidade social com impacto comprovado.",
        },
        {
            question: "Como posso ser voluntário ou apoiar financeiramente?",
            answer:
                "Você pode contribuir doando seu tempo e habilidades (em psicologia, comunicação, tecnologia, eventos) ou através de doações financeiras transparentes que mantêm nossas oficinas e materiais educativos em funcionamento.",
        },
    ];

    return (
        <section id="duvidas-frequentes" className="py-20 bg-background anchor-offset">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                        <HelpCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl sm:text-section text-primary-dark mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        Tire suas principais dúvidas sobre o Instituto Vozes Fortes, nossos cursos e formas de apoio.
                    </p>
                </div>

                <div className="bg-gradient-card p-6 sm:p-8 rounded-2xl shadow-card border border-border">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-base sm:text-lg text-primary-dark">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm sm:text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="mt-12 text-center p-6 bg-primary/5 rounded-xl border border-primary/10">
                    <h3 className="text-lg font-semibold text-primary-dark mb-2">
                        Ainda tem alguma dúvida?
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        Nossa equipe está pronta para te ouvir e orientar com carinho e transparência.
                    </p>
                    <Button asChild variant="hero" size="default" className="rounded-full">
                        <a
                            href={buildWhatsAppLink(
                                "Olá! Tenho uma dúvida sobre o Instituto Vozes Fortes e gostaria de conversar."
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MessageCircleQuestion className="w-4 h-4 mr-2" />
                            Falar com a Equipe
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
