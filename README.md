# JS Assignment Quizler
---
In this assignment students are tasked with creating a custom library for a command line application
which builds quizzes and allows the user to take quizzes they have built or pull
random questions from multiple quizzes and take a random quiz.

The command line application is built using [inquirer.js](https://github.com/SBoudrias/Inquirer.js/)
and [vorpal.js](https://github.com/dthree/vorpal/wiki). The documentation for each may of interest to students when
completing this assignment, however a full implementation of the command line
interface has been provided.

To finish fully implementing this command line application students will need to create a few helper functions in their lib.js file. There are three methods specifically required by the tests which are detailed below.

**First**, students need to implement the ```chooseRandom``` function. This function takes an ```array``` and the number of random items to choose from the array (```numItems```). It should return a new array containing the correct number of randomly selected, unique items from the original array. Students must export their ```createRandom``` function from the lib.js file in order to run the included test cases.

**Second**, they will add a ```createPrompt``` function which expects an object with properties: ```numQuestions``` and ```numChoices``` and must return an array of objects in a specific format (listed in the CreatePrompt Format section below). The ```numQuestions``` parameter should have a default value of 1 and the ```numchoices``` parameter should have a default value of 2.

**Third**, students will add ```createQuestions```, which takes an object which has question numbers and choices as keys and returns an array of question objects which each contain a question and its corresponding choices. The object parameter should default to an empty object. The format of the array of questions objects is detailed in the CreateQuestion Format section below.

**Finally**, students will test their code in lib.js using ```npm test``` and ensure all tests for chooseRandom, createPrompt, and createQuestions pass successfully.

## Goal
---
The main goal is to assess the students knowledge of the JavaScript language and,
more specifically, their ability to write and use Node as a JavaScript environment.
Also, to assess students ability to adapt to new technologies and read documentation
of libraries curated for the requirements of this assignment. Lastly, to assess students 
abilities to combine external libraries with their own custom libraries in order to 
build an application.

## ChooseRandom Tasks
---
- [x] Implement ```chooseRandom``` function
- [x] Should take 2 parameters, ```array``` and ```numItems```
- [x] ```array``` should default to an empty array
- [x] If ```array``` has length 0 or 1, then simply return it
- [x] ```numItems``` must be checked to ensure it is a number in the range 1 to ```array.length``` (inclusive)
- [x] If ```numItems``` is outside of the correct range, then it should be set to a random number within the correct range
- [x] Should always return an array
- [x] Should not mutate the array passed in
- [x] Should return a random array if possible (size > 1)
- [x] Should return an array of the passed in length
- [x] Run command ```npm test``` and ensure all tests for chooseRandom pass successfully

## CreatePrompt & CreateQuestions Tasks
---
- [x] Implement ```createPrompt``` using the given format below and the given test cases
- [x] Implement the ```createQuestions``` function based on the format below and provided tests
- [x] Ensure all tests for createPrompt & createQuestions are passing when you run the ```npm test``` command

### CreatePrompt Format

---

createPrompt should return an array of objects in the following format:

``` javascript
[
  { // Questions are repeated numQuestion number of times
    type: 'input',
    name: `question-${(Question Number)}`,
    message: `Enter question ${(Question Number)}`
  },
  { // Choices are repeated numChoices number of times for each question
    type: 'input',
    name: `question-${(Question Number)}-choice-${(Choice Number)}`,
    message: `Enter answer choice ${(Choice Number)} for question ${(Question Number)}`
  },
  .
  .
  .
]
```

Example of createPromt({ numQuestions: 2, numChoices: 2 }):

``` javascript
[
  {
    type: 'input',
    name: `question-1`,
    message: `Enter question 1`
  },
  {
    type: 'input',
    name: `question-1-choice-1`,
    message: `Enter answer choice 1 for question 1`
  },
  {
    type: 'input',
    name: `question-1-choice-2`,
    message: `Enter answer choice 2 for question 1`
  },
  {
    type: 'input',
    name: `question-2`,
    message: `Enter question 2`
  },
  {
    type: 'input',
    name: `question-2-choice-1`,
    message: `Enter answer choice 1 for question 2`
  },
  {
    type: 'input',
    name: `question-2-choice-2`,
    message: `Enter answer choice 2 for question 2`
  },
]
```

### CreateQuestions Format

---

createQuestions should return an array of question objects in the following format:

``` javascript
 [
  { // Repeated for the total number of questions
    type: 'list',
    name: (Question Name),
    message: (Question),
    choices: [ // Repeated for the total number of choices for each question
      (Choice-1)
      (Choice-2)
      (Choice-3)
      (Choice-4)
      .
      .
      .
    ]
  },
  .
  .
  .
]
```

Example of:

``` javascript
createQuestions({
  'question-1': 'Do you think you\'re ready for this?',
  'question-1-choice-1': 'Beyond ready!!!',
  'question-1-choice-2': 'Totally!',
  'question-2': 'Are you loving JS yet?',
  'question-2-choice-1': 'It\'s tubular!',
  'question-2-choice-2': 'Way rad man!'
})
```

Result:

``` javascript
[
  { // Repeated for the total number of questions
    type: 'list',
    name: 'question-1',
    message: 'Do you think you\'re ready for this?',
    choices: [
      'Beyond ready!!!',
      'Totally!'
    ]
  }, { // Repeated for the total number of questions
    type: 'list',
    name: 'question-2',
    message: 'Are you loving JS yet?',
    choices: [
      'It\'s tubular!',
      'Way rad man!'
    ]
  }
]
```
