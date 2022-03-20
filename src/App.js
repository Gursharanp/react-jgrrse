import React from "react";
import "./style.css";
import {arr} from './color';
export default function App(){
  // console.log(arr)
  const[pick,setPick]=React.useState(arr)
let handleChange=(e)=>{
  let value=e.target.value;
  // console.log(value)
  setPick(arr.filter((item)=>(
      item.color.includes(value)
    ))
  )
}

  return (
    <>
    {
      pick.map((ele)=>(
        <div key={ele.id}>{ele.color}</div>
      ))
    }
    <input type="text" onChange={ handleChange}/>
    </>
  );
}
