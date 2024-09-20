const express = require('express');
const bodyParser = require('body-parser');

const taskRoutes = require('./routes/tasksRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/tasks',taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { 
    console.log('Server listening on port ' + PORT);
});


module.exports = app;