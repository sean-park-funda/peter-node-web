import {
  Shield,
  Cpu,
  Zap,
  Database,
  Lock,
  Terminal,
  CheckCircle,
  ArrowRight,
  Package,
  Plug,
  Settings,
  Bot,
  Send,
} from "lucide-react";
import { DemoForm } from "./demo-form";

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 rounded-3xl bg-slate-950 border border-white/5 hover:border-blue-500/30 transition-all group">
      <div className="mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function SecurityItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0" />
      <span className="text-slate-300 font-medium">{text}</span>
    </li>
  );
}

function HowItWorksStep({
  icon,
  title,
  desc,
  step,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  step: number;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
          {icon}
        </div>
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
          {step}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed max-w-[220px]">
        {desc}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              PETER NODE
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a
              href="#features"
              className="hover:text-blue-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-blue-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#security"
              className="hover:text-blue-400 transition-colors"
            >
              Security
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 tracking-widest uppercase">
            Enterprise Autonomous AI Agent
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Your Data Never{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Leaves
            </span>{" "}
            the Box.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-3 leading-relaxed font-medium">
            The most secure autonomous AI agent for enterprise.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            보안은 물리적으로, 지능은 자율적으로.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full md:w-auto bg-white text-slate-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
            >
              Request a Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#pricing"
              className="w-full md:w-auto bg-slate-900 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Hardware Mockup */}
      <section className="relative max-w-5xl mx-auto px-6 mb-32">
        <div className="aspect-video bg-gradient-to-b from-blue-600/20 to-transparent rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 px-12 py-12 rounded-2xl border border-white/10 flex flex-col items-center">
              <Cpu className="w-20 h-20 text-blue-500 mb-4" />
              <span className="text-2xl font-bold text-white tracking-widest uppercase">
                Mac Mini M4 Inside
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Built for Enterprise
            </h2>
            <p className="text-slate-400 text-lg">
              기업을 위해 설계된 자율형 AI 에이전트
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-blue-400" />}
              title="Air-Gapped Security"
              desc="Data stays on physically isolated nodes inside your premises. Zero external exposure risk. 데이터는 물리적으로 격리된 고객사 내 노드에 저장됩니다."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              title="Zero-Config Managed"
              desc="Pre-installed with enterprise tool integrations for Notion, Slack, and more. Just plug in and go. 전원만 연결하세요."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-purple-400" />}
              title="Autonomous Memory"
              desc="Learns and accumulates business context through the MEMORY.md protocol. A true AI colleague. 업무 맥락을 스스로 학습하는 AI 동료."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-400 text-lg">
              From delivery to full autonomy in four simple steps
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <HowItWorksStep
              step={1}
              icon={<Package className="w-8 h-8 text-blue-400" />}
              title="Ship"
              desc="We ship a preconfigured node to your office. 맞춤 설정된 노드를 배송합니다."
            />
            <HowItWorksStep
              step={2}
              icon={<Plug className="w-8 h-8 text-green-400" />}
              title="Plug In"
              desc="Connect to power and your network. That's it. 전원과 네트워크만 연결하세요."
            />
            <HowItWorksStep
              step={3}
              icon={<Settings className="w-8 h-8 text-yellow-400" />}
              title="Configure"
              desc="We remotely configure skills for your workflow. 원격으로 스킬을 설정합니다."
            />
            <HowItWorksStep
              step={4}
              icon={<Bot className="w-8 h-8 text-purple-400" />}
              title="Autonomous"
              desc="Your AI agent works 24/7, learning and improving. 24시간 자율적으로 작동합니다."
            />
          </div>
          {/* Connector line */}
          <div className="hidden md:block relative mt-[-140px] mb-[80px] mx-auto max-w-3xl">
            <div className="h-0.5 bg-gradient-to-r from-blue-500/50 via-green-500/50 via-yellow-500/50 to-purple-500/50"></div>
          </div>
        </div>
      </section>

      {/* Security Detail */}
      <section id="security" className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Security Teams
              <br />
              Recommend Us First
            </h2>
            <p className="text-slate-500 mb-8">
              기업 보안팀이 먼저 추천하는 AI 솔루션
            </p>
            <ul className="space-y-6">
              <SecurityItem text="Apple Silicon hardware-level security isolation" />
              <SecurityItem text="Centralized skill updates with zero data exfiltration" />
              <SecurityItem text="Real-time transparent audit logs for all agent activity" />
              <SecurityItem text="Zero-Trust dedicated private tunnel network" />
            </ul>
          </div>
          <div className="flex-1 bg-slate-900 p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-5 h-5 text-green-400" />
              <span className="text-sm font-mono text-slate-500 tracking-tighter uppercase">
                Audit Log Preview
              </span>
            </div>
            <div className="space-y-3 font-mono text-xs md:text-sm">
              <p className="text-green-400/80">
                [SYSTEM] Agent &quot;Peter&quot; initialized on Node #1024
              </p>
              <p className="text-slate-400">
                [ACTION] Accessing local /workspace/projects/q1-report
              </p>
              <p className="text-slate-400">
                [RAG] Context retrieved from internal Vector DB (128ms)
              </p>
              <p className="text-blue-400">
                [PROCESS] Generating summary with Reasoning Engine...
              </p>
              <p className="text-yellow-400">
                [PENDING] Waiting for user approval: Write to Notion
              </p>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-4">
                <div className="w-2/3 h-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-slate-400 text-lg">
              비즈니스 규모에 맞는 플랜을 선택하세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 flex flex-col">
              <h3 className="text-lg font-bold text-slate-400 mb-2">
                Starter
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$299</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <PricingItem text="1 dedicated node" />
                <PricingItem text="Basic skill integrations" />
                <PricingItem text="Email support" />
                <PricingItem text="Standard audit logs" />
              </ul>
              <a
                href="#contact"
                className="block text-center bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Get Started
              </a>
            </div>

            {/* Business */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-600/10 to-slate-900 border border-blue-500/30 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-xs font-bold text-white tracking-wider uppercase">
                Most Popular
              </div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">
                Business
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$799</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <PricingItem text="Up to 3 nodes" />
                <PricingItem text="All skill integrations" />
                <PricingItem text="Priority support" />
                <PricingItem text="Custom workflows" />
                <PricingItem text="Advanced analytics" />
              </ul>
              <a
                href="#contact"
                className="block text-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-white/5 flex flex-col">
              <h3 className="text-lg font-bold text-slate-400 mb-2">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">
                  Custom
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                <PricingItem text="Unlimited nodes" />
                <PricingItem text="Air-gapped deployment" />
                <PricingItem text="Dedicated engineer" />
                <PricingItem text="Custom SLA" />
                <PricingItem text="On-site installation" />
              </ul>
              <a
                href="#contact"
                className="block text-center bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section id="contact" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Request a Demo
            </h2>
            <p className="text-slate-400 text-lg">
              Tell us about your needs and we will set up a personalized demo.
              <br />
              <span className="text-slate-500">
                맞춤형 데모를 위해 아래 양식을 작성해 주세요.
              </span>
            </p>
          </div>
          <DemoForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="font-bold text-slate-300">PETER NODE</span>
          </div>
          <p>&copy; 2026 Peter Node by OpenClaw. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PricingItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 text-slate-300">
      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
}
