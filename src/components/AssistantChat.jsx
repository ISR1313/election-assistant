import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './AssistantChat.css';

const KNOWLEDGE_BASE = {
  "voter id": {
    en: "You can apply for a Voter ID online through the NVSP (National Voters' Service Portal) or the Voter Helpline App. You need proof of age and residence.",
    hi: "आप NVSP (राष्ट्रीय मतदाता सेवा पोर्टल) या वोटर हेल्पलाइन ऐप के माध्यम से ऑनलाइन वोटर आईडी के लिए आवेदन कर सकते हैं। आपको आयु और निवास प्रमाण की आवश्यकता है।"
  },
  "evm": {
    en: "An EVM (Electronic Voting Machine) records votes. In India, it consists of a Control Unit with the Presiding Officer and a Balloting Unit in the voting compartment.",
    hi: "ईवीएम (इलेक्ट्रॉनिक वोटिंग मशीन) वोट रिकॉर्ड करती है। भारत में, इसमें पीठासीन अधिकारी के पास एक कंट्रोल यूनिट और वोटिंग डिब्बे में एक बैलेटिंग यूनिट होती है।"
  },
  "vvpat": {
    en: "VVPAT stands for Voter Verifiable Paper Audit Trail. It allows you to verify your vote was cast correctly by printing a slip of paper visible for 7 seconds.",
    hi: "VVPAT का अर्थ वोटर वेरिफायबल पेपर ऑडिट ट्रेल है। यह आपको 7 सेकंड के लिए दिखाई देने वाली कागज की पर्ची को प्रिंट करके यह सत्यापित करने की अनुमति देता है कि आपका वोट सही ढंग से डाला गया था।"
  },
  "model code": {
    en: "The Model Code of Conduct (MCC) is a set of guidelines by the Election Commission of India to regulate political parties and candidates, effective from the date election schedules are announced.",
    hi: "आदर्श आचार संहिता (MCC) राजनीतिक दलों और उम्मीदवारों को विनियमित करने के लिए भारत निर्वाचन आयोग द्वारा दिशानिर्देशों का एक सेट है, जो चुनाव कार्यक्रम की घोषणा की तारीख से प्रभावी है।"
  },
  "lok sabha": {
    en: "The Lok Sabha is the lower house of India's Parliament. Members of Parliament (MPs) are directly elected by the citizens of India to represent their constituencies.",
    hi: "लोकसभा भारत की संसद का निचला सदन है। संसद सदस्यों (सांसदों) को सीधे भारत के नागरिकों द्वारा अपने निर्वाचन क्षेत्रों का प्रतिनिधित्व करने के लिए चुना जाता है।"
  },
  "vidhan sabha": {
    en: "The Vidhan Sabha is the State Legislative Assembly. Members of Legislative Assembly (MLAs) are elected to form the state government.",
    hi: "विधानसभा राज्य विधानसभा है। राज्य सरकार बनाने के लिए विधान सभा सदस्यों (विधायकों) का चुनाव किया जाता है।"
  },
  "default": {
    en: "I'm the Election Assistant bot. Ask me about EVMs, Voter IDs, Lok Sabha, Vidhan Sabha, or the Model Code of Conduct!",
    hi: "मैं चुनाव सहायक बॉट हूँ। मुझसे ईवीएम, वोटर आईडी, लोकसभा, विधानसभा या आदर्श आचार संहिता के बारे में पूछें!"
  }
};

export default function AssistantChat() {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState([
    { id: 1, text: KNOWLEDGE_BASE["default"][language], sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Update greeting when language changes
  useEffect(() => {
    setMessages([{ id: Date.now(), text: KNOWLEDGE_BASE["default"][language], sender: 'bot' }]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response delay
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let responseText = KNOWLEDGE_BASE["default"][language];
      
      for (const [key, value] of Object.entries(KNOWLEDGE_BASE)) {
        if (lowerInput.includes(key) && key !== "default") {
          responseText = value[language];
          break;
        }
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: responseText, sender: 'bot' }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="chat-container glass-panel animate-fade-in">
      <div className="chat-header">
        <Bot className="bot-icon" />
        <div>
          <h2>Election AI Assistant</h2>
          <span className="status">{t('botStatus')}</span>
        </div>
      </div>
      
      <div className="messages-area">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
            <div className={`message-bubble ${msg.sender}`}>
              {msg.sender === 'bot' ? <Bot size={16} className="msg-icon" /> : <User size={16} className="msg-icon" />}
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-input-area" onSubmit={handleSend}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('chatPlaceholder')}
          className="chat-input"
        />
        <button type="submit" className="send-btn" disabled={!input.trim()}>
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}
