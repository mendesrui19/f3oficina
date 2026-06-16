import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, Clock } from "lucide-react";

// WhatsApp icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.977 14.113.951 12.008.951c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.463 3.39 1.34 4.881l-.993 3.626 3.73-.966zm10.23-5.266c-.28-.14-1.65-.815-1.906-.907-.255-.094-.442-.14-.627.14-.185.28-.718.907-.88.1.092-.162.28-.534.628-.815 1.218-1.08 1.547-1.127.28-.14.282.14.463.093.553.047.09.046.186.093.28.14.279.14 1.385.842 2.378 1.725.993.882 1.802 1.765 2.1 2.23.298.463.328.788.188.928-.14.14-.627.604-.842.814-.216.21-.527.34-.843.14-.316-.2-1.332-.49-2.536-1.564-1.077-.96-1.804-2.146-2.015-2.507-.21-.362-.023-.557.157-.737.162-.162.36-.42.54-.628.18-.21.24-.362.36-.605.12-.24.06-.45-.03-.637-.09-.185-.627-1.511-.86-2.07-.226-.544-.455-.47-.627-.47-.16 0-.348-.02-.536-.02-.186 0-.493.07-.75.35-.258.28-.986.965-.986 2.35 0 1.387 1.01 2.72 1.152 2.91.14.186 1.99 3.036 4.82 4.257 2.828 1.22 2.828.814 3.337.768.51-.047 1.65-.674 1.884-1.326.234-.652.234-1.21.165-1.326-.07-.116-.256-.186-.537-.326z" fill="currentColor"/>
  </svg>
);

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    vehicle: "",
    service: "Geral",
    phone: "",
    message: "",
    agree: false
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const intro = `Olá Fix3! Chamo-me ${formData.name}.`;
    const details = `Pretendo agendar/saber informações sobre o serviço de ${formData.service} para o meu veículo (${formData.vehicle}).`;
    const messagePart = formData.message ? `\n\nMensagem: ${formData.message}` : "";
    const contactPart = formData.phone ? `\nTelemóvel: ${formData.phone}` : "";
    
    const fullMessage = encodeURIComponent(`${intro}\n\n${details}${messagePart}${contactPart}`);
    window.open(`https://wa.me/351911771712?text=${fullMessage}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-bg-sec relative overflow-hidden text-left">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1200px] relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-stretch">
          
          {/* Info Card Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="section-tag">Contacto & Agendamentos</span>
              <h2 className="section-h2 text-white">Pronto para agendar o seu serviço?</h2>
              <p className="section-desc mb-10">
                Entre em contacto direto por telefone, envie os detalhes do seu veículo pelo formulário para falar connosco no WhatsApp, ou visite a nossa oficina em Salvador de Briteiros.
              </p>

              {/* Direct lists */}
              <div className="flex flex-col gap-6 text-[0.88rem] text-dim mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/8 border border-accent/20 flex items-center justify-center text-accent">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.62rem] text-dim/60 uppercase font-bold tracking-wider">Telefone / Telemóvel</span>
                    <a href="tel:+351911771712" className="text-white hover:text-accent font-medium mt-0.5 transition-colors">
                      +351 911 771 712
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/8 border border-accent/20 flex items-center justify-center text-accent">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.62rem] text-dim/60 uppercase font-bold tracking-wider">Horário de Funcionamento</span>
                    <span className="text-white font-medium mt-0.5">
                      Segunda a Sexta: 08:30 - 12:30, 14:00 - 18:00
                    </span>
                    <span className="text-dim text-[0.75rem]">Sábado e Domingo: Encerrado</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/8 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.62rem] text-dim/60 uppercase font-bold tracking-wider">Morada da Oficina</span>
                    <span className="text-white leading-[1.6] mt-0.5">
                      Rua dos Moinhos 230<br />
                      4805-446 Salvador de Briteiros, Guimarães, Portugal
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action banner */}
            <div className="p-6 rounded-2xl bg-bg-ter/50 border border-white/[0.04] flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <WhatsAppIcon className="w-10 h-10 text-[#25D366]" />
                <div className="flex flex-col">
                  <span className="font-display font-bold text-white text-[0.88rem]">Orçamento via WhatsApp</span>
                  <span className="text-[0.7rem] text-dim mt-0.5">Resposta rápida em horário laboral</span>
                </div>
              </div>
              <a
                href="https://wa.me/351911771712"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase font-bold tracking-wider text-accent hover:text-accent2 transition-colors shrink-0"
              >
                Falar Agora ＞
              </a>
            </div>
          </motion.div>

          {/* Form Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 rounded-3xl bg-bg-ter/30 border border-white/[0.04] relative"
          >
            <h3 className="font-display font-bold text-white text-xl tracking-[0.02em] mb-6">
              Simule a sua Marcação
            </h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[0.65rem] text-dim uppercase tracking-wider font-bold mb-2">
                    O Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ex: João Silva"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-3.5 px-4 text-white text-[0.88rem] focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[0.65rem] text-dim uppercase tracking-wider font-bold mb-2">
                    Telemóvel
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Ex: 912 345 678"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-3.5 px-4 text-white text-[0.88rem] focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="vehicle" className="text-[0.65rem] text-dim uppercase tracking-wider font-bold mb-2">
                    Veículo (Marca/Modelo/Ano)
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    required
                    placeholder="Ex: Renault Megane 2018"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-3.5 px-4 text-white text-[0.88rem] focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="service" className="text-[0.65rem] text-dim uppercase tracking-wider font-bold mb-2">
                    Serviço Pretendido
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#171a26] border border-white/10 rounded-lg py-3.5 px-4 text-white text-[0.88rem] focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="Revisão Geral">Revisão Geral / Óleo e Filtros</option>
                    <option value="Diagnóstico Eletrónico">Diagnóstico de Avarias OBD</option>
                    <option value="Travões e Segurança">Travões (Pastilhas/Discos)</option>
                    <option value="Alinhamento 3D">Alinhamento 3D / Pneus</option>
                    <option value="Preparação Pré-IPO">Preparação Inspeção (Pré-IPO)</option>
                    <option value="Outro Serviço">Outro Serviço Mecânico</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-[0.65rem] text-dim uppercase tracking-wider font-bold mb-2">
                  Sintomas ou Notas Adicionais
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Escreva aqui se ouvir algum ruído estranho, luzes de avaria ou pretender indicar outro pormenor..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-3.5 px-4 text-white text-[0.88rem] focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <div className="flex items-start gap-3 mt-2">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  required
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1 accent-accent"
                />
                <label htmlFor="agree" className="text-[0.72rem] text-dim leading-snug">
                  Autorizo o processamento destes dados para efeitos de agendamento e contacto comercial da oficina.
                </label>
              </div>

              <button
                type="submit"
                className="w-full btn btn-orange justify-center gap-3 py-4 rounded-lg mt-4 cursor-pointer border-none"
              >
                {submitted ? "A abrir WhatsApp..." : "Agendar via WhatsApp"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
