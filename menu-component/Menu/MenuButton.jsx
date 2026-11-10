import Button from '../Button/Button';
import { useContext } from 'react';
import { MenuContext } from './Menu';

export default function MenuButton({ children }) {
  // Destructure toggle from ThemeContext.
  const { open, toggle, menuId } = useContext(MenuContext);

  return (
    <Button
      onClick={toggle}
      aria-controls={menuId}
      aria-haspopup='true'
      aria-expanded={open}
    >
      {children}
    </Button>
  );
}
