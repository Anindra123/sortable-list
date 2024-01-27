
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
  const [dragItemIndex, setDragItemIndex] = useState<number | undefined>(undefined);
  const [dragOverItemIndex, setDragOverItemIndex] = useState<number | undefined>(undefined);

  function handleHandlerMouseDown() {
    setIsDraggable(true)

  }
  function handleHandlerMouseUp() {
    setIsDraggable(false);
  }
  function handleDragStart(id: number, event: React.DragEvent<HTMLDivElement>) {

    const img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    event.dataTransfer.setDragImage(img, 0, 0);
    event.dataTransfer.effectAllowed = "move"
    setDragItemIndex(id);
  }

  function handleDrop() {
    const _elementArray = [...children]
    const element = _elementArray.splice(dragItemIndex!, 1)[0];
    _elementArray.splice(dragOverItemIndex!, 0, element);
    setChildren(_elementArray);
  }

  function handleDragEnd() {
    setDragItemIndex(undefined);
    setDragOverItemIndex(undefined);
  }

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
            dragItemIndex={dragItemIndex}
            handleDragEnd={handleDragEnd}
            dragOverItemIndex={dragOverItemIndex}
            key={id} >
            <DragHandler >
              <a className='drag-indicator'
                onMouseDown={() => { handleHandlerMouseDown() }}
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
