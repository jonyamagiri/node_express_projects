const express = require('express');
const app = express();

app.use(express.json());

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

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port} ... `)
});