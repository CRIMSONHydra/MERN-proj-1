import mongoose from 'mongoose';

const EntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  date: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: [true, 'Please add content to your entry']
  }
}, {
  timestamps: true
});

const Entry = mongoose.model('Entry', EntrySchema);
export default Entry;