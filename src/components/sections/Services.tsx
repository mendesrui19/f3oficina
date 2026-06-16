import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  alt: string;
  tag: string;
  span?: "tall" | "wide" | "normal";
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Pintura Automóvel",
    subtitle: "Acabamentos de fábrica",
    desc: "Aplicação de primário, aparelho e acabamento com pistola profissional. Resultados idênticos ao original de fábrica com secagem em estufa controlada.",
    image: "/images/svc_pintura_spray.jpg",
    alt: "Técnico Fix3 a aplicar primário com pistola de pintura",
    tag: "Chapa & Pintura",
    span: "tall",
  },
  {
    id: "02",
    title: "Cabine de Pintura",
    subtitle: "Estufa profissional certificada",
    desc: "Câmara de pintura com pressão positiva, filtros HEPA e lâmpadas UV para secagem perfeita. Sem partículas, sem imperfeições.",
    image: "/images/svc_cabine_pintura.jpg",
    alt: "Técnicos Fix3 na cabine de pintura com viatura",
    tag: "Equipamento Premium",
    span: "wide",
  },
  {
    id: "03",
    title: "Reparação de Chapa",
    subtitle: "Correção de colisões e amolgadelas",
    desc: "Reparação de painéis, para-choques e estrutura da carroçaria com ferramentas de precisão, mantendo a integridade original do veículo.",
    image: "/images/svc_reparacao_chapa.jpg",
    alt: "Técnico Fix3 a reparar painel traseiro de viatura",
    tag: "Chapa & Carroçaria",
    span: "normal",
  },
  {
    id: "04",
    title: "Polimento & Preparação",
    subtitle: "Lixagem e acabamento superficial",
    desc: "Preparação completa da superfície com lixadeira orbital antes da aplicação de tinta. Garantia de uma superfície perfeita e sem ondulações.",
    image: "/images/svc_polimento.jpg",
    alt: "Técnico Fix3 a lixar carroçaria com lixadeira orbital",
    tag: "Chapa & Pintura",
    span: "normal",
  },
  {
    id: "05",
    title: "Sistema de Travagem",
    subtitle: "Segurança e precisão de paragem",
    desc: "Inspeção, substituição e calibração de discos, pastilhas e pinças de travão. Trabalho rigoroso para a sua segurança nas estradas.",
    image: "/images/svc_travagem.png",
    alt: "Mecânico a calibrar disco de travão com micrómetro",
    tag: "Mecânica",
    span: "wide",
  },
];

function ServiceModal({ service, onClose }: { service: ServiceItem; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
        className="relative bg-bg-sec border border-white/10 rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-72 overflow-hidden">
          <img
            src={service.image}
            alt={service.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-sec via-bg-sec/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-accent transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-accent font-bold bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
              {service.tag}
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="font-display text-4xl font-bold text-white/8 leading-none select-none shrink-0">
              {service.id}
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold text-white leading-tight">
                {service.title}
              </h3>
              <p className="text-accent text-sm font-semibold mt-0.5">{service.subtitle}</p>
            </div>
          </div>
          <p className="text-dim leading-[1.85] text-[0.9rem]">{service.desc}</p>
          <a
            href="#contacto"
            onClick={onClose}
            className="btn btn-orange mt-8 w-full justify-center rounded-xl"
          >
            Pedir Orçamento
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  // Grid layout:
  // Row 1: [tall - pintura spray] | [wide - cabine pintura]
  // Row 2: [tall - pintura spray continued] | [normal - chapa] | [normal - polimento]
  // Row 3: [wide - travagem] spanning bottom

  return (
    <section id="servicos" className="py-24 bg-bg-base relative overflow-hidden border-t border-white/[0.03]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1280px] relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[520px]"
          >
            <div className="section-tag">Os Nossos Serviços</div>
            <h2 className="section-h2 text-white">
              Trabalho real.<br />
              <span className="gradient-text">Resultados visíveis.</span>
            </h2>
            <p className="section-desc mt-4">
              Estas são fotos reais do nosso trabalho diário. Cada intervenção é feita com rigor, 
              equipamento profissional e peças de qualidade homologada.
            </p>
          </motion.div>

          <motion.a
            href="#contacto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="btn btn-orange self-start md:self-end rounded-xl shrink-0"
          >
            Agendar Serviço
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[280px]">

          {/* Card 1 — TALL (col-span-5, row-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="md:col-span-5 md:row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer border border-white/[0.06] hover:border-accent/30 transition-colors duration-500"
            onClick={() => setActiveService(services[0])}
          >
            <img
              src={services[0].image}
              alt={services[0].alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-7 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
              <span className="text-[0.6rem] tracking-[0.22em] uppercase text-accent font-bold mb-3 block">{services[0].tag}</span>
              <h3 className="font-display text-2xl font-bold text-white leading-tight mb-1">{services[0].title}</h3>
              <p className="text-accent/80 text-sm font-medium">{services[0].subtitle}</p>
              <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white/70 tracking-wide">Ver detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </div>
            </div>
            <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </motion.div>

          {/* Card 2 — WIDE top right (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 group relative overflow-hidden rounded-3xl cursor-pointer border border-white/[0.06] hover:border-accent/30 transition-colors duration-500"
            onClick={() => setActiveService(services[1])}
          >
            <img
              src={services[1].image}
              alt={services[1].alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-7 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
              <span className="text-[0.6rem] tracking-[0.22em] uppercase text-accent font-bold mb-3 block">{services[1].tag}</span>
              <h3 className="font-display text-2xl font-bold text-white leading-tight mb-1">{services[1].title}</h3>
              <p className="text-accent/80 text-sm font-medium">{services[1].subtitle}</p>
              <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white/70 tracking-wide">Ver detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </div>
            </div>
            <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </motion.div>

          {/* Card 3 — normal (col-span-3 or 3.5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-4 group relative overflow-hidden rounded-3xl cursor-pointer border border-white/[0.06] hover:border-accent/30 transition-colors duration-500"
            onClick={() => setActiveService(services[2])}
          >
            <img
              src={services[2].image}
              alt={services[2].alt}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
              <span className="text-[0.58rem] tracking-[0.22em] uppercase text-accent font-bold mb-2 block">{services[2].tag}</span>
              <h3 className="font-display text-xl font-bold text-white leading-tight mb-0.5">{services[2].title}</h3>
              <p className="text-accent/80 text-xs font-medium">{services[2].subtitle}</p>
              <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white/70 tracking-wide">Ver detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </div>
            </div>
          </motion.div>

          {/* Card 4 — normal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 group relative overflow-hidden rounded-3xl cursor-pointer border border-white/[0.06] hover:border-accent/30 transition-colors duration-500"
            onClick={() => setActiveService(services[3])}
          >
            <img
              src={services[3].image}
              alt={services[3].alt}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
              <span className="text-[0.58rem] tracking-[0.22em] uppercase text-accent font-bold mb-2 block">{services[3].tag}</span>
              <h3 className="font-display text-xl font-bold text-white leading-tight mb-0.5">{services[3].title}</h3>
              <p className="text-accent/80 text-xs font-medium">{services[3].subtitle}</p>
              <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white/70 tracking-wide">Ver detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </div>
            </div>
          </motion.div>

          {/* Card 5 — WIDE bottom (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-12 group relative overflow-hidden rounded-3xl cursor-pointer border border-white/[0.06] hover:border-accent/30 transition-colors duration-500"
            style={{ height: '360px' }}
            onClick={() => setActiveService(services[4])}
          >
            <img
              src={services[4].image}
              alt={services[4].alt}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20" />
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.06] transition-colors duration-500" />
            <div className="absolute top-1/2 -translate-y-1/2 left-10 md:left-16 transform group-hover:translate-x-2 transition-transform duration-400">
              <span className="text-[0.6rem] tracking-[0.22em] uppercase text-accent font-bold mb-4 block">{services[4].tag}</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-2">{services[4].title}</h3>
              <p className="text-accent/80 text-sm font-semibold mb-4">{services[4].subtitle}</p>
              <p className="text-white/60 text-[0.85rem] leading-[1.8] max-w-[380px] hidden md:block">{services[4].desc}</p>
              <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm text-white/70 tracking-wide">Ver detalhes</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </div>
            </div>
            {/* Service number */}
            <div className="absolute top-8 right-10 font-display text-[8rem] font-bold text-white/[0.03] leading-none select-none">
              {services[4].id}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 p-8 rounded-3xl bg-accent/5 border border-accent/15 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <p className="font-display font-bold text-white text-xl">Precisa de um serviço diferente?</p>
            <p className="text-dim text-sm mt-1">Contacte-nos — fazemos diagnóstico e orçamento grátis.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="tel:+351911771712" className="btn btn-orange rounded-xl text-[0.72rem]">
              Ligar Agora
            </a>
            <a href="#contacto" className="btn btn-ghost rounded-xl text-[0.72rem]">
              Formulário
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeService && (
          <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
