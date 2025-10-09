import React from 'react';
import LogoLoop, { type LogoItem } from './LogoLoop';
import { 
  SiReact,
  SiAstro,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiVite,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiN8N,
  SiZapier,
} from 'react-icons/si';


function IconPill({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      title={label}
      aria-label={label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: '6px 10px',
        borderRadius: 9999,
        border: '1px solid rgba(0,0,0,0.08)',
        background: 'rgba(255,255,255,0.8)',
        color: '#111827'
      }}
    >
      {children}
    </div>
  );
}

const tools: LogoItem[] = [
  { node: <IconPill label="React"><SiReact size={22} color="#61DAFB" /></IconPill>, title: 'React' },
  { node: <IconPill label="Astro"><SiAstro size={22} color="#FF5D01" /></IconPill>, title: 'Astro' },
  { node: <IconPill label="TypeScript"><SiTypescript size={22} color="#3178C6" /></IconPill>, title: 'TypeScript' },
  { node: <IconPill label="JavaScript"><SiJavascript size={22} color="#F7DF1E" /></IconPill>, title: 'JavaScript' },
  { node: <IconPill label="Node.js"><SiNodedotjs size={22} color="#5FA04E" /></IconPill>, title: 'Node.js' },
  { node: <IconPill label="Tailwind CSS"><SiTailwindcss size={22} color="#06B6D4" /></IconPill>, title: 'Tailwind CSS' },
  { node: <IconPill label="Vite"><SiVite size={22} color="#646CFF" /></IconPill>, title: 'Vite' },
  { node: <IconPill label="PostgreSQL"><SiPostgresql size={22} color="#4169E1" /></IconPill>, title: 'PostgreSQL' },
  { node: <IconPill label="Git"><SiGit size={22} color="#F05032" /></IconPill>, title: 'Git' },
  { node: <IconPill label="GitHub"><SiGithub size={22} /></IconPill>, title: 'GitHub' },
    { node: <IconPill label="N8N"><SiZapier size={22} /></IconPill>, title: 'Zapier' },
      { node: <IconPill label="Zapier"><SiN8N size={22} /></IconPill>, title: 'N8N' },
];

export default function Skills() {
  return (
    <section style={{ width: '100%', display: 'grid', gap: 16 }}>
      <h3 style={{
        fontSize: 24,
        fontWeight: 800,
        color: '#374151',
        textAlign: 'center'
      }}>
        Herramientas que manejo
      </h3>
      <LogoLoop 
        logos={tools}
        speed={120}
        direction="left"
        width="100%"
        logoHeight={28}
        gap={24}
        pauseOnHover
        fadeOut
        scaleOnHover
        ariaLabel="Logo loop de herramientas"
      />

      <LogoLoop 
        logos={tools}
        speed={110}
        direction="right"
        width="100%"
        logoHeight={28}
        gap={24}
        pauseOnHover
        fadeOut
        ariaLabel="Logo loop inverso de herramientas"
      />
    </section>
  );
}
