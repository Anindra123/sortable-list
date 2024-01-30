
import './App.css'
import ChildBlock from './component/ChildBlock'
import MakeSortable from './component/MakeSortable'


function App() {
  const childElments = [
    <ChildBlock title='elem1' />,
    <ChildBlock title='elem2' />,
    <ChildBlock title='elem3' />,
    <ChildBlock title='elem4' />,
    <ChildBlock title='elem5' />,
    <ChildBlock title='elem6' />,
  ]


  return (
    <>

      <MakeSortable childElements={childElments} />


    </>
  )
}

export default App
