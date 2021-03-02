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
            question: "1. CD spectrometer can be operated in the following region of electromagnetic spectrum", ///// Write the question inside double quotes
            answers: {
                a: "UV region only", ///// Write the option 1 inside double quotes
                b: "Visible region only", ///// Write the option 2 inside double quotes
   	        c: "Both UV and Visible regions", ///// Write the option 1 inside double quotes
                d: "IR only", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Circular dichroism (CD) spectroscopy measures differences in the absorption of left-handed polarized light versus right-handed polarized light which arise due to :",  ///// Write the question inside double quotes
      answers: {
        a: "Structural symmetry.",                  ///// Write the option 1 inside double quotes
        b: "Structural asymmetry.",                  ///// Write the option 2 inside double quotes
        c: "Both (a) and (b)",
	d: "Absence of regular structure", 
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {			  
     question: "3. CD spectrometer is useful in studying: ",  ///// Write the question inside double quotes
      answers: {
        a: "Estimation of various secondary structural elements in proteins ",                  ///// Write the option 1 inside double quotes
        b: "Conformational changes in proteins",                  ///// Write the option 2 inside double quotes
        c: "Both (a) and (b)",
	d: "Determination of complete 3-D structure of proteins", 
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {			  
     question: "4. CD spectrum of a protein is sensitive to the: ",  ///// Write the question inside double quotes
      answers: {
        a: "Temperature",                  ///// Write the option 1 inside double quotes
        b: "pH",                  ///// Write the option 2 inside double quotes
        c: "Buffer type and concentration",
	d: "All of the above", 
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
     

   },

    {
     question: "5. A CD spectrum can exhibit :",  ///// Write the question inside double quotes
      answers: {
        a: "Positive peaks only",                  ///// Write the option 1 inside double quotes
        b: "Negative peaks only",                  ///// Write the option 2 inside double quotes
        c: "Both (a) and (b)",
	d: "Neither positive nor Negative peaks", 
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
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
