import { useEffect, useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const[tag,setTag] = useState('');
  // const[gif,setGif] = useState('');   
  // const[loading,setLoading] = useState(false);
  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  function changeHandler(event){
    setTag(event.target.value);
  }

  // useEffect(()=>{
  //   fetchData();
  // },[])
  const{gif,loading,fetchData} = useGif(tag);


  return (
    <div className="w-1/2  bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      {/* <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold"
      >
        Generate
      </button> */}
      <h1>Random {tag} Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <input type="text" onChange={changeHandler} className="w-10/12 text-lg py-2 rounnded-lg mb-[3px] text-center" 
      value={tag}/>
      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
