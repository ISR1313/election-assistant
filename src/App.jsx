import React from 'react'
import FlashcardDeck from './components/FlashcardDeck'
import InteractiveTimeline from './components/InteractiveTimeline'
import AssistantChat from './components/AssistantChat'
import StateExplorer from './components/StateExplorer'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { Vote, Languages } from 'lucide-react'

function AppContent() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem 0' }}>
        <button className="btn btn-secondary" onClick={toggleLanguage} style={{ gap: '0.5rem' }}>
          <Languages size={18} />
          {language === 'en' ? 'हिंदी में देखें' : 'View in English'}
        </button>
      </div>

      <header style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '1rem' }} className="animate-fade-in">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div style={{ background: 'var(--accent-primary)', padding: '1rem', borderRadius: '50%', boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}>
            <Vote size={48} color="white" />
          </div>
        </div>
        <h1>{t('appTitle')}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          {t('appSubtitle')}
        </p>
      </header>

      <main>
        <section>
          <StateExplorer />
        </section>

        <section>
          <FlashcardDeck />
        </section>

        <section>
          <InteractiveTimeline />
        </section>

        <section>
          <AssistantChat />
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p>{t('footer')}</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
