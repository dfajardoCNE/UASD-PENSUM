import React, { useState } from 'react';
import { PENSUM_DATA } from '../data/pensum';
import { calcularHoras } from '../utils/algorithm';

const PensumTable = () => {
  const [modal, setModal] = useState('presencial');
  const [carrera, setCarrera] = useState('sistemas');

  const badgeLabels = { presencial: 'badge-pres', semipresencial: 'badge-semi', virtual: 'badge-virt' };

  let totHT = 0, totHP = 0, totHIV = 0, totHPV = 0, totHI = 0, totCR = 0, totHRS = 0;

  const rows = PENSUM_DATA.map((a, i) => {
    const r = calcularHoras(a.cHT, a.cHP, a.cHI, modal);
    const totalCR = a.cHT + a.cHP + a.cHI;
    totHT += r.HT; totHP += r.HP; totHIV += r.HIV; totHPV += r.HPV; totHI += r.HI;
    totCR += totalCR; totHRS += r.total;

    return (
      <tr key={a.cod} style={{ borderBottom: '1px solid rgba(30, 45, 66, .7)' }}>
        <td style={{ color: 'var(--muted)', padding: '.55rem .75rem' }}>{i + 1}</td>
        <td style={{ color: 'var(--accent)', fontSize: '.72rem', padding: '.55rem .75rem' }}>{a.cod}</td>
        <td style={{ padding: '.55rem .75rem' }}>{a.nom}</td>
        <td style={{ color: 'var(--muted)', fontSize: '.7rem', padding: '.55rem .75rem' }}>S{a.sem}</td>
        <td style={{ textAlign: 'center', color: 'var(--accent)', padding: '.55rem .75rem' }}>{totalCR}</td>
        <td style={{ textAlign: 'center', color: 'var(--accent)', padding: '.55rem .75rem' }}>{r.HT || '—'}</td>
        <td style={{ textAlign: 'center', color: 'var(--accent)', padding: '.55rem .75rem' }}>{r.HP || '—'}</td>
        <td style={{ textAlign: 'center', color: 'var(--accent)', padding: '.55rem .75rem' }}>{r.HIV || '—'}</td>
        <td style={{ textAlign: 'center', color: 'var(--accent)', padding: '.55rem .75rem' }}>{r.HPV || '—'}</td>
        <td style={{ textAlign: 'center', color: 'var(--accent)', padding: '.55rem .75rem' }}>{r.HI || '—'}</td>
        <td style={{ textAlign: 'center', color: 'var(--gold)', padding: '.55rem .75rem' }}>{r.total}</td>
        <td style={{ padding: '.55rem .75rem' }}>
          <span className={`badge ${badgeLabels[modal]}`} style={{ fontSize: '.58rem' }}>
            {modal.substring(0, 4).toUpperCase()}
          </span>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="page-band">
        <div className="page-title">02 · <span>Diseños</span> — Pensum Demo</div>
        <div className="page-desc">Vista mockup del plan de estudios con horas por asignatura según modalidad. Filtrable por carrera y modalidad.</div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <select className="form-select" value={carrera} onChange={e => setCarrera(e.target.value)} style={{ width: 'auto', minWidth: '200px' }}>
          <option value="sistemas">Ing. en Sistemas</option>
          <option value="administracion">Administración</option>
          <option value="derecho">Derecho</option>
        </select>
        <select className="form-select" value={modal} onChange={e => setModal(e.target.value)} style={{ width: 'auto', minWidth: '180px' }}>
          <option value="presencial">Presencial</option>
          <option value="semipresencial">Semipresencial</option>
          <option value="virtual">Virtual</option>
        </select>
        <div className={`badge ${badgeLabels[modal]}`} style={{ alignSelf: 'center', padding: '.35rem 1rem' }}>
          {modal.toUpperCase()}
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="pensum-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.78rem' }}>
          <thead>
            <tr style={{ background: 'var(--surface2)', color: 'var(--muted)' }}>
              {['#', 'Código', 'Asignatura', 'Sem', 'CR', 'HT', 'HP', 'HIV', 'HPV', 'HI', 'Total', 'Modalidad'].map(h => (
                <th key={h} style={{ padding: '.55rem .75rem', textAlign: 'left', fontSize: '.63rem', textTransform: 'uppercase', letterSpacing: '.1em', borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot>
            <tr style={{ background: 'var(--surface2)' }}>
              <td colSpan="4" style={{ padding: '.55rem .75rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--gold)' }}>TOTALES</td>
              <td style={{ textAlign: 'center', color: 'var(--gold)', padding: '.55rem .75rem' }}>{totCR}</td>
              <td style={{ textAlign: 'center', color: 'var(--gold)', padding: '.55rem .75rem' }}>{totHT || '—'}</td>
              <td style={{ textAlign: 'center', color: 'var(--gold)', padding: '.55rem .75rem' }}>{totHP || '—'}</td>
              <td style={{ textAlign: 'center', color: 'var(--gold)', padding: '.55rem .75rem' }}>{totHIV || '—'}</td>
              <td style={{ textAlign: 'center', color: 'var(--gold)', padding: '.55rem .75rem' }}>{totHPV || '—'}</td>
              <td style={{ textAlign: 'center', color: 'var(--gold)', padding: '.55rem .75rem' }}>{totHI || '—'}</td>
              <td style={{ textAlign: 'center', color: 'var(--gold)', padding: '.55rem .75rem' }}>{totHRS}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default PensumTable;
