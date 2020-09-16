'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which animal does not appear in the Chinese zodiac?',
      answers: [
        'Dragon',
        'Rabbit',
        'Dog',
        'Hummingbird'
      ],
      correctAnswer: 'Hummingbird'
    },
    {
      question: 'Which Olympic sport is Michael Phelps known for?',
      answers: [
        'Snowboarding',
        'Skiing',
        'Running',
        'Swimming'
      ],
      correctAnswer: 'Swimming'
    },
    {
      question: '"I see dead people," is a line from which horror film…',
      answers: [
        'The Sixth Sense',
        'The Grudge',
        'The Shining',
        'The Exorcist'
      ],
      correctAnswer: 'The Exorcist'
    },
    {
      question: 'Which one of these characters aren\'t a part of the Friends group?',
      answers: [
        'Rachel',
        'Joey',
        'Gunther',
        'Monica'
      ],
      correctAnswer: 'Gunther'
    },
    {
      question: 'Fe is the chemical symbol for..',
      answers: [
        'Zinc',
        'Hydrogen',
        'Fluorine',
        'Iron'
      ],
      correctAnswer: 'Iron'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)