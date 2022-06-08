import React,{useState,useCallback} from 'react';

import Count from './Count';
import Button from './Button';
import Title from './Title';



function ParentComponent() {
    const [age,setAge]=useState(25)
    const [salary, setSalary]=useState(50000)

    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    return (
        <div>
            <Title/>
            <Count text='Age'count={age}/>
            <Button handleCLick={incrementAge}>IncrementAge</Button>
            <Count text='Salary'count={salary}/>
            <Button handleCLick={incrementSalary}>IncrementSalary</Button>
        </div>
    );
}

export default ParentComponent