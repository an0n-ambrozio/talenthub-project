import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Server, 
  Layout, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Zap,
  Box,
  Users,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Terminal,
  ArrowRight,
  Calendar,
  Award,
  UserCircle,
  Briefcase,
  GitBranch
} from 'lucide-react';
import { 
  AreaChart,
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { NavItem, Phase } from './types.ts';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'database', label: 'Database' },
    { id: 'process', label: 'Process' },
    { id: 'future', label: 'Roadmap' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-xl shadow-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
            <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 font-bold text-black text-lg">T</div>
          </div>
          <span className="text-xl font-bold tracking-wider text-white">TALENT<span className="text-zinc-500">HUB</span></span>
        </div>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-black">
      {/* Background Blobs - Monochrome Fog */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-zinc-800/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-zinc-300 mb-8 hover:border-white/30 transition-colors">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="text-xs font-mono font-bold uppercase tracking-widest">Final Project Report • Dec 2025</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-8 text-white leading-tight tracking-tight">
          Recruitment <br />
          <span className="text-gradient">Reimagined</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Experience the future of hiring with <strong className="text-white">TALENTHUB</strong>. A premium, glassmorphic AI recruitment dashboard designed with a minimal dark aesthetic.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth'})} className="px-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group">
            Explore System <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => document.getElementById('database')?.scrollIntoView({ behavior: 'smooth'})} className="px-8 py-4 glass text-white hover:text-white font-bold rounded-lg transition-all border border-zinc-700 hover:border-white hover:bg-white/10 flex items-center justify-center gap-2">
            <Database size={20} /> View Schema
          </button>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      <span className="text-zinc-600 font-mono text-xl mr-2">0{['Overview', 'Architecture', 'Database', 'Process', 'Roadmap'].findIndex(t => title.includes(t)) + 1}.</span> 
      {title}
    </h2>
    <p className="text-zinc-400 max-w-2xl text-lg">{subtitle}</p>
    <div className="h-1 w-24 bg-gradient-to-r from-white to-zinc-800 mt-6 rounded-full"></div>
  </div>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="glass-card p-8 rounded-2xl h-full flex flex-col group cursor-default">
    <div className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center text-white mb-6 border border-zinc-800 group-hover:border-white/50 group-hover:bg-white group-hover:text-black transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{title}</h3>
    <p className="text-zinc-400 leading-relaxed text-sm flex-grow group-hover:text-zinc-300 transition-colors">{desc}</p>
  </div>
);

const Overview = () => {
  const data = [
    { name: 'Mon', apps: 4 },
    { name: 'Tue', apps: 7 },
    { name: 'Wed', apps: 15 },
    { name: 'Thu', apps: 10 },
    { name: 'Fri', apps: 18 },
    { name: 'Sat', apps: 23 },
    { name: 'Sun', apps: 20 },
  ];

  return (
    <section id="overview" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <SectionHeader title="System Overview" subtitle="A unified dashboard replacing legacy Applicant Tracking Systems with a high-performance, visual-first approach." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <FeatureCard 
          icon={<Layout size={24} />} 
          title="Centralized Hub" 
          desc="Unified dashboard for tracking application statuses, interview schedules, and hiring metrics in one view." 
        />
        <FeatureCard 
          icon={<ShieldCheck size={24} />} 
          title="RBAC Security" 
          desc="Distinct, secure environments for Recruiters (Admins) and Candidates with NextAuth.js middleware." 
        />
        <FeatureCard 
          icon={<Cpu size={24} />} 
          title="AI Fit Score" 
          desc="Algorithmic candidate ranking system analyzing skills and experience to surface top talent instantly." 
        />
        <FeatureCard 
          icon={<Zap size={24} />} 
          title="Interactive Workflow" 
          desc="Kanban-style status updates with instant visual feedback and smooth animations." 
        />
      </div>

      <div className="glass p-10 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-colors">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold text-white mb-4">Real-time Analytics</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              The platform utilizes dynamic charting to visualize pipeline health, allowing recruiters to spot bottlenecks immediately with a clean, monochrome visualization.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center p-5 bg-black/40 rounded-xl border-l-2 border-white backdrop-blur-sm hover:bg-zinc-900/40 transition-colors cursor-pointer group">
                <span className="text-zinc-400 group-hover:text-white transition-colors">Total Candidates</span>
                <span className="text-2xl font-mono font-bold text-white">1,248</span>
              </div>
              <div className="flex justify-between items-center p-5 bg-black/40 rounded-xl border-l-2 border-zinc-500 backdrop-blur-sm hover:bg-zinc-900/40 transition-colors cursor-pointer group">
                <span className="text-zinc-400 group-hover:text-white transition-colors">Interview Rate</span>
                <span className="text-2xl font-mono font-bold text-white">18.5%</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 h-80 bg-black/20 rounded-2xl p-6 border border-zinc-800/50">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#52525b" tick={{fontSize: 12, fill: '#71717a'}} axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="#52525b" tick={{fontSize: 12, fill: '#71717a'}} axisLine={false} tickLine={false} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', color: '#e4e4e7', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}
                  itemStyle={{ color: '#ffffff' }}
                  cursor={{stroke: '#52525b', strokeWidth: 1}}
                />
                <Area type="monotone" dataKey="apps" stroke="#ffffff" strokeWidth={2} fillOpacity={1} fill="url(#colorApps)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const stack = [
    { name: "Next.js 15", cat: "Frontend", icon: <Layers size={20} /> },
    { name: "Tailwind CSS v4", cat: "Styling", icon: <Layout size={20} /> },
    { name: "Prisma ORM", cat: "Database", icon: <Database size={20} /> },
    { name: "MySQL", cat: "Storage", icon: <Server size={20} /> },
    { name: "Serverless Fn", cat: "Backend", icon: <Code2 size={20} /> },
    { name: "Framer Motion", cat: "Animation", icon: <Zap size={20} /> },
  ];

  return (
    <section id="architecture" className="py-24 bg-zinc-950/50 relative">
       {/* Subtle grid pattern */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
       
       <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader title="Technical Architecture" subtitle="Built on a modern stack to ensure scalability, type safety, and developer experience." />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {stack.map((tech, idx) => (
            <div key={idx} className="glass p-5 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white hover:text-black transition-all duration-300 cursor-default group border border-zinc-800 hover:border-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white mb-3 group-hover:bg-black group-hover:text-white transition-colors border border-zinc-800">
                {tech.icon}
              </div>
              <h4 className="font-bold text-sm">{tech.name}</h4>
              <span className="text-xs text-zinc-500 uppercase mt-1 group-hover:text-zinc-600">{tech.cat}</span>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="glass p-10 rounded-2xl relative overflow-hidden border border-zinc-800">
          <div className="absolute top-4 right-4 text-xs font-mono text-zinc-600">SYSTEM_ARCH.mermaid</div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            
            {/* Client */}
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-36 h-24 border border-zinc-600 group-hover:border-white rounded-xl flex items-center justify-center bg-black shadow-lg group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all">
                <span className="font-bold text-white">Client (UI)</span>
              </div>
              <span className="text-xs text-zinc-500 font-mono">Next.js App Router</span>
            </div>

            {/* Arrows */}
            <div className="flex-1 h-px bg-zinc-800 relative w-full md:w-auto overflow-visible">
              <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-pulse"></div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-3 text-[10px] text-zinc-500 uppercase tracking-widest border border-zinc-900 rounded-full">REST / JSON</div>
            </div>

            {/* Server */}
            <div className="flex flex-col items-center gap-4 group">
               <div className="w-36 h-24 border border-zinc-600 group-hover:border-white rounded-xl flex items-center justify-center bg-black shadow-lg group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all">
                <span className="font-bold text-white">API Routes</span>
              </div>
              <span className="text-xs text-zinc-500 font-mono">Next.js Serverless</span>
            </div>

             {/* Arrows */}
             <div className="flex-1 h-px bg-zinc-800 relative w-full md:w-auto">
               <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-pulse delay-75"></div>
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-3 text-[10px] text-zinc-500 uppercase tracking-widest border border-zinc-900 rounded-full">Prisma Client</div>
            </div>

            {/* DB */}
            <div className="flex flex-col items-center gap-4 group">
               <div className="w-36 h-24 border border-zinc-600 group-hover:border-white rounded-xl flex items-center justify-center bg-black shadow-lg group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all">
                <span className="font-bold text-white">Database</span>
              </div>
              <span className="text-xs text-zinc-500 font-mono">MySQL</span>
            </div>

          </div>
        </div>
       </div>
    </section>
  );
};

const CodeBlock = ({ title, code }: { title: string, code: string }) => (
  <div className="rounded-xl overflow-hidden bg-[#09090b] border border-zinc-800 font-mono text-sm shadow-2xl group hover:border-zinc-600 transition-colors h-full">
    <div className="flex items-center justify-between px-4 py-3 bg-[#18181b] border-b border-zinc-800">
      <div className="flex items-center gap-2">
        <Terminal size={14} className="text-zinc-500 group-hover:text-white transition-colors" />
        <span className="text-zinc-400 font-bold text-xs group-hover:text-zinc-200 transition-colors">{title}</span>
      </div>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
      </div>
    </div>
    <div className="p-5 overflow-x-auto custom-scrollbar">
      <pre>
        <code>
          {code.split('\n').map((line, i) => (
            <div key={i} className="table-row hover:bg-white/5 transition-colors w-full block">
              <span className="table-cell select-none text-zinc-700 text-right pr-4 w-8">{i + 1}</span>
              <span className="table-cell whitespace-pre text-zinc-300">
                {line.split(' ').map((token, j) => {
                  if (['CREATE', 'TABLE', 'INSERT', 'INTO', 'VALUES', 'SELECT', 'FROM', 'WHERE', 'UPDATE', 'SET', 'DELETE', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'NOT', 'NULL', 'DEFAULT', 'JOIN', 'ON', 'AS', 'AND', 'OR'].includes(token.toUpperCase())) return <span key={j} className="text-white font-bold mr-1">{token}</span>;
                  if (['INTEGER', 'VARCHAR(191)', 'DATETIME(3)', 'DOUBLE', 'JSON'].includes(token.toUpperCase())) return <span key={j} className="text-zinc-400 mr-1 italic">{token}</span>;
                  if (token.startsWith("'")) return <span key={j} className="text-zinc-500 mr-1">{token}</span>;
                  return <span key={j} className="mr-1">{token}</span>;
                })}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  </div>
);

const EntityNode = ({ title, icon, fields, color = "border-zinc-700", glow = false }: { title: string, icon: any, fields: {name: string, type: string}[], color?: string, glow?: boolean }) => (
  <div className={`glass p-6 rounded-xl border ${color} min-w-[240px] relative z-10 bg-black/80 hover:scale-105 transition-transform duration-300 ${glow ? 'shadow-[0_0_30px_rgba(255,255,255,0.1)]' : ''}`}>
    <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
      <div className="p-2 bg-white/5 rounded-lg text-white">
        {icon}
      </div>
      <span className="font-bold text-white tracking-wide">{title}</span>
    </div>
    <div className="space-y-2 font-mono text-xs">
      {fields.map((f, i) => (
        <div key={i} className="flex justify-between items-center group">
          <span className="text-zinc-300 group-hover:text-white transition-colors">{f.name}</span>
          <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">{f.type}</span>
        </div>
      ))}
    </div>
  </div>
);

const DatabaseSection = () => {
  const ddl = `-- Create Users Table
CREATE TABLE users (
    id INTEGER NOT NULL AUTO_INCREMENT,
    email VARCHAR(191) NOT NULL,
    name VARCHAR(191) NOT NULL,
    password VARCHAR(191) NOT NULL,
    role VARCHAR(191) NOT NULL DEFAULT 'recruiter',
    createdAt DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    PRIMARY KEY (id),
    UNIQUE INDEX users_email_key(email)
);

-- Create Candidates Table
CREATE TABLE candidates (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(191) NOT NULL,
    email VARCHAR(191) NOT NULL,
    role VARCHAR(191) NOT NULL,
    status VARCHAR(191) NOT NULL DEFAULT 'pending',
    score DOUBLE NOT NULL DEFAULT 0,
    scoreBreakdown JSON NULL,
    experience JSON NULL,
    photoUrl VARCHAR(191) NULL,
    appliedDate DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    updatedAt DATETIME(3) NOT NULL,
    userId INTEGER NULL,
    createdById INTEGER NULL,
    PRIMARY KEY (id),
    UNIQUE INDEX candidates_email_key(email)
);

-- Create Skills Table
CREATE TABLE candidate_skills (
    id INTEGER NOT NULL AUTO_INCREMENT,
    candidateId INTEGER NOT NULL,
    skillName VARCHAR(191) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE INDEX candidate_skills_candidateId_skillName_key(candidateId, skillName)
);`;

  const dml = `-- Insert a New Candidate
INSERT INTO candidates (name, email, role, status, score, appliedDate, updatedAt)
VALUES ('Jane Doe', 'jane@example.com', 'Senior Developer', 'pending', 95.5, NOW(), NOW());

-- Update Candidate Status
UPDATE candidates 
SET status = 'qualified', updatedAt = NOW()
WHERE id = 101;

-- Retrieve Dashboard Stats
SELECT COUNT(*) FROM candidates;
SELECT COUNT(*) FROM candidates WHERE status = 'qualified';

-- Delete a Candidate (Cascade)
DELETE FROM candidates WHERE id = 101;

-- Join Query: Get Candidates with Skills
SELECT c.name, c.score, s.skillName
FROM candidates c
JOIN candidate_skills s ON c.id = s.candidateId
WHERE c.status = 'qualified';`;

  return (
    <section id="database" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <SectionHeader title="Database Schema" subtitle="Relational integrity modeled with Prisma and executed on MySQL." />

      <div className="flex flex-col gap-16">
        {/* Simplified Visual Diagram */}
        <div className="w-full flex flex-col items-center">
             <div className="flex items-center gap-2 mb-8">
                <Box className="text-white" /> 
                <h3 className="text-2xl font-bold text-white">Entity Relationship Diagram</h3>
             </div>
             
             <div className="relative p-10 w-full max-w-4xl flex flex-col items-center gap-16">
                
                {/* Connecting Lines (SVG Layer) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-zinc-700" style={{zIndex: 0}}>
                    {/* Line from User to Candidate */}
                    <path d="M50% 120 V 220" fill="none" strokeWidth="2" strokeDasharray="5,5" />
                    
                    {/* Lines from Candidate to Children */}
                    <path d="M50% 360 V 420 H 25% V 460" fill="none" strokeWidth="2" />
                    <path d="M50% 360 V 420 H 75% V 460" fill="none" strokeWidth="2" />
                    
                    {/* Cardinality Markers */}
                    <circle cx="50%" cy="120" r="3" fill="#52525b" />
                    <circle cx="50%" cy="220" r="3" fill="#ffffff" />
                </svg>

                {/* Level 1: User */}
                <EntityNode 
                  title="User (Recruiter)" 
                  icon={<Users size={20}/>} 
                  fields={[
                    {name: 'id', type: 'PK INT'},
                    {name: 'email', type: 'UK String'},
                    {name: 'role', type: 'String'}
                  ]}
                />

                {/* Level 2: Candidate */}
                <EntityNode 
                  title="Candidate" 
                  icon={<UserCircle size={20}/>} 
                  fields={[
                    {name: 'id', type: 'PK INT'},
                    {name: 'userId', type: 'FK INT'},
                    {name: 'status', type: 'String'},
                    {name: 'score', type: 'Float'}
                  ]}
                  color="border-white/50"
                  glow={true}
                />

                {/* Level 3: Children */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-32 w-full justify-center">
                   <EntityNode 
                    title="Skills" 
                    icon={<Award size={20}/>} 
                    fields={[
                      {name: 'id', type: 'PK INT'},
                      {name: 'candidateId', type: 'FK INT'},
                      {name: 'skillName', type: 'String'}
                    ]}
                  />

                   <EntityNode 
                    title="Interviews" 
                    icon={<Calendar size={20}/>} 
                    fields={[
                      {name: 'id', type: 'PK INT'},
                      {name: 'candidateId', type: 'FK INT'},
                      {name: 'date', type: 'DateTime'},
                      {name: 'status', type: 'String'}
                    ]}
                  />
                </div>

             </div>
        </div>

        {/* Two Columns for DDL and DML */}
        <div className="grid lg:grid-cols-2 gap-12">
           <div className="flex flex-col h-full">
             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Database size={16}/> Schema Definition (DDL)</h3>
             <div className="flex-grow">
               <CodeBlock title="schema.sql" code={ddl} />
             </div>
           </div>
           <div className="flex flex-col h-full">
             <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Terminal size={16}/> Business Logic (DML)</h3>
             <div className="flex-grow">
               <CodeBlock title="queries.sql" code={dml} />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const phases: Phase[] = [
    { number: '01', title: 'Requirement Analysis', description: 'Identified pain points in traditional ATS. Defined core features: Dashboard & Candidate Management.', items: ['User Stories', 'Scope Definition'] },
    { number: '02', title: 'System Design', description: 'Modeled the relationship schema (User <-> Candidate) and designed RESTful API routes.', items: ['ER Diagram', 'API Specs'] },
    { number: '03', title: 'Implementation', description: 'Built the "Glass Panel" design system first, then integrated Backend/DB logic.', items: ['Frontend First', 'Next.js API'] },
    { number: '04', title: 'Polish & Verify', description: 'Conducted rigorous code reviews ("pente fino"), linting, and performance optimization.', items: ['Refactoring', 'Testing'] },
  ];

  return (
    <section id="process" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Development Methodology" subtitle="An Agile-Iterative approach focusing on rapid prototyping and continuous refinement." />
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl relative z-10 group cursor-default">
                <div className="text-6xl font-black text-white/5 absolute top-2 right-4 group-hover:text-white/10 transition-colors select-none">
                  {phase.number}
                </div>
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-700 group-hover:border-white flex items-center justify-center text-white font-bold mb-6 shadow-lg shadow-white/5 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-sm text-zinc-400 mb-6 h-20 leading-relaxed group-hover:text-zinc-300 transition-colors">{phase.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {phase.items.map((item, i) => (
                     <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 group-hover:border-zinc-600 transition-colors">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  return (
    <section id="future" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
           <SectionHeader title="Future Roadmap" subtitle="Expanding TALENTHUB from a dashboard to a complete ecosystem." />
           <div className="space-y-6">
             <div className="flex gap-5 group p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="mt-1"><CheckCircle2 className="text-white group-hover:scale-110 transition-transform" /></div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">True AI Integration</h4>
                  <p className="text-zinc-400 text-sm">Integrate OpenAI API to parse uploaded CV PDFs and generate real-time "Fit Scores" and summaries.</p>
                </div>
             </div>
             <div className="flex gap-5 group p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="mt-1"><Users className="text-zinc-500 group-hover:text-white transition-colors group-hover:scale-110 transition-transform" /></div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Public Job Board</h4>
                  <p className="text-zinc-400 text-sm">Public-facing page for unauthenticated users to apply for open roles directly.</p>
                </div>
             </div>
             <div className="flex gap-5 group p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="mt-1"><Zap className="text-zinc-500 group-hover:text-white transition-colors group-hover:scale-110 transition-transform" /></div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Mobile App</h4>
                  <p className="text-zinc-400 text-sm">React Native companion app for recruiters to review candidates on the go.</p>
                </div>
             </div>
           </div>
        </div>

        <div className="glass p-10 rounded-3xl border border-zinc-800 bg-black/40 relative overflow-hidden">
           <div className="absolute -right-10 -top-10 w-40 h-40 bg-zinc-800/30 rounded-full blur-3xl"></div>
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
            <AlertTriangle className="text-white" /> Current Limitations & Challenges
          </h3>
          <ul className="space-y-6 relative z-10">
            <li className="flex gap-4 text-zinc-300 text-sm group">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 group-hover:bg-white transition-colors"></span>
              <span><strong className="text-white block mb-1">Legacy Code Cleanup</strong> Evolving from "APX" to "TALENTHUB" required complex refactoring to ensure branding consistency.</span>
            </li>
            <li className="flex gap-4 text-zinc-300 text-sm group">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 group-hover:bg-white transition-colors"></span>
              <span><strong className="text-white block mb-1">Type Safety</strong> Handling complex JSON fields like `experience` across API boundaries challenged TypeScript compliance.</span>
            </li>
             <li className="flex gap-4 text-zinc-300 text-sm group">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 group-hover:bg-white transition-colors"></span>
              <span><strong className="text-white block mb-1">Simulated Data</strong> Current "Fit Score" is algorithmic, not LLM-driven. File uploads are currently mocked.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-zinc-900 bg-black py-16 text-center relative overflow-hidden">
     <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-[0.03]">
        <h1 className="text-[150px] font-bold text-white select-none">TALENT</h1>
     </div>
     <div className="relative z-10">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center transform rotate-45 mx-auto mb-6">
            <div className="transform -rotate-45 font-bold text-black text-xl">T</div>
        </div>
        <div className="text-2xl font-bold text-white tracking-[0.2em] mb-2">TALENTHUB</div>
        <p className="text-zinc-500 text-sm mb-8">Premium AI Recruitment Dashboard</p>
        <p className="text-xs text-zinc-700 font-mono">© 2025 Final Project Report. Built by Matheus Ambrozio.</p>
     </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen text-zinc-300 selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Overview />
      <TechStack />
      <DatabaseSection />
      <Process />
      <Roadmap />
      <Footer />
    </div>
  );
}