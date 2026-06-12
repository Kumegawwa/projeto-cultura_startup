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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-traffic.jpg";

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
  dark,
  className = "",
  children,
}: {
  id?: string;
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${dark ? "dark bg-background text-foreground" : "bg-background text-foreground"} py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
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
    <main>
      {/* NAV */}
      <header className="dark fixed top-0 z-50 w-full border-b border-white/5 bg-[color-mix(in_oklab,var(--navy-deep)_85%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-foreground">
          <div className="flex items-center gap-2 font-bold">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald text-navy-deep">
              <Siren className="h-5 w-5" />
            </div>
            <span className="hidden sm:inline">SDS Emergências</span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#problema" className="transition-colors hover:text-foreground">Problema</a>
            <a href="#solucao" className="transition-colors hover:text-foreground">Solução</a>
            <a href="#como-funciona" className="transition-colors hover:text-foreground">Como Funciona</a>
            <a href="#equipe" className="transition-colors hover:text-foreground">Equipe</a>
          </nav>
          <Button asChild size="sm" className="bg-emerald text-navy-deep hover:bg-emerald-glow">
            <a href="#mvp">Acessar MVP</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="dark relative isolate overflow-hidden bg-background text-foreground">
        <img
          src={heroImage}
          alt="Cidade inteligente à noite com rastros de luz verde e vermelha"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/70 via-navy-deep/85 to-navy-deep" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-40" />

        <div className="mx-auto flex max-w-6xl flex-col items-start px-6 pb-24 pt-40 md:pt-48">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald">
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
            <span className="text-gradient-emerald">Semáforos</span>{" "}
            para Emergências.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Mobilidade inteligente a favor da vida. Criando uma{" "}
            <span className="font-semibold text-foreground">onda verde preditiva</span>{" "}
            para reduzir o tempo de resposta do SAMU e Corpo de Bombeiros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="bg-emerald text-navy-deep shadow-glow hover:bg-emerald-glow">
              <a href="#mvp">
                Acessar Protótipo / MVP <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-foreground hover:bg-white/10">
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
              { k: "B2G", v: "licitação pública" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-black text-emerald md:text-3xl">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
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
              Segundos decidem vidas. <span className="text-alert">O trânsito não pode ser um obstáculo.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Ambulâncias e caminhões de bombeiros ficam <strong className="text-foreground">presos em cruzamentos fechados</strong> durante os horários de pico. Motoristas civis raramente conseguem abrir passagem com a antecedência necessária, transformando cada cruzamento em um risco operacional.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: Timer, t: "Atrasos críticos" },
                { icon: AlertTriangle, t: "Manobras de risco" },
                { icon: TrafficCone, t: "Cruzamentos fechados" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-center gap-3 rounded-xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-elegant">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-alert/10 text-alert">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Card className="relative overflow-hidden border-alert/20 bg-gradient-to-br from-alert/10 via-card to-card p-8 shadow-elegant">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-alert/20 blur-3xl" />
              <Quote className="h-8 w-8 text-alert" />
              <p className="mt-4 text-xl font-semibold leading-snug md:text-2xl">
                "Trajetos de 40 minutos podem levar até <span className="text-alert">2 horas</span> nos horários de pico em Curitiba."
              </p>
              <p className="mt-4 text-muted-foreground">
                O atraso força manobras de alto risco — uso de canaletas, contramão e até abandono da viatura para chegar ao paciente.
              </p>
              <div className="mt-6 flex items-center gap-3 border-t pt-6 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> Pesquisa de campo · Curitiba/PR
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* SOLUÇÃO */}
      <Section id="solucao" dark className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="absolute left-1/2 top-0 -z-10 h-72 w-[600px] -translate-x-1/2 rounded-full bg-emerald/20 blur-[120px]" />

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>A Solução</SectionLabel>
            <h2 className="text-3xl font-black md:text-5xl">
              <span className="text-gradient-emerald">Onda Verde</span> sob demanda.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
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
              <Card className="group h-full border-white/10 bg-white/[0.03] p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-emerald/40 hover:bg-white/[0.06]">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-emerald/15 text-emerald transition-all group-hover:bg-emerald group-hover:text-navy-deep">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section id="como-funciona">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Como Funciona</SectionLabel>
            <h2 className="text-3xl font-black md:text-5xl">Operacionalização técnica.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
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
              <Card className="relative h-full border-border/80 p-6 transition-all hover:-translate-y-1 hover:border-emerald hover:shadow-elegant">
                <div className="mb-4 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-emerald">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-3xl font-black text-muted-foreground/30">{n}</span>
                </div>
                <h3 className="text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* VALIDAÇÃO */}
      <Section dark>
        <div className="grid gap-12 md:grid-cols-5 md:items-center">
          <Reveal>
            <div className="md:col-span-2">
              <SectionLabel>Validação</SectionLabel>
              <h2 className="text-3xl font-black md:text-4xl">
                Validada por quem vive a dor diariamente.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Entrevistas em profundidade com profissionais com mais de <strong className="text-foreground">17 anos de experiência</strong> no SAMU e resgate. O consenso: a tecnologia é viável e resolve o momento de maior estresse operacional da equipe.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="md:col-span-3">
              <Card className="border-white/10 bg-white/[0.03] p-8 md:p-10">
                <Quote className="h-9 w-9 text-emerald" />
                <p className="mt-5 text-xl font-semibold leading-snug md:text-2xl">
                  "O cruzamento é o nosso pior inimigo. Saber que o sinal abriria antes da gente chegar mudaria completamente como a gente conduz a viatura — mais segurança para a equipe e para o paciente."
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald/15 text-emerald">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Condutor socorrista</div>
                    <div className="text-sm text-muted-foreground">17+ anos · SAMU / Resgate</div>
                  </div>
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* MODELO DE NEGÓCIOS */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Modelo de Negócios</SectionLabel>
            <h2 className="text-3xl font-black md:text-5xl">Viabilidade B2G escalável.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Três pilares do Canvas que sustentam a operação e a expansão.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Siren,
              tag: "Público-alvo",
              title: "Usuário final",
              desc: "Condutores oficiais do SAMU e Corpo de Bombeiros em rota de emergência.",
            },
            {
              icon: Building2,
              tag: "Clientes",
              title: "Quem adquire",
              desc: "Prefeituras e Secretarias de Mobilidade (URBS / SETRAN) e Saúde.",
            },
            {
              icon: Globe2,
              tag: "Viabilidade",
              title: "Escala global",
              desc: "Qualquer grande centro urbano via licitação pública e licenciamento SaaS/IoT.",
            },
          ].map(({ icon: Icon, tag, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <Card className="group h-full overflow-hidden border-border/80 p-0 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="border-b bg-navy p-6 text-primary-foreground">
                  <Icon className="h-7 w-7 text-emerald" />
                  <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-emerald">{tag}</div>
                  <div className="mt-1 text-2xl font-black">{title}</div>
                </div>
                <p className="p-6 text-muted-foreground">{desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EQUIPE */}
      <Section id="equipe" className="border-t">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Equipe Fundadora</SectionLabel>
            <h2 className="text-3xl font-black md:text-4xl">Idealizadores do projeto.</h2>
            <p className="mt-4 text-muted-foreground">
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
              <div className="group flex items-center gap-4 rounded-xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-emerald hover:shadow-elegant">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy font-bold text-emerald">
                  {name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div className="min-w-0 text-sm font-semibold">{name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <section id="mvp" className="dark relative isolate overflow-hidden bg-background text-foreground">
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/20 blur-[140px]" />

        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Conheça o futuro da{" "}
              <span className="text-gradient-emerald">mobilidade de emergência</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Explore o fluxo do MVP e veja como cada segundo economizado se traduz em vidas salvas.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-emerald text-navy-deep shadow-glow hover:bg-emerald-glow">
                <a href="#" aria-label="Abrir simulação do MVP no Figma">
                  Simular MVP <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-foreground hover:bg-white/10">
                <a href="#problema">Revisar o pitch</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <Siren className="h-4 w-4 text-emerald" /> SDS Emergências
            </div>
            <div className="text-center md:text-right">
              Universidade Positivo · Business School · Disciplina Cultura Startup · 2026
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
