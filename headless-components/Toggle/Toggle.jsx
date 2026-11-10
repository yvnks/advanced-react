import { useState } from 'react';
import { ToggleContext } from '../hooks/ToggleContext';

export default function Toggle({ children }) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevVal) => !prevVal);
  }
  return (
    <>
      <ToggleContext.Provider value={{ on, toggle }}>
        {children}
      </ToggleContext.Provider>
    </>
  );
}
