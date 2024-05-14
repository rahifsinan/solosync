import React, { useState } from 'react';


const StickyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');

  const addNote = () => {
    if (inputText.trim() !== '') {
      setNotes([...notes, { id: Date.now(), text: inputText }]);
      setInputText('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        
      </div>

    </div>
  );
};

export default StickyNotes;
