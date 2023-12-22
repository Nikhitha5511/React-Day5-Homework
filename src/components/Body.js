
import React,{useState} from 'react';
import loremData from './loremData.json';

const Body=()=>{
    const [number,setNumber]=useState(0);
    const [generatedText,setGeneratedText]=useState('');

    const handleInputChange=(event)=>{
     setNumber(parseInt(event.target.value,10))
    }
 
    const generateLorem=(event)=>{
        event.preventDefault();
    
    const uniqueParagraphs = new Set();
    let maxParagraphs = number;
  
    if (number < 0) {
      alert('oops! Please choose a positive value. Negative values are not allowed.');
      return;
    }
  
    if (number > 10) {
      alert('oops! you have exceed the limit .Please select 10 paragraphs or fewer.');
      maxParagraphs = 10;
    }
  
    Array.from({ length: maxParagraphs }).forEach(() => {
      while (uniqueParagraphs.size < maxParagraphs) {
        const randomIndex = Math.floor(Math.random() * loremData.paragraphs.length);
        uniqueParagraphs.add(loremData.paragraphs[randomIndex]);
      }
    });
  
    const generatedText = [...uniqueParagraphs].join('\n');
    setGeneratedText(generatedText);
    }

    return(
        <div className='mainContainer'>
            <h2>TIRED OF BORING LOREM IPSUM?</h2>
            <div className='actiondetails'>
                <form onSubmit={generateLorem}>
                    <span>Pragraphs: </span>
                    <input type='number' value={number} onChange={handleInputChange} ></input>
                    <button type='submit' classNmae='buttongenerate'>Generate</button>
                </form>
               
            </div>
            <div className='generatedText'>
            {generatedText &&
            <div>
           <h3>Generated Paragraphs:</h3>
           {generatedText.split('\n').map((text, index) => (
           <p key={index + 1}>{index + 1}. {text}</p>
           ))}
           </div>
          }
        </div>
        </div>
    )
}

export default Body;