import Menu from './Menu/Menu';
import MenuButton from './Menu/MenuButton';
import MenuDropdown from './Menu/MenuDropdown';
import MenuItem from './Menu/MenuItem';

export default function App() {
  const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash'];

  return (
    <>
      <Menu>
        <MenuButton>Menu</MenuButton>
        <MenuDropdown>
          {sports.map((sport, idx) => (
            <MenuItem key={idx}>{sport}</MenuItem>
          ))}
        </MenuDropdown>
      </Menu>
    </>
  );
}
