const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((task1) => {
  return eachTutorial(task1);
  })

}

const eachTutorial = (task1) =>{
 const splitTutorial = task1.split(" ")
 const titledTutorial = splitTutorial.map(word => word.replace(word[0], word[0].toUpperCase()))
 return titledTutorial.join(" ")
}
