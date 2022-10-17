import {useState} from 'react'
import {AiFillPlusSquare} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateNote = (props) => {

  
  const [expand, setExpand] = useState(false)

  const [note, setNote ] = useState({
     title: "",
     content: "",
  })

  const InputEvent = (event) => {

    const {name, value} = event.target;

    setNote((prevData) =>{
      return {
        ...prevData,
        [name]: value,
        pinned: true,
        
      }
    })

  }

  const addEvent = () => {
    toast("Note Added Successfully");
      setNote({
        title: "",
        content: "",
      })
      props.passNote(note)

  }

  const expandIt = () => {
    setExpand(true)
  }

  const backIt = () => {
    setExpand(false)
  }

      return (
        <div className='main-note'>
          <form>
            {expand?
            <input
              type="text" 
              name="title"
              value={note.title} 
              onChange={InputEvent}
              className="input-text"
              placeholder='Title' 
              autoComplete="off" 
            />
            : null}
            <textarea 

               name="content"
               value={note.content}
               onChange={InputEvent}
               onClick={expandIt}
               className='text1'
               placeholder='Write a Note' 
               onDoubleClick={backIt}
            >
            </textarea>
           </form>
           { expand? <button onClick={addEvent} className='btn' type='submit'><ToastContainer />< AiFillPlusSquare className='icon'/></button> :null}
        </div>
      )
}

export default CreateNote