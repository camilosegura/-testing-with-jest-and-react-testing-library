import * as React from 'react'
import ReactDOM from 'react-dom'
import CalculatorDisplay from '../calculator-display'

test('renders', () => {
  const root = window.document.createElement("div");
  ReactDOM.render(<CalculatorDisplay value="0" />, root)
})
