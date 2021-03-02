/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. Nitrogen purging should be done:", ///// Write the question inside double quotes
            answers: {
                a: "Before switching on the light source", ///// Write the option 1 inside double quotes
                b: "After switching on the light source", ///// Write the option 2 inside double quotes
		c: "Any time during the measurement", ///// Write the option 1 inside double quotes
                b: "None of the above are correct", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Reason for purging Nitrogen in the chamber of the CD spectrometer is: ",  ///// Write the question inside double quotes
      answers: {
        a: "Nitrogen is an inert gas.",  ///// Write the option 1 inside double quotes
        b: "Oxygen present may be converted to ozone by far-UV light from the high intensity arc, and ozone will damage optical surfaces", ///// Write the option 2 inside double quotes
        c: "Nitrogen Gas(N2)makes up 78.03% of the air.",
	d: "None of the above are correct"
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

			 
     {
      question: "3. Why it is essential to run a blank spectrum with buffer or solvent system before measuring the spectrum for sample:  ",  ///// Write the question inside double quotes
      answers: {
        a: "In order to check that the absorbance and High Tension voltage is not excessive.",  ///// Write the option 1 inside double quotes
        b: "To measure the absorbance of buffer.", ///// Write the option 2 inside double quotes
        c: "Selection of good buffer.",
	d: "All of the above are correct"
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },			 


     {
      question: "4. Why the regulation of temperature of the cell holder is important:  ",  ///// Write the question inside double quotes
      answers: {
        a: "Why the regulation of temperature of the cell holder is important: ",  ///// Write the option 1 inside double quotes
        b: "To keep the sample in homogenized state and avoid sample denaturation.", ///// Write the option 2 inside double quotes
        c: "To maintain the temperature of the buffer or solvent used.",
	d: "None of the above are correct."
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
     },


     {
      question: "5. How much time is required for the machine to warm up and achieve stability ",  ///// Write the question inside double quotes
      answers: {
        a: "1 min",  ///// Write the option 1 inside double quotes
        b: "10 min", ///// Write the option 2 inside double quotes
        c: "15 min",
	d: "30 min"
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },			 


      {
      question: "6. The optimum path length generally required for: ",  ///// Write the question inside double quotes
      answers: {
        a: "Far UV CD spectra.",  ///// Write the option 1 inside double quotes
        b: "Near UV CD spectra.", ///// Write the option 2 inside double quotes
        c: "None of the above are correct.",
	d: "Both (A) and (B) are correct."
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    }			 
			 
    ];


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
