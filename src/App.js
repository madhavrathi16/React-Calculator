import './App.css';


import React,{useState} from 'react';

function App() {
    var [result,setResult]=useState("");

     const handleclick = (e)=> {
        // console.log("button clicked");
        setResult(result.concat(e.target.name));

      }

      const clearbtn =()=>{

        setResult("");
      }
      const deletebtn = ()=>{
         setResult(result.slice(0,result.length-1));
      }
      const calculate = () => {
        try{
        setResult(eval(result).toString());
        }catch(err){
          setResult("ERROR");
        }
      }

  return (
   <><div className="main">
    <form>
        <input type="text" value={result} ></input>
    </form>
    <div className="key">  
    <button id='clear' onClick={clearbtn} className='highlight'>Clear</button>
    <button onClick={deletebtn} className='highlight'>C</button>
    <button name='/' onClick={handleclick} className='highlight'>/</button>
    <button name='7' onClick={handleclick}>7</button>
    <button name='8' onClick={handleclick}>8</button>
    <button name='9' onClick={handleclick}>9</button>
    <button name='*' onClick={handleclick} className='highlight'>*</button>
    <button name='4' onClick={handleclick}>4</button>
    <button name='5' onClick={handleclick}>5</button>
    <button name='6' onClick={handleclick}>6</button>
    <button name='-' onClick={handleclick}className='highlight'>-</button>
    <button name='1' onClick={handleclick}>1</button>
    <button name='2' onClick={handleclick}>2</button>
    <button name='3' onClick={handleclick}>3</button>
    <button name='+' onClick={handleclick} className='highlight'>+</button>
    <button name='0' onClick={handleclick}>0</button>
    <button name='.' onClick={handleclick}>.</button>
    <button id='result' onClick={calculate} className='highlight'>=</button>
    </div>  

    </div>
   </>
  );
}


export default App;
