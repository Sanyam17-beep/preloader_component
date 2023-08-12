import React from 'react';
import './preloader.css';
import { quote } from './data';
import { useEffect,useState } from 'react';
function Preloader() {
    const [size,setsize]=useState(0);
    let temp=Math.floor(Math.random()*193);
    const [i,seti]=useState(temp); 
    const loading = () => {
      document.querySelectorAll(".bar").forEach(function(current) {
        let startWidth = 0;
        const interval = setInterval(frame,100);
        const inte = setInterval(fr,4000);
        function frame() {
          if (startWidth >= 100) {
            clearInterval(inte);
            clearInterval(interval);
          } else {
            startWidth++;
            current.style.width = `${startWidth}%`;
            setsize(startWidth);
          }
        }
        function fr(){
          let temp=Math.floor(Math.random()*193);
          seti(temp);
        } 
      });
    }
    function fro(){
        let temp=Math.floor(Math.random()*193);
        seti(temp);
      } 
    useEffect(() => {
      setTimeout(loading, 1000);
    }, []);
  return (
    <div className='pre'>
      <div className="loader" onClick={fro}>
      <div className="load"><span id='name'>Sanyam</span>
      <div className="progress">
        <div className="bar">
        </div>
      </div>
      <span id="percent">{size}%</span>
      </div>
      <div id='quote'><span id="blc">"{quote[i].text}"</span>
      <span id="author">~{quote[i].author}</span>
      </div>
    </div>
    </div>
  )
}

export default Preloader;

