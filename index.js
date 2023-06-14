const express = require('express');
const app = express();

const courses = [
    {id: 1, name: 'biology'},
    {id: 2, name: 'chemistry'},
    {id: 3, name: 'physics'},
    {id: 4, name: 'math'},
];

app.get('/', (req, res) => {
    res.send('Hello World! You are now at Home.');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = course.find(c => c.id === parseInt(req.params.id));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port} ... `)
});