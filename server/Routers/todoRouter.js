const router= require("express").Router();
const { createTodo,updateTodo,deleteTodo,showAllTodos,showCompleted,showPending,pendingToCompleted } = require("../Controllers/todoController");
const requireUser = require("../middleware/requireUser");

router.post('/',createTodo);
router.put('/',updateTodo);
router.post('/delete',deleteTodo);
router.get('/',showAllTodos);
router.get('/completed',showCompleted);
router.get('/pending',showPending);
router.get('/pendingToCompleted',pendingToCompleted);

module.exports=router;