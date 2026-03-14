export const CR = { HT: 15, HP: 30, HI: 45 };

/**
 * UASD — Algoritmo de Cálculo de Horas por Crédito
 * @param {number} cHT - Créditos Teóricos
 * @param {number} cHP - Créditos Prácticos
 * @param {number} cHI - Créditos Investigación
 * @param {'presencial'|'semipresencial'|'virtual'} modal - Modalidad
 * @returns {object} Desglose de horas
 */
export function calcularHoras(cHT, cHP, cHI, modal) {
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
