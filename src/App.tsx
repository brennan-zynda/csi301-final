import React, { useState } from 'react';
import './App.css';

// Interface to hold string of list + completion status
interface ITextInterface {
  text: string
  isComplete: boolean
}

function App() {
  // UseState hooks
  const [textInput, setText] = useState("Hello World");
  const [texts, setTexts] = useState<ITextInterface[]>([]);

  // Button functions
  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  }
  const handleAdd = () => {
    if(textInput !== "") {
      // Adding non-empty text to array
      setTexts([...texts, {text: textInput, isComplete: false}]);
    }
  }
  const handleRemove = (num: number) => {
    // Reassigning texts without filtered index
    setTexts(texts.filter((text,index) => index !== num));
    //console.log("Remove");
  }
  const markAsComplete = (num: number) => {
    // Reassigning text to be completed
    texts[num].isComplete = true;
    // Pushing update to site
    setTexts([...texts]);
    //console.log("Complete");
  }
  const moveElementUp = (num: number) => {
    if(num !== 0)
    {
      var temp = texts[num];
      texts[num] = texts[num-1];
      texts[num-1] = temp;
      setTexts([...texts]);
    }
  }
  const moveElementDown = (num: number) => {
    if(num !== texts.length - 1)
    {
      var temp = texts[num];
      texts[num] = texts[num+1];
      texts[num+1] = temp;
      setTexts([...texts]);
    }
  }

  // Output
  return (
    <div className="App">
      <input type="text" onChange={handleTextInput}/>
      <button onClick={handleAdd}>Add</button>
      <div>
      {texts.length > 0 ? 
        texts.map((text, num) => 
        // If text value is completed, strikethrough text, otherwise just base text
        <div style={text.isComplete ?  {textDecoration:"line-through"} : {}} key={num}>
          <button onClick={() => moveElementUp(num)}>/\</button>
          <button onClick={() => markAsComplete(num)}>Mark as Complete</button>
          {text.text}
          <button onClick={() => handleRemove(num)}>Remove</button>
          <button onClick={() => moveElementDown(num)}>\/</button>
        </div>)
        :
        "List empty, please add element above"
        }
      </div>
    </div>
  );
}

export default App;