const mongoose = require('mongoose')

if(process.argv.length < 3){
  console.log('Missing arguments')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = 
`mongodb+srv://fullstack:${password}@fullstackopencluster.x9dwg.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('person', personSchema)

if(name && number){
  const person = new Person({
    name: name,
    number: number
  })

  person.save().then(result => {
    console.log(`Added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

if(name === undefined || number === undefined)
Person.find({}).then(result => {
  console.log('phonebook:')
  result.forEach(person => {
    console.log(`${person.name} ${person.number}`)
    mongoose.connection.close()
  })
})