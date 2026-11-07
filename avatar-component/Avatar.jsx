import { IoPersonSharp } from 'react-icons/io5';

const colors = ['navy', 'pink', 'red', 'blue', 'green'];
const randomColors = Math.floor(Math.random() * colors.length);
console.log(randomColors);

export default function Avatar({ children, src, alt }) {
    if (children) {
        return (
            <div className={`avatar avatar-letters ${colors[randomColors]}`}>
                <span>{children}</span>
            </div>
        );
    } else if (src) {
        return (
            <div className='avatar'>
                <img src={src} alt={alt} />
            </div>
        );
    } else {
        return (
            <div className={`avatar avatar-icon ${colors[randomColors]}`}>
                <IoPersonSharp />
            </div>
        );
    }
}
