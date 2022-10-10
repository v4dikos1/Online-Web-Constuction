const Router = require('express');
const objectRouter = require('./objectRoutes');
const supervisorRouter = require('./supervisorRoutes');
const taskRouter = require('./taskRoutes');
const workerRouter = require('./workerRoutes');

const router = new Router();

router.use('/worker', workerRouter);
router.use('/supervisor', supervisorRouter);
router.use('/task', taskRouter);
router.use('/object', objectRouter);


module.exports = router;