import Button from './components/Button';
import Avatar from './Avatar';

export default function App() {
    return (
        <>
            <Avatar src='./images/bob.jpg' alt='Bob Ziroll' />
            <br />
            <Avatar>BZ</Avatar>
            <br />
            <Avatar />
        </>
    );
}
