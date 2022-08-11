import { useState } from "react";


export const useCounter = ( initialNum: number = 1) => {
  
    const [value, setValue] = useState( initialNum );

    const changeCounter = (number: number) => {
        setValue(value + number)
    }

    return {
        value,
        changeCounter
    }
}
