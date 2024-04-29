import React, { useContext, createContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/modules/themes.scss';
import Button from './components/Button';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';

// Create a Theme Context
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
}

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const {
    t,
    i18n: {},
  } = useTranslation();

  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ro' : 'en';
    i18n.changeLanguage(newLanguage);

    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts[0] === 'en' || pathParts[0] === 'ro') {
      pathParts[0] = newLanguage; // Replace the language part if it exists
    } else {
      pathParts.unshift(newLanguage); // Prepend the new language if it doesn't
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`container ${theme}`}>
        <p
          style={{
            textAlign: 'left',
            marginLeft: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Button
            variant="secondary"
            onClick={handleChangeLanguage}
            style={{ background: '#e6e6e6' }}
          >
            {i18n.language === 'en' ? 'en' : 'ro'}
          </Button>
          <ThemeToggle /> {/* Theme toggle switch */}
        </p>{' '}
        {/* Wrap the routing in ThemeProvider */}
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </div>
    </ThemeContext.Provider>
  );
}
