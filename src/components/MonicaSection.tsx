import monicaImg from "@/assets/monica.jpg";

export default function MonicaSection() {
    return (
        <section id="monica-casagrande" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-section text-primary-dark mb-6">
                            Conheça Mônica Casagrande Neto
                        </h2>
                        <div className="w-24 h-1 bg-gradient-purple mx-auto mb-8 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 order-2 lg:order-1">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong className="text-primary-dark">Educadora, escritora, conselheira e terapeuta</strong>,
                                Mônica Casagrande Neto é a força inspiradora por trás do Instituto Vozes Fortes.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                Sua trajetória pessoal de superação e transformação a levou a dedicar sua vida
                                a ajudar outras pessoas que enfrentam desafios similares. Com uma abordagem
                                empática e profissional, ela desenvolveu métodos únicos de acolhimento e recuperação.
                            </p>

                            <div className="bg-gradient-card p-6 rounded-xl border border-border/60">
                                <blockquote className="text-primary-dark font-medium italic text-center leading-relaxed">
                                    "Cada voz que se ergue contra o silêncio da adicção é uma vitória.
                                    Nosso papel é amplificar essas vozes e mostrar que a transformação é possível."
                                </blockquote>
                                <cite className="block text-center text-primary mt-4 font-semibold not-italic">
                                    — Mônica Casagrande Neto
                                </cite>
                            </div>
                        </div>

                        <div className="bg-gradient-card p-6 sm:p-8 rounded-2xl shadow-card border border-border/60 order-1 lg:order-2">
                            <div className="overflow-hidden rounded-xl mb-6 shadow-sm">
                                <img
                                    src={monicaImg}
                                    alt="Mônica Casagrande Neto"
                                    className="w-full h-72 sm:h-80 object-cover object-top hover-scale transition-smooth"
                                    loading="lazy"
                                    width={640}
                                    height={320}
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-dark mb-4">
                                Áreas de Especialização
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm sm:text-base">Dependência Química e Prevenção</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm sm:text-base">Codependência e Relações Familiares</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm sm:text-base">Terapia e Aconselhamento</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm sm:text-base">Educação e Capacitação</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm sm:text-base">Produção de Conteúdo Terapêutico</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm sm:text-base">Hipnoterapia e Regulação Emocional</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}