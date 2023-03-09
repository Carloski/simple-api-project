const express = require('express')
const app = express()
const PORT = 8000

// rappers:
// 'eminem': {
//   'age': 50 ,
//   'aka': 'Slim Shady',
//   'born': 'October 17, 1972',
//   'birthPlace': 'St. Joseph, Missouri',
//   'birthName': 'Marshall Bruce Mathers III'
//}


// 'tupac': {
//   'age': 51,
//   'aka': 'Pac',
//   'born': 'May 21, 1972',
//   'birthPlace': 'Brooklyn, New York',
//   'birthName': 'Lesane Parish Crooks'
//}


// 'nas': {
//   'age': 49,
//   'aka': 'Escobar',
//   'born': 'September 14, 1973',
//   'birthPlace': 'Queens, New York',
//   'birthName': 'Nasir bin Olu Dara Jones'
//}


// 'big': {
//   'age': 50 ,
//   'aka': 'Biggie',
//   'born': 'May 21, 1972',
//   'birthPlace': 'Brooklyn, New York',
//   'birthName': 'Christopher George Latore Wallace'
//}


const rappers = {
  'jay': {
    'age': 53 ,
    'aka': 'HOV',
    'born': 'December 4, 1969',
    'birthPlace': 'Brooklyn, New York',
    'birthName': 'Shawn Corey Carter'
    },
    'eminem': {
      'age': 50 ,
      'aka': 'Slim Shady',
      'born': 'October 17, 1972',
      'birthPlace': 'St. Joseph, Missouri',
      'birthName': 'Marshall Bruce Mathers III'
    },
    'tupac': {
      'age': 51,
      'aka': 'Pac',
      'born': 'May 21, 1972',
      'birthPlace': 'Brooklyn, New York',
      'birthName': 'Lesane Parish Crooks'
    },
    'nas': {
      'age': 49,
      'aka': 'Escobar',
      'born': 'September 14, 1973',
      'birthPlace': 'Queens, New York',
      'birthName': 'Nasir bin Olu Dara Jones'
    },
    'big': {
      'age': 50 ,
      'aka': 'Biggie',
      'born': 'May 21, 1972',
      'birthPlace': 'Brooklyn, New York',
      'birthName': 'Christopher George Latore Wallace'
    },
    'dylan': {
      'age': 'dylan' ,
      'aka': 'dylan',
      'born': 'dylan',
      'birthPlace': 'dylan',
      'birthName': 'dylan'
    }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/api/:name', (req, res) => {
  const rapperName = req.params.name.toLowerCase()
  if(rappers[rapperName]){
    res.json(rappers[rapperName])
  }else {
    res.json('dylan')
  }
  
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})