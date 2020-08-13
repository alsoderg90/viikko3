const express= require('express')
const app = express()

app.use(express.json())

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

  app.get('/api/persons', (request, response) => {
      response.json(persons)
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log("poistettava",persons[id],"poistettavan id",id,"koko lista",persons)
    persons = persons.filter(person => person.id !== id)

    
    response.status(204).end()
})

  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const note = {
      content: body.content,
      important: body.important || false,
      date: new Date(),
      id: generateId(),
    }
  
    notes = notes.concat(note)
  
    response.json(note)
  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })