
import { useState } from 'react'
import './App.css'
import ChildrenBlock from './component/ChildrenBlock'
import MakeSortable from './component/MakeSortable'
import DragHandler from './component/DragHandler'
import GridSvg from './component/svg/GridSvg'
import debounce from './helper/Debounce'
import useDrag from './hook/useDrag'
import { DragContext } from './context/DragContext'

function App() {
  const elementArray: string[] =
    ["elem1", "elem2", "elem3", "elem4", "elem5"]
  const [isDraggable, setIsDraggable] = useState(false);

  const [children, dragItemIndex, dragOverItemIndex,
    handleDragStart, handleDrop, handleDragEnd, handleDragOver,
    handleDragEnter] = useDrag({ elementArray })

  function handleHandlerMouseDown() {
    setIsDraggable(true)

  }
  function handleHandlerMouseUp() {
    setIsDraggable(false);
  }

  const debounce_call = debounce(handleHandlerMouseUp, 300)
  debounce_call();


  return (
    <>
      <DragContext.Provider value={{
        dragItemIndex: dragItemIndex
        , dragOverItemIndex: dragOverItemIndex, handleDragEnd: handleDragEnd
        , handleDragStart: handleDragStart
        , handleDragEnter: handleDragEnter
        , handleDragOver: handleDragOver
        , handleDrop: handleDrop
      }}>
        <MakeSortable>
          {children.map((elementTitle, id) => (
            <ChildrenBlock title={elementTitle}
              id={id}
              isDraggable={isDraggable}

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
      </DragContext.Provider>
    </>
  )
}

export default App
