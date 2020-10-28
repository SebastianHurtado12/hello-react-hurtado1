import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addNote({
      title: title,
      text: text
    });
    setTitle('');
    setText('');
  };

  return (
     
    <form onSubmit={handleSubmit}>

      <div className="form-group  font-weight-bold">
        <label htmlFor="title">TITULO</label>
        <input

          id="title"
          className="form-control"
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group font-weight-bold">
        <label htmlFor="text" >TEXTO</label>
        <textarea
          id="text"
          className="form-control"
          value={text}
          rows="4"
          onChange={e => setText(e.target.value)}
        >
        </textarea>
      </div>
      <div className="text-center mb-3">
        <input
          className="btn  btn btn-primary  btn-lg font-weight-bold"
          type="submit"
          value= "GUARDAR"
          />
      </div>
    </form>

  );
};

export default NoteForm;
