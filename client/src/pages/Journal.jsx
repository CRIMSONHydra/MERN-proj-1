import React, { useState, useEffect } from 'react';
import api from '../apiCalls/api';
import EntryCard from '../components/EntryCard';
import EntryEditor from '../components/EntryEditor';
import toast from 'react-hot-toast';

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEntries = async () => {
    try {
      const { data } = await api.get('/entries');
      setEntries(data);
    } catch (error) {
      toast.error('Could not fetch entries.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleCreate = async (newEntry) => {
    try {
      await api.post('/entries', newEntry);
      toast.success('Entry created!');
      fetchEntries();
    } catch (error) {
      toast.error('Failed to create entry.');
    }
  };

  const handleUpdate = async (id, updatedContent) => {
     try {
      await api.patch(`/entries/${id}`, updatedContent);
      toast.success('Entry updated!');
      fetchEntries();
    } catch (error) {
      toast.error('Failed to update entry.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      try {
        await api.delete(`/entries/${id}`);
        toast.success('Entry deleted!');
        fetchEntries();
      } catch (error) {
        toast.error('Failed to delete entry.');
      }
    }
  };

  return (
    <div className="journal-container">
      <EntryEditor onSubmit={handleCreate} />
      <hr />
      <div className="entries-list">
        <h2>My Entries</h2>
        {loading ? (
          <p>Loading entries...</p>
        ) : entries.length === 0 ? (
          <p>No entries yet. Write your first one above!</p>
        ) : (
          entries.map((entry) => (
            <EntryCard
              key={entry._id}
              entry={entry}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Journal;