import logo from "@/assets/logo.png";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { buildWhatsAppLink } from "@/lib/utils";
import { Heart, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-hero text-primary-foreground">
            <div className="container mx-auto px-4 py-12 sm:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <img src={logo} alt="Vozes Fortes" className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded" loading="lazy" width={96} height={96} />
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold">Vozes Fortes</h3>
                                <p className="text-primary-foreground/80">Instituto de Transformação</p>
                            </div>
                        </div>
                        <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-md">
                            Dedicados a dar voz a quem luta contra dependência química e codependência,
                            promovendo educação, conscientização e transformação.
                        </p>
                        <div className="flex items-center gap-2 text-primary-foreground/80">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">Feito com amor e propósito</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Navegação</h4>
                        <ul className="space-y-2">
                            <li><a href="#o-que-fazemos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">O Que Fazemos</a></li>
                            <li><a href="#monica-casagrande" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Nossa História</a></li>
                            <li><a href="#da-pele-para-dentro" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Ações de Conscientização</a></li>
                            <li><a href="#producao-editorial" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Produção Editorial</a></li>
                            <li><a href="#cursos-treinamentos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cursos</a></li>
                            <li><a href="#projetos-digitais" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Projetos Digitais</a></li>
                            <li><a href="#duvidas-frequentes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Dúvidas Frequentes</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contato</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary-foreground/60" />
                                <a
                                    href="mailto:vozesfortes32@gmail.com"
                                    className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
                                >
                                    vozesfortes32@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary-foreground/60" />
                                <a
                                    href={buildWhatsAppLink("Olá, vim pelo site e gostaria de falar com alguém.")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
                                >
                                    +55 14 99733-5195
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary-foreground/60 mt-1" />
                                <span className="text-primary-foreground/80 text-sm">Marília, SP<br />Brasil</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-10 sm:mt-12 pt-6 sm:pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                        <p className="text-primary-foreground/60 text-xs sm:text-sm text-center">
                            © {currentYear} Instituto Vozes Fortes. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                            {/* Modal Política de Privacidade */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors underline-offset-4 hover:underline">
                                        Política de Privacidade
                                    </button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <div className="flex items-center gap-2 mb-2">
                                            <ShieldCheck className="w-6 h-6 text-primary" />
                                            <DialogTitle>Política de Privacidade & LGPD</DialogTitle>
                                        </div>
                                        <DialogDescription className="space-y-3 text-left">
                                            <span>
                                                O <strong>Instituto Vozes Fortes</strong> valoriza a segurança, ética e confidencialidade de todas as pessoas que interagem com nosso site e projetos.
                                            </span>
                                            <span className="block font-medium text-foreground">
                                                1. Coleta de Dados Pessoais:
                                            </span>
                                            <span>
                                                Os dados informados no formulário de interesse (nome, e-mail e telefone) são utilizados única e exclusivamente para envio de comunicações sobre os lançamentos, cursos e projetos do Instituto.
                                            </span>
                                            <span className="block font-medium text-foreground">
                                                2. Sigilo e Confidencialidade:
                                            </span>
                                            <span>
                                                Nunca vendemos, alugamos ou compartilhamos suas informações com terceiros para fins comerciais. Nossos canais de acolhimento e escuta terapêutica respeitam rigoroso sigilo.
                                            </span>
                                            <span className="block font-medium text-foreground">
                                                3. Seus Direitos (LGPD - Lei 13.709/2018):
                                            </span>
                                            <span>
                                                Você pode solicitar a alteração ou exclusão definitiva de seus dados a qualquer momento entrando em contato pelo e-mail <em>vozesfortes32@gmail.com</em> ou pelo WhatsApp institucional.
                                            </span>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                            {/* Modal Termos de Uso */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="text-primary-foreground/60 hover:text-primary-foreground transition-colors underline-offset-4 hover:underline">
                                        Termos de Uso
                                    </button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Termos de Uso</DialogTitle>
                                        <DialogDescription className="space-y-3 text-left">
                                            <span>
                                                Bem-vindo ao portal do <strong>Instituto Vozes Fortes</strong>. Ao navegar por este site, você concorda com os princípios de respeito, empatia e finalidade educativa do projeto.
                                            </span>
                                            <span className="block font-medium text-foreground">
                                                1. Propósito Educativo e de Apoio:
                                            </span>
                                            <span>
                                                Os conteúdos disponibilizados têm caráter informativo, educativo e de conscientização sobre dependência química e codependência, não substituindo diagnósticos ou tratamentos médicos de emergência.
                                            </span>
                                            <span className="block font-medium text-foreground">
                                                2. Direitos Autorais e Marca:
                                            </span>
                                            <span>
                                                As marcas, métodos (como Método Âncora®) e produções editoriais pertencem ao Instituto Vozes Fortes e sua reprodução requer autorização prévia.
                                            </span>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}