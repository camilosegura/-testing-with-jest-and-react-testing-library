import * as React from 'react'
import ReactDOM from 'react-dom'
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  const root = window.document.createElement("div");
  ReactDOM.render(<AutoScalingText />, root)
})
