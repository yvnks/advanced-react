import Button from '../Button/Button';
import { useContext } from 'react';
import { ThemeContext } from './Menu';

export default function MenuButton({ children }) {

  // Destructure toggle from ThemeContext.
  const { toggle } = useContext(ThemeContext);

  return (
  <Button onClick={toggle}>
    {children}
  </Button>);
}
