const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
const category = require('./data/courses.json')
const course = require('./data/course.json')

app.get('/',(req,res)=> {
  res.send('Hello from express')
})

app.get('/category',(req,res)=> {
  res.send(category)
})

app.get('/course',(req,res)=> {
  res.send(course)
})

app.get('/course/:id', (req,res)=>{
  const id = req.params.id
  const selectedCourse = course.find( n => n.id === id)
  res.send(selectedCourse)
  console.log(selectedCourse)
})

app.get('/courses',(req,res)=> {
  res.send(course)
})
app.listen(port, ()=> {
  console.log('easy learn running');
})