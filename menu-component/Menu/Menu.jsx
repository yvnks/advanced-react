import React from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext();

export default function Menu({ children }) {
  const [open, setOpen] = React.useState(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className='menu'>
      <ThemeContext.Provider value={{ open, toggle }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
