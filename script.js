/* =====================================================
   EDUSETU E-LEARNING WEBSITE
   Main JavaScript
===================================================== */


/* ================= STUDENT DATA ================= */

let student = {
    name: "Student",
    email: "student@edusetu.com",
    class: "8th Standard",
    medium: "English"
};


/* ================= AUTH ================= */

function selectAuthLanguage(language, button) {

    document.querySelectorAll(".language-switcher button")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    /*
        IMPORTANT:
        Login / Signup content does NOT translate.

        The selected language is stored only for the
        learning area.
    */

    localStorage.setItem("selectedLanguage", language);

    showToast(language + " selected for learning content");
}


function showLogin() {

    document.getElementById("loginForm")
        .classList.remove("hidden");

    document.getElementById("signupForm")
        .classList.add("hidden");

    document.getElementById("loginTab")
        .classList.add("active");

    document.getElementById("signupTab")
        .classList.remove("active");
}


function showSignup() {

    document.getElementById("loginForm")
        .classList.add("hidden");

    document.getElementById("signupForm")
        .classList.remove("hidden");

    document.getElementById("loginTab")
        .classList.remove("active");

    document.getElementById("signupTab")
        .classList.add("active");
}


function togglePassword(id) {

    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}


function loginStudent() {

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
        showToast("Please enter email and password");
        return;
    }

    if (
        email === "student@edusetu.com" &&
        password === "123456"
    ) {

        student.name = "Demo Student";
        student.email = email;
        student.class = "8th Standard";
        student.medium = "English";

        enterDashboard();

    } else {

        /*
            For this demo website, any valid-looking login
            will also work.
        */

        student.email = email;

        if (email.includes("@")) {
            enterDashboard();
        } else {
            showToast("Please enter a valid email");
        }
    }
}


function signupStudent() {

    const name =
        document.getElementById("signupName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const selectedClass =
        document.getElementById("signupClass").value;

    const medium =
        document.getElementById("signupMedium").value;

    const password =
        document.getElementById("signupPassword").value;

    if (
        !name ||
        !email ||
        !selectedClass ||
        !medium ||
        !password
    ) {

        showToast("Please fill all information");

        return;
    }


    student = {
        name: name,
        email: email,
        class: selectedClass,
        medium: medium
    };

    localStorage.setItem(
        "edusetuStudent",
        JSON.stringify(student)
    );

    enterDashboard();
}


function enterDashboard() {

    document.getElementById("authPage")
        .classList.add("hidden");

    document.getElementById("app")
        .classList.remove("hidden");

    updateStudentUI();

    loadSubjects();

    showToast("Welcome to EduSetu!");

}


function updateStudentUI() {

    document.getElementById("studentName")
        .textContent = student.name;

    document.getElementById("welcomeName")
        .textContent = student.name.split(" ")[0];

    document.getElementById("studentClass")
        .textContent = student.class;

    document.getElementById("profileName")
        .textContent = student.name;

    document.getElementById("profileEmail")
        .textContent = student.email;

    document.getElementById("profileClass")
        .textContent = student.class;

    document.getElementById("profileMedium")
        .textContent = student.medium;

    const firstLetter =
        student.name.charAt(0).toUpperCase();

    document.getElementById("avatar")
        .textContent = firstLetter;

    document.getElementById("profileAvatar")
        .textContent = firstLetter;

    document.getElementById("classSelector").value =
        student.class;
}


function logout() {

    document.getElementById("app")
        .classList.add("hidden");

    document.getElementById("authPage")
        .classList.remove("hidden");

    showLogin();

    showToast("You have been logged out");
}


/* ================= NAVIGATION ================= */

function showSection(sectionId, button) {

    document.querySelectorAll(".section")
        .forEach(section => {
            section.classList.remove("active-section");
        });

    const section =
        document.getElementById(sectionId);

    if (section) {
        section.classList.add("active-section");
    }


    document.querySelectorAll(".nav-item")
        .forEach(item => {
            item.classList.remove("active");
        });


    if (button) {
        button.classList.add("active");
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function toggleSidebar() {

    document.querySelector(".sidebar")
        .classList.toggle("open");
}


/* ================= SUBJECT CONTENT ================= */

const subjectData = {

    "5th Standard": [

        {
            name: "Mathematics",
            icon: "∑",
            lessons: [
                "Numbers Around Us",
                "Fractions in Daily Life",
                "Shapes and Angles"
            ],
            desc: "Numbers, fractions, geometry and basic problem solving."
        },

        {
            name: "Science",
            icon: "⚗",
            lessons: [
                "Living and Non-Living Things",
                "Plants Around Us",
                "Water and Its Uses"
            ],
            desc: "Explore living things, plants, water and our environment."
        },

        {
            name: "English",
            icon: "A",
            lessons: [
                "The Clever Sparrow",
                "My School Day",
                "Words Around Me"
            ],
            desc: "Reading, vocabulary, grammar and communication."
        },

        {
            name: "Social Science",
            icon: "◎",
            lessons: [
                "Our Neighbourhood",
                "Maps and Directions",
                "India and Its States"
            ],
            desc: "Understand society, geography and our country."
        }

    ],


    "6th Standard": [

        {
            name: "Mathematics",
            icon: "∑",
            lessons: [
                "Knowing Our Numbers",
                "Integers",
                "Basic Geometrical Ideas"
            ],
            desc: "Build mathematical thinking through practical examples."
        },

        {
            name: "Science",
            icon: "⚗",
            lessons: [
                "Components of Food",
                "Sorting Materials",
                "Changes Around Us"
            ],
            desc: "Learn about food, materials and everyday changes."
        },

        {
            name: "English",
            icon: "A",
            lessons: [
                "A New Beginning",
                "The Helpful Friend",
                "Grammar in Action"
            ],
            desc: "Improve reading, writing and grammar skills."
        },

        {
            name: "Social Science",
            icon: "◎",
            lessons: [
                "What Is History?",
                "The Earth in the Solar System",
                "Diversity and Difference"
            ],
            desc: "Discover history, geography and society."
        }

    ],


    "7th Standard": [

        {
            name: "Mathematics",
            icon: "∑",
            lessons: [
                "Integers",
                "Fractions and Decimals",
                "Simple Equations"
            ],
            desc: "Develop logical thinking and mathematical problem solving."
        },

        {
            name: "Science",
            icon: "⚗",
            lessons: [
                "Nutrition in Plants",
                "Heat",
                "Acids and Bases"
            ],
            desc: "Understand nutrition, heat and chemical properties."
        },

        {
            name: "English",
            icon: "A",
            lessons: [
                "A Journey of Courage",
                "The Tiny Seed",
                "Writing Better Paragraphs"
            ],
            desc: "Build reading comprehension and writing ability."
        },

        {
            name: "Social Science",
            icon: "◎",
            lessons: [
                "Medieval India",
                "Environment",
                "Understanding Democracy"
            ],
            desc: "Explore history, environment and democratic society."
        }

    ],


    "8th Standard": [

        {
            name: "Mathematics",
            icon: "∑",
            lessons: [
                "Rational Numbers",
                "Linear Equations",
                "Comparing Quantities"
            ],
            desc: "Solve equations and understand numbers through examples."
        },

        {
            name: "Science",
            icon: "⚗",
            lessons: [
                "Crop Production",
                "Microorganisms",
                "Force and Pressure"
            ],
            desc: "Discover agriculture, microorganisms and physical forces."
        },

        {
            name: "English",
            icon: "A",
            lessons: [
                "The Little Hero",
                "The Power of Kindness",
                "Writing with Purpose"
            ],
            desc: "Reading comprehension, vocabulary and effective writing."
        },

        {
            name: "Social Science",
            icon: "◎",
            lessons: [
                "The Indian Constitution",
                "Resources",
                "The Making of Modern India"
            ],
            desc: "Learn about constitution, resources and Indian history."
        },

        {
            name: "Hindi",
            icon: "अ",
            lessons: [
                "नई राह",
                "प्रकृति का संदेश",
                "भाषा और व्याकरण"
            ],
            desc: "हिंदी पठन, लेखन और व्याकरण का अभ्यास करें।"
        },

        {
            name: "Marathi",
            icon: "अ",
            lessons: [
                "निसर्गाची गोष्ट",
                "माझे गाव",
                "भाषेचा सुंदर वापर"
            ],
            desc: "मराठी वाचन, लेखन आणि भाषेचा सराव."
        }

    ],


    "9th Standard": [

        {
            name: "Mathematics",
            icon: "∑",
            lessons: [
                "Number Systems",
                "Polynomials",
                "Coordinate Geometry"
            ],
            desc: "Strengthen algebraic and mathematical reasoning."
        },

        {
            name: "Science",
            icon: "⚗",
            lessons: [
                "Matter Around Us",
                "Atoms and Molecules",
                "Motion"
            ],
            desc: "Study matter, atoms and motion scientifically."
        },

        {
            name: "English",
            icon: "A",
            lessons: [
                "A Story of Determination",
                "The Value of Time",
                "Advanced Writing"
            ],
            desc: "Develop strong communication and writing skills."
        },

        {
            name: "Social Science",
            icon: "◎",
            lessons: [
                "Democracy",
                "Physical Features of India",
                "The French Revolution"
            ],
            desc: "Understand political systems, geography and history."
        }

    ],


    "10th Standard": [

        {
            name: "Mathematics",
            icon: "∑",
            lessons: [
                "Real Numbers",
                "Quadratic Equations",
                "Statistics"
            ],
            desc: "Prepare for important mathematical concepts and exams."
        },

        {
            name: "Science",
            icon: "⚗",
            lessons: [
                "Chemical Reactions",
                "Life Processes",
                "Light and Reflection"
            ],
            desc: "Master important physics, chemistry and biology concepts."
        },

        {
            name: "English",
            icon: "A",
            lessons: [
                "The Power of Dreams",
                "Reading for Meaning",
                "Formal Writing"
            ],
            desc: "Strengthen comprehension and examination writing skills."
        },

        {
            name: "Social Science",
            icon: "◎",
            lessons: [
                "Power Sharing",
                "Resources and Development",
                "Nationalism in India"
            ],
            desc: "Prepare for civics, geography and history topics."
        }

    ]

};


let currentLearningLanguage =
    localStorage.getItem("selectedLanguage") || "English";


function changeLearningLanguage(language, button) {

    currentLearningLanguage = language;

    document.querySelectorAll(".language-bar button")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    localStorage.setItem(
        "selectedLanguage",
        language
    );

    loadSubjects();

    showToast(
        "Learning content switched to " + language
    );
}


function changeClass(selectedClass) {

    student.class = selectedClass;

    document.getElementById("studentClass")
        .textContent = selectedClass;

    document.getElementById("profileClass")
        .textContent = selectedClass;

    loadSubjects();

    showToast(
        "Class changed to " + selectedClass
    );
}


function loadSubjects() {

    const grid =
        document.getElementById("subjectGrid");

    if (!grid) return;

    const selectedClass =
        document.getElementById("classSelector").value;

    const subjects =
        subjectData[selectedClass] || [];

    grid.innerHTML = "";


    subjects.forEach(subject => {

        const card =
            document.createElement("div");

        card.className = "subject-card";


        const lessonList =
            subject.lessons
                .map(lesson => `<li>${lesson}</li>`)
                .join("");


        card.innerHTML = `

            <div class="subject-symbol">
                ${subject.icon}
            </div>

            <h3>${subject.name}</h3>

            <p>${subject.desc}</p>

            <ul style="
                margin-top:12px;
                margin-left:18px;
                color:#697386;
                font-size:10px;
                line-height:1.8;
            ">
                ${lessonList}
            </ul>

            <button onclick="openSubject('${subject.name}')">
                View Lessons →
            </button>

        `;

        grid.appendChild(card);

    });
}


function openSubject(subjectName) {

    showToast(
        subjectName +
        " lessons opened in " +
        currentLearningLanguage
    );

    const lessons =
        subjectData[student.class]
            ?.find(s => s.name === subjectName)
            ?.lessons || [];

    if (lessons.length > 0) {

        openLesson(lessons[0]);

    }

}


/* ================= LESSONS ================= */

const lessonContent = {

    "Fractions & Decimals": `
        <p>
            Fractions represent parts of a whole.
            For example, if a pizza is divided into 4 equal pieces
            and you eat one piece, you have eaten 1/4 of the pizza.
        </p>

        <h3>Key Idea</h3>

        <p>
            A fraction has a numerator and denominator.
            The numerator tells us how many parts we have,
            while the denominator tells us how many equal parts
            make the whole.
        </p>

        <h3>Try This</h3>

        <ul>
            <li>1/2 = 0.5</li>
            <li>1/4 = 0.25</li>
            <li>3/4 = 0.75</li>
        </ul>
    `,


    "Components of Food": `
        <p>
            Food gives our body energy and materials needed
            for growth and repair.
        </p>

        <h3>Main Nutrients</h3>

        <ul>
            <li>Carbohydrates provide energy.</li>
            <li>Proteins help growth and repair.</li>
            <li>Fats provide stored energy.</li>
            <li>Vitamins and minerals keep the body healthy.</li>
        </ul>

        <h3>Remember</h3>

        <p>
            A balanced diet contains different nutrients
            in suitable amounts.
        </p>
    `,


    "The Little Hero": `
        <p>
            Courage does not always mean doing something
            dangerous. Sometimes courage means doing the
            right thing even when it is difficult.
        </p>

        <h3>Reading Focus</h3>

        <p>
            As you read, identify the character's problem,
            the decision they make and what they learn.
        </p>

        <h3>Vocabulary</h3>

        <ul>
            <li>Courage – ability to face difficulty.</li>
            <li>Determination – continuing despite problems.</li>
            <li>Responsibility – doing what is expected.</li>
        </ul>
    `

};


function openLesson(title) {

    document.getElementById("modalTitle")
        .textContent = title;

    document.getElementById("lessonContent")
        .innerHTML =
        lessonContent[title] ||
        `
            <p>
                This lesson introduces important concepts
                in a simple and practical way.
            </p>

            <h3>Learning Objective</h3>

            <p>
                Understand the main ideas, learn the important
                terms and practise using your knowledge.
            </p>

            <h3>Practice</h3>

            <p>
                Write three things you learned from this lesson
                and explain one idea in your own words.
            </p>
        `;

    document.getElementById("lessonModal")
        .classList.remove("hidden");
}


function closeLesson() {

    document.getElementById("lessonModal")
        .classList.add("hidden");
}


function completeLesson() {

    closeLesson();

    showToast(
        "Lesson completed! Progress updated ✓"
    );
}


/* ================= QUIZ ================= */

const quizQuestions = [

    {
        question:
            "Which part of a plant absorbs water from the soil?",

        answers: [
            "Flower",
            "Root",
            "Leaf",
            "Fruit"
        ],

        correct: 1
    },

    {
        question:
            "Which gas do humans need for respiration?",

        answers: [
            "Oxygen",
            "Carbon dioxide",
            "Nitrogen",
            "Hydrogen"
        ],

        correct: 0
    },

    {
        question:
            "Water changes into vapour through which process?",

        answers: [
            "Freezing",
            "Melting",
            "Evaporation",
            "Condensation"
        ],

        correct: 2
    },

    {
        question:
            "Which nutrient mainly helps in body growth and repair?",

        answers: [
            "Protein",
            "Water",
            "Salt",
            "Sugar"
        ],

        correct: 0
    },

    {
        question:
            "Which organ pumps blood around the human body?",

        answers: [
            "Brain",
            "Lungs",
            "Heart",
            "Kidney"
        ],

        correct: 2
    }

];


let currentQuestion = 0;
let quizScore = 0;
let selectedAnswer = null;


function startQuiz() {

    currentQuestion = 0;
    quizScore = 0;
    selectedAnswer = null;

    document.getElementById("quizStart")
        .classList.add("hidden");

    document.getElementById("quizResult")
        .classList.add("hidden");

    document.getElementById("quizBox")
        .classList.remove("hidden");

    showQuestion();
}


function showQuestion() {

    const q =
        quizQuestions[currentQuestion];

    selectedAnswer = null;

    document.getElementById("questionNumber")
        .textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    document.getElementById("quizScore")
        .textContent =
        `Score: ${quizScore}`;

    document.getElementById("questionText")
        .textContent = q.question;


    document.getElementById("quizProgress")
        .style.width =
        `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;


    const answers =
        document.getElementById("answers");

    answers.innerHTML = "";


    q.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className =
            "answer-option";

        button.textContent =
            answer;

        button.onclick =
            () => selectAnswer(index, button);

        answers.appendChild(button);

    });


    document.getElementById("nextQuestion")
        .disabled = true;
}


function selectAnswer(index, button) {

    if (selectedAnswer !== null) return;

    selectedAnswer = index;

    const q =
        quizQuestions[currentQuestion];


    document.querySelectorAll(".answer-option")
        .forEach((btn, i) => {

            if (i === q.correct) {
                btn.classList.add("correct");
            }

            if (
                i === index &&
                index !== q.correct
            ) {
                btn.classList.add("wrong");
            }

        });


    if (index === q.correct) {
        quizScore += 20;
    }


    document.getElementById("quizScore")
        .textContent =
        `Score: ${quizScore}`;

    document.getElementById("nextQuestion")
        .disabled = false;
}


function nextQuestion() {

    if (selectedAnswer === null) return;

    currentQuestion++;

    if (
        currentQuestion >=
        quizQuestions.length
    ) {

        finishQuiz();

    } else {

        showQuestion();

    }
}


function finishQuiz() {

    document.getElementById("quizBox")
        .classList.add("hidden");

    document.getElementById("quizResult")
        .classList.remove("hidden");

    document.getElementById("resultText")
        .textContent =
        `You scored ${quizScore} out of 100. Keep practising and come back tomorrow!`;
}


/* ================= COURSES ================= */

function startCourse(courseName) {

    showToast(
        courseName +
        " course started successfully!"
    );

}


/* ================= SEARCH ================= */

function searchContent(value) {

    const search =
        value.toLowerCase().trim();

    if (!search) return;


    const matches = [];


    Object.values(subjectData)
        .flat()
        .forEach(subject => {

            if (
                subject.name
                    .toLowerCase()
                    .includes(search)
            ) {
                matches.push(subject.name);
            }

            subject.lessons.forEach(lesson => {

                if (
                    lesson
                        .toLowerCase()
                        .includes(search)
                ) {
                    matches.push(lesson);
                }

            });

        });


    if (matches.length > 0) {

        showToast(
            `${matches.length} result(s) found`
        );

    }

}


/* ================= NOTIFICATION ================= */

function showNotification() {

    showToast(
        "You have 1 new learning reminder 🔔"
    );

}


/* ================= TOAST ================= */

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);
}


/* ================= DATE ================= */

function setDate() {

    const date =
        new Date();

    document.getElementById("todayDate")
        .textContent =
        date.toLocaleDateString(
            "en-IN",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );
}


/* ================= LOAD ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setDate();

        const savedStudent =
            localStorage.getItem(
                "edusetuStudent"
            );

        if (savedStudent) {

            try {

                student =
                    JSON.parse(savedStudent);

            } catch (error) {

                console.log(
                    "Student data could not be loaded."
                );

            }

        }

    }
);