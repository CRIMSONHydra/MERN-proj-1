import Entry from "../models/entry.model";

export const getEntries = async (req, res) => {
    try {
        const entries = await Entry.find({userId: req.user._id}).sort({date: -1});
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createEntry = async(req, res) => {
    const {date, content} = req.body;

    try {
        const entry = new Entry({
            userId: req.user._id,
            date,
            content,
        });
        const newEntry = await entry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateEntry = async (req, res) => {
  const { content } = req.body;
  try {
    const entry = await Entry.findById(req.params.id);
    if (entry && entry.userId.toString() === req.user._id.toString()) {
      entry.content = content || entry.content;
      const updatedEntry = await entry.save();
      res.json(updatedEntry);
    } else {
      res.status(404).json({ message: 'Entry not found or user not authorized' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEntry = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (entry && entry.userId.toString() === req.user._id.toString()) {
      await entry.deleteOne();
      res.status(204).json({ message: 'Entry removed' });
    } else {
      res.status(404).json({ message: 'Entry not found or user not authorized' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};