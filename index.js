
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-532523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122"
  }
]

morgan.token('body', request => {
  return JSON.stringify(request.body)
})

app.use(express.json()) //Needed to for the post request, to correctly parse the request
app.use(morgan('tiny'))
app.use(morgan(':body'))

app.get('/info', (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people</p>
                 <p>${new Date()}</p>`)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  person = persons.find(person => person.id === id)

  if(person){
    response.json(person)
  } else {
    return response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id))
    : 0

  return maxId + 1
}

app.post('/api/persons', (request, response) => {
  const body = request.body;

  if(!body.name || !body.number){
    return response.status(400).json({
      error: 'name or number is missing'
    })
  } else if(persons.some(person => person.name === body.name)){
    return response.status(400).json({
      error: `${body.name} already exists in the phonebook`
    })
  }
  const newPerson = {
    id: generateId(),
    name: body.name,
    number: body.number
  }
  persons = persons.concat(newPerson)

  response.json(newPerson)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
