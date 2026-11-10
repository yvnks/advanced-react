import { ToggleContext } from '../hooks/ToggleContext';
import { useContext } from 'react';

export default function ToggleOff({ children }) {
  const { on } = useContext(ToggleContext);

  return !on && children;
}
