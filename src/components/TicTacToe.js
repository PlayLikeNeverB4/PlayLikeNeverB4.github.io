import { useState } from 'react'
import classNames from 'classnames'

const generateLines = () => {
  const lines = []
  for (let row = 0; row < GRID_SIZE; row++) {
    const line = []
    for (let cell = 0; cell < GRID_SIZE; cell++) {
      line.push([ row, cell ])
    }
    lines.push(line)
  }
  for (let cell = 0; cell < GRID_SIZE; cell++) {
    const line = []
    for (let row = 0; row < GRID_SIZE; row++) {
      line.push([ row, cell ])
    }
    lines.push(line)
  }
  let line = []
  for (let row = 0; row < GRID_SIZE; row++) {
    line.push([ row, row ])
  }
  lines.push(line)

  line = []
  for (let row = 0; row < GRID_SIZE; row++) {
    line.push([ row, GRID_SIZE - 1 - row ])
  }
  lines.push(line)

  return lines
}

const GRID_SIZE = 3
const LINES = generateLines()
const CELL_SIZE = 56;

const checkWinner = grid => {
  for (const line of LINES) {
    const value = grid[line[0][0]][line[0][1]]
    if (value === '') {
      continue
    }
    const allSame = line.every(([ row, col ]) => grid[row][col] === value)
    if (allSame) {
      return line
    }
  }
  return null
}

// line - [ (rowIndex, cellIndex) x 3 ]
// Returns the svg coordinates for the line
const calculateSvgLine = line => {
  if (!line) {
    return null
  }

  return {
    x1: CELL_SIZE * line[0][1] + CELL_SIZE / 2 - CELL_SIZE / 4 * Math.sign(line[2][1] - line[0][1]),
    y1: CELL_SIZE * line[0][0] + CELL_SIZE / 2 - CELL_SIZE / 4 * Math.sign(line[2][0] - line[0][0]),
    x2: CELL_SIZE * (line[2][1] + 1) - CELL_SIZE / 2 + CELL_SIZE / 4 * Math.sign(line[2][1] - line[0][1]),
    y2: CELL_SIZE * (line[2][0] + 1) - CELL_SIZE / 2 + CELL_SIZE / 4 * Math.sign(line[2][0] - line[0][0]),
  }
}

const TicTacToe = ({ zero, cross }) => {
  const ZeroComponent = zero
  const CrossComponent = cross
  const [ grid, setGrid ] = useState(Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill('')))
  const [ currentMove, setCurrentMove ] = useState('X')
  const [ winner, setWinner ] = useState(null)

  const handleClick = (rowIndex, cellIndex) => () => {
    if (grid[rowIndex][cellIndex] || winner) {
      return
    }
    const newGrid = [ ...grid ]
    newGrid[rowIndex] = [ ...newGrid[rowIndex] ]
    newGrid[rowIndex][cellIndex] = currentMove
    setGrid(newGrid)
    setCurrentMove(move => move === 'X' ? 'O' : 'X')
    const newWinner = checkWinner(newGrid)
    if (newWinner) {
      setWinner(newWinner)
    }
  }

  const winnerLine = calculateSvgLine(winner)
  return (
    <div className="relative" style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}>
      <div className="absolute">
        {grid.map((rowCells, rowIndex) => (
          <div className="flex" key={rowIndex}>
            {rowCells.map((cell, cellIndex) => (
              <div className={classNames('border border-slate-300 p-2 cursor-pointer', {
                    'border-t-0': rowIndex === 0,
                    'border-b-0': rowIndex === grid.length - 1,
                    'border-l-0': cellIndex === 0,
                    'border-r-0': cellIndex === rowCells.length - 1,
                  })}
                  style={{ height: CELL_SIZE + 'px', width: CELL_SIZE + 'px' }}
                  onClick={handleClick(rowIndex, cellIndex)}
                  key={cellIndex}
              >
                {cell === 'O' ? (
                  <ZeroComponent />
                ) : cell === 'X' ? (
                  <CrossComponent />
                ) : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      <svg height={GRID_SIZE * CELL_SIZE} width={GRID_SIZE * CELL_SIZE} className="absolute pointer-events-none">
        {winnerLine && (
          <line x1={winnerLine.x1}
                y1={winnerLine.y1}
                x2={winnerLine.x2}
                y2={winnerLine.y2}
                style={{ stroke: 'orange', strokeWidth: 3 }}
          />
        )}
      </svg>
    </div>
  )
}

export default TicTacToe
