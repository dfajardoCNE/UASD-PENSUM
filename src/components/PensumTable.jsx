import React, { useState } from 'react';
import { PENSUM_DATA } from '../data/pensum';
import { calcularHoras } from '../utils/algorithm';

const PensumTable = () => {
  const [modalidad, setModalidad] = useState('presencial');

  // PENSUM_DATA demo doesn't include a `carrera` field — show the demo list directly
  const filteredData = PENSUM_DATA;

  const calculateTotals = () => {
    return filteredData.reduce((acc, current) => {
      const horas = calcularHoras(current, modalidad);
      acc.HT += horas.HT;
      acc.HP += horas.HP;
      acc.HIV += horas.HIV;
      acc.HPV += horas.HPV;
      acc.HI += horas.HI;
      acc.total += horas.total;
      // data uses cHT/cHP/cHI
      acc.creditos += (Number(current.cHT || 0) + Number(current.cHP || 0) + Number(current.cHI || 0));
      return acc;
    }, { HT: 0, HP: 0, HIV: 0, HPV: 0, HI: 0, total: 0, creditos: 0 });
  };

  const totals = calculateTotals();

  return (
    <div>
      {/* 02 · Diseños — Pensum Demo */}
      <div className="page-band">
        <div className="page-title">
          02 · <span>Diseños</span> — Pensum Demo
        </div>
        <div className="page-desc">
          Vista mockup del plan de estudios con horas por asignatura según modalidad. Filtrable por carrera y modalidad.
        </div>
        <div className="page-band-decoration">UASD</div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <select 
          className="form-select" 
          value={'sistemas'} 
          onChange={() => {}}
          style={{ width: 'auto', minWidth: '200px' }}
        >
          <option value="sistemas">Ing. en Sistemas</option>
          <option value="administracion">Administración</option>
          <option value="derecho">Derecho</option>
        </select>

        <select 
          className="form-select" 
          value={modalidad} 
          onChange={(e) => setModalidad(e.target.value)}
          style={{ width: 'auto', minWidth: '180px' }}
        >
          <option value="presencial">Presencial</option>
          <option value="semipresencial">Semipresencial</option>
          <option value="virtual">Virtual</option>
        </select>

        <div className={`badge badge-${modalidad.substring(0, 4)}`} style={{ alignSelf: 'center', padding: '.35rem 1rem' }}>
          {modalidad.toUpperCase()}
        </div>
      </div>

      <div style={{ overflowX: 'auto', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
        <table className="pensum-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.75rem' }}>
          <thead>
            <tr style={{ background: 'var(--surface2)', color: 'var(--muted)', textAlign: 'left' }}>
              <th style={{ padding: '.8rem' }}>#</th>
              <th style={{ padding: '.8rem' }}>Código</th>
              <th style={{ padding: '.8rem' }}>Asignatura</th>
              <th style={{ padding: '.8rem' }}>Sem</th>
              <th style={{ padding: '.8rem' }}>CR</th>
              <th className="tooltip" data-tip="Horas Teóricas" style={{ padding: '.8rem' }}>HT</th>
              <th className="tooltip" data-tip="Horas Prácticas" style={{ padding: '.8rem' }}>HP</th>
              <th className="tooltip" data-tip="Horas Interacción Virtual" style={{ padding: '.8rem' }}>HIV</th>
              <th className="tooltip" data-tip="Horas Prácticas Virtuales" style={{ padding: '.8rem' }}>HPV</th>
              <th className="tooltip" data-tip="Horas Investigación" style={{ padding: '.8rem' }}>HI</th>
              <th style={{ padding: '.8rem' }}>Total hrs</th>
              <th style={{ padding: '.8rem' }}>Modalidad</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((d, i) => {
              const h = calcularHoras(d, modalidad);
              return (
                <tr key={d.codigo} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '.8rem', color: 'var(--muted)' }}>{i + 1}</td>
                  <td style={{ padding: '.8rem', fontWeight: 600 }}>{d.cod}</td>
                  <td style={{ padding: '.8rem' }}>{d.nom}</td>
                  <td style={{ padding: '.8rem' }}>{d.sem}°</td>
                  <td style={{ padding: '.8rem', color: 'var(--gold)', fontWeight: 600 }}>
                    {Number(d.cHT || 0) + Number(d.cHP || 0) + Number(d.cHI || 0)}
                  </td>
                  <td style={{ padding: '.8rem' }}>{h.HT || '—'}</td>
                  <td style={{ padding: '.8rem' }}>{h.HP || '—'}</td>
                  <td style={{ padding: '.8rem' }}>{h.HIV || '—'}</td>
                  <td style={{ padding: '.8rem' }}>{h.HPV || '—'}</td>
                  <td style={{ padding: '.8rem' }}>{h.HI || '—'}</td>
                  <td style={{ padding: '.8rem', color: 'var(--accent)', fontWeight: 600 }}>{h.total}</td>
                  <td style={{ padding: '.8rem' }}>
                    <span className={`badge badge-${modalidad.substring(0, 4)}`}>{modalidad}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr style={{ background: 'var(--surface2)', color: 'var(--gold)', fontWeight: 700 }}>
              <td colSpan="4" style={{ padding: '1rem', textAlign: 'right' }}>TOTALES</td>
              <td style={{ padding: '1rem' }}>{totals.creditos}</td>
              <td style={{ padding: '1rem' }}>{totals.HT}</td>
              <td style={{ padding: '1rem' }}>{totals.HP}</td>
              <td style={{ padding: '1rem' }}>{totals.HIV}</td>
              <td style={{ padding: '1rem' }}>{totals.HPV}</td>
              <td style={{ padding: '1rem' }}>{totals.HI}</td>
              <td style={{ padding: '1rem', color: 'var(--accent)' }}>{totals.total} hrs</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default PensumTable;
