export default function MenuItem({ children, toggle, open }) {
  console.log('Menu Item', toggle);
  console.log('Menu Item', open);
  return <div className='menu-item'>{children}</div>;
}
