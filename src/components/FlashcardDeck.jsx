import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './FlashcardDeck.css';

const ELECTION_TERMS = [
  {
    id: 1,
    term: { en: "VVPAT", hi: "VVPAT (वीवीपैट)" },
    definition: { 
      en: "Voter Verifiable Paper Audit Trail. A slip generated to let voters verify their vote was cast correctly.",
      hi: "वोटर वेरिफायबल पेपर ऑडिट ट्रेल। एक पर्ची जो मतदाताओं को यह सत्यापित करने देती है कि उनका वोट सही ढंग से डाला गया था।"
    }
  },
  {
    id: 2,
    term: { en: "Model Code of Conduct", hi: "आदर्श आचार संहिता" },
    definition: {
      en: "Guidelines issued by the Election Commission to regulate political parties and candidates prior to elections.",
      hi: "चुनाव से पहले राजनीतिक दलों और उम्मीदवारों को विनियमित करने के लिए चुनाव आयोग द्वारा जारी दिशानिर्देश।"
    }
  },
  {
    id: 3,
    term: { en: "EVM", hi: "EVM (ईवीएम)" },
    definition: {
      en: "Electronic Voting Machine. Used to record and count votes electronically instead of using ballot papers.",
      hi: "इलेक्ट्रॉनिक वोटिंग मशीन। मतपत्रों का उपयोग करने के बजाय इलेक्ट्रॉनिक रूप से वोट रिकॉर्ड करने और गिनने के लिए उपयोग किया जाता है।"
    }
  },
  {
    id: 4,
    term: { en: "Constituency", hi: "निर्वाचन क्षेत्र" },
    definition: {
      en: "A specific geographical area that a representative is elected to represent in a legislative body.",
      hi: "एक विशिष्ट भौगोलिक क्षेत्र जिसे एक प्रतिनिधि विधायी निकाय में प्रतिनिधित्व करने के लिए चुना जाता है।"
    }
  },
  {
    id: 5,
    term: { en: "NOTA", hi: "NOTA (नोटा)" },
    definition: {
      en: "None Of The Above. Allows voters to officially register a vote of rejection for all contesting candidates.",
      hi: "इनमें से कोई नहीं (None Of The Above)। यह मतदाताओं को सभी चुनाव लड़ने वाले उम्मीदवारों के लिए आधिकारिक तौर पर अस्वीकृति का वोट दर्ज करने की अनुमति देता है।"
    }
  }
];

export default function FlashcardDeck() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % ELECTION_TERMS.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + ELECTION_TERMS.length) % ELECTION_TERMS.length);
    }, 150);
  };

  const currentCard = ELECTION_TERMS[currentIndex];

  return (
    <div className="flashcard-container animate-fade-in">
      <h2>{t('flashcardTitle')}</h2>
      <p className="subtitle">{t('flashcardSubtitle')}</p>
      
      <div className="scene">
        <div 
          className={`card ${isFlipped ? 'is-flipped' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="card__face card__face--front glass-panel">
            <h3>{currentCard.term[language]}</h3>
            <span className="flip-hint">{t('tapToSee')}</span>
          </div>
          <div className="card__face card__face--back glass-panel">
            <p>{currentCard.definition[language]}</p>
          </div>
        </div>
      </div>

      <div className="controls">
        <button className="btn btn-secondary" onClick={handlePrev}>{t('previous')}</button>
        <span className="progress">{currentIndex + 1} / {ELECTION_TERMS.length}</span>
        <button className="btn" onClick={handleNext}>{t('next')}</button>
      </div>
    </div>
  );
}
