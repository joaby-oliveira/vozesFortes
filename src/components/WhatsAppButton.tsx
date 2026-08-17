import { buildWhatsAppLink } from "@/lib/utils";
import { MessageSquareHeart } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);

    const whatsappUrl = buildWhatsAppLink(
        "Olá! Vim pelo site do Instituto Vozes Fortes e gostaria de acolhimento e informações."
    );

    return (
        <aside
            aria-label="Atendimento via WhatsApp"
            className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
        >
            {/* Tooltip / Badge de convite */}
            <div
                className={`hidden md:flex items-center bg-white/95 text-foreground px-4 py-2 rounded-full shadow-lg border border-border text-sm font-medium transition-all duration-300 pointer-events-none ${
                    isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
            >
                <span>Precisa de ajuda ou informações? Fale conosco</span>
            </div>

            {/* Botão de Ação */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-400/40"
                aria-label="Falar no WhatsApp com o Instituto Vozes Fortes"
            >
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
                <MessageSquareHeart className="w-7 h-7 relative z-10 transition-transform group-hover:rotate-12" />
            </a>
        </aside>
    );
}
