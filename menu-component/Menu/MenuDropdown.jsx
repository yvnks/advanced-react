import { useContext } from 'react';
import { ThemeContext } from './Menu';

export default function MenuDropdown({ children }) {
  const { open } = useContext(ThemeContext);
  return (
    open && (
      <div className='menu-dropdown'>
        {children}
      </div>
    )
  );
}
