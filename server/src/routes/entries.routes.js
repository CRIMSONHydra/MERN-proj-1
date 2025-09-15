import express from 'express';
import { getEntries, createEntry, updateEntry, deleteEntry } from '../controllers/entry.controller.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(protect, getEntries)
    .post(protect, createEntry);

router.route('/:id')
    .patch(protect, updateEntry)
    .delete(protect, deleteEntry);

export default router;