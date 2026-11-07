import Button from './components/Button';
import { BsCart2 } from 'react-icons/bs';

export default function App() {
    return (
        <main>
            <Button className='green' size='lg' onClick={() => {}}>
                Cart <BsCart2 />
            </Button>
        </main>
    );
}
