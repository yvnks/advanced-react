import Button from './components/Button';
import { BsCart2 } from 'react-icons/bs';

export default function App() {
    return (
        <main>
            <Button variant={true} handleClick={() => {}}>
                <BsCart2 />
            </Button>
        </main>
    );
}
