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
      { text: "Ja", correct: false },
      { text: "1910", correct: false }
      
    ],
    imageUrl: 'Bilder/MicrosoftTeams-image.png', //bytt ut med en ny bildeaddresse for hvert spørsmål. 400 og 200 er størrelsen i pixler.
    altText: '2 soldater i et sort hvit bilde sikter våpen mot himmelen'
  },
  {
    question: "Hvem var den første presidenten i USA",
    options: [
      { text: "Donald Trump", correct: false },
      { text: "George Washington", correct: true },
      { text: "Bill Clinton", correct: false }
    ],
    imageUrl: 'Bilder/MicrosoftTeams-image (1).png',
    altText: 'En statue av George Washington som sitter i en stol'
  },
  {
    question: "Hvilke byer ble bombet med atombomber i 1945?",
    options: [
      { text: "Hiroshima og Nagasaki", correct: true },
      { text: "New York og Miama", correct: false },
      { text: "Ohio og Drammen", correct: false }
    ],
    imageUrl: 'Bilder/MicrosoftTeams-image (2).png',
    altText: 'Et sort hvit bilde av en eksplosjon satt i et hav'
  },
  {
    question: "Hvor falt berlinmuren",
    options: [
      { text: "Juice World", correct: false },
      { text: "Ohio", correct: false },
      { text: "Berlin", correct: true }
    ],
    imageUrl: 'Bilder/MicrosoftTeams-image (3).png',
    altText: 'Et svart hvit bilde av berlinemuren'
  },
  {
    question: "Hvem oppdaget Amerika?",
    options: [
      { text: "Christopher Columbus", correct: false },
      { text: "En gæren Nordmann", correct: true },
      { text: "Obama", correct: false }
    ],
    imageUrl: 'Bilder/MicrosoftTeams-image (4).png',
    altText: 'Et forstørrelsesglass over teksten "United States" på et kart over USA'
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