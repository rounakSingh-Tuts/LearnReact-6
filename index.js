import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1>Mohan</h1>
      <p>Paragraph about me..</p>
      <ul>
        <li>Agra</li>
        <li>Shimla</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))