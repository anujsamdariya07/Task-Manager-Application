const getAllTasks = (req, res) => {
    res.send('All items')
}
const getATask = (req, res) => {
    res.send('One item')
}
const createTask = (req, res) => {
    res.send('Create items')
}
const updateTask = (req, res) => {
    res.send('Update items')
}
const deleteTask = (req, res) => {
    res.send('Delete items')
}

module.exports = {
    getAllTasks, 
    getATask, 
    createTask, 
    updateTask, 
    deleteTask
}
