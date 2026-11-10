import { useContext } from 'react';
import ThemeContext from './hooks/ThemeContext';

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${theme}-theme`}>
      <h1>{`${theme[0].toUpperCase() + theme.slice(1)}`} Theme</h1>
    </header>
  );
}
