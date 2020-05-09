let quiz = [
    {
        question: "how old are you?",
        options: {
            a: 10,
            b: 12,
            c: 9,
            d: 16,
            e: 13
        },
        answer: "12"
    },
    {
        question: "where do you live?",
        options: {
            a: "abuja",
            b: "lagos",
            c: "port harcourt",
            d: "uyo",
            e: "kano"
        },
        answer: "uyo"
    },
    {
        question: "where do you school?",
        options: {
            a: "kings college",
            b: "trinity college",
            c: "pegasus secondary",
            d: "Air Force Secondary",
            e: "federal Govt college"
        },
        answer: "pegasus secondary"
    },
    {
        question: "who is the president of Nigeria?",
        options: {
            a: "buhari",
            b: "obasanjo",
            c: "GEJ",
            d: "gowon",
            e: "atiku"
        },
        answer: "buhari"
    },
    {
        question: "who is the governor of the CBN?",
        options: {
            a: "charles Soludo",
            b: "emem isong",
            c: "ngozi Iwela",
            d: "sanusi lamido",
            e: "Godwin emefele"
        },
        answer: "Godwin emefele"
    }
]

const $displayQuiz = $('#displayQuestion');
const $scores = $('#scores');

let score = 0;




// let questionOne = document.getElementById('question1');
// let questionTwo = document.getElementById('question2');
// let questionThree = document.getElementById('question3');
// let questionFour = document.getElementById('question4');
// let questionFive = document.getElementById('question5');
// let next = document.getElementById('next'); 
// let previous = document.getElementById('previous'); 

// next.addEventListener('click', () => {
//     if (questionOne.style.display = "block") {
//         questionOne.style.display = "none";
//         questionTwo.style.display = "block";
//         previous.style.display = "inline-block";
//     } else if (questionTwo.style.display = "block"){
//         questionThree.style.display = "block";
//         questionTwo.style.display = "none";
//         previous.style.display = "inline-block";
//     } else if (questionThree) {
//         questionThree.style.display = "none";
//         questionFour.style.display = "block";
//         previous.style.display = "inline-block";
//         return next;
//     } else if (questionFour) {
//         questionFive.style.display = "block";
//         questionFour.style.display = "none";
//         previous.style.display = "inline-block";
//         return next;
//     } else {
//         questionFive.style.display = "block";
//         questionFour.style.display = "none";
//         previous.style.display = "inline-block";
//     }
    
// });
// previous.addEventListener('click', () => {
//     questionOne.style.display = "block";
//     questionTwo.style.display = "none";
// })
// for (let i = 0; i < quiz.length; i++) {
//     let questions = quiz[0][0];
// }



const startQuiz = ()=>{
   
    $displayQuiz.empty();
    $scores.empty();
    let questions=`
    <h3>${quiz[0].question}</h3>
    <p><input type="radio" name='question1' id='question1' value='${quiz[0].options.a}'>${quiz[0].options.a}</p>
    <p><input type="radio" name='question1' id='question1' value='${quiz[0].options.b}'>${quiz[0].options.b}</p>
    <p><input type="radio" name='question1' id='question1' value='${quiz[0].options.c}'>${quiz[0].options.c}</p>
    <p><input type="radio" name='question1' id='question1' value='${quiz[0].options.d}'>${quiz[0].options.d}</p>
    <p><input type="radio" name='question1' id='question1' value='${quiz[0].options.e}'>${quiz[0].options.e}</p>
    <p></p>
    <button id='next_2' onclick='q2()'>Next question</button>`;
    $displayQuiz.append(questions);
};



const q2 = () => {
    let ans =$('input[name=question1]:checked').val()
    if (ans === quiz[0].answer){
        score++;
    }

    $displayQuiz.empty();
    let question2 =`<h3>${quiz[1].question}</h3>
    <p><input type="radio" name='question2' value='${quiz[1].options.a}'>${quiz[1].options.a}</p>
    <p><input type="radio" name='question2' value='${quiz[1].options.b}'>${quiz[1].options.b}</p>
    <p><input type="radio" name='question2' value='${quiz[1].options.c}'>${quiz[1].options.c}</p>
    <p><input type="radio" name='question2' value='${quiz[1].options.d}'>${quiz[1].options.d}</p>
    <p><input type="radio" name='question2' value='${quiz[1].options.e}'>${quiz[1].options.e}</p>
    <p></p>
    <button onclick="pre()">Previous question</button>
    <button onclick='q3()'>Next question</button>`
    $displayQuiz.append(question2);
};
const q3 = () => {
    let ans =$('input[name=question2]:checked').val()
    if (ans === quiz[1].answer){
        score++;
    }
    $displayQuiz.empty();
    let question3 =`<h3>${quiz[2].question}</h3>
    <p><input type="radio" name='question3' value='${quiz[2].options.a}'>${quiz[2].options.a}</p>
    <p><input type="radio" name='question3' value='${quiz[2].options.b}'>${quiz[2].options.b}</p>
    <p><input type="radio" name='question3' value='${quiz[2].options.c}'>${quiz[2].options.c}</p>
    <p><input type="radio" name='question3' value='${quiz[2].options.d}'>${quiz[2].options.d}</p>
    <p><input type="radio" name='question3' value='${quiz[2].options.e}'>${quiz[2].options.e}</p>
    <p></p>
    <button onclick="pre()">Previous question</button>
    <button onclick='q4()'>Next question</button>`
    $displayQuiz.append(question3);
};
const q4 = () => {
    let ans =$('input[name=question3]:checked').val()
    if (ans === quiz[2].answer){
        score++;
    }
    $displayQuiz.empty();
    let question4 =`<h3>${quiz[3].question}</h3>
    <p><input type="radio" name='question4' value='${quiz[3].options.a}'>${quiz[3].options.a}</p>
    <p><input type="radio" name='question4' value='${quiz[3].options.b}'>${quiz[3].options.b}</p>
    <p><input type="radio" name='question4' value='${quiz[3].options.c}'>${quiz[3].options.c}</p>
    <p><input type="radio" name='question4' value='${quiz[3].options.d}'>${quiz[3].options.d}</p>
    <p><input type="radio" name='question4' value='${quiz[3].options.e}'>${quiz[3].options.e}</p>
    <p></p>
    <button onclick="pre()">Previous question</button>
    <button onclick='q5()'>Next question</button>`
    $displayQuiz.append(question4); 
};
const q5 = () => {
    let ans =$('input[name=question4]:checked').val()
    if (ans === quiz[3].answer){
        score++;
    }
    $displayQuiz.empty();
    let question5 =`<h3>${quiz[4].question}</h3>
    <p><input type="radio" name='question5' value='${quiz[4].options.a}'>${quiz[4].options.a}</p>
    <p><input type="radio" name='question5' value='${quiz[4].options.b}'>${quiz[4].options.b}</p>
    <p><input type="radio" name='question5' value='${quiz[4].options.c}'>${quiz[4].options.c}</p>
    <p><input type="radio" name='question5' value='${quiz[4].options.d}'>${quiz[4].options.d}</p>
    <p><input type="radio" name='question5' value='${quiz[4].options.e}'>${quiz[4].options.e}</p>
    <p></p>
    <button onclick="pre()">Previous question</button>
    <button onclick="submit()">Submit</button>`
    $displayQuiz.append(question5);   
};
function pre(){
    $displayQuiz.empty();
    let verdit = `Your answer has already been submitted therefore you can't edit again. 
    `
    $scores.append(verdit + `<p></p><br>you scored ${score} out of ${quiz.length}<p></p><br> <button class="green" onclick="startQuiz()">Restart Quiz</button>`);
    
}
function submit(){
    let ans =$('input[name=question5]:checked').val()
    if (ans === quiz[4].answer){
        score++;
    }
    $displayQuiz.empty();
    let verdit = `You scored ${score} out of ${quiz.length}`
    $scores.append(verdit);
}