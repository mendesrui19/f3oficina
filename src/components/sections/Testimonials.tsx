import { motion } from "framer-motion";
import { ShimmerButton } from "../ui/shimmer-button";

// Custom Google G Icon
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export function Testimonials() {
  const reviews = [
    {
      author: "Manuel Silva",
      text: "Excelente oficina! Levei o meu BMW para alinhar a direção e fazer o diagnóstico eletrónico por causa de uma luz no painel. Resolveram tudo num instante e a preço muito justo. Recomendo muito na zona de Guimarães.",
      rating: 5,
      date: "há 2 semanas",
      initials: "MS",
      bgColor: "bg-blue-600"
    },
    {
      author: "Carlos Guimarães",
      text: "Oficina muito profissional em Salvador de Briteiros. Transparência total no orçamento: ligaram-me a explicar os discos e pastilhas necessários antes de fazer qualquer substituição. Serviço de confiança.",
      rating: 5,
      date: "há 1 mês",
      initials: "CG",
      bgColor: "bg-green-600"
    },
    {
      author: "Ana Rocha",
      text: "Fiz a preparação pré-IPO e correu muito bem. Detetaram uma folga na suspensão que foi reparada antes de levar o carro à inspeção. Passou sem qualquer anotação. Muito rápidos.",
      rating: 5,
      date: "há 2 meses",
      initials: "AR",
      bgColor: "bg-purple-600"
    },
    {
      author: "Rui Mendes",
      text: "A melhor oficina da zona de Briteiros. Máquinas de diagnóstico modernas e atendimento cinco estrelas. O Paulo é um mecânico experiente e de total seriedade no que faz.",
      rating: 4,
      date: "há 3 meses",
      initials: "RM",
      bgColor: "bg-orange-600"
    }
  ];

  return (
    <section id="testemunhos" className="py-24 bg-bg-sec border-t border-white/[0.03] relative overflow-hidden text-left">
      <div className="container mx-auto px-5 md:px-8 max-w-[1200px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="section-tag flex items-center gap-2">
              <GoogleIcon className="w-4 h-4" />
              Opiniões Reais
            </span>
            <h2 className="section-h2 max-w-2xl text-white">
              A confiança de quem<br />entrega o carro nas nossas mãos.
            </h2>
            <p className="section-desc">
              O feedback dos nossos clientes reflete o nosso empenho diário em honestidade e qualidade técnica.
            </p>
          </motion.div>

          {/* Rating Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:items-end"
          >
            <div className="flex items-center gap-4 bg-bg-base/50 p-4 rounded-xl border border-white/5 shadow-lg backdrop-blur-md">
              <div className="flex flex-col items-center justify-center px-4">
                <span className="font-display text-4xl font-bold text-white leading-none mb-1">4.7</span>
                <div className="flex text-[#FBBC05] gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                  <div className="relative w-4 h-4 text-[#FBBC05]">
                    <StarIcon className="w-4 h-4 text-white/10" />
                    <div className="absolute inset-0 overflow-hidden w-[70%]">
                      <StarIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="flex flex-col px-2">
                <span className="text-white font-medium text-sm flex items-center gap-1.5">
                  <GoogleIcon className="w-4 h-4" />
                  Google Maps
                </span>
                <span className="text-dim text-xs mt-0.5">Baseado em 18 avaliações</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-bg-base p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors duration-300 flex flex-col h-full shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${review.bgColor}`}>
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">{review.author}</span>
                    <span className="text-dim text-xs">{review.date}</span>
                  </div>
                </div>
                <GoogleIcon className="w-4 h-4 opacity-70" />
              </div>
              
              <div className="flex text-[#FBBC05] gap-0.5 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-3.5 h-3.5" />
                ))}
                {review.rating < 5 && (
                  <StarIcon className="w-3.5 h-3.5 text-white/10" />
                )}
              </div>
              
              <p className="text-dim text-[0.85rem] leading-relaxed flex-grow">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-14"
        >
          <ShimmerButton
            href="https://search.google.com/local/writereview?placeid=ChIJa_h-KZ_6JA0Rre6XojzZrq0"
            target="_blank"
            rel="noopener noreferrer"
            background="#ff6f00"
            shimmerColor="#ffffff"
            className="flex items-center gap-2 text-white px-7 py-3.5 rounded-lg font-display font-bold text-[0.85rem] uppercase tracking-wider shadow-[0_0_30px_rgba(255,111,0,0.4)] hover:-translate-y-1 border-none"
          >
            <div className="bg-white rounded-full p-0.5 flex items-center justify-center">
              <GoogleIcon className="w-3.5 h-3.5" />
            </div>
            Deixar Avaliação
          </ShimmerButton>
          <a
            href="https://www.google.com/maps?cid=12515179268958318253"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent text-white border border-white/20 px-7 py-3.5 rounded-lg font-display font-bold text-[0.85rem] uppercase tracking-wider hover:bg-white/5 transition-colors"
          >
            Ver Localização
          </a>
        </motion.div>
      </div>
    </section>
  );
}
