import React, { useState } from 'react';

const CodeViewer = () => {
  const [lang, setLang] = useState('js');

  const code = {
    js: `/**
 * UASD — Algoritmo de Cálculo de Horas por Crédito
 * Ref: Normativa MESCYT — Crédito Académico Virtual
 * 1 CR presencial = 15 HT | 30 HP | 45 HI
 */

const CR_BASE = {
  HT_POR_CR: 15,   // horas teóricas por crédito
  HP_POR_CR: 30,   // horas prácticas por crédito
  HI_POR_CR: 45,   // horas investigación por crédito
};

function calcularHoras(asignatura, modalidad) {
  const { creditosHT = 0, creditosHP = 0, creditosHI = 0 } = asignatura;
  let resultado = { HT:0, HP:0, HIV:0, HPV:0, HI:0, total:0 };

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
}`,
    py: `# UASD — Algoritmo de Créditos (Python)
# Conforme normativa MESCYT

CR_BASE = {"HT": 15, "HP": 30, "HI": 45}

def calcular_horas(a, modalidad):
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
    r["total"] = sum(v for k, v in r.items() if k != "total")
    return r`,
    sql: `-- UASD Plataforma Curricular — Schema Base de Datos
CREATE TABLE carreras (
  id SERIAL PRIMARY KEY,
  codigo VARCHAR(10) UNIQUE NOT NULL,
  nombre VARCHAR(120) NOT NULL,
  modalidad VARCHAR(20) CHECK (modalidad IN ('presencial','semipresencial','virtual')),
  creditos_totales SMALLINT,
  estado VARCHAR(15) DEFAULT 'propuesta'
);`
  };

  return (
    <div>
      <div className="page-band">
        <div className="page-title">03 · <span>Códigos</span> — Algoritmo de Créditos</div>
        <div className="page-desc">Implementación del algoritmo para calcular horas de acuerdo al crédito según modalidad.</div>
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

      <pre style={{
        background: 'var(--surface2)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius)', padding: '1.25rem',
        fontSize: '.78rem', lineHeight: 1.7, overflowX: 'auto',
        color: '#c9d4e8'
      }}>
        <code>{code[lang]}</code>
      </pre>
    </div>
  );
};

export default CodeViewer;
