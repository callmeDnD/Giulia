/* ============================
   HAND HYGIENE EDUCATIONAL PORTAL
   JAVASCRIPT
   ============================ */

// Quiz Data
const quizzes = {
    quick: [
        {
            question: "How long should you wash your hands with soap and water?",
            type: "multiple-choice",
            answers: [
                { text: "At least 5 seconds", correct: false },
                { text: "At least 20 seconds (about 2x 'Happy Birthday')", correct: true },
                { text: "At least 1 minute", correct: false },
                { text: "Duration doesn't matter", correct: false }
            ],
            explanation: "Proper handwashing requires at least 20-40 seconds to effectively remove microorganisms."
        },
        {
            question: "Which is NOT one of the 5 Moments for Hand Hygiene?",
            type: "multiple-choice",
            answers: [
                { text: "Before touching a patient", correct: false },
                { text: "Before eating lunch", correct: true },
                { text: "After exposure to body fluids", correct: false },
                { text: "Before aseptic procedures", correct: false }
            ],
            explanation: "While eating lunch requires hand hygiene, it's not part of the WHO's 5 critical moments for healthcare settings."
        },
        {
            question: "When should you use soap and water instead of alcohol-based hand rub?",
            type: "multiple-choice",
            answers: [
                { text: "When hands are visibly soiled or contaminated", correct: true },
                { text: "Only on Mondays", correct: false },
                { text: "Never - alcohol-based rub is always better", correct: false },
                { text: "Only during night shifts", correct: false }
            ],
            explanation: "Soap and water is preferred when hands are visibly dirty, as alcohol doesn't work well on soiled hands."
        },
        {
            question: "Which areas are most commonly missed during hand hygiene?",
            type: "multiple-choice",
            answers: [
                { text: "Palms and back of hands", correct: false },
                { text: "Between fingers, under nails, and wrists", correct: true },
                { text: "Forearms only", correct: false },
                { text: "All areas are equally cleaned", correct: false }
            ],
            explanation: "Studies show that between fingers, under fingernails, wrists, and thumbs are the most frequently missed areas."
        },
        {
            question: "How many steps are recommended for alcohol-based hand rub?",
            type: "multiple-choice",
            answers: [
                { text: "3 steps", correct: false },
                { text: "5 steps", correct: false },
                { text: "6 steps", correct: true },
                { text: "10 steps", correct: false }
            ],
            explanation: "The WHO recommends 6 steps for proper alcohol-based hand rub technique to ensure complete coverage."
        }
    ],
    comprehensive: [
        {
            question: "What is the primary goal of hand hygiene in healthcare?",
            type: "multiple-choice",
            answers: [
                { text: "To look clean and professional", correct: false },
                { text: "To prevent transmission of pathogens and reduce healthcare-associated infections", correct: true },
                { text: "To comply with facility regulations", correct: false },
                { text: "To reduce water consumption", correct: false }
            ],
            explanation: "Hand hygiene is the most effective and cost-efficient way to prevent HAIs and protect patients."
        },
        {
            question: "Which moment requires hand hygiene BEFORE a patient care activity?",
            type: "multiple-choice",
            answers: [
                { text: "After removing gloves", correct: false },
                { text: "Before aseptic procedures", correct: true },
                { text: "After contamination exposure", correct: false },
                { text: "Before leaving the patient room", correct: false }
            ],
            explanation: "Before aseptic procedures (like catheter insertion), hand hygiene prevents introduction of pathogens into sterile areas."
        },
        {
            question: "What is the minimum alcohol concentration for hand sanitizers to be effective?",
            type: "multiple-choice",
            answers: [
                { text: "30%", correct: false },
                { text: "50%", correct: false },
                { text: "60%", correct: true },
                { text: "70%", correct: false }
            ],
            explanation: "Hand sanitizers containing at least 60% alcohol are effective against most microorganisms."
        },
        {
            question: "After which patient contact should hand hygiene be performed?",
            type: "multiple-choice",
            answers: [
                { text: "Only after high-risk procedures", correct: false },
                { text: "Only if visible contamination is present", correct: false },
                { text: "After every patient contact, regardless of glove use", correct: true },
                { text: "Only at the end of the shift", correct: false }
            ],
            explanation: "Hand hygiene should occur after every patient contact to prevent cross-contamination."
        },
        {
            question: "Which statement about hand hygiene compliance is true?",
            type: "multiple-choice",
            answers: [
                { text: "Healthcare worker compliance rates are typically 90%+", correct: false },
                { text: "Compliance rates vary but studies show many facilities below 50%", correct: true },
                { text: "Compliance is unnecessary with proper PPE", correct: false },
                { text: "Compliance depends on patient cooperation", correct: false }
            ],
            explanation: "Hand hygiene compliance remains a challenge in healthcare, with many facilities reporting compliance rates below 50%."
        },
        {
            question: "What reduces healthcare-associated infections when proper hand hygiene is implemented?",
            type: "multiple-choice",
            answers: [
                { text: "20% reduction", correct: false },
                { text: "35% reduction", correct: false },
                { text: "Up to 50% reduction", correct: true },
                { text: "80% reduction", correct: false }
            ],
            explanation: "Proper hand hygiene practices can reduce HAI rates by up to 50%, making it a critical intervention."
        },
        {
            question: "Which organism requires special consideration for hand hygiene?",
            type: "multiple-choice",
            answers: [
                { text: "C. difficile spores (not killed by alcohol)", correct: true },
                { text: "E. coli bacteria", correct: false },
                { text: "Staphylococcus aureus", correct: false },
                { text: "Standard viruses only", correct: false }
            ],
            explanation: "C. difficile spores are not killed by alcohol, so soap and water is essential in suspected CDI cases."
        },
        {
            question: "What step is CRITICAL when rinsing hands after washing with soap?",
            type: "multiple-choice",
            answers: [
                { text: "Use the wettest water available", correct: false },
                { text: "Ensure all soap is completely removed", correct: true },
                { text: "Shake hands vigorously in the air", correct: false },
                { text: "Keep hands wet for 30 seconds", correct: false }
            ],
            explanation: "Complete removal of soap is essential; residual soap can irritate skin and reduce effectiveness."
        },
        {
            question: "For the hand rub technique, what is the proper order of steps?",
            type: "multiple-choice",
            answers: [
                { text: "Apply, rub palms, between fingers, thumbs, fingertips in palm", correct: false },
                { text: "Apply, rub palms, right palm over left dorsum, interlock fingers, grasp thumbs, rub fingertips", correct: true },
                { text: "Apply, immediately rub between fingers, then palms", correct: false },
                { text: "Any order works as long as hands get wet", correct: false }
            ],
            explanation: "The specific WHO sequence ensures complete coverage of all hand surfaces during the hand rub."
        },
        {
            question: "What barrier protection should you still use with proper hand hygiene?",
            type: "multiple-choice",
            answers: [
                { text: "Hand hygiene eliminates need for gloves", correct: false },
                { text: "Gloves, masks, and PPE are still required when indicated", correct: true },
                { text: "Only gloves are needed", correct: false },
                { text: "No additional protection needed with proper hand hygiene", correct: false }
            ],
            explanation: "Hand hygiene complements but does not replace other PPE and barrier precautions when indicated."
        },
        {
            question: "What is the 5th Moment for Hand Hygiene according to WHO?",
            type: "multiple-choice",
            answers: [
                { text: "Before patient meal service", correct: false },
                { text: "After touching patient surroundings", correct: true },
                { text: "Before administering medications", correct: false },
                { text: "After taking a break", correct: false }
            ],
            explanation: "The 5th moment addresses hand hygiene after touching patient environment and equipment to prevent cross-contamination."
        },
        {
            question: "Which hand hygiene method dries hands fastest?",
            type: "multiple-choice",
            answers: [
                { text: "Air drying", correct: false },
                { text: "Paper towels", correct: true },
                { text: "Cloth towels", correct: false },
                { text: "Shaking vigorously", correct: false }
            ],
            explanation: "Single-use paper towels are the most hygienic and fastest method for drying hands in healthcare settings."
        },
        {
            question: "What is a major advantage of alcohol-based hand rub over handwashing?",
            type: "multiple-choice",
            answers: [
                { text: "Works on visibly soiled hands", correct: false },
                { text: "Quick disinfection (20-30 seconds) without water access", correct: true },
                { text: "Eliminates need for any hand hygiene routine", correct: false },
                { text: "Better for removing all types of pathogens", correct: false }
            ],
            explanation: "Alcohol-based rub is convenient, requires no water, and works quickly on clean hands."
        },
        {
            question: "How should faucets be closed after handwashing to prevent recontamination?",
            type: "multiple-choice",
            answers: [
                { text: "With bare hands", correct: false },
                { text: "Using a clean, single-use towel", correct: true },
                { text: "With your elbow if automatic faucet unavailable", correct: false },
                { text: "Any method works equally", correct: false }
            ],
            explanation: "Using a clean towel to close the faucet prevents recontamination of clean hands from the contaminated faucet handle."
        },
        {
            question: "What skin irritation is common with frequent handwashing, and how is it managed?",
            type: "multiple-choice",
            answers: [
                { text: "Severe burns - stop washing immediately", correct: false },
                { text: "Dryness and irritation - use moisturizing lotion", correct: true },
                { text: "Infection - wear gloves at all times", correct: false },
                { text: "No skin issues occur with proper technique", correct: false }
            ],
            explanation: "Frequent handwashing can cause dryness; moisturizing lotion helps maintain skin integrity and compliance."
        }
    ],
    clinical: [
        {
            question: "Scenario: You're about to insert a urinary catheter. What is your hand hygiene action?",
            type: "multiple-choice",
            answers: [
                { text: "Wash hands only if they look dirty", correct: false },
                { text: "Perform hand hygiene with soap and water, then wear sterile gloves", correct: true },
                { text: "Put on gloves without hand hygiene", correct: false },
                { text: "Use alcohol-based hand rub instead", correct: false }
            ],
            explanation: "Before aseptic procedures, proper hand hygiene followed by appropriate PPE is essential to maintain a sterile field."
        },
        {
            question: "Scenario: You've just removed gloves after patient care. What should you do?",
            type: "multiple-choice",
            answers: [
                { text: "Proceed to next patient - gloves protected your hands", correct: false },
                { text: "Perform hand hygiene immediately after glove removal", correct: true },
                { text: "Only wash hands if gloves had holes", correct: false },
                { text: "Hand hygiene can wait until lunch break", correct: false }
            ],
            explanation: "Gloves can have microscopic holes and skin can be contaminated; hand hygiene after glove removal is essential."
        },
        {
            question: "Scenario: You accidentally splash blood on your hands. What's your immediate action?",
            type: "multiple-choice",
            answers: [
                { text: "Wash hands with alcohol-based rub", correct: false },
                { text: "Immediately wash hands with soap and running water", correct: true },
                { text: "Continue with patient care and wash later", correct: false },
                { text: "Put on gloves over contaminated hands", correct: false }
            ],
            explanation: "Blood and bodily fluids require immediate washing with soap and water, not alcohol-based sanitizer."
        },
        {
            question: "Scenario: You're moving between patients in a busy unit without access to a sink. What do you use?",
            type: "multiple-choice",
            answers: [
                { text: "Skip hand hygiene to save time", correct: false },
                { text: "Wipe hands on your uniform", correct: false },
                { text: "Use alcohol-based hand sanitizer from your pocket", correct: true },
                { text: "Ask another staff member to wash your hands", correct: false }
            ],
            explanation: "Alcohol-based hand sanitizers allow quick disinfection when hands aren't visibly soiled and sinks are unavailable."
        },
        {
            question: "Scenario: An elderly patient with diarrhea tests positive for C. difficile. Hand hygiene protocol?",
            type: "multiple-choice",
            answers: [
                { text: "Use alcohol-based hand rub exclusively", correct: false },
                { text: "Use soap and water (alcohol doesn't kill C. difficile spores)", correct: true },
                { text: "Avoid touching the patient", correct: false },
                { text: "Either method works equally for C. difficile", correct: false }
            ],
            explanation: "C. difficile spores are resistant to alcohol; soap and water must be used for effective hand hygiene."
        },
        {
            question: "Scenario: You touch the bed rail after patient care. Should you perform hand hygiene?",
            type: "multiple-choice",
            answers: [
                { text: "No, it's just the bed rail, not the patient", correct: false },
                { text: "Yes, patient surroundings can be contaminated (5th Moment)", correct: true },
                { text: "Only if the bed rail looks dirty", correct: false },
                { text: "Only before the next patient", correct: false }
            ],
            explanation: "The 5th moment requires hand hygiene after touching patient surroundings and equipment."
        },
        {
            question: "Scenario: You wash your hands, but the paper towel dispenser is empty. Best action?",
            type: "multiple-choice",
            answers: [
                { text: "Air dry your hands", correct: false },
                { text: "Use your uniform to dry hands", correct: false },
                { text: "Find a clean cloth towel or paper towel for drying", correct: true },
                { text: "Leave hands wet - moisture is protective", correct: false }
            ],
            explanation: "Single-use paper towels are preferred; cloth towels are acceptable if paper is unavailable."
        },
        {
            question: "Scenario: You're training a new nursing student. What's the MOST critical message about hand hygiene?",
            type: "multiple-choice",
            answers: [
                { text: "Hand hygiene is optional with good technique in other areas", correct: false },
                { text: "Hand hygiene is the most important infection control measure - non-negotiable", correct: true },
                { text: "It's mainly about personal cleanliness", correct: false },
                { text: "Only necessary in high-risk units", correct: false }
            ],
            explanation: "Hand hygiene is fundamental to patient safety and must be practiced at every opportunity without exception."
        }
    ]
};

// Global Variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStarted = false;

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Hand diagram interaction
    const handAreas = document.querySelectorAll('.hand-area');
    handAreas.forEach(area => {
        area.addEventListener('click', function() {
            const areaName = this.getAttribute('data-area');
            showHandFeedback(areaName);
        });
    });
});

// ============================
// QUIZ FUNCTIONS
// ============================

function startQuiz(quizType) {
    console.log("[v0] Starting quiz:", quizType);
    currentQuiz = quizType;
    currentQuestionIndex = 0;
    userAnswers = new Array(quizzes[quizType].length).fill(null);
    quizStarted = true;

    // Hide selection, show quiz
    const quizSelection = document.getElementById('quizSelection');
    const quizContainer = document.getElementById('quizContainer');
    
    if (quizSelection) {
        quizSelection.style.display = 'none';
    }
    if (quizContainer) {
        quizContainer.style.display = 'block';
    }

    // Update totals
    const totalQuestionsEl = document.getElementById('totalQuestions');
    if (totalQuestionsEl) {
        totalQuestionsEl.textContent = quizzes[quizType].length;
    }

    // Load first question
    loadQuestion();
}

function loadQuestion() {
    console.log("[v0] Loading question:", currentQuestionIndex);
    const quiz = quizzes[currentQuiz];
    const question = quiz[currentQuestionIndex];

    // Update progress
    const currentQEl = document.getElementById('currentQuestion');
    if (currentQEl) {
        currentQEl.textContent = currentQuestionIndex + 1;
    }
    updateProgressBar();

    // Update question
    const questionTextEl = document.getElementById('questionText');
    if (questionTextEl) {
        questionTextEl.textContent = question.question;
    }

    // Clear previous answers
    const container = document.getElementById('answersContainer');
    if (container) {
        container.innerHTML = '';

        // Load answer options
        question.answers.forEach((answer, index) => {
            const label = document.createElement('label');
            label.className = 'answer-option';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'answer';
            input.value = index;
            input.addEventListener('change', () => {
                userAnswers[currentQuestionIndex] = index;
                console.log("[v0] Answer selected:", index, "for question:", currentQuestionIndex);
            });

            if (userAnswers[currentQuestionIndex] === index) {
                input.checked = true;
            }

            label.appendChild(input);
            label.appendChild(document.createTextNode(answer.text));
            container.appendChild(label);
        });
    }

    // Update button states
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    if (prevBtn) {
        prevBtn.disabled = currentQuestionIndex === 0;
    }
    if (nextBtn) {
        nextBtn.style.display = 
            currentQuestionIndex < quiz.length - 1 ? 'inline-block' : 'none';
    }
    if (submitBtn) {
        submitBtn.style.display = 
            currentQuestionIndex === quiz.length - 1 ? 'inline-block' : 'none';
    }
}

function nextQuestion() {
    console.log("[v0] Next question clicked");
    if (currentQuestionIndex < quizzes[currentQuiz].length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function previousQuestion() {
    console.log("[v0] Previous question clicked");
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function updateProgressBar() {
    const quiz = quizzes[currentQuiz];
    const progress = ((currentQuestionIndex + 1) / quiz.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function submitQuiz() {
    console.log("[v0] Submitting quiz...");
    const quiz = quizzes[currentQuiz];
    let correctCount = 0;
    const results = [];

    // Calculate results
    quiz.forEach((question, index) => {
        const userAnswerIndex = userAnswers[index];
        const isCorrect = userAnswerIndex !== null && question.answers[userAnswerIndex].correct;
        
        if (isCorrect) {
            correctCount++;
        }

        results.push({
            question: question.question,
            correct: isCorrect,
            userAnswer: userAnswerIndex !== null ? question.answers[userAnswerIndex].text : 'Not answered',
            explanation: question.explanation
        });
    });

    // Calculate percentage
    const percentage = Math.round((correctCount / quiz.length) * 100);
    console.log("[v0] Quiz submitted. Score:", percentage + "%");

    // Display results
    displayResults(correctCount, quiz.length, percentage, results);
}

function displayResults(correct, total, percentage, results) {
    console.log("[v0] Displaying results...");
    // Hide quiz, show results
    const quizContainer = document.getElementById('quizContainer');
    const resultsContainer = document.getElementById('resultsContainer');
    
    if (quizContainer) {
        quizContainer.style.display = 'none';
    }
    if (resultsContainer) {
        resultsContainer.style.display = 'block';
    }

    // Update score
    const scorePercentageEl = document.getElementById('scorePercentage');
    const correctAnswersEl = document.getElementById('correctAnswers');
    const totalAnswersEl = document.getElementById('totalAnswers');

    if (scorePercentageEl) {
        scorePercentageEl.textContent = percentage;
    }
    if (correctAnswersEl) {
        correctAnswersEl.textContent = correct;
    }
    if (totalAnswersEl) {
        totalAnswersEl.textContent = total;
    }

    // Score message
    let message = '';
    if (percentage >= 90) {
        message = 'Excellent! Outstanding mastery of hand hygiene!';
    } else if (percentage >= 80) {
        message = 'Great job! You have a strong understanding of hand hygiene.';
    } else if (percentage >= 70) {
        message = 'Good effort, but review the key concepts.';
    } else {
        message = 'Keep studying - hand hygiene is critical!';
    }
    const scoreMessageEl = document.getElementById('scoreMessage');
    if (scoreMessageEl) {
        scoreMessageEl.textContent = message;
    }

    // Details
    const detailsDiv = document.getElementById('resultsDetails');
    if (detailsDiv) {
        detailsDiv.innerHTML = '';
    } else {
        console.log("[v0] resultsDetails element not found");
        return;
    }

    results.forEach((result, index) => {
        const item = document.createElement('div');
        item.className = 'result-item ' + (result.correct ? 'correct' : 'incorrect');
        item.innerHTML = `
            <strong>Question ${index + 1}:</strong> ${result.question}<br>
            <span style="color: var(--text-color);">Your answer: ${result.userAnswer}</span><br>
            <em>${result.explanation}</em>
        `;
        detailsDiv.appendChild(item);
    });

    // Recommendations
    const recommendDiv = document.getElementById('recommendations');
    if (recommendDiv) {
        recommendDiv.innerHTML = '';

        if (percentage < 80) {
            const recs = [
                '<li>Review the Learning Modules for a comprehensive understanding</li>',
                '<li>Pay special attention to the 5 Moments for Hand Hygiene</li>',
                '<li>Study the specific techniques for handwashing and hand rubbing</li>',
                '<li>Consider re-taking the quiz after studying</li>'
            ];
            recommendDiv.innerHTML = '<ul>' + recs.join('') + '</ul>';
        } else {
            const recs = [
                '<li>Excellent understanding! You are ready to apply these skills in clinical practice</li>',
                '<li>Consider reviewing any questions you found challenging</li>',
                '<li>Help peers understand hand hygiene best practices</li>',
                '<li>Remember: Consistency is key - always practice proper hand hygiene</li>'
            ];
            recommendDiv.innerHTML = '<ul>' + recs.join('') + '</ul>';
        }
    }
}

function retakeQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    quizStarted = false;

    document.getElementById('quizSelection').style.display = 'block';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'none';
}

function goHome() {
    window.location.href = 'index.html';
}

// ============================
// HAND DIAGRAM FEEDBACK
// ============================

function showHandFeedback(area) {
    const feedbackDiv = document.getElementById('handFeedback');
    const messages = {
        'nails': "✓ Correct! Under fingernails are commonly missed and need attention. Use the opposite hand's nails to scrub.",
        'between-fingers': '✓ Correct! The webbing between fingers is a frequently missed area.',
        'wrists': '✓ Correct! Wrists often get overlooked but harbor many microorganisms.',
    };

    const message = messages[area] || 'Click on other commonly missed areas!';
    feedbackDiv.textContent = message;
    feedbackDiv.style.color = 'var(--success-color)';
}

// ============================
// RESOURCE DOWNLOAD
// ============================

function downloadResource(resource) {
    alert('Resource: ' + resource + '\n\nIn a production environment, this would download a PDF or document.\n\nYou can create and link actual PDF files in the resources folder.');
}

// ============================
// UTILITY FUNCTIONS
// ============================

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

  // Check if user is logged in
    const loggedIn = localStorage.getItem('loggedIn');

    if (!loggedIn) {
        // If not logged in, redirect to login page
        window.location.href = 'login.html';
    }

      // Logout functionality
    document.getElementById('logoutLink').addEventListener('click', function(e) {
        e.preventDefault();
        // Clear login status
        localStorage.removeItem('loggedIn');
        // Redirect to login page
        window.location.href = "login.html";
    });
