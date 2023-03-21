import React from 'react';
import {useEffect,useState} from "react";
import Articles from './Articles';


const LatestNews = () => {
    const [news ,setNews]=useState([]);
   //9ce11eb7be73466a91382a4cba2495a6 

    const  getNews =async()=>{
      
     try{
        const res = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-02-21&sortBy=publishedAt&apiKey=9ce11eb7be73466a91382a4cba2495a6 ");
    
        if(!res.ok){
            throw new Error("something went wrong");
        }
        const data = await res.json();
      setNews(data.articles);
     }catch(e){
        console.log(e);
     }
       

    }

    useEffect(()=>{
getNews();
    },[])
  return (
  <section>
    <h2>
        latest news
    </h2>

   
        {news.length===0? <p>no articles</p> :
        <Articles news={news}/>}
  

    </section>
  )
}

export default LatestNews