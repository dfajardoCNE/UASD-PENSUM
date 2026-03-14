export const CR = { HT: 15, HP: 30, HI: 45 };

/**
 * UASD — Algoritmo de Cálculo de Horas por Crédito
 * Accepts two signatures:
 *  - calcularHoras(cHT, cHP, cHI, modal)
 *  - calcularHoras(asignaturaObj, modal) where object can use keys: creditosHT/creditosHP/creditosHI or cHT/cHP/cHI
 * @returns {object} Desglose de horas
 */
export function calcularHoras(a, b, c, d) {
  // normalize arguments to (cHT, cHP, cHI, modal)
  let cHT = 0, cHP = 0, cHI = 0, modal = 'presencial';

  if (typeof a === 'object' && a !== null && typeof b === 'string') {
    // signature: calcularHoras(obj, modal)
    const obj = a;
    cHT = Number(obj.creditosHT ?? obj.creditos_HT ?? obj.cHT ?? obj.cHTo ?? obj.c_ht ?? 0) || 0;
    cHP = Number(obj.creditosHP ?? obj.creditos_HP ?? obj.cHP ?? obj.c_hp ?? 0) || 0;
    cHI = Number(obj.creditosHI ?? obj.creditos_HI ?? obj.cHI ?? obj.c_hi ?? 0) || 0;
    modal = b;
  } else if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    // signature: calcularHoras(cHT, cHP, cHI, modal)
    cHT = Number(a) || 0;
    cHP = Number(b) || 0;
    cHI = Number(c) || 0;
    modal = d || 'presencial';
  } else {
    // fallback: try to parse any provided values
    cHT = Number(a?.cHT ?? a?.creditosHT ?? 0) || 0;
    cHP = Number(a?.cHP ?? a?.creditosHP ?? 0) || 0;
    cHI = Number(a?.cHI ?? a?.creditosHI ?? 0) || 0;
    modal = b || 'presencial';
  }

  let r = { HT: 0, HP: 0, HIV: 0, HPV: 0, HI: 0 };

  if (modal === 'presencial') {
    r.HT = cHT * CR.HT;
    r.HP = cHP * CR.HP;
    r.HI = cHI * CR.HI;
  } else if (modal === 'semipresencial') {
    r.HT = cHT * CR.HT * 0.5;
    r.HP = cHP * CR.HP * 0.5;
    r.HIV = cHT * CR.HT * 0.5;
    r.HI = cHI * CR.HI;
  } else {
    r.HIV = cHT * CR.HT;
    r.HPV = cHP * CR.HP;
    r.HI = cHI * CR.HI;
  }

  r.total = r.HT + r.HP + r.HIV + r.HPV + r.HI;
  return r;
}
