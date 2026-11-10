import { createContext, useId, useState } from 'react';

export const MenuContext = createContext();

export default function Menu({ children }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <MenuContext.Provider value={{ open, toggle, menuId }}>
      <div className='menu'>{children}</div>
    </MenuContext.Provider>
  );
}
