import fs from 'fs'

export const chooseRandom = (array, numItems) => {
    if (array === undefined 
      || numItems < 1
      || array.length <= 1) {
      return array;
    } 
    else if (numItems <= 0
      || numItems === undefined 
      || numItems > array.length) {
      numItems = Math.floor( Math.random() * array.length)
    }
    array.length=numItems 
    return array.map(item => array[item])
  }

export const createPrompt = (obj = {}) => {
    let arr = []
    let {numQuestions = 1, numChoices = 2} = obj
    for(let i = 1; i < numQuestions + 1; i++){
        arr.push({
        type: 'input',
        name: 'question-' + i,
        message: 'Enter question ' + i
        })
        for(let j = 1; j < numChoices + 1; j++){
            arr.push({
            type: 'input',
            name: 'question-' + i + '-choice-' + j,
            message: 'Enter answer choice ' + j + ' for question ' + i
            })}}
    return arr
}

export const createQuestions = (question = {}) => {
  let questions = {}  
  let keys = Object.keys(question)  
    keys.forEach((q) => {
      if (!(q.includes('choice'))) {
        questions[q] = {
          type: 'list',
          name: q,
          message: question[q],
          choices: []
        }} 
      else {
        let i = 'question-' + q.split('-')[1]
        let temp = questions[i]
        temp['choices'].push(question[q])
      }})
    return Object.values(questions)
  }

export const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)))
  })

export const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err =>
      err ? reject(err) : resolve('File saved successfully')
    )
  })
