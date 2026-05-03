import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    appTitle: "Democracy Demystified",
    appSubtitle: "Your interactive guide to understanding the Indian election process. Learn the terms, follow the timeline, explore states, and ask questions.",
    flashcardTitle: "Learn the Terminology",
    flashcardSubtitle: "Click the card to flip",
    tapToSee: "Tap to see definition",
    previous: "Previous",
    next: "Next",
    timelineTitle: "The Election Journey (India)",
    viewProcessFrom: "View process from the perspective of:",
    aVoter: "A Voter",
    aCandidate: "A Candidate",
    asVoter: "As a Voter",
    asCandidate: "As a Candidate",
    stateExplorerTitle: "State-Wise Election Details",
    selectState: "Select a State or UT",
    lokSabhaSeats: "Lok Sabha Seats",
    vidhanSabhaSeats: "Vidhan Sabha Seats",
    rulingParty: "Ruling Party / Alliance",
    nextElection: "Next Expected Assembly Election",
    botStatus: "Online & Ready to Help",
    chatPlaceholder: "Ask about EVM, Voter ID, etc...",
    footer: "© 2026 Election Assistant. Empowering voters through education."
  },
  hi: {
    appTitle: "लोकतंत्र को समझें",
    appSubtitle: "भारतीय चुनाव प्रक्रिया को समझने के लिए आपकी इंटरैक्टिव मार्गदर्शिका। शर्तें सीखें, समयरेखा का पालन करें, राज्यों का पता लगाएं और प्रश्न पूछें।",
    flashcardTitle: "शब्दावली सीखें",
    flashcardSubtitle: "पलटने के लिए कार्ड पर क्लिक करें",
    tapToSee: "परिभाषा देखने के लिए टैप करें",
    previous: "पिछला",
    next: "अगला",
    timelineTitle: "चुनाव यात्रा (भारत)",
    viewProcessFrom: "इस दृष्टिकोण से प्रक्रिया देखें:",
    aVoter: "एक मतदाता",
    aCandidate: "एक उम्मीदवार",
    asVoter: "मतदाता के रूप में",
    asCandidate: "उम्मीदवार के रूप में",
    stateExplorerTitle: "राज्यवार चुनाव विवरण",
    selectState: "राज्य या केंद्र शासित प्रदेश चुनें",
    lokSabhaSeats: "लोकसभा सीटें",
    vidhanSabhaSeats: "विधानसभा सीटें",
    rulingParty: "सत्तारूढ़ दल / गठबंधन",
    nextElection: "अगला संभावित विधानसभा चुनाव",
    botStatus: "ऑनलाइन और मदद के लिए तैयार",
    chatPlaceholder: "EVM, वोटर आईडी आदि के बारे में पूछें...",
    footer: "© 2026 चुनाव सहायक। शिक्षा के माध्यम से मतदाताओं को सशक्त बनाना।"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
