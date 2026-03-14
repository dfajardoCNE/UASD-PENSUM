import React from 'react';

const Header = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'diagramas', label: '01 · Diagramas' },
    { id: 'disenos', label: '02 · Diseños' },
    { id: 'codigos', label: '03 · Códigos' },
    { id: 'pruebas', label: '04 · Pruebas' },
    { id: 'calc', label: '∑ Calculadora' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10, 14, 23, .92)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px'
    }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
        <img src="/logo.svg" alt="UASD Logo" style={{ width: '42px', height: '42px' }} />
        <div>
          <div className="logo-text" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem' }}>Plataforma Curricular</div>
          <div className="logo-sub" style={{ color: 'var(--muted)', fontSize: '.7rem', marginTop: '1px' }}>Diseño y Gestión de Planes de Estudio</div>
        </div>
      </div>
      <nav style={{ display: 'flex', gap: '.25rem' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
            style={{
              background: activeTab === tab.id ? 'var(--surface2)' : 'none',
              border: 'none',
              color: activeTab === tab.id ? 'var(--accent)' : 'var(--muted)',
              fontFamily: 'DM Mono, monospace',
              fontSize: '.75rem',
              padding: '.5rem .9rem',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all .2s',
              letterSpacing: '.05em'
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      
      <style>{`
        .nav-btn:hover {
          background: var(--surface2) !important;
          color: var(--text) !important;
        }
        @media(max-width: 600px) {
          header { padding: 0 1rem !important; }
          nav { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
