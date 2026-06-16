import { motion } from "framer-motion";
import { Cpu, RotateCcw, Activity, Thermometer } from "lucide-react";

export function DiagnosticTech() {
  const techPoints = [
    {
      Icon: Cpu,
      title: "Diagnóstico Computadorizado OBD2",
      desc: "Ligação directa à Unidade de Controlo Motor (ECU) para detecção de códigos de falha, análise de sensores em tempo real e reset de intervalos de manutenção."
    },
    {
      Icon: RotateCcw,
      title: "Alinhamento de Eixos 3D",
      desc: "Calibração geométrica de eixos através de câmaras de alta definição 3D, restabelecendo as especificações exatas de fábrica para evitar o desgaste de pneus."
    },
    {
      Icon: Activity,
      title: "Análise de Gases & Emissões",
      desc: "Equipamento analisador homologado para avaliar o nível de opacidade e emissões CO2, assegurando a conformidade ecológica e o sucesso nas inspeções periódicas."
    },
    {
      Icon: Thermometer,
      title: "Manutenção de Climatização A/C",
      desc: "Estação automática para recuperação de gás refrigerante, teste de vácuo do circuito de ar condicionado e recarga precisa com deteção de fugas por UV."
    }
  ];

  return (
    <section id="tecnologia" className="py-24 bg-bg-sec border-t border-white/[0.03] relative overflow-hidden text-left">
      <div className="container mx-auto px-5 md:px-8 max-w-[1200px]">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Tech Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="section-tag">Capacidade Tecnológica</span>
            <h2 className="section-h2 text-white">
              Tecnologia de ponta no diagnóstico automóvel.
            </h2>
            <p className="section-desc mb-12">
              Os automóveis modernos são autênticos computadores sobre rodas. Na Fix3, investimos constantemente nos melhores equipamentos de leitura e calibração para garantir diagnósticos rápidos e precisões cirúrgicas em mecânica de precisão.
            </p>

            {/* List of Tech Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {techPoints.map((p) => {
                const Icon = p.Icon;
                return (
                  <div key={p.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/8 border border-accent/25 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-display font-bold text-white text-[0.92rem] tracking-[0.02em] mb-1.5">
                        {p.title}
                      </h4>
                      <p className="text-[0.78rem] text-dim leading-[1.6]">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Images Grid Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Diagnostics tablet main showcase */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group h-80">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent z-10" />
              <img 
                src="/images/diagnostics.png" 
                alt="Diagnóstico computadorizado OBD" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-[0.6rem] tracking-[0.25em] text-accent uppercase font-bold">Diagnóstico Digital</span>
                <h3 className="font-display font-bold text-white text-lg mt-1">Leitura de Sistemas Eletrónicos</h3>
              </div>
            </div>

            {/* Wheel alignment showcase */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group h-56">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 via-transparent to-transparent z-10" />
              <img 
                src="/images/wheel_alignment.png" 
                alt="Alinhamento digital 3D" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-[0.6rem] tracking-[0.25em] text-accent uppercase font-bold">Segurança e Estabilidade</span>
                <h3 className="font-display font-bold text-white text-lg mt-1">Alinhamento de Eixos 3D Laser</h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
