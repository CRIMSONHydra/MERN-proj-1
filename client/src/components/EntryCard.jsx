import React, { useState } from 'react';
import EntryEditor from './EntryEditor';

const EntryCard = ({ entry, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const formattedDate = new Date(entry.date).toLocaleDateString('en-CA');

  const handleUpdate = (updatedContent) => {
    onUpdate(entry._id, updatedContent);
    setIsEditing(false);
  };

  return (
    <div className="entry-card">
      {isEditing ? (
        <EntryEditor
          isEditing={true}
          initialContent={entry.content}
          initialDate={formattedDate}
          onSubmit={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <div className="entry-header">
            <h3>{formattedDate}</h3>
            <div className="entry-actions">
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => onDelete(entry._id)}>Delete</button>
            </div>
          </div>
          <p>{entry.content}</p>
        </>
      )}
    </div>
  );
};

export default EntryCard;