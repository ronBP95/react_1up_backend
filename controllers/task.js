const db = require('../models');

const index = async (req, res) => {
    const allTasks = await db.Task.find();
    if (allTasks.length >= 1) res.json({ tasks: allTasks });
    else res.json({ tasks: 'There are no tasks!'});
}

const create = async (req, res) => {
    const { task } = req.body

    const newTask = new db.Task ({
        task
    })

    db.Task.create(newTask)
    res.json(newTask)
}

const update = async (req, res) => {

    const myTask = await db.Task.findOne({ task: req._id})
    const id = myTask._id

    db.Task.findByIdAndUpdate(id, req.body, { new: true }, (err, updateTask) => {
        if (err) console.log('Error with Update route for task', err);
        res.json(updateTask)
    });
}

const destroy = async (req, res) => {

    const myProfile = await db.Task.findOne({ newTask: req._id })
    const id = myProfile._id

    db.Task.remove({}, (err, deleteTask) => {
        if (err) {
            console.log('Error with Destroy route for task', err);
        } else {
            res.json(deleteTask)
        }
    });

    db.Task.create({
        "task": "Add Some Tasks!"
    })
};

module.exports = {
    index,
    create,
    update,
    destroy
}
