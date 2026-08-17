import heroBackground from "@/assets/banner.png";
import escritaImg from "@/assets/escrita.png";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in will-change-transform"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    transform: `translateY(${offset * 0.5}px)`, // Parallax speed 0.5
                }}
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-80" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20 md:pt-8 pb-12">
                <p className="text-xs sm:text-sm md:text-base tracking-widest uppercase font-semibold text-primary-foreground/90 mb-4 sm:mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    Educação • Cultura • Comunicação • Desenvolvimento Social
                </p>
                {/* Logo */}
                <div className="mb-6 sm:mb-8 flex justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <img
                        src={logo}
                        alt="Vozes Fortes - VF Logo"
                        className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 hover-scale transition-smooth drop-shadow-2xl"
                        loading="lazy"
                        width={192}
                        height={192}
                    />
                </div>

                {/* Main Title */}
                <div className="mb-6 sm:mb-8 flex justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
                    <img
                        src={escritaImg}
                        alt="Vozes Fortes"
                        className="w-[85%] max-w-xs sm:max-w-md md:max-w-xl h-auto px-2 sm:px-4 drop-shadow-lg"
                        loading="lazy"
                        width={1024}
                        height={256}
                    />
                </div>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 font-light animate-fade-up" style={{ animationDelay: '0.4s' }}>
                    Damos Espaço à Sua Voz
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                    O Instituto Vozes Fortes dedica-se a dar voz a quem luta contra a dependência química e codependência,
                    promovendo educação, conscientização e transformação através de projetos que inspiram esperança e renovação.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 animate-fade-up mb-4" style={{ animationDelay: '0.6s' }}>
                    <Button
                        variant="hero"
                        size="lg"
                        onClick={() => scrollToSection('o-que-fazemos')}
                        className="w-full sm:w-auto transition-all hover:scale-105 shadow-glow glow"
                    >
                        Conheça Nossos Projetos
                    </Button>
                    <Button
                        variant="outline-hero"
                        size="lg"
                        onClick={() => scrollToSection('monica-casagrande')}
                        className="w-full sm:w-auto transition-all hover:scale-105 text-primary-foreground border-primary-foreground/30 bg-white/5 hover:bg-white/10 backdrop-blur-md font-medium"
                    >
                        Nossa História
                    </Button>
                </div>
            </div>


        </section>
    );
}
