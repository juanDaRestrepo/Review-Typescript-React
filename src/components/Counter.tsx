import { useState } from 'react';

const Counter = () => {

    const [value, setValue] = useState(0);

    const changeCounter = (number: number) => {
        setValue(value + number)

    }

    return (
        <>
            <h3>Counter <small>{value}</small></h3>
            <button className='btn btn-primary' onClick={() => changeCounter(-1)}>-1</button>
            &nbsp;
            <button className='btn btn-primary' onClick={() => changeCounter(1)}>+1</button>
        </>
    )
}

export default Counter
