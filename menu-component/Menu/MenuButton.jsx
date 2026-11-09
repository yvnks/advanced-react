import Button from '../Button/Button';

export default function MenuButton({ children, toggle, open }) {
  console.log('Menu Button:', toggle);
  console.log('Menu Button:', open);
  return <Button onClick={toggle}>{children}</Button>;
}
