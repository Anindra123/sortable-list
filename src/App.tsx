
import { useState } from 'react'
import './App.css'
import ChildrenBlock from './component/ChildrenBlock'
import MakeSortable from './component/MakeSortable'
import DragHandler from './component/DragHandler'
import GridSvg from './component/svg/GridSvg'
import debounce from './helper/Debounce'

function App() {
  const elementArray: string[] =
    ["elem1", "elem2", "elem3", "elem4", "elem5"]
  const [children, setChildren] = useState(elementArray);
  const [isDraggable, setIsDraggable] = useState(false);
  const [dragItemIndex, setDragItemIndex] = useState(0);
  const [dragOverItemIndex, setDragOverItemIndex] = useState(0);

  function handleHandlerMouseDown() {
    setIsDraggable(true)
  }
  function handleHandlerMouseUp() {
    setIsDraggable(false);
  }
  function handleDragStart(id: number) {
    setDragItemIndex(id);
  }

  function handleDrop() {
    const _elementArray = [...children]
    const element = _elementArray.splice(dragItemIndex, 1)[0];
    _elementArray.splice(dragOverItemIndex, 0, element);
    setChildren(_elementArray);


  }

  // function handleDragEnd(event: React.DragEvent<HTMLDivElement>) {

  // }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDragEnter(id: number) {
    setDragOverItemIndex(id);
  }

  const debounce_call = debounce(handleHandlerMouseUp, 300)
  debounce_call();


  return (
    <>
      <MakeSortable>
        {children.map((elementTitle, id) => (
          <ChildrenBlock title={elementTitle}
            id={id}
            isDraggable={isDraggable}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            handleDragEnter={handleDragEnter}
            handleDragOver={handleDragOver}
            key={id} >
            <DragHandler >
              <a className='drag-indicator'
                onMouseDown={handleHandlerMouseDown}
                onMouseUp={handleHandlerMouseUp}

              >
                <GridSvg fillColor='black' width={24} height={24} />
              </a>

            </DragHandler>
          </ChildrenBlock>
        ))}
      </MakeSortable>
    </>
  )
}

export default App
