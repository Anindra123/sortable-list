
import { useState } from 'react'
import './App.css'
import ChildContent from './component/ChildContent'
import ChildrenBlock from './component/ChildrenBlock'
import DragHandler from './component/DragHandler'
import MakeSortable from './component/MakeSortable'


function App() {
  const [childrens, setChildrens] = useState([1, 2, 3, 4, 5])


  const childElements = childrens.map((title) => {
    return <ChildrenBlock
      childContent={<ChildContent
        title={typeof title === "number" ? title.toString() : title} />}
      dragHandler={<DragHandler />}
    />
  })




  return (
    <>

      <MakeSortable childrens={childrens} childElements={childElements} setChildren={setChildrens} />


    </>
  )
}

export default App
