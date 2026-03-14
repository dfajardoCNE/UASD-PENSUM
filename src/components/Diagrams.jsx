import React from 'react';

const Diagrams = () => {
  return (
    <div>
      {/* 01 · Diagramas del Sistema */}
      <div className="page-band" style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '2rem 2.5rem',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="page-title" style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-.03em', marginBottom: '.3rem' }}>
          01 · <span style={{ color: 'var(--accent)' }}>Diagramas</span> del Sistema
        </div>
        <div className="page-desc" style={{ color: 'var(--muted)', fontSize: '.8rem', lineHeight: 1.6, maxWidth: '600px' }}>
          Ciclo de vida del sistema UASD — desde la propuesta curricular hasta la aprobación y gestión del pensum activo.
        </div>
        <div className="page-band-decoration" style={{
          position: 'absolute', right: '-20px', top: '-20px',
          fontFamily: 'Syne, sans-serif', fontSize: '8rem', fontWeight: 800,
          color: 'rgba(0, 200, 255, .04)',
          pointerEvents: 'none'
        }}>UASD</div>
      </div>

      {/* Diagrama 1: Flujo general */}
      <div className="diagram-wrap" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', overflowX: 'auto', marginBottom: '1.5rem' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--accent)', marginBottom: '1.25rem' }}>
          ▶ Ciclo de Vida del Plan de Estudio
        </h3>
        <svg viewBox="0 0 860 220" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '900px', display: 'block', margin: '0 auto' }}>
          <defs>
            <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#00c8ff" opacity=".7" />
            </marker>
          </defs>
          
          {/* nodes */}
          <rect x="10" y="80" width="110" height="60" rx="8" fill="#111827" stroke="#1e2d42" strokeWidth="1.5"/>
          <text x="65" y="105" textAnchor="middle" fill="#e8edf5" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>Facultad</text>
          <text x="65" y="122" textAnchor="middle" fill="#e8edf5" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>Propone</text>

          <rect x="155" y="80" width="120" height="60" rx="8" fill="#111827" stroke="#00c8ff" strokeWidth="1.5"/>
          <text x="215" y="105" textAnchor="middle" fill="#e8edf5" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>Plataforma</text>
          <text x="215" y="122" textAnchor="middle" fill="#e8edf5" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>Recepción</text>

          <rect x="310" y="80" width="120" height="60" rx="8" fill="#111827" stroke="#1e2d42" strokeWidth="1.5"/>
          <text x="370" y="105" textAnchor="middle" fill="#e8edf5" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>Comisión</text>
          <text x="370" y="122" textAnchor="middle" fill="#e8edf5" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>Evaluación</text>

          <rect x="465" y="20" width="110" height="50" rx="8" fill="#1a2235" stroke="#f5c842" strokeWidth="1.5"/>
          <text x="520" y="43" textAnchor="middle" fill="#f5c842" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>Devuelto</text>
          <text x="520" y="58" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>con Obs.</text>

          <rect x="465" y="140" width="110" height="50" rx="8" fill="#1a2235" stroke="#7fff6b" strokeWidth="1.5"/>
          <text x="520" y="162" textAnchor="middle" fill="#7fff6b" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>Aprobado</text>
          <text x="520" y="178" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>por Consejo</text>

          <rect x="620" y="140" width="120" height="50" rx="8" fill="#111827" stroke="#00c8ff" strokeWidth="1.5"/>
          <text x="680" y="162" textAnchor="middle" fill="#e8edf5" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>Registro</text>
          <text x="680" y="178" textAnchor="middle" fill="#e8edf5" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>Pensum</text>

          <rect x="775" y="140" width="75" height="50" rx="8" fill="#111827" stroke="#ff6b35" strokeWidth="1.5"/>
          <text x="812" y="162" textAnchor="middle" fill="#ff6b35" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>Activo</text>
          <text x="812" y="178" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>en LMS</text>

          {/* arrows */}
          <line x1="120" y1="110" x2="153" y2="110" stroke="#00c8ff" strokeWidth="1.5" opacity=".6" markerEnd="url(#arr)"/>
          <line x1="275" y1="110" x2="308" y2="110" stroke="#00c8ff" strokeWidth="1.5" opacity=".6" markerEnd="url(#arr)"/>
          <line x1="430" y1="90" x2="463" y2="50" stroke="#f5c842" strokeWidth="1.5" opacity=".7" markerEnd="url(#arr)"/>
          <line x1="430" y1="130" x2="463" y2="160" stroke="#7fff6b" strokeWidth="1.5" opacity=".7" markerEnd="url(#arr)"/>
          
          {/* feedback loop */}
          <path d="M520 20 Q520 5 215 5 Q215 78" fill="none" stroke="#f5c842" strokeWidth="1" strokeDasharray="4,3" opacity=".5" markerEnd="url(#arr)"/>

          <line x1="575" y1="165" x2="618" y2="165" stroke="#00c8ff" strokeWidth="1.5" opacity=".6" markerEnd="url(#arr)"/>
          <line x1="740" y1="165" x2="773" y2="165" stroke="#00c8ff" strokeWidth="1.5" opacity=".6" markerEnd="url(#arr)"/>

          {/* step labels */}
          <text x="65" y="75" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'Syne, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '.08em' }}>PASO 1</text>
          <text x="215" y="75" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'Syne, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '.08em' }}>PASO 2</text>
          <text x="370" y="75" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'Syne, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '.08em' }}>PASO 3</text>
          <text x="680" y="135" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'Syne, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '.08em' }}>PASO 4</text>
          <text x="812" y="135" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'Syne, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '.08em' }}>PASO 5</text>
        </svg>
      </div>

      {/* Diagrama 2: Modalidades */}
      <div className="diagram-wrap" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', overflowX: 'auto' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--accent2)', marginBottom: '1.25rem' }}>
          ▶ Árbol de Modalidades y Tipos de Horas
        </h3>
        <svg viewBox="0 0 860 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '900px', display: 'block', margin: '0 auto' }}>
          <defs>
            <marker id="arr2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
              <polygon points="0 0, 7 2.5, 0 5" fill="#6b7d96" opacity=".8"/>
            </marker>
          </defs>
          
          {/* Root */}
          <rect x="330" y="10" width="200" height="48" rx="8" fill="#1a2235" stroke="#00c8ff" strokeWidth="2"/>
          <text x="430" y="32" textAnchor="middle" fill="#e8edf5" style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', fontWeight: 600 }}>Crédito Académico</text>
          <text x="430" y="50" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px' }}>1 CR = 15 HT / 30 HP / 45 HI</text>

          {/* Modalidades */}
          <rect x="50" y="100" width="150" height="44" rx="8" fill="#111827" stroke="#7fff6b" strokeWidth="1.5"/>
          <text x="125" y="122" textAnchor="middle" fill="#7fff6b" style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px' }}>Presencial</text>
          <text x="125" y="138" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>HT + HP</text>

          <rect x="330" y="100" width="150" height="44" rx="8" fill="#111827" stroke="#f5c842" strokeWidth="1.5"/>
          <text x="405" y="122" textAnchor="middle" fill="#f5c842" style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px' }}>Semipresencial</text>
          <text x="405" y="138" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>HT + HP + HIV + HI</text>

          <rect x="620" y="100" width="150" height="44" rx="8" fill="#111827" stroke="#00c8ff" strokeWidth="1.5"/>
          <text x="695" y="122" textAnchor="middle" fill="#00c8ff" style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px' }}>Virtual</text>
          <text x="695" y="138" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>HIV + HPV + HI</text>

          {/* Lines root→modal */}
          <line x1="430" y1="58" x2="125" y2="98" stroke="#6b7d96" strokeWidth="1" markerEnd="url(#arr2)"/>
          <line x1="430" y1="58" x2="405" y2="98" stroke="#6b7d96" strokeWidth="1" markerEnd="url(#arr2)"/>
          <line x1="430" y1="58" x2="695" y2="98" stroke="#6b7d96" strokeWidth="1" markerEnd="url(#arr2)"/>

          {/* Sub-nodes PRESENCIAL */}
          <rect x="10" y="190" width="115" height="38" rx="6" fill="#1a2235" stroke="#7fff6b" strokeWidth="1" opacity=".8"/>
          <text x="67" y="209" textAnchor="middle" fill="#7fff6b" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>HT</text>
          <text x="67" y="222" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px' }}>Teóricas Presenc.</text>

          <rect x="135" y="190" width="115" height="38" rx="6" fill="#1a2235" stroke="#7fff6b" strokeWidth="1" opacity=".8"/>
          <text x="192" y="209" textAnchor="middle" fill="#7fff6b" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>HP</text>
          <text x="192" y="222" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px' }}>Prácts. Presenc.</text>

          {/* Sub-nodes SEMI */}
          <rect x="250" y="190" width="80" height="38" rx="6" fill="#1a2235" stroke="#f5c842" strokeWidth="1" opacity=".8"/>
          <text x="290" y="209" textAnchor="middle" fill="#f5c842" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>HT+HP</text>
          <text x="290" y="222" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px' }}>Presenciales</text>

          <rect x="340" y="190" width="80" height="38" rx="6" fill="#1a2235" stroke="#f5c842" strokeWidth="1" opacity=".8"/>
          <text x="380" y="209" textAnchor="middle" fill="#f5c842" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>HIV</text>
          <text x="380" y="222" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px' }}>Interac. Virtual</text>

          <rect x="430" y="190" width="80" height="38" rx="6" fill="#1a2235" stroke="#f5c842" strokeWidth="1" opacity=".8"/>
          <text x="470" y="209" textAnchor="middle" fill="#f5c842" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>HI</text>
          <text x="470" y="222" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px' }}>Investigación</text>

          {/* Sub-nodes VIRTUAL */}
          <rect x="560" y="190" width="80" height="38" rx="6" fill="#1a2235" stroke="#00c8ff" strokeWidth="1" opacity=".8"/>
          <text x="600" y="209" textAnchor="middle" fill="#00c8ff" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>HIV</text>
          <text x="600" y="222" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px' }}>Sinc./Asinc.</text>

          <rect x="650" y="190" width="80" height="38" rx="6" fill="#1a2235" stroke="#00c8ff" strokeWidth="1" opacity=".8"/>
          <text x="690" y="209" textAnchor="middle" fill="#00c8ff" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>HPV</text>
          <text x="690" y="222" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px' }}>Labs Virtuales</text>

          <rect x="740" y="190" width="80" height="38" rx="6" fill="#1a2235" stroke="#00c8ff" strokeWidth="1" opacity=".8"/>
          <text x="780" y="209" textAnchor="middle" fill="#00c8ff" style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px' }}>HI</text>
          <text x="780" y="222" textAnchor="middle" fill="#6b7d96" style={{ fontFamily: 'DM Mono, monospace', fontSize: '8px' }}>Investigación</text>

          {/* lines modal→sub */}
          <line x1="125" y1="144" x2="67" y2="188" stroke="#7fff6b" strokeWidth="1" opacity=".5" markerEnd="url(#arr2)"/>
          <line x1="125" y1="144" x2="192" y2="188" stroke="#7fff6b" strokeWidth="1" opacity=".5" markerEnd="url(#arr2)"/>
          <line x1="405" y1="144" x2="290" y2="188" stroke="#f5c842" strokeWidth="1" opacity=".5" markerEnd="url(#arr2)"/>
          <line x1="405" y1="144" x2="380" y2="188" stroke="#f5c842" strokeWidth="1" opacity=".5" markerEnd="url(#arr2)"/>
          <line x1="405" y1="144" x2="470" y2="188" stroke="#f5c842" strokeWidth="1" opacity=".5" markerEnd="url(#arr2)"/>
          <line x1="695" y1="144" x2="600" y2="188" stroke="#00c8ff" strokeWidth="1" opacity=".5" markerEnd="url(#arr2)"/>
          <line x1="695" y1="144" x2="690" y2="188" stroke="#00c8ff" strokeWidth="1" opacity=".5" markerEnd="url(#arr2)"/>
          <line x1="695" y1="144" x2="780" y2="188" stroke="#00c8ff" strokeWidth="1" opacity=".5" markerEnd="url(#arr2)"/>
        </svg>
      </div>
    </div>
  );
};

export default Diagrams;
