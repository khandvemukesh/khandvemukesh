import Output from "./Components/Output";
import { useEffect, useState } from "react";
import axios from "axios";
import { Constent, SearchMoviesAPI} from "./Components/Constent";


function App() {
  const [movies, setMovies] =useState([]);
  const [search, setSearch] =useState("");

  const handleSearch=(e)=>{
    setSearch(e.target.value);
  }

const getAllMovies=async()=>{
  await axios.get(Constent).then((res)=>{
    setMovies(res.data.results);
    console.log(res.data);
  
  }).catch((err)=>setMovies(err.message));
}
 
    
  useEffect(
    () => {
      setMovies([]);
      if (search === "") {
        getAllMovies();
      } else {
      setTimeout(() => {
        const  getSearchMovies=async()=>{
        await axios.get(SearchMoviesAPI + search).then((res)=>setMovies(res.data.results)).catch((err)=>setMovies(err.message))
       }
        getSearchMovies();
  }, 1000);
      
        
      }
    },
    [search]
  );
  return (
   <>
     
   <div className="max-w-[1240px] mx-auto p-2">
    <div className="max-w-[800px] mx-auto p-2">
        <input value={search} onChange={handleSearch}  className=" ease-in-out rounded border-2 border-indigo-500/75 hover:border-2 border-indigo-500/75  mt-3 p-2 w-full" type="search" placeholder="Search Movies"/>
          {
        movies.length === 0
          ?
          <div className="text-3xl text-center mt-2 text-[#fff] mt-8"> Loading... </div>
          :
          <Output movies={movies} />

      }
       </div> 
   </div>

   
   </>
  );
}

export default App;
