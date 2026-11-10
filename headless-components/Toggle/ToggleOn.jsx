import { ToggleContext } from '../hooks/ToggleContext';
import { useContext } from 'react';
import { BsStarFill } from 'react-icons/bs';

export default function ToggleOn() {
  const { on } = useContext(ToggleContext);

  return on ? <BsStarFill className='star filled' /> : null;
}
