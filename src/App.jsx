import { useState } from 'react'
import './App.css'


function App() {
    const [length,setLength]=useState(8)
    const[upper,setUpper]=useState(true)
    const[lower,setLower]=useState(true)
    const[numbers, setNumbers] = useState(true);
    const[symbols, setSymbols] = useState(true);
    const[password,setPassword]=useState("")
    const generatePassword=()=>{
      let char=""
      if(upper)char +="QWERTYUIOPASDFGHJKLZXCVBNM"
      if(lower)char += "qwertyuiopasdfghjklzxcvbnm" 
      if(numbers)char+="1234567890"
      if(symbols)char+= `!@#$%^&*()`
      console.log(char)
      let generatedpassword=""
      for (let i = 0; i < length; i++) {
             const random=Math.floor(Math.random()  * char.length)
             generatedpassword += char[random]
        }
        setPassword(generatedpassword)
      }
      const copyToClipboard=()=>{
        navigator.clipboard.writeText(password)
        alert("password copied")
      }
  return (
    <>
     <div className="password-generator">
      <h2>Strong Password Generator</h2>
      <div className="input-group">
        <label htmlFor="num">Password Length:</label>
        <input type="number" id='num' value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
      </div>
      <div className="checkbox-group">
        <input type="checkbox"  id="upper" checked={upper} onChange={(e)=>setUpper(e.target.checked)} />
        <label htmlFor="upper">Uppercase Letters</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox"  id="lower" checked={lower} onChange={(e)=>setLower(e.target.checked)} />
        <label htmlFor="lower">Lowercase Letters</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox"  id="number" checked={numbers} onChange={(e)=>setNumbers(e.target.checked)}/>
        <label htmlFor="number">Numbers</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox"  id="symbol" checked={symbols} onChange={(e)=>setSymbols(e.target.checked)}/>
        <label htmlFor="symbol">Symbol</label>
      </div>
      <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
      <div className="generated-password">
        <input type="text" readOnly value={password}/>
        <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
      </div>
     </div>
    </>
  )
}


export default App
