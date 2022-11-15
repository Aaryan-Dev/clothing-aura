import axios from "axios";
import React, {useState} from "react";

export const SearchBox = () => {
  const [data, setdata] = useState([]);
  const [input,setinput]=useState("")
  const handeldsearchclick = async(e) => {
    e.preventDefault()
return await axios.get(`http://localhost:8000/data/search/${input}`).then((res)=>{
    setdata(res.data)
})
  };

  const reset_serch=()=>{
   
  }

  console.log(data)
  return (
    <div>
      <form action="" onClick={handeldsearchclick}>
        <input type="text" onChange={(e)=>setinput(e.target.value)}/>
        <button type="submit">Search</button>
       
      </form>
      <button onClick={reset_serch}>reset</button>

      {/* {data?.map((el)=><h1>{el.name}</h1>)} */}
    </div>
  );
};
