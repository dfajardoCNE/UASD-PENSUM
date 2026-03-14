import React, { useState } from 'react';
import { calcularHoras } from '../utils/algorithm';

const TestSuite = () => {
  const [results, setResults] = useState(null);

  const TEST_CASES = [
    {
      name: 'CR Presencial — 1 crédito teórico',
      desc: '1 créd HT en presencial → 15 HT, 0 HP, 0 HIV, total=15',
      fn: () => {
        const r = calcularHoras(1, 0, 0, 'presencial');
        return r.HT === 15 && r.HP === 0 && r.HIV === 0 && r.total === 15;
      }
    },
    {
      name: 'CR Virtual — 2HT+1HP → solo HIV+HPV',
      desc: 'Virtual no debe tener HT ni HP físicas',
      fn: () => {
        const r = calcularHoras(2, 1, 0, 'virtual');
        return r.HT === 0 && r.HP === 0 && r.HIV === 30 && r.HPV === 30;
      }
    },
    {
      name: 'Total horas — suma coherente',
      desc: 'total == HT+HP+HIV+HPV+HI',
      fn: () => {
        const r = calcularHoras(2, 1, 1, 'semipresencial');
        return r.total === r.HT + r.HP + r.HIV + r.HPV + r.HI;
      }
    }
  ];

  const handleRun = () => {
    const res = TEST_CASES.map(t => {
      try { return t.fn(); } catch { return false; }
    });
    setResults(res);
  };

  const passCount = results ? results.filter(r => r).length : 0;
  const failCount = results ? results.length - passCount : 0;

  return (
    <div>
      <div className="page-band">
        <div className="page-title">04 · <span>Pruebas</span> — Suite de Tests</div>
        <div className="page-desc">Casos de prueba unitarios para el algoritmo de cálculo de horas/créditos.</div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <button
          className="btn-calc"
          onClick={handleRun}
          style={{ width: 'auto', padding: '.55rem 1.4rem' }}
        >
          ▶ Ejecutar Tests
        </button>
        <div style={{ fontSize: '.8rem', color: 'var(--muted)' }}>
          {results ? (
            <>
              <span style={{ color: 'var(--accent3)' }}>{passCount} pasaron</span> |{' '}
              <span style={{ color: '#ff4444' }}>{failCount} fallaron</span> de {TEST_CASES.length}
            </>
          ) : '— no ejecutados —'}
        </div>
      </div>

      <div className="test-suite" style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
        {TEST_CASES.map((t, i) => {
          const ok = results ? results[i] : null;
          const statusClass = ok === true ? 'pass' : ok === false ? 'fail' : 'pending';
          const icon = ok === true ? '✅' : ok === false ? '❌' : '⏳';
          
          return (
            <div key={i} className={`test-case ${statusClass}`} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '10px', padding: '1.1rem 1.25rem',
              display: 'flex', alignItems: 'flex-start', gap: '1rem',
              borderLeft: `3px solid ${ok === true ? 'var(--accent3)' : ok === false ? '#ff4444' : 'var(--gold)'}`
            }}>
              <div style={{ fontSize: '1rem', flexShrink: 0 }}>{icon}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '.85rem' }}>{t.name}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: '.25rem' }}>{t.desc}</div>
                {ok !== null && (
                  <div style={{ marginTop: '.5rem', fontSize: '.72rem', color: ok ? 'var(--accent3)' : '#ff6b6b' }}>
                    {ok ? '→ PASS' : '→ FAIL'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestSuite;
