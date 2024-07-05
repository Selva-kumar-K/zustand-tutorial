import { useState } from "react"
import { stores } from "./stores/Items"


export default function App() {
  const [state, setState] = useState("")
  const {item, addItem, deleteItem} = stores()

  const handleClick = () => {
    const newItem = {
      id : new Date().getMilliseconds(),
      text : state,
      checked : false
    }

  addItem(newItem)
  }


  console.log(item)
  return (
    <>
    <div>
      <input type="text" placeholder="Enter your items" onChange={(e) => setState(e.target.value)}/>
      <button onClick={handleClick}>Add items</button>
    </div>

    {item.map((item) => (
      <div className="list-item" key={item.id}>
        <label htmlFor={item.id} className="label-box">
          <input type="checkbox" name="" id={item.id} />
          <p>{item.text}</p>
        </label>
        <button onClick={() => deleteItem(item.id)}>❌</button>
        
      </div>
    ))}

    </>
  )
}
