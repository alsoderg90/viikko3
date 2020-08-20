const express= require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')
// eslint-disable-next-line no-unused-vars
const { Mongoose } = require('mongoose')


app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :type'))

// eslint-disable-next-line no-unused-vars
morgan.token('type', function (req, res) { return JSON.stringify(req.body)
}
)


let persons = [

  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4
  }
]



app.get('/info/',(request,response) => {
  Person.count({}).then(result => {
    response.send(`<p>Phonebook has info for ${result} people<p><br>${Date()}`)
  })
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(person => {
    response.json(person)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    if (person) {
      response.json(person)
    }
    else {
      response.status(404).end()
    }
  })
    // eslint-disable-next-line no-undef
    .catch(error => { next(error)
    })
})

/*
  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    const person = persons.find(person => person.id === id)
    console.log(person)
    if (person) {
        response.json(person)
    }

    else {
        response.sendStatus(404).end()
        console.log(response)
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log("poistettava",persons[id],"poistettavan id",id,"koko lista",persons)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})
  */

// eslint-disable-next-line no-unused-vars
const generateId = () => {
  console.log(...persons.map(person => person.id))
  const maxId = parseInt(1000*(Math.random()))
  /*const maxId = persons.length > 0
  ? Math.max(...persons.map(person => person.id))
  :0*/
  return maxId + 1
}
/// findbyidanddelete vai findbyidandremove?
app.delete('/api/persons/:id', (request, response) => {
  // eslint-disable-next-line no-unused-vars
  Person.findByIdAndDelete(request.params.id).then(result => {
    response.status(204).end()
  })
  // eslint-disable-next-line no-undef
    .catch(error => (next(error)))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  /*
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number missing'
    })
  }

  const names = persons.map(person => person.name.toLowerCase())
  console.log(names)

  if (names.find(name => name === body.name)) {
    return response.status(400).json({
      error: `${body.name} is already added`
    })
  }*/

  const person = new Person({
    name : body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON())
  })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})


const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})