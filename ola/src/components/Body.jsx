import { useState } from 'react'
import './Body.css'
function Body() {
  const[cont, setCont] = useState(0)
  const[inputValor, setInputValor] = useState('')
  const[inputN1, setInputN1] = useState('')
  const[inputN2, setInputN2] = useState('')


  function aumentar(){
    setCont(cont + 1)
  }

  function diminui(){
    if(cont > 0){
      setCont(cont - 1)
    }
  }

  function alterar(){
    setCont(Number(inputValor))
  }

  function somar(){
    setCont(Number(inputN1) + Number(inputN2))
  }

  function diminuicao(){
    setCont(Number (inputN1 - inputN2))
  }

  function multiplicacao(){
    setCont(Number(inputN1 * inputN2))
  }

  return (
    <div className='Body'>
        <h2 className='titulo2'>Dino são legais</h2>
        <div className='cont'>
            <button onClick={aumentar}>+</button>
            <p>{cont}</p>
            <button onClick={diminui}>-</button>
        </div>
        <div className="form">
            <input type="number" 
              value={inputValor}
              onChange={(e) => setInputValor(e.target.value)}
            />
            <button onClick={alterar}>Alterar</button>
        </div>

        <div className='Calculadera'>
          <input type="text"
            value={inputN1}
            onChange={(e) => setInputN1(e.target.value)}
          />
          <button onClick={somar}>+</button>
          <button onClick={diminuicao}>-</button>
          <button onClick={multiplicacao}>X</button>
        
          <input type="text" 
            value={inputN2}
            onChange={(e) => setInputN2(e.target.value)}
          />

        </div>
        </div>
  )
}

export default Body