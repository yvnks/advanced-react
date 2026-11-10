import Menu from './Menu/index';

export default function App() {
  const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash'];

  return (
    <>
      <Menu>
        <Menu.Button>Menu</Menu.Button>
        <Menu.Dropdown>
          {sports.map((sport, idx) => (
            <Menu.Item key={idx}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
