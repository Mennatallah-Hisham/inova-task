
import React from 'react';
import { useRef } from 'react';

const CTA = () => {
    const txtRef = useRef("");

function submitHandler(e){
    e.preventDefault();
    console.log(txtRef.current);
}
  return (
    <div className='flex'>
        <p className='logo'>BIG RAMY</p>
        <p>Join our Newsetter</p>
        <form onSubmit={submitHandler}>
            <input type="text"
            placeholder="what are you looking for"
            onRef={txtRef}
            ></input>
            <button> Subscribe</button>
        </form>

    </div>
  )
}

export default CTA;