import { useContext } from 'react';
import ThemeContext from './hooks/ThemeContext';

export default function Button() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => toggleTheme()} className={`${theme}-theme`}>
      Switch Theme
    </button>
  );
}
