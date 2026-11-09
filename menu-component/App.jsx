import Menu from './Menu/Menu';
import MenuButton from './Menu/MenuButton';
import MenuDropdown from './Menu/MenuDropdown';

export default function App() {
    return (
        <>
            <Menu>
                <MenuButton
                    buttonText='Menu'
                    onClick={() => console.log('click')}
                />
                <MenuDropdown items={['Home', 'Services', 'About', 'Mail']} />
            </Menu>
        </>
    );
}
