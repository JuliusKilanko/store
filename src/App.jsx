import { useState } from 'react'


function App() {

  // const d = new Date.getFullDate()

function NameList(){
  const [list, setList]=useState(['Julius', 'Daniel'])
  const [name, setName] = useState('')

  function handleSubmit(){
    setList([...list, name])
    setName('')
  }


  return(
    <div>
      <ul>
        {list.map((name)=>(
          <li key={name}>{name}</li>
        ))}
      </ul>

      <input type="text" placeholder='Name'
      value={name}
      onChange={(e)=>{
        setName(e.target.value)
      }}/>

      <button onClick={handleSubmit}>Click Me</button>
    </div>
  )
}

  function Click(){
    const [num, setNum]=useState(0)

    function addOne(){
      setNum(num + 1)
    }

    return(
      <div>
        <button onClick={addOne}>Click ={num}</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Click/>
     <NameList />
    </div>
  )
}

export default App
