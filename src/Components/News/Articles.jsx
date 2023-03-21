

import React from 'react';
import NewsCard from './NewsCard';

const Articles = ({news}) => {
  return (
    <div className='flex'>
        {news.map((article)=>(
            <NewsCard
            key={`${article.title}${article.author}`}
            title={article.title}
             img={article.urlToImage} 
             link={article.url}
             author={article.author}/>
        
        ))}
    </div>
  )
}

export default Articles;