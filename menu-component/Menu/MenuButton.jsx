import Button from '../Button/Button';
import { useContext } from 'react';
import { MenuContext } from './Menu';

export default function MenuButton({ children }) {
  // Destructure toggle from ThemeContext.
  const { toggle } = useContext(MenuContext);

  return <Button onClick={toggle}>{children}</Button>;
}
