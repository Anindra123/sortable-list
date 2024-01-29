
import { useState } from 'react'
import './App.css'
import ChildrenBlock from './component/ChildrenBlock'
import MakeSortable from './component/MakeSortable'
import DragHandler from './component/DragHandler'
import debounce from './helper/Debounce'
import useDrag from './hook/useDrag'
import { DragContext } from './context/DragContext'

function App() {
  const elementArray: string[] =
    ["elem1", "elem2", "elem3", "elem4", "elem5"]
  const [isDraggable, setIsDraggable] = useState(false);

  const [isTop, isBottom, children, dragItemIndex, dragOverItemIndex,
    handleDragStart, handleDrop, handleDragEnd, handleDragOver,
    handleDragEnter, handleDragLeave] = useDrag({ elementArray })

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
        isTop: isTop,
        isBottom: isBottom,
        dragItemIndex: dragItemIndex
        , dragOverItemIndex: dragOverItemIndex, handleDragEnd: handleDragEnd
        , handleDragStart: handleDragStart
        , handleDragEnter: handleDragEnter
        , handleDragOver: handleDragOver
        , handleDrop: handleDrop
        , handleDragLeave: handleDragLeave
      }}>
        <MakeSortable>
          {children.map((elementTitle, id) => (
            <ChildrenBlock title={elementTitle}
              id={id}
              isDraggable={isDraggable}
              key={id} >
              <DragHandler
                handleHandlerMouseDown={handleHandlerMouseDown}
                handleHandlerMouseUp={handleHandlerMouseUp} />


            </ChildrenBlock>
          ))}
        </MakeSortable>
      </DragContext.Provider>
    </>
  )
}

export default App
