export default function Button({ variant, children }) {
    // run some code to do somthing on the button

    const variantClass = variant ? `button-${variant}` : null;

    return (
        <>
            <button className={variantClass}>{children}</button>
        </>
    );
}
