import { useContext } from 'react';
import ThemeContext from './hooks/ThemeContext';

export default function Header() {
  const value = useContext(ThemeContext);
  console.log(value);

  return (
    <header className={`${value}-theme`}>
      <h1>{`${value[0].toUpperCase() + value.slice(1)}`} Theme</h1>
    </header>
  );
}
