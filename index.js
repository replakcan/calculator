import operate from './app/lib/math-operations.js'

let memory = null
let num1 = ''
let num2 = ''
let operator = ''

const body = document.querySelector('body')
const calculator = document.createElement('div')

calculator.classList.add('calculator')

body.appendChild(calculator)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const mathOperators = ['+', '-', '*', '/']

const helperOperators = ['C', '=']

const resultScreen = document.createElement('div')
resultScreen.classList.add('result-screen')
resultScreen.textContent = memory || 0

const numberContainer = document.createElement('div')
numberContainer.classList.add('container')
numberContainer.classList.add('number-container')

const operatorContainer = document.createElement('div')
operatorContainer.classList.add('container')
operatorContainer.classList.add('operator-container')

const buttonContainer = document.createElement('div')
buttonContainer.classList.add('btn-container')

numbers.map((number) => {
  const btn = document.createElement('button')

  btn.classList.add('number-item')
  btn.textContent = number

  btn.addEventListener('click', () => {
    const rv = document.querySelector('.result-screen')

    if (operator == '') {
      num1 += btn.textContent
      rv.textContent = num1
    } else {
      num2 += btn.textContent
      rv.textContent = num2
    }
  })

  numberContainer.appendChild(btn)
})

mathOperators.map((o) => {
  const btn = document.createElement('button')
  btn.classList.add('operator-item')
  btn.textContent = o

  btn.addEventListener('click', () => {
    const rv = document.querySelector('.result-screen')

    operator = btn.textContent

    rv.textContent = 0
  })

  operatorContainer.appendChild(btn)
})

helperOperations.map((helperOp) => {
  const btn = document.createElement('button')
  btn.classList.add('helper-operation')
  btn.textContent = helperOp

  btn.addEventListener('click', () => {
    const rv = document.querySelector('.result-screen')
    if (helperOp == '=') {
      memory = operate(Number(num1), Number(num2), operator).toFixed(2)
      num1 = memory
      num2 = ''

      rv.textContent = memory
    } else {
      num1 = ''
      num2 = ''
      operator = ''
      memory = null

      rv.textContent = 0
    }
  })

  numberContainer.appendChild(btn)
})

calculator.appendChild(resultScreen)
buttonContainer.appendChild(numberContainer)
buttonContainer.appendChild(operatorContainer)
calculator.appendChild(buttonContainer)
