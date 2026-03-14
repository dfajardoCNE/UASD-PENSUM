import React, { useState } from 'react';
import Header from './components/Header';
import Diagrams from './components/Diagrams';
import PensumTable from './components/PensumTable';
import CodeViewer from './components/CodeViewer';
import TestSuite from './components/TestSuite';
import Calculator from './components/Calculator';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('diagramas');

  const renderContent = () => {
    switch (activeTab) {
      case 'diagramas': return <Diagrams />;
      case 'disenos': return <PensumTable />;
      case 'codigos': return <CodeViewer />;
      case 'pruebas': return <TestSuite />;
      case 'calc': return <Calculator />;
      default: return <Diagrams />;
    }
  };

  return (
    <div className="app-container">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main style={{
        position: 'relative', zIndex: 1,
        maxWdith: '1280px', margin: '0 auto',
        padding: '2rem'
      }}>
        <div className="tab-content">
          {renderContent()}
        </div>
      </main>

      <style>{`
        .app-container {
          min-height: 100vh;
        }
        main {
          max-width: 1280px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

export default App;
