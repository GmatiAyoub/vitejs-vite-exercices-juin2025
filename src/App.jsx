import { useState } from "react";
export default function App(){
  const [text,setText]=useState('');
  return(
    <>
    <input type="text" onChange={(e)=> setText(e.target.value)} />
    <p>{text}</p>
    </>
  )
}