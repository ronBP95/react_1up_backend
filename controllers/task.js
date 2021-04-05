const db = require('../models');

const index = async (req, res) => {
    const allTasks = await db.Task.find();
    if (allTasks.length >= 1) res.json({ messages: allTasks });
    else res.json({ messages: 'There are no tasks!'});
}

module.exports = {
    index
}
