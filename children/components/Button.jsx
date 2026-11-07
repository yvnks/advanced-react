import classNames from 'classnames';

export default function Button({ children, size, className, ...rest }) {
    // run some code to do somthing on the button

    let sizeClass = size ? `button-${size}` : null;

    const allClasses = classNames(sizeClass, className);

    return (
        <>
            <button
                className={allClasses}
                {...rest}
                onClick={() => {
                    console.log('Purchased...');
                }}
            >
                {children}
            </button>
        </>
    );
}
