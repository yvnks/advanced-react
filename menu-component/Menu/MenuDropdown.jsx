import { useContext } from 'react';
import { MenuContext } from './Menu';

export default function MenuDropdown({ children }) {
  const { open, menuId } = useContext(MenuContext);
  return (
    open && (
      <div className='menu-dropdown' role='menu' aria-controls={menuId}>
        {children}
      </div>
    )
  );
}
