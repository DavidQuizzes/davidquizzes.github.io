function genHeader(text) {
  return `<h1>${text}</h1>`;
}

function genSubheader(text) {
  return `<h2>${text}</h2>`;
}

function genParagraph(text) {
  return `<p>${text}</p>`
}

function genSpan(text) {
  return `<span>${text}</span>`
}

function genLink(text, link) {
  return `<a href="${link}">${text}</a>`
}

var quizzes2 = {
  quizzes: [
    {
      name: "Demo math quiz (used for development and by DavidDGTNT)",
      link: "https://davidquizzes.github.io/SingleplayerQuiz/"
    },
  ],
}

function genQuizzes() {
  var html = ""

  quizzes2.quizzes.forEach((object) => {
    html = html+"<br>"+genLink(object.name, object.link)
  })

  return html;
}

var lcsQuizzes = {
  quizzes: [
    {
      name: "Demo math quiz (used for development and by David)",
      link: "https://davidquizzes.github.io/SingleplayerQuiz/"
    },
  ],
}

function genLcsQuizzes() {
  var html = ""

  lcsQuizzes.quizzes.forEach((object) => {
    html = html+"<br>"+genLink(object.name, object.link)
  })

  return html;
}

var mainHeader = genHeader("David's Single-player Quiz");

var mainSubheader = genSubheader("Home");

var mainContent = `${genParagraph(`Hello, and welcome to DSQ, where we make quizzes! We are inspired by Kahoot! (trademark of Kahoot! AS). The quizzes are coded in JSX using a special React component (see ${genLink("the Dev Guide", "javascript:devguide()")} for more).`)}`

document.getElementById('content').innerHTML = `${mainHeader}${mainSubheader}<br>${mainContent}`;

function home() {
  document.getElementById('content').innerHTML = `${mainHeader}${mainSubheader}<br>${mainContent}`;
}

function lcs() {
  var subheader = genSubheader("Made by LCS")
  
  // var content = `${genLink("Demo math quiz (used for development and by David):", "https://daviddgtnt.github.io/SingleplayerQuiz/")}<br>${genSpan('More coming soon!')}`

  var content = `${genLcsQuizzes()}`

  document.getElementById('content').innerHTML = `${mainHeader}${subheader}<br>${content}`
}

function quizzes() {
  var subheader = genSubheader("Quizzes")
  
  // var content = `${genLink("Demo math quiz (used for development and by David):", "https://daviddgtnt.github.io/SingleplayerQuiz/")}<br>${genSpan('More coming soon!')}`

  var content = `${genQuizzes()}`

  document.getElementById('content').innerHTML = `${mainHeader}${subheader}<br>${content}`
}

function devguide() {
  var subheader = genSubheader('Dev Guide')
  
  var content = `${genParagraph('Coming soon!')}`

  document.getElementById('content').innerHTML = `${mainHeader}${subheader}<br>${content}`
}

function submit() {
  var subheader = genSubheader('Submit')

  var content = `${genParagraph('We are currently not accepting submissions.')}`

  document.getElementById('content').innerHTML = `${mainHeader}${subheader}<br>${content}`
}