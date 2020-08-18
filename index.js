const express= require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :type'))

morgan.token('type', function (req, res) { return JSON.stringify(req.body)
 }
)

let persons = [

          {
            name: "Arto Hellas",
            number: "040-123456",
            id: 1
          },          
          {
            name: "Ada Lovelace",
            number: "39-44-5323523",
            id: 2
          },          
          {
            name: "Dan Abramov",
            number: "12-43-234345",
            id: 3
          },         
          {
            name: "Mary Poppendieck",
            number: "39-23-6423122",
            id: 4
          }
        ]


  app.get('/info/',(request,response) => {
    
    response.send(`<p>Phonebook has info for ${persons.length} people<p>
    <br>${Date()}`)
  })

  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })
  
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

const generateId = () => {
  console.log(...persons.map(person => person.id))
  const maxId = parseInt(1000*(Math.random()))
  /*const maxId = persons.length > 0
  ? Math.max(...persons.map(person => person.id))
  :0*/
  return maxId + 1
}
 

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log("poistettava",persons[id],"poistettavan id",id,"koko lista",persons)
    persons = persons.filter(person => person.id !== id)

    
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

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
  }

  const person = {
    name : body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)
  response.json(person)
})
  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })