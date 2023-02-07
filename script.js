let score = 0;
const totalQuestions = 6; //endre dette antallet dersom dere ønsker flere spørsmål (inkluder "start quiz" som om det er et spørmål)
const questions = [
  { //Dette er kodet som et spørsmål, men er egntlig kun satt opp for at dere skal slippe å lage en unik start
    options: [
      { text: "Start Quizen!", correct: false},
    ]
  },
  {
    question: "Når startet første verdenskrig?",
    options: [
      { text: "1914", correct: true }, //"true" = riktig svar. Skriv det inn i ulike linjer for å endre hvilken knapp som er riktig
      { text: "1939", correct: false }, //Legg til eller fjern så mange svaralternativ som dere ønsker.
      { text: "1945", correct: false },
      { text: "1946", correct: false },
      { text: "1947", correct: false },
      { text: "1948", correct: false },
      { text: "1949", correct: false },
      { text: "1950", correct: false },
      { text: "1951", correct: false },
      { text: "1952", correct: false },
      { text: "1953", correct: false },
      { text: "1954", correct: false },
      { text: "1955", correct: false },
      { text: "1956", correct: false },
      { text: "1957", correct: false },
      
    ],
    imageUrl: 'Bilder/MicrosoftTeams-image.png', //bytt ut med en ny bildeaddresse for hvert spørsmål. 400 og 200 er størrelsen i pixler.
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "Hvem var den første presidenten i USA",
    options: [
      { text: "Donald Trump", correct: false },
      { text: "George Washington", correct: true },
      { text: "Obama", correct: false }
    ],
    imageUrl: 'Bilder/MicrosoftTeams-image (1).png',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "Hvilke byer ble bombet med atombomber i 1945?",
    options: [
      { text: "Hiroshima og Nagasaki", correct: true },
      { text: "New York og Miama", correct: false },
      { text: "Ohio og Drammen", correct: false }
    ],
    imageUrl: 'Bilder/MicrosoftTeams-image (2).png',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "Hvilken år faller Berlinmuren?",
    options: [
      { text: "1999", correct: false },
      { text: "1979", correct: false },
      { text: "1989", correct: true }
    ],
    imageUrl: 'Bilder/MicrosoftTeams-image (3).png',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "Hvem oppdaget Amerika?",
    options: [
      { text: "Christopher Columbus", correct: true },
      { text: "En Danske", correct: false },
      { text: "Obama", correct: false }
    ],
    imageUrl: 'Bilder/MicrosoftTeams-image (4).png',
    altText: 'Beskrivelse av bilde'
  },
  // Kopier malen over for å legge til flere spørsmål. Husk å endre antall spørsmål øverst.
];

//________________Dere trenger ikke redigere noe under denne linjen________________//


// Lager en variabel for å holde styr på hvilket spørsmål som er aktivt
let currentQuestion = 0;

// Håndterer klikk på alternativer, øker poengsummen hvis riktig alternativ er valgt
const handleOptionClick = (isCorrect) => {
  if (isCorrect) {
    score++;
  }
  // Sjekker om dette er siste spørsmål
  if (currentQuestion === totalQuestions - 1) {
    const resultContainer = document.querySelector("#resultContainer");
    resultContainer.innerHTML = `Your final score is: ${score}/${questions.length-1}`;
    resultContainer.style.display = "block"; //Viser resultatteksten etter at siste spørsmål er besvart
    questionContainer.style.display = "none"; //skjuler spørsmålsboksen etter at siste spørsmål er besvart

  } else {
    currentQuestion++;
    renderQuestion();
  }
};
// Renderer det aktive spørsmålet til siden
const renderQuestion = () => {
  const questionContainer = document.querySelector("#questionContainer");
  const currentQ = questions[currentQuestion];
  questionContainer.innerHTML = `
    <h3>${currentQ.question}</h3>
    <img src="${questions[currentQuestion].imageUrl}" alt="Question Image">
    <div>
      ${currentQ.options
        .map(
          (option, index) => `
        <button onclick="handleOptionClick(${option.correct})">
          ${option.text}
        </button>
      `
        )
        .join("")}
    </div>
  `;
};
// Render første spørsmål når siden lastes
renderQuestion();