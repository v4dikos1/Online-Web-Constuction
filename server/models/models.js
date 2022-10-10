const sequelize = require('../db.js');
const {DataTypes} = require('sequelize');

const Worker = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
});

const Supervisor = sequelize.define('supervisor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
});

const Object = sequelize.define('object', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    model: {type: DataTypes.INTEGER},
    description: {type: DataTypes.TEXT},
    points: {type: DataTypes.STRING}
});

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    short_description: {type: DataTypes.STRING},
    long_description: {type: DataTypes.TEXT},
    date: {type: DataTypes.DATE},
    is_completed: {type: DataTypes.BOOLEAN},
});

const WorkerTask = sequelize.define('worker_task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

Supervisor.hasMany(Worker);
Worker.belongsTo(Supervisor);

Supervisor.hasMany(Task);
Task.belongsTo(Supervisor);

Object.hasMany(Task);
Task.belongsTo(Object);

Worker.belongsToMany(Task, {through: WorkerTask});
Task.belongsToMany(Worker, {through: WorkerTask});


module.exports = {
    Worker, Supervisor, Task, Object, WorkerTask
};
