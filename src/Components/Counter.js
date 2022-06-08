import React,{useState,useMemo} from 'react';

function Counter() {
    const [counterONe,setCounterOne]=useState(0)
    const [counterTwo,setCounterTwo]=useState(0)

    const incrementOne=()=>{
        setCounterOne(counterONe+1)
    }
    const incrementTwo=()=>{
      setCounterTwo(counterTwo+1)  
    }
    
    const isEven=useMemo(()=>{
        let i=0;
        while(i<2000000000)i++
        return counterONe % 2===0
    },[counterONe])

    return (
        <div>
            <div>
            <button onClick={incrementOne}>Count One-{counterONe}</button>
            <span>{isEven ?'Even':'Odd'}</span>
            </div>
            <div>
            <button onClick={incrementTwo}>Count Two-{counterTwo}</button>   
            </div>
        </div>
    );
}

export default Counter;