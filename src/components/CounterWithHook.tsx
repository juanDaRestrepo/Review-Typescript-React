
import { useCounter } from '../hooks/useCounter';

const CounterWithHook = () => {

   const { value, changeCounter } = useCounter(0);

    return (
        <>
            <h3>Counter <small>{value}</small></h3>
            <button className='btn btn-primary' onClick={() => changeCounter(-1)} disabled={value < 1 ? true : false}>-1</button>
            &nbsp;
            <button className='btn btn-primary' onClick={() => changeCounter(1)}>+1</button>
        </>
    )
}

export default CounterWithHook
