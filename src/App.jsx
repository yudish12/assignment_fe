import { useState } from 'react';
import './App.css'
import JsonCard from './Components/Card'
import RawJson from './Components/RawJson'
import { generateRandomJSON } from './JsonGenerator';

function App() {
  const [btnClicked,setBtnClicked] = useState(false)
  const [randomJsonString,setRandomJsonString] = useState();
  const [parsed,setParsed] = useState();

  const generateJSON = ()=>{
    const json = generateRandomJSON();
    setRandomJsonString(json);
    setParsed(JSON.parse(json));
    setBtnClicked(true);
  }

  if(!btnClicked){
    return(
      <div style={{
        display:"flex",
        justifyContent:"center",
        marginTop:"4rem"
      }}>
        <button
          onClick={generateJSON}
          style={{
            padding:"1rem",
            fontWeight:"600",
            fontSize:"15px",
            cursor:"pointer",
            borderRadius:"12px",
            border:"none"
          }}>
          Generate Random Json
        </button>
      </div>
    ) 
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
      gap: "2rem"
    }} >
    <div style={{
        display:"flex",
        justifyContent:"center",
      }}>
        <button
          onClick={generateJSON}
          style={{
            padding:"1rem",
            fontWeight:"600",
            fontSize:"15px",
            cursor:"pointer",
            borderRadius:"12px",
            border:"none"
          }}>
          Generate Random Json
        </button>
      </div>
      <RawJson
        randomJsonString={randomJsonString}
      />
      <div className='grid' >
        {parsed.map((e, i) => (
          <div
            key={i}
            style={{
              height: "300px",
              overflowY: "scroll",
              backgroundColor:"rgb(22, 27, 34)"
            }}>
            <JsonCard randomJsonString={e} />
          </div>
        )
        )}
      </div>
      
    </div>
  )
}

export default App
