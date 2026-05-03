import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './InteractiveTimeline.css';
import { Calendar, Users, Megaphone, Box, BarChart3, Award } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    id: 1,
    title: { en: "Notification of Election", hi: "चुनाव की अधिसूचना" },
    icon: <Calendar size={24} />,
    description: {
      en: "The Election Commission of India (ECI) announces the dates for polling and counting, marking the official start of the election process.",
      hi: "भारत निर्वाचन आयोग (ECI) मतदान और मतगणना की तारीखों की घोषणा करता है, जो चुनाव प्रक्रिया की आधिकारिक शुरुआत का प्रतीक है।"
    },
    roleInfo: {
      voter: {
        en: "Check if you are registered on the electoral roll.",
        hi: "जांचें कि आप मतदाता सूची में पंजीकृत हैं या नहीं।"
      },
      candidate: {
        en: "Start preparing nomination papers and gathering proposers.",
        hi: "नामांकन पत्र तैयार करना और प्रस्तावकों को इकट्ठा करना शुरू करें।"
      }
    }
  },
  {
    id: 2,
    title: { en: "Filing of Nominations", hi: "नामांकन दाखिल करना" },
    icon: <Users size={24} />,
    description: {
      en: "Candidates submit their official papers to the Returning Officer to contest in a specific Lok Sabha or Vidhan Sabha constituency.",
      hi: "उम्मीदवार एक विशिष्ट लोकसभा या विधानसभा क्षेत्र में चुनाव लड़ने के लिए रिटर्निंग ऑफिसर को अपने आधिकारिक कागजात जमा करते हैं।"
    },
    roleInfo: {
      voter: {
        en: "Wait to see the final list of contesting candidates.",
        hi: "चुनाव लड़ने वाले उम्मीदवारों की अंतिम सूची देखने के लिए प्रतीक्षा करें।"
      },
      candidate: {
        en: "Submit Form 2A/2B along with the security deposit before the deadline.",
        hi: "समय सीमा से पहले सुरक्षा जमा के साथ फॉर्म 2A/2B जमा करें।"
      }
    }
  },
  {
    id: 3,
    title: { en: "Campaigning", hi: "प्रचार करना" },
    icon: <Megaphone size={24} />,
    description: {
      en: "Political parties hold rallies and reach out to voters. The Model Code of Conduct is strictly enforced by the ECI.",
      hi: "राजनीतिक दल रैलियां करते हैं और मतदाताओं तक पहुंचते हैं। ईसीआई द्वारा आदर्श आचार संहिता को सख्ती से लागू किया जाता है।"
    },
    roleInfo: {
      voter: {
        en: "Evaluate candidates based on their manifestos and public record.",
        hi: "उम्मीदवारों का मूल्यांकन उनके घोषणापत्र और सार्वजनिक रिकॉर्ड के आधार पर करें।"
      },
      candidate: {
        en: "Organize rallies and public meetings while strictly adhering to the Model Code of Conduct.",
        hi: "आदर्श आचार संहिता का कड़ाई से पालन करते हुए रैलियां और जनसभाएं आयोजित करें।"
      }
    }
  },
  {
    id: 4,
    title: { en: "Polling Day", hi: "मतदान का दिन" },
    icon: <Box size={24} />,
    description: {
      en: "Voters cast their votes using Electronic Voting Machines (EVMs) equipped with VVPATs at designated polling booths.",
      hi: "मतदाता निर्दिष्ट मतदान केंद्रों पर VVPAT से लैस इलेक्ट्रॉनिक वोटिंग मशीनों (EVM) का उपयोग करके अपना वोट डालते हैं।"
    },
    roleInfo: {
      voter: {
        en: "Carry your EPIC (Voter ID card) or other valid ID and cast your vote.",
        hi: "अपना EPIC (वोटर आईडी कार्ड) या अन्य वैध आईडी ले जाएं और अपना वोट डालें।"
      },
      candidate: {
        en: "Deploy polling agents to booths to ensure fair voting.",
        hi: "निष्पक्ष मतदान सुनिश्चित करने के लिए बूथों पर मतदान एजेंटों को तैनात करें।"
      }
    }
  },
  {
    id: 5,
    title: { en: "Counting & Results", hi: "मतगणना और परिणाम" },
    icon: <BarChart3 size={24} />,
    description: {
      en: "EVMs are opened, and votes are counted. The Returning Officer officially declares the winner for the constituency.",
      hi: "ईवीएम खोली जाती हैं, और वोटों की गिनती की जाती है। रिटर्निंग ऑफिसर आधिकारिक तौर पर निर्वाचन क्षेत्र के विजेता की घोषणा करता है।"
    },
    roleInfo: {
      voter: {
        en: "Follow the news or official ECI portal for real-time trends.",
        hi: "वास्तविक समय के रुझानों के लिए समाचार या आधिकारिक ईसीआई पोर्टल का पालन करें।"
      },
      candidate: {
        en: "If won, receive the Certificate of Election.",
        hi: "यदि जीतते हैं, तो चुनाव का प्रमाण पत्र प्राप्त करें।"
      }
    }
  }
];

export default function InteractiveTimeline() {
  const { t, language } = useLanguage();
  const [activeRole, setActiveRole] = useState('voter');

  return (
    <div className="timeline-container animate-fade-in">
      <h2>{t('timelineTitle')}</h2>
      
      <div className="role-selector glass-panel">
        <p>{t('viewProcessFrom')}</p>
        <div className="role-buttons">
          <button 
            className={`btn ${activeRole === 'voter' ? '' : 'btn-secondary'}`}
            onClick={() => setActiveRole('voter')}
          >
            {t('aVoter')}
          </button>
          <button 
            className={`btn ${activeRole === 'candidate' ? '' : 'btn-secondary'}`}
            onClick={() => setActiveRole('candidate')}
          >
            {t('aCandidate')}
          </button>
        </div>
      </div>

      <div className="timeline">
        {TIMELINE_STEPS.map((step, index) => (
          <div key={step.id} className="timeline-item">
            <div className="timeline-marker">
              <div className="icon-wrapper">
                {step.icon}
              </div>
              {index !== TIMELINE_STEPS.length - 1 && <div className="line"></div>}
            </div>
            
            <div className="timeline-content glass-panel">
              <h3>{step.title[language]}</h3>
              <p className="general-desc">{step.description[language]}</p>
              
              <div className="role-specific-info">
                <strong>{activeRole === 'voter' ? t('asVoter') : t('asCandidate')}:</strong>
                <p>{step.roleInfo[activeRole][language]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
