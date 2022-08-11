

const Functions = () => {

    const sum = ( a: number, b: number ) : number => {
        return a + b;
    }

    return (
        <>
            <h3>Functions</h3>
            <span>The sum result is: { sum( 3, 4 ) }</span>
        </>
    )
}

export default Functions
