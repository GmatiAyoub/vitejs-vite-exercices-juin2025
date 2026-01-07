import { useState } from "react";
export default function App(){
  const [count,setCount]=useState(0);
  return(
    <>
    <p>counterrrrr : {count}</p>
    <button onClick={()=> setCount(count+1)}>incrementer +</button>
    <button onClick={() => setCount(count-1)}>decrementer -</button>
    </>
  )
}