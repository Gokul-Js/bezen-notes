import React from 'react'
import {AiFillDelete, AiFillPushpin} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Note = (props) => {


  const deleteNote = () => {
    toast("Note Deleted Successfully");
      props.deleteItem(props.id);

  }


  const pinNote = () => {
    console.log("Props.id", props.id)
     props.togglePin( props.id);
  }

    return (
        <div className='note-content'>
          <div className='note'>
          <button className='btn2' onClick={pinNote} type='submit' >{props.pinned ? <AiFillPushpin className='icon'/>: "Mark as pinned"} </button>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button className='btn1' onClick={deleteNote} type='submit'><ToastContainer /> <AiFillDelete className='icon'/></button>
          </div>
        </div>
    )

}

export default Note