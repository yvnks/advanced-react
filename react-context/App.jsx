import Header from './Header';
import Button from './Button';
import ThemeContext from './hooks/ThemeContext';
import { useState } from 'react';

export default function App() {
  // Set state and pass it down to the children through context...
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') {
        return 'dark';
      }
      if (prevTheme === 'dark') {
        return 'light';
      }
    });
  }

  return (
    <div className={`container ${theme}-theme`}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <Button />
      </ThemeContext.Provider>
    </div>
  );
}
