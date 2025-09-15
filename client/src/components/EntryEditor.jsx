import React, { useState } from 'react';

const EntryEditor = ({ isEditing = false, initialDate = '', initialContent = '', onSubmit, onCancel }) => {
  const [date, setDate] = useState(initialDate || new Date().toISOString().split('T')[0]);
  const [content, setContent] = useState(initialContent);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    if (isEditing) {
      onSubmit({ content });
    } else {
      onSubmit({ date, content });
      setContent('');
      setDate(new Date().toISOString().split('T')[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entry-editor">
      <h2>{isEditing ? 'Edit Entry' : 'New Entry'}</h2>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          disabled={isEditing}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Today's Thoughts</label>
        <textarea
          id="content"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
        ></textarea>
      </div>
      <div className="editor-actions">
        <button type="submit">{isEditing ? 'Save Changes' : 'Add Entry'}</button>
        {isEditing && <button type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default EntryEditor;