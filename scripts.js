        var mybutton = document.getElementById("back-to-top");

        window.onscroll = function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        };

        mybutton.onclick = function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

    document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.quiz-question');
    const resultContainer = document.querySelector('.result');
    const recommendationText = document.getElementById('recommendation-text');
    let currentQuestionIndex = 0;
    let answers = [];

    const recommendations = {
    fantasy: {
        adventurous: {
            standalone: "You might enjoy *The Hobbit* by J.R.R. Tolkien!",
            series: "You might enjoy *The Lord of the Rings* series by J.R.R. Tolkien!"
        },
        emotional: {
            standalone: "Try *The Night Circus* by Erin Morgenstern!",
            series: "Check out *His Dark Materials* series by Philip Pullman."
        },
        dark: {
            standalone: "Check out *A Song of Ice and Fire* by George R.R. Martin.",
            series: "The *A Song of Ice and Fire* series by George R.R. Martin is a great choice!"
        },
        uplifting: {
            standalone: "How about *Harry Potter and the Sorcerer's Stone* by J.K. Rowling?",
            series: "Try the *Harry Potter* series by J.K. Rowling!"
        }
    },
    mystery: {
        adventurous: {
            standalone: "You might like *The Da Vinci Code* by Dan Brown!",
            series: "Try the *Sherlock Holmes* series by Arthur Conan Doyle."
        },
        emotional: {
            standalone: "Give *The Silent Patient* by Alex Michaelides a try!",
            series: "The *Detective Cormoran Strike* series by Robert Galbraith could be great!"
        },
        dark: {
            standalone: "Explore *The Girl with the Dragon Tattoo* by Stieg Larsson.",
            series: "You might enjoy the *Millennium* series by Stieg Larsson!"
        },
        uplifting: {
            standalone: "Try the cozy mystery *The No. 1 Ladies' Detective Agency* by Alexander McCall Smith.",
            series: "The *No. 1 Ladies' Detective Agency* series by Alexander McCall Smith is a good pick!"
        }
    },
    romance: {
        adventurous: {
            standalone: "You might enjoy *Outlander* by Diana Gabaldon!",
            series: "Try the *Outlander* series by Diana Gabaldon!"
        },
        emotional: {
            standalone: "How about *Me Before You* by Jojo Moyes?",
            series: "You might like the *Bridgerton* series by Julia Quinn!"
        },
        dark: {
            standalone: "Consider reading *Wuthering Heights* by Emily Brontë.",
            series: "The *Twilight* series by Stephenie Meyer might be right for you!"
        },
        uplifting: {
            standalone: "Try *Pride and Prejudice* by Jane Austen!",
            series: "The *Pride and Prejudice* series might be a nice fit!"
        }
    },
    classics: {
        adventurous: {
            standalone: "Read *Robinson Crusoe* by Daniel Defoe!",
            series: "The *The Count of Monte Cristo* series by Alexandre Dumas could be great!"
        },
        emotional: {
            standalone: "Try *Jane Eyre* by Charlotte Brontë.",
            series: "You might enjoy the *Little House on the Prairie* series by Laura Ingalls Wilder."
        },
        dark: {
            standalone: "Dive into *Dracula* by Bram Stoker.",
            series: "The *Sherlock Holmes* series by Arthur Conan Doyle is a classic choice."
        },
        uplifting: {
            standalone: "How about *Little Women* by Louisa May Alcott?",
            series: "The *Anne of Green Gables* series by L.M. Montgomery is an uplifting option!"
        }
    }
};

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const choice = this.getAttribute('data-choice');
        
        if (choice) {
            answers.push(choice); 
        } 

        if (currentQuestionIndex < questions.length - 1) {
            questions[currentQuestionIndex].classList.remove('active');
            currentQuestionIndex++;
            questions[currentQuestionIndex].classList.add('active');
        } else {
            displayResult();
        }
    });
});

function displayResult() {
    questions.forEach(q => q.classList.remove('active'));

    const genre = answers[0];
    const vibe = answers[1];
    const type = answers[2];  

    if (!recommendations[genre]) {
        console.log('Genre not found in recommendations:', genre);
        return;  
    }

    const recommendation = recommendations[genre][vibe][type];

    recommendationText.innerText = recommendation || "Sorry, we couldn't find a match for your preferences!";
    resultContainer.classList.add('active');
}

window.restartQuiz = function() {
    answers = [];
    currentQuestionIndex = 0;
    
    resultContainer.classList.remove('active');
    questions.forEach(q => q.classList.remove('active'));
    
    questions[0].classList.add('active');
};

document.querySelector('.btn-secondary').addEventListener('click', function() {
    restartQuiz();
});

});

const arrowBtn = document.getElementById('arrowBtn');
const verticalNav = document.getElementById('verticalNav');

arrowBtn.addEventListener('click', () => {
    verticalNav.classList.toggle('active');
    arrowBtn.classList.toggle('shifted');

    if (verticalNav.classList.contains('active')) {
        arrowBtn.innerHTML = '&lt;'; 
    } else {
        arrowBtn.innerHTML = '&gt;'; 
    }
});
