import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Apidata } from "./store/features/lorem/loremSlice";


function App() {
  const {data} = useSelector((state) => state.API)
  const dispatch = useDispatch();
 

  useEffect(()=>{
    dispatch(Apidata())
  },[])
  return (
    <div >{data.map((item) =>(
      <h2>{item.email}</h2>
    ))}</div>
  );
}

export default App;
