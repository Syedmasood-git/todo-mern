const { todoController, getTodoController, updateTodoController, deleteTodoController } = require('../controllers/todoController');

const router = require('express').Router();

router.post('/todos',todoController)
router.get('/todos',getTodoController)
router.put('/todos/:id',updateTodoController)
router.delete('/todos/:id',deleteTodoController)

module.exports = router;