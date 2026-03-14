import React, { useState, useEffect } from 'react';
import { calcularHoras } from '../utils/algorithm';

const Calculator = () => {
  const [params, setParams] = useState({
    nombre: 'Programación I',
    codigo: 'SIS101',
    modal: 'presencial',
    cHT: 2,
    cHP: 1,
    cHI: 0
  });

  const [result, setResult] = useState(null);

  const handleCalc = () => {
    const r = calcularHoras(params.cHT, params.cHP, params.cHI, params.modal);
    setResult(r);
  };

  useEffect(() => {
    handleCalc();
  }, []);

  const labels = {
    HT: 'Horas Teóricas',
    HP: 'Horas Prácticas',
    HIV: 'Horas Interac. Virtual',
    HPV: 'Horas Práct. Virtuales',
    HI: 'Horas Investigación'
  };

  const colors = {
    HT: '#7fff6b',
    HP: '#7fff6b',
    HIV: '#00c8ff',
    HPV: '#00c8ff',
    HI: '#f5c842'
  };

  const badgeClass = {
    presencial: 'badge-pres',
    semipresencial: 'badge-semi',
    virtual: 'badge-virt'
  }[params.modal];

  return (
    <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
      <div className="calc-panel" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.75rem' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--accent)' }}>
          Parámetros de la Asignatura
        </h3>

        <div className="form-row" style={{ marginBottom: '1rem' }}>
          <label className="form-label" style={{ display: 'block', fontSize: '.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.4rem' }}>
            Nombre de la Asignatura
          </label>
          <input
            className="form-input"
            type="text"
            value={params.nombre}
            onChange={e => setParams({ ...params, nombre: e.target.value })}
            style={{ width: '100%', padding: '.6rem .9rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontFamily: 'DM Mono, monospace', fontSize: '.85rem', outline: 'none' }}
          />
        </div>

        <div className="form-row" style={{ marginBottom: '1rem' }}>
          <label className="form-label" style={{ display: 'block', fontSize: '.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.4rem' }}>
            Código
          </label>
          <input
            className="form-input"
            type="text"
            value={params.codigo}
            onChange={e => setParams({ ...params, codigo: e.target.value })}
            style={{ width: '100%', padding: '.6rem .9rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontFamily: 'DM Mono, monospace', fontSize: '.85rem', outline: 'none' }}
          />
        </div>

        <div className="form-row" style={{ marginBottom: '1rem' }}>
          <label className="form-label" style={{ display: 'block', fontSize: '.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.4rem' }}>
            Modalidad
          </label>
          <select
            className="form-select"
            value={params.modal}
            onChange={e => setParams({ ...params, modal: e.target.value })}
            style={{ width: '100%', padding: '.6rem .9rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontFamily: 'DM Mono, monospace', fontSize: '.85rem', outline: 'none' }}
          >
            <option value="presencial">Presencial</option>
            <option value="semipresencial">Semipresencial</option>
            <option value="virtual">Virtual</option>
          </select>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.75rem', marginBottom: '1rem' }}>
          {['cHT', 'cHP', 'cHI'].map(key => (
            <div key={key} className="form-row" style={{ margin: 0 }}>
              <label className="form-label" style={{ display: 'block', fontSize: '.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.4rem' }}>
                Créd. {key.slice(1)}
              </label>
              <input
                className="form-input"
                type="number"
                min="0" max="10" step="0.5"
                value={params[key]}
                onChange={e => setParams({ ...params, [key]: +e.target.value })}
                style={{ width: '100%', padding: '.6rem .9rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text)', fontFamily: 'DM Mono, monospace', fontSize: '.85rem', outline: 'none' }}
              />
            </div>
          ))}
        </div>

        <button
          className="btn-calc"
          onClick={handleCalc}
          style={{ width: '100%', padding: '.75rem', background: 'linear-gradient(135deg, var(--accent), #0077cc)', border: 'none', borderRadius: '8px', color: '#fff', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '.85rem', cursor: 'pointer', letterSpacing: '.05em', transition: 'all .2s' }}
        >
          Calcular Horas
        </button>
      </div>

      <div className="calc-panel" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.75rem' }}>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--accent)' }}>
          Resultado del Cálculo
        </h3>
        
        {result ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>{params.codigo} — {params.nombre}</div>
                <div style={{ color: 'var(--muted)', fontSize: '.72rem' }}>Total: {params.cHT + params.cHP + params.cHI} crédito(s)</div>
              </div>
              <span className={`badge ${badgeClass}`}>{params.modal.toUpperCase()}</span>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.8rem', marginTop: '1rem' }}>
              <thead>
                <tr style={{ background: 'var(--surface2)', color: 'var(--muted)' }}>
                  <th style={{ padding: '.6rem .8rem', textAlign: 'left', fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', borderBottom: '1px solid var(--border)' }}>Tipo</th>
                  <th style={{ padding: '.6rem .8rem', textAlign: 'left', fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', borderBottom: '1px solid var(--border)' }}>Descripción</th>
                  <th style={{ padding: '.6rem .8rem', textAlign: 'right', fontSize: '.65rem', textTransform: 'uppercase', letterSpacing: '.1em', borderBottom: '1px solid var(--border)' }}>Horas</th>
                </tr>
              </thead>
              <tbody>
                {['HT', 'HP', 'HIV', 'HPV', 'HI'].map(k => result[k] > 0 && (
                  <tr key={k}>
                    <td style={{ color: colors[k], padding: '.6rem .8rem', borderBottom: '1px solid var(--border)' }}>{k}</td>
                    <td style={{ padding: '.6rem .8rem', borderBottom: '1px solid var(--border)' }}>{labels[k]}</td>
                    <td style={{ textAlign: 'right', color: 'var(--accent)', fontWeight: 500, padding: '.6rem .8rem', borderBottom: '1px solid var(--border)' }}>{result[k]}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{ color: 'var(--gold)', fontWeight: 600 }}>
                  <td colSpan="2" style={{ padding: '.6rem .8rem' }}>TOTAL HORAS</td>
                  <td style={{ textAlign: 'right', padding: '.6rem .8rem' }}>{result.total} hrs</td>
                </tr>
              </tfoot>
            </table>

            <div className="chips" style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem', marginTop: '1rem' }}>
              {['HT', 'HP', 'HIV', 'HPV', 'HI'].map(k => (
                <div key={k} className="chip" style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '20px', padding: '.3rem .8rem', fontSize: '.72rem' }}>
                  {k} <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{result[k]}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ color: 'var(--muted)', fontSize: '.8rem', textAlign: 'center', padding: '2rem 0' }}>
            Ingrese los datos y presione Calcular
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
