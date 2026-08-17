import livroImg from "@/assets/livro.png";
import podcastImg from "@/assets/podcast.png";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/utils";
import { BookOpen, ChevronDown, ChevronUp, Mic, Send } from "lucide-react";
import { useState } from "react";

export default function EditorialSection() {
    const [isPodcastExpanded, setIsPodcastExpanded] = useState(false);
    const [isLiteratureExpanded, setIsLiteratureExpanded] = useState(false);

    return (
        <section id="producao-editorial" className="py-12 sm:py-20 bg-gradient-section anchor-offset">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-section text-primary-dark mb-6">
                        Nossa Produção Editorial
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                        No Vozes Fortes, a produção editorial busca dar vida às histórias reais através de podcast e literatura. Essas vozes, ao romperem o silêncio e narrarem sua dor, carregam uma força quase sobrenatural: a de sensibilizar, inspirar e mostrar que existe solução — possível e real.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-10 reveal reveal-stagger">
                    {/* Podcast Section */}
                    <div className="bg-gradient-card p-6 sm:p-8 rounded-2xl shadow-card hover-lift transition-smooth flex flex-col justify-between h-full border border-border/70">
                        <div>
                            <div className="flex items-center gap-3.5 mb-6">
                                <div className="p-3 bg-primary/10 rounded-2xl flex-shrink-0">
                                    <Mic className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-primary-dark leading-tight">
                                    Podcast Milagre Invisível
                                </h3>
                            </div>
                            <img
                                src={podcastImg}
                                alt="Podcast Milagre Invisível"
                                className="w-full max-w-full h-auto object-contain rounded-xl mb-6 max-h-56 shadow-sm"
                                loading="lazy"
                                width={640}
                                height={256}
                            />

                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                                Milagre Invisível é um podcast que nasce da urgência de dar voz ao que tantas vezes é silenciado. Histórias verídicas de luta, queda, reconstrução e superação são narradas com a força da verdade nua e crua, trazendo esperança para quem escuta.
                            </p>

                            {isPodcastExpanded && (
                                <div className="space-y-4 animate-fade-in mb-4">
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        A cada episódio, você vai ouvir relatos de quem enfrentou dependência química, violência, abandono, preconceito ou doenças emocionais — e encontrou um caminho possível de recomeço.
                                    </p>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        Além dos protagonistas dessas histórias, recebemos também familiares, profissionais da saúde e especialistas que ajudam a compreender as emoções e os desafios do processo de recuperação.
                                    </p>
                                </div>
                            )}

                            <div className="space-y-2.5 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">Histórias de superação autênticas</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">Relatos de familiares e cuidadores</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">Insights de terapeutas e especialistas</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 pt-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full text-primary hover:bg-primary/5"
                                onClick={() => setIsPodcastExpanded(!isPodcastExpanded)}
                            >
                                {isPodcastExpanded ? (
                                    <>
                                        <ChevronUp className="w-4 h-4 mr-2" />
                                        Ler menos
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="w-4 h-4 mr-2" />
                                        Ler mais
                                    </>
                                )}
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="w-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all font-medium"
                            >
                                <a
                                    href={buildWhatsAppLink("Olá! Tenho interesse no Podcast Milagre Invisível e gostaria de ser avisado sobre o lançamento dos episódios.")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    Avisar-me do Lançamento
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Literature Section */}
                    <div className="bg-gradient-card p-6 sm:p-8 rounded-2xl shadow-card hover-lift transition-smooth flex flex-col justify-between h-full border border-border/70">
                        <div>
                            <div className="flex items-center gap-3.5 mb-6">
                                <div className="p-3 bg-primary/10 rounded-2xl flex-shrink-0">
                                    <BookOpen className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-primary-dark leading-tight">
                                    Literatura: Obras Impressas
                                </h3>
                            </div>
                            <img
                                src={livroImg}
                                alt="Literatura Vozes Fortes"
                                className="w-full max-w-full h-auto object-contain rounded-xl mb-6 max-h-56 shadow-sm"
                                loading="lazy"
                                width={640}
                                height={256}
                            />

                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                                A literatura no Vozes Fortes nasce como um braço que transforma histórias reais em palavras impressas, capazes de atravessar o tempo e alcançar pessoas em diferentes lugares com narrativas de superação e transformação.
                            </p>

                            <div className="bg-primary/5 p-4 sm:p-5 rounded-xl mb-4 border-l-4 border-primary">
                                <h4 className="text-base sm:text-lg font-semibold text-primary-dark mb-2">
                                    Destaque: "Tempestade Interior"
                                </h4>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                                    "Esta obra atravessa os abismos da dependência química e emerge como testemunho de que a recuperação é possível, trazendo acolhimento e direção para quem busca renovação."
                                </p>
                                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-primary">
                                    <span className="bg-primary/10 px-2.5 py-1 rounded-full">📖 Em Pré-Venda</span>
                                    <span>•</span>
                                    <span className="text-muted-foreground font-normal">🎧 Audiobook em Produção</span>
                                </div>
                            </div>

                            {isLiteratureExpanded && (
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 animate-fade-in">
                                    Esses encontros literários têm como missão criar espaços de acolhimento e debate, onde cada narrativa possa ser ressignificada e transformada em instrumento de cura coletiva.
                                </p>
                            )}
                        </div>

                        <div className="space-y-3 pt-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="w-full text-primary hover:bg-primary/5"
                                onClick={() => setIsLiteratureExpanded(!isLiteratureExpanded)}
                            >
                                {isLiteratureExpanded ? (
                                    <>
                                        <ChevronUp className="w-4 h-4 mr-2" />
                                        Ler menos
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="w-4 h-4 mr-2" />
                                        Ler mais
                                    </>
                                )}
                            </Button>

                            <Button
                                asChild
                                variant="cta"
                                size="lg"
                                className="w-full shadow-lg"
                            >
                                <a
                                    href={buildWhatsAppLink("Olá! Tenho interesse no livro Tempestade Interior e gostaria de garantir o meu exemplar na pré-venda.")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BookOpen className="w-4 h-4 mr-2" />
                                    Garantir na Pré-Venda
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}