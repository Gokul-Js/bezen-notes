import { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  const [addItem, setAddItem] = useState([]);


  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const togglePin = (id) => {
    let items = [...addItem]; // [{....}]
    for (let i = 0; i < items.length; i++) {
      if (i === id) {
        items[i].pinned = !items[i].pinned;
      }
    }
    markAsPin(items);
  };

  const markAsPin = (items) => {
    let markedArray;
    let finalArray;
    console.log("Before", items);
    for (let i = 1; i < items.length; i++) {
      if (items[i].pinned === true) {
        markedArray = items[i];
        delete items[i];
      }
    }
    console.log(markedArray);
    for (let i = 0; i < items.length; i++) {
      finalArray[i] = items[i];
    }
    finalArray.unshift(markedArray);

    setAddItem(finalArray);
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <div className="App">
        <Header />
        <CreateNote passNote={addNote} />

        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
              pinned={val.pinned}
              togglePin={togglePin}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
