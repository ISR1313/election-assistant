import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './StateExplorer.css';
import { MapPin } from 'lucide-react';

const INDIAN_STATES = [
  { id: 'UP', name: 'Uttar Pradesh', nameHi: 'उत्तर प्रदेश', ls: 80, vs: 403, ruling: 'BJP/NDA', rulingHi: 'भाजपा/राजग', next: '2027' },
  { id: 'MH', name: 'Maharashtra', nameHi: 'महाराष्ट्र', ls: 48, vs: 288, ruling: 'Shiv Sena/NDA', rulingHi: 'शिवसेना/राजग', next: '2024' },
  { id: 'WB', name: 'West Bengal', nameHi: 'पश्चिम बंगाल', ls: 42, vs: 294, ruling: 'TMC', rulingHi: 'टीएमसी', next: '2026' },
  { id: 'BR', name: 'Bihar', nameHi: 'बिहार', ls: 40, vs: 243, ruling: 'JDU/NDA', rulingHi: 'जद(यू)/राजग', next: '2025' },
  { id: 'TN', name: 'Tamil Nadu', nameHi: 'तमिलनाडु', ls: 39, vs: 234, ruling: 'DMK/INDIA', rulingHi: 'द्रमुक/इंडिया', next: '2026' },
  { id: 'DL', name: 'Delhi', nameHi: 'दिल्ली', ls: 7, vs: 70, ruling: 'AAP', rulingHi: 'आप', next: '2025' }
];

export default function StateExplorer() {
  const { t, language } = useLanguage();
  const [selectedState, setSelectedState] = useState(INDIAN_STATES[0]);

  const handleChange = (e) => {
    const stateId = e.target.value;
    const state = INDIAN_STATES.find(s => s.id === stateId);
    setSelectedState(state);
  };

  return (
    <div className="state-explorer-container animate-fade-in">
      <h2>{t('stateExplorerTitle')}</h2>
      
      <div className="selector-wrapper">
        <MapPin className="map-icon" />
        <select 
          className="state-select" 
          value={selectedState.id} 
          onChange={handleChange}
        >
          {INDIAN_STATES.map(s => (
            <option key={s.id} value={s.id}>
              {language === 'en' ? s.name : s.nameHi}
            </option>
          ))}
        </select>
      </div>

      <div className="state-card glass-panel">
        <h3 className="state-name">{language === 'en' ? selectedState.name : selectedState.nameHi}</h3>
        
        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-label">{t('lokSabhaSeats')}</span>
            <span className="stat-value">{selectedState.ls}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">{t('vidhanSabhaSeats')}</span>
            <span className="stat-value">{selectedState.vs}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">{t('rulingParty')}</span>
            <span className="stat-value party">{language === 'en' ? selectedState.ruling : selectedState.rulingHi}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">{t('nextElection')}</span>
            <span className="stat-value date">{selectedState.next}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
