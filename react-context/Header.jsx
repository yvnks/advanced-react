import { useContext } from 'react';
import ThemeContext from './hooks/ThemeContext';

export default function Header() {
  const value = useContext(ThemeContext);
  console.log(value);

  return (
    <header className={`${value}-theme`}>
      <h1>{`${value.toUpperCase()}`} Theme</h1>
    </header>
  );
}
