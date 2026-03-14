import React, { useState, useEffect } from 'react';

const escapeHtml = (str) =>
  str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const highlight = (code, lang) => {
  let out = escapeHtml(code);

  if (lang === 'js') {
    // comments
    out = out.replace(/\/\*[\s\S]*?\*\//g, m => `<span class="cm">${m}</span>`);
    out = out.replace(/\/\/.*$/gm, m => `<span class="cm">${m}</span>`);
    // strings
    out = out.replace(/(`[^`]*`|"[^"\\]*"|'[^'\\]*')/g, m => `<span class="str">${m}</span>`);
    // numbers
    out = out.replace(/\b(\d+\.?\d*)\b/g, m => `<span class="num">${m}</span>`);
    // keywords
    const kw = '\\b(?:const|let|var|function|return|if|else|for|while|switch|case|break|continue|import|from|export|class|new|try|catch|finally|throw)\\b';
    out = out.replace(new RegExp(kw, 'g'), m => `<span class="kw">${m}</span>`);
    // simple function names (identifier followed by())
    out = out.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, m => `<span class="fn">${m}</span>`);
  }

  if (lang === 'py') {
    out = out.replace(/#.*$/gm, m => `<span class="cm">${m}</span>`);
    out = out.replace(/(`[^`]*`|"""[\s\S]*?"""|'''[\s\S]*?'''|"[^"\\]*"|'[^'\\]*')/g, m => `<span class="str">${m}</span>`);
    out = out.replace(/\b(\d+\.?\d*)\b/g, m => `<span class="num">${m}</span>`);
    const kwpy = '\\b(?:def|class|return|if|elif|else|for|while|import|from|as|with|try|except|finally|lambda|pass|break|continue|in|is|and|or|not|yield)\\b';
    out = out.replace(new RegExp(kwpy, 'g'), m => `<span class="kw">${m}</span>`);
    out = out.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, m => `<span class="fn">${m}</span>`);
  }

  if (lang === 'sql') {
    out = out.replace(/--.*$/gm, m => `<span class="cm">${m}</span>`);
    out = out.replace(/('([^']*)')/g, m => `<span class="str">${m}</span>`);
    out = out.replace(/\b(\d+\.?\d*)\b/g, m => `<span class="num">${m}</span>`);
    const kwsql = '\\b(?:SELECT|FROM|WHERE|INSERT|INTO|VALUES|CREATE|TABLE|PRIMARY|KEY|REFERENCES|DEFAULT|NOT|NULL|CHECK|ALTER|ADD|DROP|JOIN|ON|GROUP|BY|ORDER|LIMIT|UNIQUE)\\b';
    out = out.replace(new RegExp(kwsql, 'gi'), m => `<span class="kw">${m}</span>`);
  }

  return out;
};

const CodeViewer = () => {
  const [lang, setLang] = useState('js');
  const [SyntaxHighlighter, setSyntaxHighlighter] = useState(null);
  const [prismStyle, setPrismStyle] = useState(null);

  useEffect(() => {
    let mounted = true;
    // try dynamic import of react-syntax-highlighter + style (Prism). If not installed, ignore.
    (async () => {
      try {
        const [{ Prism }, styleModule] = await Promise.all([
          import('react-syntax-highlighter'),
          import('react-syntax-highlighter/dist/esm/styles/prism/vs-dark')
        ]);
        if (!mounted) return;
        // Prism may be undefined depending on package export; fall back to default
        const SH = Prism || (await import('react-syntax-highlighter/dist/esm/prism')).default;
        setSyntaxHighlighter(() => SH);
        setPrismStyle(styleModule.default || styleModule);
      } catch (e) {
        // package not available — keep fallback
        // console.debug('Syntax highlighter not available, using fallback');
      }
    })();
    return () => { mounted = false; };
  }, []);

  const JS_CODE_STR = `/**
 * UASD — Algoritmo de Cálculo de Horas por Crédito
 * Ref: Normativa MESCYT — Crédito Académico Virtual
 * 1 CR presencial = 15 HT | 30 HP | 45 HI
 */

// ── Constantes MESCYT ──────────────────────────────
const CR_BASE = {
  HT_POR_CR: 15,   // horas teóricas por crédito
  HP_POR_CR: 30,   // horas prácticas por crédito
  HI_POR_CR: 45,   // horas investigación por crédito
};

// ── Tipos de hora ──────────────────────────────────
const TIPO_HORA = {
  HT: 'Horas Teóricas Presenciales',
  HP: 'Horas Prácticas Presenciales',
  HIV: 'Horas de Interacción Virtual',
  HPV: 'Horas Prácticas Virtuales',
  HI: 'Horas de Investigación',
};

/**
 * Calcula las horas de una asignatura según su
 * distribución de créditos y modalidad.
 */
function calcularHoras(asignatura, modalidad) {
  const { creditosHT = 0, creditosHP = 0, creditosHI = 0 } = asignatura;

  let resultado = { HT: 0, HP: 0, HIV: 0, HPV: 0, HI: 0, total: 0 };

  if (modalidad === 'presencial') {
    resultado.HT = creditosHT * CR_BASE.HT_POR_CR;
    resultado.HP = creditosHP * CR_BASE.HP_POR_CR;
    resultado.HI = creditosHI * CR_BASE.HI_POR_CR;
  } else if (modalidad === 'semipresencial') {
    resultado.HT  = creditosHT * CR_BASE.HT_POR_CR * 0.5;
    resultado.HP  = creditosHP * CR_BASE.HP_POR_CR * 0.5;
    resultado.HIV = creditosHT * CR_BASE.HT_POR_CR * 0.5;
    resultado.HI  = creditosHI * CR_BASE.HI_POR_CR;
  } else if (modalidad === 'virtual') {
    resultado.HIV = creditosHT * CR_BASE.HT_POR_CR;
    resultado.HPV = creditosHP * CR_BASE.HP_POR_CR;
    resultado.HI  = creditosHI * CR_BASE.HI_POR_CR;
  }

  resultado.total = Object.values(resultado)
    .filter((_, i) => i < 5)
    .reduce((a, b) => a + b, 0);

  return resultado;
}
`;

  const PY_CODE_STR = `# UASD — Algoritmo de Créditos (Python)
# Conforme normativa MESCYT

from dataclasses import dataclass, field
from typing import Literal

CR_BASE = {"HT": 15, "HP": 30, "HI": 45}
Modalidad = Literal["presencial", "semipresencial", "virtual"]

@dataclass
class Asignatura:
    codigo: str
    nombre: str
    creditos_HT: float = 0
    creditos_HP: float = 0
    creditos_HI: float = 0

    @property
    def total_creditos(self) -> float:
        return self.creditos_HT + self.creditos_HP + self.creditos_HI


def calcular_horas(a: Asignatura, modalidad: Modalidad) -> dict:
    r = {"HT":0, "HP":0, "HIV":0, "HPV":0, "HI":0}

    if modalidad == "presencial":
        r["HT"] = a.creditos_HT * CR_BASE["HT"]
        r["HP"] = a.creditos_HP * CR_BASE["HP"]
        r["HI"] = a.creditos_HI * CR_BASE["HI"]

    elif modalidad == "semipresencial":
        r["HT"]  = a.creditos_HT * CR_BASE["HT"] * 0.5
        r["HP"]  = a.creditos_HP * CR_BASE["HP"] * 0.5
        r["HIV"] = a.creditos_HT * CR_BASE["HT"] * 0.5
        r["HI"]  = a.creditos_HI * CR_BASE["HI"]

    elif modalidad == "virtual":
        r["HIV"] = a.creditos_HT * CR_BASE["HT"]
        r["HPV"] = a.creditos_HP * CR_BASE["HP"]
        r["HI"]  = a.creditos_HI * CR_BASE["HI"]

    r["total"] = sum(v for k, v in r.items() if k != "total");
    return r
`;

  const SQL_CODE_STR = `-- UASD Plataforma Curricular — Schema Base de Datos
CREATE TABLE carreras (
  id          SERIAL PRIMARY KEY,
  codigo      VARCHAR(10) UNIQUE NOT NULL,
  nombre      VARCHAR(120) NOT NULL,
  facultad    VARCHAR(80),
  modalidad   VARCHAR(20) CHECK (modalidad IN ('presencial','semipresencial','virtual')),
  creditos_totales SMALLINT,
  estado      VARCHAR(15) DEFAULT 'propuesta',
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE asignaturas (
  id          SERIAL PRIMARY KEY,
  carrera_id  INT REFERENCES carreras(id),
  codigo      VARCHAR(12) NOT NULL,
  nombre      VARCHAR(120) NOT NULL,
  semestre    SMALLINT,
  cr_HT       NUMERIC(4,1) DEFAULT 0,
  cr_HP       NUMERIC(4,1) DEFAULT 0,
  cr_HI       NUMERIC(4,1) DEFAULT 0,
  horas_HT    NUMERIC(6,1),
  horas_HP    NUMERIC(6,1),
  horas_HIV   NUMERIC(6,1),
  horas_HPV   NUMERIC(6,1),
  horas_HI    NUMERIC(6,1),
  prerequisito_id INT REFERENCES asignaturas(id)
);
`;

  const codeStr = lang === 'js' ? JS_CODE_STR : lang === 'py' ? PY_CODE_STR : SQL_CODE_STR;
  const langMap = lang === 'js' ? 'javascript' : lang === 'py' ? 'python' : 'sql';

  return (
    <div>
      <div className="page-band">
        <div className="page-title">03 · <span>Códigos</span> — Algoritmo de Créditos</div>
        <div className="page-desc">Implementación del algoritmo para calcular horas de acuerdo al crédito según modalidad.</div>
        <div className="page-band-decoration">UASD</div>
      </div>

      <div className="code-tabs" style={{ display: 'flex', gap: '.5rem', marginBottom: '1rem' }}>
        {['js', 'py', 'sql'].map(l => (
          <button
            key={l}
            className={`code-tab ${lang === l ? 'active' : ''}`}
            onClick={() => setLang(l)}
            style={{
              background: lang === l ? 'var(--surface2)' : 'none',
              border: `1px solid ${lang === l ? 'var(--accent)' : 'var(--border)'}`,
              color: lang === l ? 'var(--accent)' : 'var(--muted)',
              fontFamily: 'DM Mono, monospace', fontSize: '.72rem',
              padding: '.35rem .8rem', borderRadius: '6px', cursor: 'pointer', transition: 'all .2s'
            }}
          >
            {l === 'js' ? 'JavaScript' : l === 'py' ? 'Python' : 'SQL Schema'}
          </button>
        ))}
      </div>

      <div className="code-container code-block" style={{
        background: 'var(--surface2)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius)', padding: '1.25rem',
        fontSize: '.78rem', lineHeight: 1.7, overflowX: 'auto',
        color: '#c9d4e8'
      }}>
        {SyntaxHighlighter && prismStyle ? (
          <SyntaxHighlighter language={langMap} style={prismStyle} showLineNumbers customStyle={{ background: 'transparent', padding: '0.6rem', margin: 0 }}>
            {codeStr}
          </SyntaxHighlighter>
        ) : (
          <pre dangerouslySetInnerHTML={{ __html: lang === 'js' ? highlight(JS_CODE_STR, 'js') : lang === 'py' ? highlight(PY_CODE_STR, 'py') : highlight(SQL_CODE_STR, 'sql') }} />
        )}
      </div>
    </div>
  );
};

export default CodeViewer;
