import React from 'react';
import { createContext } from 'react';

export const MenuContext = createContext();

export default function Menu({ children }) {
  const [open, setOpen] = React.useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className='menu'>
      <MenuContext.Provider value={{ open, toggle }}>
        {children}
      </MenuContext.Provider>
    </div>
  );
}
