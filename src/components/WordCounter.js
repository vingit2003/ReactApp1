import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  
  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
  };
  
  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };
  
  const wordCount = countWords(text);
  
  return (
    <div className="word-counter">
      <textarea
        placeholder="Type something..."
        value={text}
        onChange={handleInputChange}
        className="textarea"
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
