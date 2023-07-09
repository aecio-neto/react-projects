import React from "react"
import { useState } from "react"

function Square({ value, onSquareClick }) {
  return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
  )
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return
    }
    
    const nextSquares = squares.slice()
    
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (
    <div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}  />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    </div>
  )
}

/* Notas 
Ao utilizar a sintaxe [value, setValue], estamos desestruturando o array retornado pelo useState. Isso significa que estamos atribuindo o primeiro elemento do array (o valor atual do estado) à variável value, e o segundo elemento (a função para atualizar o estado) à variável setValue.

Dessa forma, podemos acessar e atualizar o estado value dentro do componente Square. Quando o botão é clicado (no evento onClick), a função handleClick é chamada, que por sua vez chama setValue para atualizar o valor do estado value para 'x'.
*/
