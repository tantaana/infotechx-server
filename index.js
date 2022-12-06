//my own server for data loading
const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors());

const courses = require('./data/courses.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('News API running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === '07') {
        res.send(news)
    }
    else {
        const courseList = news.filter(n => n.category_id === id)
        res.send(courseList)
    }
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})

app.listen(port, () => {
    console.log('uf re', port)
})