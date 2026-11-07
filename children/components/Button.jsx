export default function Button({ children, variant, ...rest }) {
    // run some code to do somthing on the button
    console.log(rest, variant);
    return (
        <>
            <button
                onClick={() => {
                    console.log('Purchased...');
                }}
            >
                {children}
            </button>
        </>
    );
}
