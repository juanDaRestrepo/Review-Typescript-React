
interface Person {
    name    : string;
    age     : number;
    address : Address
}

interface Address {
    country     : string;
    houseNumber : string;
}

const LiteralObjects = () => {
  
    const person : Person = {
        name: 'Daniel',
        age: 29,
        address: {
            country: 'Colombia',
            houseNumber: 'mz 28 cs 2'
        }
    }

    return (
    <>
      <h3>Literal Objects</h3>
      <code>
        <pre>
            {JSON.stringify( person, null, 2)}
        </pre>
      </code>
    </>
  )
}

export default LiteralObjects
