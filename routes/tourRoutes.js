import express from 'express';
import { addTour, deleteAllTour, deleteTour, getAllTours, getTour, updateTour } from '../controller/tourController.js';

const router = express.Router()

router.post('/add', addTour)
router.get('/tour/:id', getTour)
router.get('/tours', getAllTours)
router.patch('/tours/:id', updateTour)
router.delete('/delete:id', deleteTour)
router.delete('/deleteAll', deleteAllTour)

export default router