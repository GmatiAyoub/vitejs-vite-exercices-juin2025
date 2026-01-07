import { useState } from "react";
export default function App(){
  const[show,setShow]=useState(false);
  return(
    <>
    <button onClick={()=> setShow(!show)}>{show ? 'desafficher' : 'afficher'}</button>
    {show && <p>text affichee</p>}
    </>
  )
}