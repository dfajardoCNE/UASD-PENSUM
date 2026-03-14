import React, { useState } from 'react';
import { calcularHoras } from '../utils/algorithm';

const Calculator = () => {
  const [creditos, setCreditos] = useState({ ht: 2, hp: 1, hi: 1 });
  const [modalidad, setModalidad] = useState('semipresencial');

  const result = calcularHoras(
    { creditosHT: Number(creditos.ht), creditosHP: Number(creditos.hp), creditosHI: Number(creditos.hi) },
    modalidad
  );

  const colors = {
    HT: 'var(--accent)',
    HP: 'var(--accent3)',
    HIV: 'var(--gold)',
    HPV: 'var(--accent)',
    HI: 'var(--accent2)'
  };

  const labels = {
    HT: 'Teórica Presencial',
    HP: 'Práctica Presencial',
    HIV: 'Interacción Virtual',
    HPV: 'Práctica Virtual',
    HI: 'Investigación / Tareas'
  };

  return (
    <div>
      {/* 05 · Calculadora Interactiva */}
      <div className="page-band">
        <div className="page-title">05 · <span>Calculadora</span> Interactiva</div>
        <div className="page-desc">Simulador de carga horaria según la modalidad seleccionada. Los valores se ajustan automáticamente según la normativa UASD.</div>
        <div className="page-band-decoration">UASD</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {/* Entradas */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
          <h4 style={{ marginBottom: '1.25rem', fontSize: '.9rem', color: 'var(--accent)' }}>Configuración de Créditos</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '.7rem', color: 'var(--muted)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Modalidad</label>
              <select 
                className="form-select" 
                value={modalidad} 
                onChange={(e) => setModalidad(e.target.value)}
                style={{ width: '100%' }}
              >
                <option value="presencial">Presencial</option>
                <option value="semipresencial">Semipresencial</option>
                <option value="virtual">Virtual</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '.7rem', color: 'var(--muted)', marginBottom: '.5rem' }}>CR HT</label>
                <input 
                  type="number" 
                  value={creditos.ht} 
                  onChange={(e) => setCreditos({ ...creditos, ht: e.target.value })}
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '6px', padding: '.6rem', color: 'white', width: '100%', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '.7rem', color: 'var(--muted)', marginBottom: '.5rem' }}>CR HP</label>
                <input 
                  type="number" 
                  value={creditos.hp} 
                  onChange={(e) => setCreditos({ ...creditos, hp: e.target.value })}
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '6px', padding: '.6rem', color: 'white', width: '100%', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '.7rem', color: 'var(--muted)', marginBottom: '.5rem' }}>CR HI</label>
                <input 
                  type="number" 
                  value={creditos.hi} 
                  onChange={(e) => setCreditos({ ...creditos, hi: e.target.value })}
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '6px', padding: '.6rem', color: 'white', width: '100%', outline: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '.9rem', color: 'var(--accent3)' }}>Desglose de Horas</h4>
            <div className={`badge badge-${modalidad.substring(0, 4)}`}>{modalidad}</div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.75rem' }}>
            <thead>
              <tr style={{ background: 'var(--surface2)', color: 'var(--muted)' }}>
                <th style={{ padding: '.6rem .8rem', textAlign: 'left', fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', borderBottom: '1px solid var(--border)' }}>Tipo</th>
                <th style={{ padding: '.6rem .8rem', textAlign: 'left', fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', borderBottom: '1px solid var(--border)' }}>Descripción</th>
                <th style={{ padding: '.6rem .8rem', textAlign: 'right', fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', borderBottom: '1px solid var(--border)' }}>Horas</th>
                <th style={{ padding: '.6rem .8rem', textAlign: 'left', fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', borderBottom: '1px solid var(--border)' }}>%</th>
              </tr>
            </thead>
            <tbody>
              {['HT', 'HP', 'HIV', 'HPV', 'HI'].map(k => {
                if (!result[k]) return null; // hide zeros and undefined
                const pct = result.total ? Math.round(result[k] / result.total * 100) : 0;
                return (
                  <tr key={k}>
                    <td style={{ color: colors[k], padding: '.6rem .8rem', borderBottom: '1px solid var(--border)' }}>{k}</td>
                    <td style={{ padding: '.6rem .8rem', borderBottom: '1px solid var(--border)', color: 'var(--muted)' }}>{labels[k]}</td>
                    <td style={{ textAlign: 'right', color: 'var(--accent)', fontWeight: 600, padding: '.6rem .8rem', borderBottom: '1px solid var(--border)' }}>{result[k]}</td>
                    <td style={{ padding: '.6rem .8rem', borderBottom: '1px solid var(--border)' }}>
                      <div className="progress-bar" style={{ margin: 0, width: '60px' }}>
                        <div className="progress-fill" style={{ width: `${pct}%`, background: colors[k] }}></div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr style={{ color: 'var(--gold)', fontWeight: 700 }}>
                <td colSpan="2" style={{ padding: '.8rem', fontSize: '.9rem' }}>TOTAL ESTIMADO</td>
                <td style={{ textAlign: 'right', padding: '.8rem', fontSize: '.9rem' }} colSpan="2">{result.total} hrs</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
