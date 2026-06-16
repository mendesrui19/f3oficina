import { motion } from "framer-motion";
import { ShieldCheck, Compass, Settings } from "lucide-react";

export function Vision() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Transparência Total",
      desc: "Todas as reparações são explicadas em detalhe antes de serem efetuadas. Sem surpresas na fatura e com garantia em todas as intervenções."
    },
    {
      icon: Settings,
      title: "Equipamento Avançado",
      desc: "Dispomos das mais modernas máquinas de diagnóstico OBD, alinhamento de direção 3D e ferramentas de precisão."
    },
    {
      icon: Compass,
      title: "Rigor & Segurança",
      desc: "Trabalhamos exclusivamente com peças homologadas de marcas OEM para garantir que o seu veículo cumpre todos os padrões de segurança originais."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-bg-sec border-y border-white/[0.03] relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 max-w-[1200px]">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-left"
          >
            <span className="section-tag">Quem Somos</span>
            <h2 className="section-h2 text-white">
              Cuidamos do seu automóvel com rigor e paixão.
            </h2>
            <p className="section-desc">
              Localizada em Salvador de Briteiros, Guimarães, a **Fix3** é uma oficina mecânica de referência regional, focada no compromisso de entregar reparações rápidas, transparentes e de qualidade superior.
            </p>
            
            <div className="mt-8 p-6 rounded-2xl glass-card relative overflow-hidden group border border-accent/15">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
              <p className="font-display font-medium text-white italic text-[1.05rem] leading-[1.7] relative z-10">
                "O nosso objetivo não é apenas reparar carros, é garantir a máxima segurança de quem os conduz diariamente pelas estradas de Guimarães."
              </p>
            </div>
          </motion.div>

          {/* Right Side: Visual Image Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-4">
              <div className="h-64 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src="/images/mechanic_work.png" 
                  alt="Mecânico a reparar motor" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-44 bg-accent/10 rounded-2xl border border-accent/20 flex flex-col justify-center p-8 relative overflow-hidden text-left">
                <span className="font-display font-bold text-[3rem] text-accent leading-none">4.7★</span>
                <span className="text-xs tracking-widest text-white/70 uppercase font-semibold mt-2">Classificação Média</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-8">
              <div className="h-40 bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-center p-8 text-left">
                <span className="font-display font-bold text-[3rem] text-white leading-none">18</span>
                <span className="text-xs tracking-widest text-dim uppercase font-semibold mt-2">Clientes Avaliaram</span>
              </div>
              <div className="h-64 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src="/images/wheel_alignment.png" 
                  alt="Alinhamento de rodas automóvel" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Pillars / Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-2xl bg-bg-ter/40 border border-white/[0.04] hover:border-accent/20 transition-all duration-300 group hover:-translate-y-1 relative text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/8 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-white text-lg tracking-[0.02em] mb-3">
                  {c.title}
                </h3>
                <p className="text-[0.82rem] text-dim leading-[1.8]">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
