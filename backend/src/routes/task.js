import { Router } from 'express';
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from "../controllers/task";

const router = Router();

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: get all tasks
 */
router.get('/tasks', getTasks);
/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: get total tasks counter
 */
router.get('/tasks/count', getTaskCount);
/**
 * @swagger
 * /tasks/:id:
 *  get:
 *      summary: get a task by id
 */
router.get('/tasks/:id', getTask);
/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: save a new task
 */
router.post('/tasks', saveTask);
/**
 * @swagger
 * /tasks/:id:
 *  delete:
 *      summary: delete a task by id
 */
router.delete('/tasks/:id', deleteTask);
/**
 * @swagger
 * /tasks/:id:
 *  put:
 *      summary: update a task by id
 */
router.put('/tasks/:id', updateTask);

export default router;