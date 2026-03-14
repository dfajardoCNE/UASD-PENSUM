import React, { useState } from 'react';

const CodeViewer = () => {
  const [lang, setLang] = useState('js');

  const JS_CODE = (
    <pre>
<span className="cm">/**
 * UASD — Algoritmo de Cálculo de Horas por Crédito
 * Ref: Normativa MESCYT — Crédito Académico Virtual
 * 1 CR presencial = 15 HT | 30 HP | 45 HI
 */</span>

<span className="cm">// ── Constantes MESCYT ──────────────────────────────</span>
<span className="kw">const</span> <span className="fn">CR_BASE</span> = {'{'};
  HT_POR_CR: <span className="num">15</span>,   <span className="cm">// horas teóricas por crédito</span>
  HP_POR_CR: <span className="num">30</span>,   <span className="cm">// horas prácticas por crédito</span>
  HI_POR_CR: <span className="num">45</span>,   <span className="cm">// horas investigación por crédito</span>
{'}'};

<span className="cm">// ── Tipos de hora ──────────────────────────────────</span>
<span className="kw">const</span> TIPO_HORA = {'{'};
  HT:  <span className="str">'Horas Teóricas Presenciales'</span>,
  HP:  <span className="str">'Horas Prácticas Presenciales'</span>,
  HIV: <span className="str">'Horas de Interacción Virtual'</span>,
  HPV: <span className="str">'Horas Prácticas Virtuales'</span>,
  HI:  <span className="str">'Horas de Investigación'</span>,
{'}'};

<span className="cm">/**
 * Calcula las horas de una asignatura según su
 * distribución de créditos y modalidad.
 */</span>
<span className="kw">function</span> <span className="fn">calcularHoras</span>(asignatura, modalidad) {'{'}
  <span className="kw">const</span> {'{'} creditosHT = <span className="num">0</span>, creditosHP = <span className="num">0</span>, creditosHI = <span className="num">0</span> {'}'} = asignatura;

  <span className="kw">let</span> resultado = {'{'} HT:<span className="num">0</span>, HP:<span className="num">0</span>, HIV:<span className="num">0</span>, HPV:<span className="num">0</span>, HI:<span className="num">0</span>, total:<span className="num">0</span> {'}'};

  <span className="kw">if</span> (modalidad === <span className="str">'presencial'</span>) {'{'}
    resultado.HT = creditosHT * CR_BASE.HT_POR_CR;
    resultado.HP = creditosHP * CR_BASE.HP_POR_CR;
    resultado.HI = creditosHI * CR_BASE.HI_POR_CR;
  {'}'}

  <span className="kw">else if</span> (modalidad === <span className="str">'semipresencial'</span>) {'{'}
    resultado.HT  = creditosHT * CR_BASE.HT_POR_CR * <span className="num">0.5</span>;
    resultado.HP  = creditosHP * CR_BASE.HP_POR_CR * <span className="num">0.5</span>;
    resultado.HIV = creditosHT * CR_BASE.HT_POR_CR * <span className="num">0.5</span>;
    resultado.HI  = creditosHI * CR_BASE.HI_POR_CR;
  {'}'}

  <span className="kw">else if</span> (modalidad === <span className="str">'virtual'</span>) {'{'}
    resultado.HIV = creditosHT * CR_BASE.HT_POR_CR;
    resultado.HPV = creditosHP * CR_BASE.HP_POR_CR;
    resultado.HI  = creditosHI * CR_BASE.HI_POR_CR;
  {'}'}

  resultado.total = Object.values(resultado)
    .filter((_, i) => i {'<'} 5)
    .reduce((a, b) => a + b, 0);

  <span className="kw">return</span> resultado;
{'}'}
    </pre>
  );

  const PY_CODE = (
    <pre>
<span className="cm"># UASD — Algoritmo de Créditos (Python)
# Conforme normativa MESCYT</span>

<span className="kw">from</span> dataclasses <span className="kw">import</span> dataclass, field
<span className="kw">from</span> typing <span className="kw">import</span> Literal

CR_BASE = {'{'}<span className="str">"HT"</span>: <span className="num">15</span>, <span className="str">"HP"</span>: <span className="num">30</span>, <span className="str">"HI"</span>: <span className="num">45</span>{'}'}
Modalidad = Literal[<span className="str">"presencial"</span>, <span className="str">"semipresencial"</span>, <span className="str">"virtual"</span>]

<span className="kw">@dataclass</span>
<span className="kw">class</span> <span className="fn">Asignatura</span>:
    codigo: str
    nombre: str
    creditos_HT: <span className="fn">float</span> = <span className="num">0</span>
    creditos_HP: <span className="fn">float</span> = <span className="num">0</span>
    creditos_HI: <span className="fn">float</span> = <span className="num">0</span>

    <span className="kw">@property</span>
    <span className="kw">def</span> <span className="fn">total_creditos</span>(self) {'->'} <span className="fn">float</span>:
        <span className="kw">return</span> self.creditos_HT + self.creditos_HP + self.creditos_HI

<span className="kw">def</span> <span className="fn">calcular_horas</span>(a: Asignatura, modalidad: Modalidad) {'->'} <span className="fn">dict</span>:
    r = {'{'}<span className="str">"HT"</span>:<span className="num">0</span>, <span className="str">"HP"</span>:<span className="num">0</span>, <span className="str">"HIV"</span>:<span className="num">0</span>, <span className="str">"HPV"</span>:<span className="num">0</span>, <span className="str">"HI"</span>:<span className="num">0</span>{'}'}

    <span className="kw">if</span> modalidad == <span className="str">"presencial"</span>:
        r[<span className="str">"HT"</span>] = a.creditos_HT * CR_BASE[<span class="str">"HT"</span>]
        r[<span className="str">"HP"</span>] = a.creditos_HP * CR_BASE[<span class="str">"HP"</span>]
        r[<span className="str">"HI"</span>] = a.creditos_HI * CR_BASE[<span class="str">"HI"</span>]

    <span className="kw">elif</span> modalidad == <span className="str">"semipresencial"</span>:
        r[<span className="str">"HT"</span>]  = a.creditos_HT * CR_BASE[<span class="str">"HT"</span>] * <span className="num">0.5</span>
        r[<span className="str">"HP"</span>]  = a.creditos_HP * CR_BASE[<span class="str">"HP"</span>] * <span className="num">0.5</span>
        r[<span className="str">"HIV"</span>] = a.creditos_HT * CR_BASE[<span class="str">"HT"</span>] * <span className="num">0.5</span>
        r[<span className="str">"HI"</span>]  = a.creditos_HI * CR_BASE[<span class="str">"HI"</span>]

    <span className="kw">elif</span> modalidad == <span className="str">"virtual"</span>:
        r[<span className="str">"HIV"</span>] = a.creditos_HT * CR_BASE[<span class="str">"HT"</span>]
        r[<span className="str">"HPV"</span>] = a.creditos_HP * CR_BASE[<span class="str">"HP"</span>]
        r[<span className="str">"HI"</span>]  = a.creditos_HI * CR_BASE[<span class="str">"HI"</span>]

    r[<span className="str">"total"</span>] = <span className="fn">sum</span>(v <span className="kw">for</span> k, v <span className="kw">in</span> r.items() <span className="kw">if</span> k != <span className="str">"total"</span>)
    <span className="kw">return</span> r
    </pre>
  );

  const SQL_CODE = (
    <pre>
<span className="cm">-- UASD Plataforma Curricular — Schema Base de Datos</span>
<span className="kw">CREATE TABLE</span> <span className="fn">carreras</span> ({'('}
  id          <span className="kw">SERIAL PRIMARY KEY</span>,
  codigo      <span className="fn">VARCHAR</span>(<span class="num">10</span>) <span className="kw">UNIQUE NOT NULL</span>,
  nombre      <span className="fn">VARCHAR</span>(<span class="num">120</span>) <span className="kw">NOT NULL</span>,
  facultad    <span className="fn">VARCHAR</span>(<span class="num">80</span>),
  modalidad   <span className="fn">VARCHAR</span>(<span class="num">20</span>) <span className="kw">CHECK</span> (modalidad <span className="kw">IN</span> (
                <span className="str">'presencial'</span>,<span className="str">'semipresencial'</span>,<span className="str">'virtual'</span>{'))'},
  creditos_totales <span className="fn">SMALLINT</span>,
  estado      <span className="fn">VARCHAR</span>(<span class="num">15</span>) <span className="kw">DEFAULT</span> <span class="str">'propuesta'</span>,
  created_at  <span className="fn">TIMESTAMP DEFAULT NOW</span>()
{');'}

<span className="kw">CREATE TABLE</span> <span className="fn">asignaturas</span> ({'('}
  id          <span className="kw">SERIAL PRIMARY KEY</span>,
  carrera_id  <span className="fn">INT REFERENCES</span> carreras(id),
  codigo      <span className="fn">VARCHAR</span>(<span class="num">12</span>) <span className="kw">NOT NULL</span>,
  nombre      <span className="fn">VARCHAR</span>(<span class="num">120</span>) <span className="kw">NOT NULL</span>,
  semestre    <span className="fn">SMALLINT</span>,
  cr_HT       <span className="fn">NUMERIC</span>(<span class="num">4</span>,<span class="num">1</span>) <span className="kw">DEFAULT</span> <span class="num">0</span>,
  cr_HP       <span className="fn">NUMERIC</span>(<span class="num">4</span>,<span class="num">1</span>) <span className="kw">DEFAULT</span> <span class="num">0</span>,
  cr_HI       <span className="fn">NUMERIC</span>(<span class="num">4</span>,<span class="num">1</span>) <span className="kw">DEFAULT</span> <span class="num">0</span>,
  horas_HT    <span className="fn">NUMERIC</span>(<span class="num">6</span>,<span class="num">1</span>),
  horas_HP    <span className="fn">NUMERIC</span>(<span class="num">6</span>,<span class="num">1</span>),
  horas_HIV   <span className="fn">NUMERIC</span>(<span class="num">6</span>,<span class="num">1</span>),
  horas_HPV   <span className="fn">NUMERIC</span>(<span class="num">6</span>,<span class="num">1</span>),
  horas_HI    <span className="fn">NUMERIC</span>(<span class="num">6</span>,<span class="num">1</span>),
  prerequisito_id <span className="fn">INT REFERENCES</span> asignaturas(id)
{');'}
    </pre>
  );

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

      <div className="code-container" style={{
        background: 'var(--surface2)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius)', padding: '1.25rem',
        fontSize: '.78rem', lineHeight: 1.7, overflowX: 'auto',
        color: '#c9d4e8'
      }}>
        {lang === 'js' ? JS_CODE : lang === 'py' ? PY_CODE : SQL_CODE}
      </div>
    </div>
  );
};

export default CodeViewer;
