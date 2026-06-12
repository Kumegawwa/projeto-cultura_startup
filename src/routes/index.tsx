import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Siren,
  ShieldCheck,
  MapPin,
  Radio,
  Cpu,
  TrafficCone,
  Volume2,
  Timer,
  AlertTriangle,
  Quote,
  Users,
  Building2,
  Globe2,
  ArrowRight,
  Activity,
  Instagram,
  Linkedin,
  Mail,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-traffic.jpg";
import logoSvg from "@/assets/logo.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistema Dinâmico de Semáforos para Emergências" },
      { name: "description", content: "Onda verde preditiva via GPS para SAMU e Corpo de Bombeiros. Mobilidade inteligente a favor da vida." },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`bg-[#1a1a1a] text-white py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
      <span className="h-1.5 w-1.5 rounded-full bg-[#fd0517]" />
      {children}
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Landing() {
  return (
    <main className="bg-[#1a1a1a] min-h-screen font-sans selection:bg-[#fd0517] selection:text-white">
      {/* Importação das fontes Globais */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&display=swap');
        
        .font-oleo {
          font-family: 'Oleo Script', cursive;
        }
      `}</style>

      {/* NAV */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#1a1a1a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
          <div className="flex items-center gap-3 font-bold">
             <img src={logoSvg} alt="Logo" className="h-8 w-auto" />
             <span className="hidden sm:inline">SDS Emergências</span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-gray-300 md:flex">
            <a href="#problema" className="transition-colors hover:text-[#fd0517]">Problema</a>
            <a href="#solucao" className="transition-colors hover:text-[#fd0517]">Solução</a>
            <a href="#como-funciona" className="transition-colors hover:text-[#fd0517]">Como Funciona</a>
            <a href="#equipe" className="transition-colors hover:text-[#fd0517]">Equipe</a>
          </nav>
          <Button asChild size="sm" className="bg-[#fd0517] text-white hover:bg-[#d00412]">
            <a href="#mvp">Acessar MVP</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#1a1a1a] text-white">
        <img
          src={heroImage}
          alt="Cidade inteligente à noite com rastros de luz vermelha"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/85 to-[#1a1a1a]" />

        <div className="mx-auto flex max-w-6xl flex-col items-start px-6 pb-24 pt-40 md:pt-48">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#fd0517]/30 bg-[#fd0517]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#fd0517]">
              <Activity className="h-3.5 w-3.5" /> Smart City · MVP Acadêmico
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Sistema Dinâmico de{" "}
            <span className="bg-gradient-to-r from-[#fd0517] to-red-400 bg-clip-text text-transparent">Semáforos</span>{" "}
            para Emergências.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg text-gray-400 md:text-xl"
          >
            Mobilidade inteligente a favor da vida. Criando uma{" "}
            <span className="font-semibold text-white">onda verde preditiva</span>{" "}
            para reduzir o tempo de resposta do SAMU e Corpo de Bombeiros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="bg-[#fd0517] text-white shadow-lg shadow-[#fd0517]/20 hover:bg-[#d00412]">
              <a href="#mvp">
                Acessar Protótipo / MVP <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <a href="#como-funciona">Como Funciona</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4"
          >
            {[
              { k: "−40%", v: "tempo de resposta" },
              { k: "24/7", v: "operação preditiva" },
              { k: "100%", v: "integrado via GPS" },
              { k: "Híbrido", v: "B2G e B2B SaaS" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-black text-[#fd0517] md:text-3xl">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-gray-400">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <Section id="problema">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <SectionLabel>O Problema</SectionLabel>
            <h2 className="text-3xl font-black md:text-5xl">
              Segundos decidem vidas. <span className="text-[#fd0517]">O trânsito não pode ser um obstáculo.</span>
            </h2>
            <p className="mt-5 text-lg text-gray-400">
              Ambulâncias e caminhões de bombeiros ficam <strong className="text-white">presos em cruzamentos fechados</strong> durante os horários de pico. Motoristas civis raramente conseguem abrir passagem com a antecedência necessária, transformando cada cruzamento em um risco operacional.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: Timer, t: "Atrasos críticos" },
                { icon: AlertTriangle, t: "Manobras de risco" },
                { icon: TrafficCone, t: "Cruzamentos fechados" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#222222] p-4 transition-all hover:-translate-y-0.5 hover:border-[#fd0517]/50">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#fd0517]/10 text-[#fd0517]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Card className="relative overflow-hidden border-[#fd0517]/20 bg-gradient-to-br from-[#fd0517]/10 via-[#222222] to-[#1a1a1a] p-8 text-white shadow-xl shadow-black/50">
              <Quote className="h-8 w-8 text-[#fd0517]" />
              <p className="mt-4 text-xl font-semibold leading-snug md:text-2xl">
                "Trajetos de 40 minutos podem levar até <span className="text-[#fd0517]">2 horas</span> nos horários de pico em Curitiba."
              </p>
              <p className="mt-4 text-gray-400">
                O atraso força manobras de alto risco — uso de canaletas, contramão e até abandono da viatura para chegar ao paciente.
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-gray-400">
                <MapPin className="h-4 w-4" /> Pesquisa de campo · Curitiba/PR
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* SOLUÇÃO */}
      <Section id="solucao" className="relative border-t border-white/5">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>A Solução</SectionLabel>
            <h2 className="text-3xl font-black md:text-5xl">
              <span className="bg-gradient-to-r from-[#fd0517] to-red-400 bg-clip-text text-transparent">Onda Verde</span> sob demanda.
            </h2>
            <p className="mt-5 text-lg text-gray-400">
              Um sistema inteligente de gestão semafórica integrado via GPS. Antecipa automaticamente a abertura dos sinais, criando uma rota fluida e segura para a viatura.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Timer,
              title: "Redução do tempo de resposta",
              desc: "Chegada mais rápida ao local da emergência e ao hospital de destino.",
            },
            {
              icon: ShieldCheck,
              title: "Segurança viária",
              desc: "Mitigação do risco de colisões laterais em cruzamentos críticos.",
            },
            {
              icon: Cpu,
              title: "Integração Smart City",
              desc: "Dados preditivos sem depender do reflexo de motoristas civis.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <Card className="group h-full border-white/10 bg-[#222222] text-white p-7 transition-all hover:-translate-y-1 hover:border-[#fd0517]/40 hover:bg-[#2a2a2a]">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#fd0517]/15 text-[#fd0517] transition-all group-hover:bg-[#fd0517] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-gray-400">{desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section id="como-funciona" className="bg-[#111111]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Como Funciona</SectionLabel>
            <h2 className="text-3xl font-black md:text-5xl">Operacionalização técnica.</h2>
            <p className="mt-5 text-lg text-gray-400">
              Quatro camadas conectadas, do GPS embarcado ao alerta na via.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Radio, n: "01", t: "Integração de dados", d: "GPS embarcado na viatura envia rota em tempo real ao servidor central." },
            { icon: Cpu, n: "02", t: "Cálculo preditivo", d: "Servidor cruza velocidade da viatura e fluxo da via para estimar o ETA." },
            { icon: TrafficCone, n: "03", t: "Atuação no hardware", d: "Semáforo abre fase verde segundos antes da chegada da viatura." },
            { icon: Volume2, n: "04", t: "Alertas de segurança", d: "Sinais visuais e sonoros avisam pedestres e motoristas civis no cruzamento." },
          ].map(({ icon: Icon, n, t, d }, i) => (
            <Reveal key={n} delay={i * 0.08}>
              <Card className="relative h-full border-white/10 bg-[#1a1a1a] text-white p-6 transition-all hover:-translate-y-1 hover:border-[#fd0517]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#222222] text-[#fd0517]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-3xl font-black text-white/10">{n}</span>
                </div>
                <div className="text-lg font-bold">{t}</div>
                <p className="mt-2 text-sm text-gray-400">{d}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Crivo Crítico: Segurança e Priorização */}
        <Reveal delay={0.4}>
            <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 rounded-full bg-[#fd0517]/10 px-4 py-2 text-sm text-[#fd0517] border border-[#fd0517]/20 shadow-lg">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="font-medium">Criptografia E2E e Autenticação de 2 Fatores</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-gray-300 border border-white/10 shadow-lg">
                    <Cpu className="h-4 w-4" />
                    <span className="font-medium">Algoritmo de Priorização (Gestão de Múltiplas Viaturas)</span>
                </div>
            </div>
        </Reveal>
      </Section>

      {/* VALIDAÇÃO */}
      <Section className="border-t border-white/5">
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          
          <div className="md:col-span-2">
            <Reveal>
              <SectionLabel>Validação</SectionLabel>
              <h2 className="text-3xl font-black md:text-4xl">
                Validada por quem vive a dor diariamente.
              </h2>
              <p className="mt-5 text-gray-400">
                Entrevistas em profundidade com profissionais com mais de <strong className="text-white">17 anos de experiência</strong> no SAMU e resgate. O consenso: a tecnologia é viável e resolve o momento de maior estresse operacional da equipe.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <Reveal delay={0.15}>
              <Card className="border-white/10 bg-[#222222] text-white p-8 md:p-10">
                <Quote className="h-9 w-9 text-[#fd0517]" />
                <p className="mt-5 text-xl font-semibold leading-snug md:text-2xl">
                  "O cruzamento é o nosso pior inimigo. Saber que o sinal abriria antes da gente chegar mudaria completamente como a gente conduz a viatura — mais segurança para a equipe e para o paciente."
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#fd0517]/15 text-[#fd0517]">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Condutor socorrista</div>
                    <div className="text-sm text-gray-400">17+ anos · SAMU / Resgate</div>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>

        </div>
      </Section>

      {/* MODELO DE NEGÓCIOS */}
      <Section className="bg-[#111111]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Modelo de Negócios</SectionLabel>
            <h2 className="text-3xl font-black md:text-5xl">Viabilidade Híbrida e Escalável.</h2>
            <p className="mt-5 text-lg text-gray-400">
              Estratégia sólida para garantir caixa rápido e expansão pública sustentável.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
             {
                icon: Building2,
                tag: "B2B (Curto Prazo)",
                title: "Privado & SaaS",
                desc: "Hospitais privados e frotas de planos de saúde (ex: Unimed) pagando assinatura SaaS para reduzir tempo de transporte de pacientes graves.",
              },
              {
                icon: Globe2,
                tag: "B2G (Longo Prazo)",
                title: "Licitação Pública",
                desc: "Prefeituras e Secretarias de Mobilidade (URBS/SETRAN) adotando o sistema em escala municipal via licitação e expansão IoT.",
              },
              {
                icon: Siren,
                tag: "Usuário Final",
                title: "Condutor Socorrista",
                desc: "Os heróis do SAMU e Bombeiros que ganham segurança, previsibilidade e foco total em salvar vidas nas ruas.",
              },
          ].map(({ icon: Icon, tag, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <Card className="group h-full overflow-hidden border-white/10 bg-[#1a1a1a] text-white p-0 transition-all hover:-translate-y-1 hover:border-[#fd0517]">
                <div className="border-b border-white/10 bg-[#222222] p-6">
                  <Icon className="h-7 w-7 text-[#fd0517]" />
                  <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#fd0517]">{tag}</div>
                  <div className="mt-1 text-2xl font-black">{title}</div>
                </div>
                <p className="p-6 text-gray-400">{desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EQUIPE */}
      <Section id="equipe" className="border-t border-white/5">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Equipe Fundadora</SectionLabel>
            <h2 className="text-3xl font-black md:text-4xl">Idealizadores do projeto.</h2>
            <p className="mt-4 text-gray-400">
              Disciplina Cultura Startup · Universidade Positivo Business School
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Lucas Kumegawa de Godoi",
            "Murilo Hitoshi Kumegawa",
            "Murilo Melo Schlichting",
            "Diogo Henrique da Silva",
            "Tiago Reginato Koligowski",
            "Conrado Rezende Correia Neto",
            "Maria Quitéria Araújo Pereira",
          ].map((name, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#222222] p-4 transition-all hover:-translate-y-0.5 hover:border-[#fd0517]">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#1a1a1a] font-bold text-[#fd0517]">
                  {name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div className="min-w-0 text-sm font-semibold">{name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA FINAL & MVP IFRAME */}
      <section id="mvp" className="relative isolate overflow-hidden bg-[#111111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Conheça o futuro da{" "}
              <span className="bg-gradient-to-r from-[#fd0517] to-red-400 bg-clip-text text-transparent">mobilidade de emergência</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Navegue no nosso MVP executável abaixo. Veja como cada segundo economizado se traduz em mais segurança.
            </p>
            
            <div className="mt-12 flex w-full justify-center">
              <iframe 
                style={{ border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "12px", background: "#1a1a1a" }}
                width="100%" 
                height="700" 
                src="https://hex-fray-95789203.figma.site/" 
                allowFullScreen
                title="MVP Prototype">
              </iframe>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER PROFISSIONAL TOTALMENTE CENTRALIZADO */}
      <footer className="border-t border-white/10 bg-[#1a1a1a] py-16 text-white text-center flex flex-col items-center">
        <div className="mx-auto w-full max-w-6xl px-6 flex flex-col items-center">
          
          {/* Seções Superiores Centralizadas */}
          <div className="grid gap-12 sm:grid-cols-3 w-full border-b border-white/10 pb-12 text-center justify-items-center">
            
            {/* Info Marca */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                 <img src={logoSvg} alt="Logo SDS" className="h-8 w-auto object-contain" />
                 <span className="font-bold text-lg">SDS Emergências</span>
              </div>
              <p className="text-sm text-gray-400 max-w-xs">Mobilidade inteligente e infraestrutura urbana a favor da vida.</p>
              <p className="text-xs text-gray-500 font-mono mt-1">CNPJ: 10.000.000/0000-00</p>
            </div>

            {/* Contato Funcional */}
            <div className="flex flex-col items-center">
              <h4 className="font-bold mb-4 text-[#fd0517] uppercase tracking-wider text-sm">Contato</h4>
              <div className="flex flex-col gap-2.5 text-sm text-gray-400">
                <a href="mailto:contato@sdsemergencias.com.br" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-gray-500"/> contato@sdsemergencias.com.br
                </a>
                <a href="tel:+5541999999999" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-gray-500"/> (41) 99999-9999
                </a>
              </div>
            </div>

            {/* Redes Sociais Funcionais */}
            <div className="flex flex-col items-center">
              <h4 className="font-bold mb-4 text-[#fd0517] uppercase tracking-wider text-sm">Redes Sociais</h4>
              <div className="flex flex-col gap-2.5 text-sm text-gray-400">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                  <Instagram className="h-4 w-4 text-gray-500"/> Instagram
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4 text-gray-500"/> LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* LINHA INFERIOR (3 Colunas flex-1) */}
          <div className="mt-10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Esquerda */}
            <div className="flex-1 text-center md:text-left text-xs text-gray-500 order-2 md:order-1">
              <p>© 2026 SDS Emergências. Todos os direitos reservados.</p>
            </div>

            {/* Centro: Assinatura Exata Mapeada e Alinhada */}
            <div className="flex-1 flex justify-center order-1 md:order-2">
              <div className="text-[11px] font-sans tracking-wider text-gray-500 flex items-center justify-center gap-1 select-none">
                <span>Designed by</span>
                <a 
                  href="https://www.linkedin.com/in/lucas-kumegawa/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center text-gray-500 transition-all duration-300 hover:text-white"
                >
                  <span className="font-oleo text-[16px] text-[#fd0517] tracking-normal normal-case transition-all duration-300 group-hover:scale-105 block origin-center">
                    Kumegawa
                  </span>
                </a>
              </div>
            </div>

            {/* Direita */}
            <div className="flex-1 text-center md:text-right text-xs text-gray-500 order-3 md:order-3">
              <p>Universidade Positivo · Business School</p>
            </div>

          </div>
        </div>
      </footer>
    </main>
  );
}