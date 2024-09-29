{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const cells = document.querySelectorAll('.cell');\
const popup = document.getElementById('popup');\
const winnerMessage = document.getElementById('winner-message');\
const newGameButton = document.getElementById('new-game');\
\
let board = ['', '', '', '', '', '', '', '', ''];\
let currentPlayer = 'X';\
let isGameActive = true;\
\
const winningCombinations = [\
  [0, 1, 2],\
  [3, 4, 5],\
  [6, 7, 8],\
  [0, 3, 6],\
  [1, 4, 7],\
  [2, 5, 8],\
  [0, 4, 8],\
  [2, 4, 6]\
];\
\
function checkWinner() \{\
  let roundWon = false;\
  for (let i = 0; i < winningCombinations.length; i++) \{\
    const [a, b, c] = winningCombinations[i];\
    if (board[a] && board[a] === board[b] && board[a] === board[c]) \{\
      roundWon = true;\
      break;\
    \}\
  \}\
  return roundWon;\
\}\
\
function isBoardFull() \{\
  return board.every(cell => cell !== '');\
\}\
\
function handleCellClick(e) \{\
  const index = e.target.dataset.index;\
\
  if (board[index] !== '' || !isGameActive) \{\
    return;\
  \}\
\
  board[index] = currentPlayer;\
  e.target.textContent = currentPlayer;\
\
  if (checkWinner()) \{\
    isGameActive = false;\
    showPopup(`$\{currentPlayer\} wins!`);\
  \} else if (isBoardFull()) \{\
    showPopup(`It's a tie!`);\
  \} else \{\
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';\
  \}\
\}\
\
function showPopup(message) \{\
  winnerMessage.textContent = message;\
  popup.classList.remove('hidden');\
\}\
\
function resetBoard() \{\
  board = ['', '', '', '', '', '', '', '', ''];\
  currentPlayer = 'X';\
  isGameActive = true;\
  cells.forEach(cell => \{\
    cell.textContent = '';\
  \});\
  popup.classList.add('hidden');\
\}\
\
cells.forEach(cell => \{\
  cell.addEventListener('click', handleCellClick);\
\});\
\
newGameButton.addEventListener('click', resetBoard);\
}