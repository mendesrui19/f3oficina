import { Mail, Phone, MapPin, Compass } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-sec border-t border-white/[0.05] pt-16 pb-10 px-6 md:px-12 relative overflow-hidden text-left">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded bg-gradient-to-br from-accent to-accent2 flex items-center justify-center">
              <Compass className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="font-display font-bold text-white text-xl tracking-[0.03em]">
              FIX3
            </span>
          </div>
          <p className="text-dim text-[0.82rem] leading-[1.8] max-w-[300px]">
            Manutenção e diagnóstico automóvel multimarca de precisão. Honestidade, rigor técnico e transparência na estrada.
          </p>
        </div>

        {/* Contacts Column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-display font-bold text-white text-sm tracking-[0.12em] uppercase">
            Contactos & Morada
          </h4>
          <ul className="flex flex-col gap-4 text-[0.82rem] text-dim list-none p-0">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href="tel:+351911771712" className="hover:text-white transition-colors">
                +351 911 771 712
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span className="text-dim">
                Geral / Marcações
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span className="leading-[1.6]">
                Rua dos Moinhos 230<br />
                4805-446 Salvador de Briteiros<br />
                Guimarães, Portugal
              </span>
            </li>
          </ul>
        </div>

        {/* Links & Legal Column */}
        <div className="flex flex-col gap-6">
          <h4 className="font-display font-bold text-white text-sm tracking-[0.12em] uppercase">
            Informações e Legal
          </h4>
          <ul className="flex flex-col gap-3 text-[0.82rem] text-dim list-none p-0">
            <li>
              <a href="#sobre" className="hover:text-white transition-colors">Sobre a Oficina</a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            </li>
            <li>
              <a href="#tecnologia" className="hover:text-white transition-colors">Equipamentos</a>
            </li>
            <li>
              <a 
                href="https://www.livroreclamacoes.pt/Inicio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                Livro de Reclamações Eletrónico
              </a>
            </li>
            <li className="text-[0.7rem] text-dim/60 leading-[1.45] mt-2 border-t border-white/5 pt-2">
              Em caso de litígio o consumidor pode recorrer ao Centro de Arbitragem de Conflitos de Consumo do Vale do Ave (TRIAVE).
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1200px] mx-auto border-t border-white/[0.05] pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-[0.72rem] text-dim font-medium">
          © {currentYear} FIX3. Todos os direitos reservados. Morada: R. dos Moinhos 230, 4805-446 Guimarães.
        </p>
        <span className="text-[0.72rem] text-dim/40">
          Desenvolvido com precisão.
        </span>
      </div>
    </footer>
  );
}
