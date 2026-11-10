import { ToggleContext } from '../hooks/ToggleContext';
import { useContext } from 'react';

export default function ToggleOn({ children }) {
  const { on } = useContext(ToggleContext);

  return on ? children : null;
}
