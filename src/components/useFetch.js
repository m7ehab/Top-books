import {useState , useEffect} from 'react';

function useFetch(api) {
    const [data , setData] = useState(null);
    const [error , setError] = useState(null);
    const [isLoading,setIsLoading]=useState(true);
   useEffect(()=>{
    fetch(api)
    .then(res=>{
      if(!res.ok){
        throw Error("Server dosen't respond");
      }
      return res.json();
    })
    .then(data=>{
      console.log(data)
      setData(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err=>{
      setIsLoading(false)
      setError(err.message)
    })
    
  },[api]);
   
    return ({data,isLoading,error});
    };
    
    export default useFetch;