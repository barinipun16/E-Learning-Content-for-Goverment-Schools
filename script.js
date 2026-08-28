/* ============================================================
   EDUBRIDGE
   E-Learning Content for Government Schools
   Complete JavaScript
   ============================================================ */

"use strict";

/* ============================================================
   1. CONFIGURATION
   ============================================================ */

const APP = {
    name: "EduBridge",
    version: "2.0",
    defaultLanguage: "en",
    defaultClass: 5
};


/* ============================================================
   2. TRANSLATIONS
   ============================================================ */

const translations = {

    en: {
        dashboard: "Dashboard",
        subjects: "Subjects",
        quiz: "Quizzes",
        courses: "Certificate Courses",
        progress: "My Progress",
        settings: "Settings",
        logout: "Logout",

        welcome: "Welcome back",
        learningPortal: "STUDENT LEARNING PORTAL",
        dashboardIntro: "Continue learning, practise your skills and discover something new today.",
        class: "Class",

        lessonsCompleted: "Lessons Completed",
        overallProgress: "Overall Progress",
        quizScore: "Best Quiz Score",

        continueLearning: "CONTINUE LEARNING",
        viewAll: "View all",
        dailyGoal: "DAILY LEARNING",
        studyToday: "Study today",
        dailyText: "Complete lessons regularly to build a strong learning habit.",
        lessonsToday: "lessons today",

        yourSubjects: "YOUR SUBJECTS",
        learnBySubject: "Learn by subject",
        skillBuilding: "SKILL BUILDING",
        featuredCourses: "Featured courses",

        curriculum: "CURRICULUM",
        subjectsTitle: "Subjects & Lessons",
        subjectsIntro: "Explore your class curriculum and learn at your own pace.",

        practice: "PRACTICE",
        quizTitle: "Quizzes",
        quizIntro: "Test what you have learned and improve your understanding.",

        certification: "CERTIFICATION",
        coursesTitle: "Certificate Courses",
        coursesIntro: "Build useful skills through short guided courses.",

        yourJourney: "YOUR JOURNEY",
        progressTitle: "My Progress",
        progressIntro: "Your learning record is saved on this device.",
        overall: "overall",
        keepGoing: "Keep going!",
        progressMessage: "Every completed lesson moves you one step forward.",
        subjectProgress: "Subject Progress",

        preferences: "PREFERENCES",
        settingsTitle: "Settings",
        settingsIntro: "Personalise your learning experience.",
        languageSetting: "Learning Language",
        languageSettingText: "Choose the language used for learning content.",
        appearance: "Appearance",
        appearanceText: "Switch between light and dark mode.",

        startLearning: "Start Learning",
        continue: "Continue",
        openLesson: "Open Lesson",
        completed: "Completed",
        lessons: "Lessons",
        hours: "Hours",
        beginner: "Beginner",
        intermediate: "Intermediate",
        takeQuiz: "Take Quiz",
        startCourse: "Open Course",
        certificate: "Certificate",
        finishCourse: "Complete Course",

        back: "Back",
        searchResults: "Search Results",
        noResults: "No matching results found.",

        loginTitle: "Welcome back",
        loginSubtitle: "Sign in to continue your learning journey.",
        usernameLabel: "Student Username",
        passwordLabel: "Password",
        loginButton: "Login",
        newStudentText: "New student?",
        createAccount: "Create account",

        signupTitle: "Create student account",
        signupSubtitle: "Create your account to save your learning progress.",
        signupUsernameLabel: "Student Username",
        signupClassLabel: "Select Class",
        signupPasswordLabel: "Password",
        confirmPasswordLabel: "Confirm Password",
        signupButton: "Create Account",
        alreadyStudentText: "Already have an account?",

        show: "Show",
        hide: "Hide",

        invalidLogin: "Username or password is incorrect.",
        accountCreated: "Account created successfully. You can now login.",
        usernameExists: "This username already exists.",
        passwordMismatch: "Passwords do not match.",
        chooseClass: "Please select your class.",
        loggedOut: "You have been logged out.",
        lessonCompletedMessage: "Lesson completed and progress saved.",
        courseCompleted: "Course completed. Your certificate is ready."
    },

    hi: {
        dashboard: "डैशबोर्ड",
        subjects: "विषय",
        quiz: "प्रश्नोत्तरी",
        courses: "प्रमाणपत्र पाठ्यक्रम",
        progress: "मेरी प्रगति",
        settings: "सेटिंग्स",
        logout: "लॉग आउट",

        welcome: "स्वागत है",
        learningPortal: "विद्यार्थी अध्ययन पोर्टल",
        dashboardIntro: "अपनी पढ़ाई जारी रखें, अभ्यास करें और आज कुछ नया सीखें।",
        class: "कक्षा",

        lessonsCompleted: "पूरे किए गए पाठ",
        overallProgress: "कुल प्रगति",
        quizScore: "सर्वश्रेष्ठ प्रश्नोत्तरी अंक",

        continueLearning: "पढ़ाई जारी रखें",
        viewAll: "सभी देखें",
        dailyGoal: "दैनिक अध्ययन",
        studyToday: "आज पढ़ें",
        dailyText: "नियमित रूप से पाठ पूरे करके पढ़ाई की अच्छी आदत बनाएं।",
        lessonsToday: "आज के पाठ",

        yourSubjects: "आपके विषय",
        learnBySubject: "विषय के अनुसार सीखें",
        skillBuilding: "कौशल विकास",
        featuredCourses: "प्रमुख पाठ्यक्रम",

        curriculum: "पाठ्यक्रम",
        subjectsTitle: "विषय और पाठ",
        subjectsIntro: "अपनी कक्षा के पाठ्यक्रम को देखें और अपनी गति से सीखें।",

        practice: "अभ्यास",
        quizTitle: "प्रश्नोत्तरी",
        quizIntro: "आपने जो सीखा है उसे जांचें और अपनी समझ बेहतर बनाएं।",

        certification: "प्रमाणन",
        coursesTitle: "प्रमाणपत्र पाठ्यक्रम",
        coursesIntro: "छोटे और मार्गदर्शित पाठ्यक्रमों से उपयोगी कौशल सीखें।",

        yourJourney: "आपकी सीखने की यात्रा",
        progressTitle: "मेरी प्रगति",
        progressIntro: "आपका अध्ययन रिकॉर्ड इस डिवाइस पर सुरक्षित रहता है।",
        overall: "कुल",
        keepGoing: "आगे बढ़ते रहें!",
        progressMessage: "हर पूरा किया गया पाठ आपको आगे बढ़ाता है।",
        subjectProgress: "विषय प्रगति",

        preferences: "प्राथमिकताएं",
        settingsTitle: "सेटिंग्स",
        settingsIntro: "अपने सीखने के अनुभव को अपनी जरूरत के अनुसार बदलें।",
        languageSetting: "अध्ययन भाषा",
        languageSettingText: "अध्ययन सामग्री की भाषा चुनें।",
        appearance: "दिखावट",
        appearanceText: "लाइट और डार्क मोड के बीच बदलें।",

        startLearning: "पढ़ाई शुरू करें",
        continue: "जारी रखें",
        openLesson: "पाठ खोलें",
        completed: "पूरा",
        lessons: "पाठ",
        hours: "घंटे",
        beginner: "शुरुआती",
        intermediate: "मध्यम",
        takeQuiz: "प्रश्नोत्तरी दें",
        startCourse: "पाठ्यक्रम खोलें",
        certificate: "प्रमाणपत्र",
        finishCourse: "पाठ्यक्रम पूरा करें",

        back: "वापस",
        searchResults: "खोज परिणाम",
        noResults: "कोई परिणाम नहीं मिला।",

        loginTitle: "वापसी पर स्वागत है",
        loginSubtitle: "अपनी पढ़ाई जारी रखने के लिए लॉगिन करें।",
        usernameLabel: "विद्यार्थी यूज़रनेम",
        passwordLabel: "पासवर्ड",
        loginButton: "लॉगिन",
        newStudentText: "नए विद्यार्थी हैं?",
        createAccount: "खाता बनाएं",

        signupTitle: "विद्यार्थी खाता बनाएं",
        signupSubtitle: "अपनी प्रगति सुरक्षित रखने के लिए खाता बनाएं।",
        signupUsernameLabel: "विद्यार्थी यूज़रनेम",
        signupClassLabel: "कक्षा चुनें",
        signupPasswordLabel: "पासवर्ड",
        confirmPasswordLabel: "पासवर्ड की पुष्टि करें",
        signupButton: "खाता बनाएं",
        alreadyStudentText: "पहले से खाता है?",

        show: "दिखाएं",
        hide: "छिपाएं",

        invalidLogin: "यूज़रनेम या पासवर्ड गलत है।",
        accountCreated: "खाता सफलतापूर्वक बनाया गया। अब लॉगिन करें।",
        usernameExists: "यह यूज़रनेम पहले से मौजूद है।",
        passwordMismatch: "पासवर्ड मेल नहीं खाते।",
        chooseClass: "कृपया अपनी कक्षा चुनें।",
        loggedOut: "आप लॉग आउट हो गए हैं।",
        lessonCompletedMessage: "पाठ पूरा हुआ और प्रगति सुरक्षित कर दी गई।",
        courseCompleted: "पाठ्यक्रम पूरा हुआ। आपका प्रमाणपत्र तैयार है।"
    },

    mr: {
        dashboard: "डॅशबोर्ड",
        subjects: "विषय",
        quiz: "प्रश्नमंजुषा",
        courses: "प्रमाणपत्र अभ्यासक्रम",
        progress: "माझी प्रगती",
        settings: "सेटिंग्ज",
        logout: "लॉग आउट",

        welcome: "पुन्हा स्वागत आहे",
        learningPortal: "विद्यार्थी शिक्षण पोर्टल",
        dashboardIntro: "अभ्यास सुरू ठेवा, सराव करा आणि आज काहीतरी नवीन शिका.",
        class: "इयत्ता",

        lessonsCompleted: "पूर्ण केलेले धडे",
        overallProgress: "एकूण प्रगती",
        quizScore: "सर्वोत्तम प्रश्नमंजुषा गुण",

        continueLearning: "अभ्यास सुरू ठेवा",
        viewAll: "सर्व पहा",
        dailyGoal: "दैनंदिन अभ्यास",
        studyToday: "आजचा अभ्यास",
        dailyText: "नियमितपणे धडे पूर्ण करून अभ्यासाची चांगली सवय तयार करा.",
        lessonsToday: "आजचे धडे",

        yourSubjects: "तुमचे विषय",
        learnBySubject: "विषयानुसार शिका",
        skillBuilding: "कौशल्य विकास",
        featuredCourses: "विशेष अभ्यासक्रम",

        curriculum: "अभ्यासक्रम",
        subjectsTitle: "विषय आणि धडे",
        subjectsIntro: "तुमच्या इयत्तेचा अभ्यासक्रम पहा आणि स्वतःच्या गतीने शिका.",

        practice: "सराव",
        quizTitle: "प्रश्नमंजुषा",
        quizIntro: "तुम्ही जे शिकलात ते तपासा आणि तुमची समज वाढवा.",

        certification: "प्रमाणन",
        coursesTitle: "प्रमाणपत्र अभ्यासक्रम",
        coursesIntro: "लहान मार्गदर्शित अभ्यासक्रमांमधून उपयुक्त कौशल्ये शिका.",

        yourJourney: "तुमचा शिक्षण प्रवास",
        progressTitle: "माझी प्रगती",
        progressIntro: "तुमचा अभ्यासाचा रेकॉर्ड या डिव्हाइसवर सुरक्षित राहतो.",
        overall: "एकूण",
        keepGoing: "असेच पुढे चला!",
        progressMessage: "प्रत्येक पूर्ण केलेला धडा तुम्हाला पुढे नेतो.",
        subjectProgress: "विषय प्रगती",

        preferences: "प्राधान्ये",
        settingsTitle: "सेटिंग्ज",
        settingsIntro: "तुमचा शिकण्याचा अनुभव तुमच्या गरजेनुसार बदला.",
        languageSetting: "अभ्यासाची भाषा",
        languageSettingText: "अभ्यासाच्या सामग्रीसाठी भाषा निवडा.",
        appearance: "दिसणे",
        appearanceText: "लाइट आणि डार्क मोडमध्ये बदला.",

        startLearning: "अभ्यास सुरू करा",
        continue: "पुढे चला",
        openLesson: "धडा उघडा",
        completed: "पूर्ण",
        lessons: "धडे",
        hours: "तास",
        beginner: "सुरुवातीचा",
        intermediate: "मध्यम",
        takeQuiz: "प्रश्नमंजुषा सोडवा",
        startCourse: "अभ्यासक्रम उघडा",
        certificate: "प्रमाणपत्र",
        finishCourse: "अभ्यासक्रम पूर्ण करा",

        back: "मागे",
        searchResults: "शोध परिणाम",
        noResults: "कोणतेही परिणाम सापडले नाहीत.",

        loginTitle: "पुन्हा स्वागत आहे",
        loginSubtitle: "तुमचा अभ्यास सुरू ठेवण्यासाठी लॉगिन करा.",
        usernameLabel: "विद्यार्थी यूज़रनेम",
        passwordLabel: "पासवर्ड",
        loginButton: "लॉगिन",
        newStudentText: "नवीन विद्यार्थी?",
        createAccount: "खाते तयार करा",

        signupTitle: "विद्यार्थी खाते तयार करा",
        signupSubtitle: "तुमची प्रगती जतन करण्यासाठी खाते तयार करा.",
        signupUsernameLabel: "विद्यार्थी यूज़रनेम",
        signupClassLabel: "इयत्ता निवडा",
        signupPasswordLabel: "पासवर्ड",
        confirmPasswordLabel: "पासवर्डची पुष्टी करा",
        signupButton: "खाते तयार करा",
        alreadyStudentText: "आधीच खाते आहे?",

        show: "दाखवा",
        hide: "लपवा",

        invalidLogin: "यूज़रनेम किंवा पासवर्ड चुकीचा आहे.",
        accountCreated: "खाते यशस्वीरित्या तयार झाले. आता लॉगिन करा.",
        usernameExists: "हे यूज़रनेम आधीच अस्तित्वात आहे.",
        passwordMismatch: "पासवर्ड जुळत नाहीत.",
        chooseClass: "कृपया तुमची इयत्ता निवडा.",
        loggedOut: "तुम्ही लॉग आउट झाला आहात.",
        lessonCompletedMessage: "धडा पूर्ण झाला आणि प्रगती जतन झाली.",
        courseCompleted: "अभ्यासक्रम पूर्ण झाला. तुमचे प्रमाणपत्र तयार आहे."
    }
};


/* ============================================================
   3. SUBJECTS
   ============================================================ */

const subjects = [
    {
        id: "math",
        icon: "∑",
        color: "math",
        names: {
            en: "Mathematics",
            hi: "गणित",
            mr: "गणित"
        }
    },

    {
        id: "science",
        icon: "⚛",
        color: "science",
        names: {
            en: "Science",
            hi: "विज्ञान",
            mr: "विज्ञान"
        }
    },

    {
        id: "social",
        icon: "◎",
        color: "social",
        names: {
            en: "Social Science",
            hi: "सामाजिक विज्ञान",
            mr: "सामाजिक विज्ञान"
        }
    },

    {
        id: "language",
        icon: "अ",
        color: "language",
        names: {
            en: "Language",
            hi: "भाषा",
            mr: "भाषा"
        }
    },

    {
        id: "computer",
        icon: "</>",
        color: "computer",
        names: {
            en: "Computer Studies",
            hi: "कंप्यूटर अध्ययन",
            mr: "संगणक अभ्यास"
        }
    }
];


/* ============================================================
   4. LESSON DATABASE
   ============================================================ */

const curriculum = {};


/* Generate curriculum for Classes 5-10 */

const lessonTemplates = {

    math: [
        ["Numbers and Place Value", "Understand numbers, place values and comparison."],
        ["Fractions", "Learn fractions and their uses in daily life."],
        ["Decimals and Money", "Understand decimals using money and measurements."],
        ["Geometry Basics", "Learn lines, angles, shapes and properties."],
        ["Perimeter and Area", "Calculate perimeter and area of common shapes."],
        ["Graphs and Data", "Read tables, charts and simple graphs."],
        ["Patterns", "Discover number and shape patterns."],
        ["Ratio and Proportion", "Understand relationships between quantities."],
        ["Algebra Basics", "Use variables and simple equations."],
        ["Percentage", "Learn percentages using real-life examples."]
    ],

    science: [
        ["Living and Non-Living Things", "Identify characteristics of living things."],
        ["Components of Food", "Learn about nutrients and healthy food."],
        ["Plants Around Us", "Understand plant parts and their functions."],
        ["Water", "Explore the importance and uses of water."],
        ["Air and Atmosphere", "Learn why air is important for life."],
        ["Force and Motion", "Understand pushes, pulls and movement."],
        ["Light and Shadows", "Explore light, shadows and reflection."],
        ["Electricity", "Learn basic electrical circuits and safety."],
        ["Ecosystems", "Understand food chains and living communities."],
        ["Our Environment", "Learn how to protect natural resources."]
    ],

    social: [
        ["Our Community", "Understand people, occupations and services."],
        ["Diversity and Respect", "Learn why diversity makes communities stronger."],
        ["Maps and Directions", "Learn how maps represent places."],
        ["India: Our Country", "Explore the geography and diversity of India."],
        ["Local Government", "Understand local government and civic services."],
        ["Natural Resources", "Learn about resources and responsible use."],
        ["Ancient Civilisations", "Discover important early societies."],
        ["Democracy", "Understand participation, rights and responsibilities."],
        ["Agriculture", "Learn about farming and food production."],
        ["Sustainable Living", "Explore ways to protect our environment."]
    ],

    language: [
        ["Reading Skills", "Identify main ideas and important details."],
        ["Vocabulary Building", "Improve vocabulary through context."],
        ["Grammar Basics", "Understand parts of speech and sentence structure."],
        ["Nouns and Pronouns", "Learn how nouns and pronouns work."],
        ["Verbs and Tenses", "Understand actions and time in sentences."],
        ["Writing a Paragraph", "Organise ideas into a clear paragraph."],
        ["Story Writing", "Create interesting stories with structure."],
        ["Letter Writing", "Learn formal and informal letter writing."],
        ["Comprehension", "Read passages and answer questions."],
        ["Creative Writing", "Express ideas through creative writing."]
    ],

    computer: [
        ["Parts of a Computer", "Understand basic computer components."],
        ["Keyboard and Mouse", "Learn essential input device skills."],
        ["Files and Folders", "Organise digital information."],
        ["Internet Basics", "Understand how the internet works."],
        ["Online Safety", "Learn how to stay safe online."],
        ["Digital Citizenship", "Use technology responsibly."],
        ["Word Processing", "Create and format digital documents."],
        ["Presentations", "Learn how to make effective presentations."],
        ["Coding Basics", "Understand algorithms and simple programming."],
        ["Digital Projects", "Plan and create a small digital project."]
    ]
};


const classTopics = {

    5: {
        math: "Elementary Mathematics",
        science: "Elementary Science",
        social: "Social Studies",
        language: "English & Language",
        computer: "Digital Literacy"
    },

    6: {
        math: "Middle School Mathematics",
        science: "General Science",
        social: "Social Science",
        language: "English & Language",
        computer: "Computer Studies"
    },

    7: {
        math: "Mathematics",
        science: "Science",
        social: "Social Science",
        language: "English & Language",
        computer: "Computer Studies"
    },

    8: {
        math: "Mathematics",
        science: "Science",
        social: "Social Science",
        language: "English & Language",
        computer: "Computer Studies"
    },

    9: {
        math: "Mathematics",
        science: "Science",
        social: "Social Science",
        language: "English & Language",
        computer: "Information Technology"
    },

    10: {
        math: "Mathematics",
        science: "Science",
        social: "Social Science",
        language: "English & Language",
        computer: "Information Technology"
    }
};


/* Create lessons for all classes */

for (let classNumber = 5; classNumber <= 10; classNumber++) {

    curriculum[classNumber] = {};

    subjects.forEach(subject => {

        curriculum[classNumber][subject.id] =
            lessonTemplates[subject.id].map((item, index) => {

                const title = item[0];
                const description = item[1];

                return {
                    id: `${classNumber}-${subject.id}-${index + 1}`,

                    title: {
                        en: title,
                        hi: hindiTitle(title),
                        mr: marathiTitle(title)
                    },

                    description: {
                        en: description,
                        hi: description,
                        mr: description
                    },

                    duration: 15 + (index % 4) * 5,

                    content: createLessonContent(
                        classNumber,
                        subject.id,
                        title,
                        description
                    )
                };

            });

    });
}


/* ============================================================
   5. SIMPLE TRANSLITERATION HELPERS
   ============================================================ */

function hindiTitle(title) {

    const map = {
        "Numbers and Place Value": "संख्याएँ और स्थानीय मान",
        "Fractions": "भिन्न",
        "Decimals and Money": "दशमलव और पैसा",
        "Geometry Basics": "ज्यामिति की मूल बातें",
        "Perimeter and Area": "परिमाप और क्षेत्रफल",
        "Graphs and Data": "ग्राफ और डेटा",
        "Patterns": "प्रतिरूप",
        "Ratio and Proportion": "अनुपात और समानुपात",
        "Algebra Basics": "बीजगणित की मूल बातें",
        "Percentage": "प्रतिशत",

        "Living and Non-Living Things": "सजीव और निर्जीव वस्तुएँ",
        "Components of Food": "भोजन के घटक",
        "Plants Around Us": "हमारे आसपास के पौधे",
        "Water": "जल",
        "Air and Atmosphere": "वायु और वातावरण",
        "Force and Motion": "बल और गति",
        "Light and Shadows": "प्रकाश और छाया",
        "Electricity": "विद्युत",
        "Ecosystems": "पारितंत्र",
        "Our Environment": "हमारा पर्यावरण",

        "Our Community": "हमारा समुदाय",
        "Diversity and Respect": "विविधता और सम्मान",
        "Maps and Directions": "मानचित्र और दिशाएँ",
        "India: Our Country": "भारत: हमारा देश",
        "Local Government": "स्थानीय सरकार",
        "Natural Resources": "प्राकृतिक संसाधन",
        "Ancient Civilisations": "प्राचीन सभ्यताएँ",
        "Democracy": "लोकतंत्र",
        "Agriculture": "कृषि",
        "Sustainable Living": "सतत जीवन",

        "Reading Skills": "पठन कौशल",
        "Vocabulary Building": "शब्दावली निर्माण",
        "Grammar Basics": "व्याकरण की मूल बातें",
        "Nouns and Pronouns": "संज्ञा और सर्वनाम",
        "Verbs and Tenses": "क्रिया और काल",
        "Writing a Paragraph": "अनुच्छेद लेखन",
        "Story Writing": "कहानी लेखन",
        "Letter Writing": "पत्र लेखन",
        "Comprehension": "गद्यांश समझ",
        "Creative Writing": "रचनात्मक लेखन",

        "Parts of a Computer": "कंप्यूटर के भाग",
        "Keyboard and Mouse": "कीबोर्ड और माउस",
        "Files and Folders": "फाइल और फोल्डर",
        "Internet Basics": "इंटरनेट की मूल बातें",
        "Online Safety": "ऑनलाइन सुरक्षा",
        "Digital Citizenship": "डिजिटल नागरिकता",
        "Word Processing": "वर्ड प्रोसेसिंग",
        "Presentations": "प्रस्तुतीकरण",
        "Coding Basics": "कोडिंग की मूल बातें",
        "Digital Projects": "डिजिटल परियोजनाएँ"
    };

    return map[title] || title;
}


function marathiTitle(title) {

    const map = {
        "Numbers and Place Value": "संख्या आणि स्थानिक किंमत",
        "Fractions": "अपूर्णांक",
        "Decimals and Money": "दशांश आणि पैसा",
        "Geometry Basics": "भूमितीची मूलभूत माहिती",
        "Perimeter and Area": "परिमिती आणि क्षेत्रफळ",
        "Graphs and Data": "आलेख आणि माहिती",
        "Patterns": "नमुने",
        "Ratio and Proportion": "गुणोत्तर आणि प्रमाण",
        "Algebra Basics": "बीजगणिताची मूलभूत माहिती",
        "Percentage": "टक्केवारी",

        "Living and Non-Living Things": "सजीव आणि निर्जीव वस्तू",
        "Components of Food": "अन्नाचे घटक",
        "Plants Around Us": "आपल्या आसपासच्या वनस्पती",
        "Water": "पाणी",
        "Air and Atmosphere": "हवा आणि वातावरण",
        "Force and Motion": "बल आणि गती",
        "Light and Shadows": "प्रकाश आणि सावल्या",
        "Electricity": "वीज",
        "Ecosystems": "परिसंस्था",
        "Our Environment": "आपले पर्यावरण",

        "Our Community": "आपला समुदाय",
        "Diversity and Respect": "विविधता आणि आदर",
        "Maps and Directions": "नकाशे आणि दिशा",
        "India: Our Country": "भारत: आपला देश",
        "Local Government": "स्थानिक शासन",
        "Natural Resources": "नैसर्गिक संसाधने",
        "Ancient Civilisations": "प्राचीन संस्कृती",
        "Democracy": "लोकशाही",
        "Agriculture": "शेती",
        "Sustainable Living": "शाश्वत जीवन",

        "Reading Skills": "वाचन कौशल्य",
        "Vocabulary Building": "शब्दसंग्रह वाढवणे",
        "Grammar Basics": "व्याकरणाची मूलभूत माहिती",
        "Nouns and Pronouns": "नाम आणि सर्वनाम",
        "Verbs and Tenses": "क्रियापद आणि काळ",
        "Writing a Paragraph": "परिच्छेद लेखन",
        "Story Writing": "कथा लेखन",
        "Letter Writing": "पत्र लेखन",
        "Comprehension": "आकलन",
        "Creative Writing": "सर्जनशील लेखन",

        "Parts of a Computer": "संगणकाचे भाग",
        "Keyboard and Mouse": "कीबोर्ड आणि माऊस",
        "Files and Folders": "फाइल आणि फोल्डर",
        "Internet Basics": "इंटरनेटची मूलभूत माहिती",
        "Online Safety": "ऑनलाइन सुरक्षितता",
        "Digital Citizenship": "डिजिटल नागरिकत्व",
        "Word Processing": "वर्ड प्रोसेसिंग",
        "Presentations": "सादरीकरण",
        "Coding Basics": "कोडिंगची मूलभूत माहिती",
        "Digital Projects": "डिजिटल प्रकल्प"
    };

    return map[title] || title;
}


/* ============================================================
   6. LESSON CONTENT GENERATOR
   ============================================================ */

function createLessonContent(classNumber, subject, title, description) {

    return {

        en: `
            <div class="lesson-content">

                <h2>${escapeHTML(title)}</h2>

                <p>
                    ${escapeHTML(description)}
                </p>

                <div class="info-box">
                    <strong>Class ${classNumber} Learning Objective</strong>
                    <p>
                        By the end of this lesson, students should be able
                        to understand the main ideas of this topic and connect
                        them with examples from everyday life.
                    </p>
                </div>

                <h2>Introduction</h2>

                <p>
                    Learning becomes easier when we connect new ideas with
                    things we already know. This lesson introduces the topic
                    step by step using simple explanations and examples.
                </p>

                <h2>Key Ideas</h2>

                <ul>
                    <li>Understand the important terms related to the topic.</li>
                    <li>Connect the topic with real-life situations.</li>
                    <li>Practise the idea using simple examples.</li>
                    <li>Review the lesson before attempting the quiz.</li>
                </ul>

                <h2>Example</h2>

                <p>
                    Think about how this topic appears in your school,
                    home or neighbourhood. Try to explain it in your own words.
                </p>

                <div class="info-box">
                    <strong>Think about it:</strong>
                    <p>
                        Can you find one example of this topic around you today?
                    </p>
                </div>

                <h2>Quick Review</h2>

                <p>
                    Remember the key ideas, practise them and then test
                    yourself using the quiz section.
                </p>

            </div>
        `,

        hi: `
            <div class="lesson-content">

                <h2>${escapeHTML(hindiTitle(title))}</h2>

                <p>
                    ${escapeHTML(description)}
                </p>

                <div class="info-box">
                    <strong>कक्षा ${classNumber} का सीखने का उद्देश्य</strong>

                    <p>
                        इस पाठ के अंत तक विद्यार्थी विषय की मुख्य बातों को
                        समझ सकेंगे और उन्हें दैनिक जीवन के उदाहरणों से जोड़ सकेंगे।
                    </p>
                </div>

                <h2>परिचय</h2>

                <p>
                    जब हम नई जानकारी को अपने अनुभवों से जोड़ते हैं,
                    तो सीखना आसान हो जाता है। यह पाठ विषय को सरल चरणों
                    और उदाहरणों के साथ समझाता है।
                </p>

                <h2>मुख्य बातें</h2>

                <ul>
                    <li>विषय से जुड़े महत्वपूर्ण शब्द समझें।</li>
                    <li>विषय को दैनिक जीवन से जोड़ें।</li>
                    <li>सरल उदाहरणों के साथ अभ्यास करें।</li>
                    <li>प्रश्नोत्तरी से पहले पाठ की समीक्षा करें।</li>
                </ul>

                <h2>उदाहरण</h2>

                <p>
                    सोचें कि यह विषय आपके विद्यालय, घर या आसपास कहाँ दिखाई देता है।
                    इसे अपने शब्दों में समझाने का प्रयास करें।
                </p>

                <div class="info-box">
                    <strong>सोचिए:</strong>
                    <p>
                        क्या आप आज अपने आसपास इस विषय का एक उदाहरण खोज सकते हैं?
                    </p>
                </div>

                <h2>त्वरित समीक्षा</h2>

                <p>
                    मुख्य बातों को याद करें, अभ्यास करें और फिर प्रश्नोत्तरी दें।
                </p>

            </div>
        `,

        mr: `
            <div class="lesson-content">

                <h2>${escapeHTML(marathiTitle(title))}</h2>

                <p>
                    ${escapeHTML(description)}
                </p>

                <div class="info-box">
                    <strong>इयत्ता ${classNumber} शिकण्याचे उद्दिष्ट</strong>

                    <p>
                        या धड्याच्या शेवटी विद्यार्थ्यांना विषयातील मुख्य
                        कल्पना समजतील आणि त्या दैनंदिन जीवनाशी जोडता येतील.
                    </p>
                </div>

                <h2>परिचय</h2>

                <p>
                    नवीन माहिती आपल्या अनुभवांशी जोडल्यास शिकणे सोपे होते.
                    हा धडा विषय सोप्या पद्धतीने आणि उदाहरणांसह समजावतो.
                </p>

                <h2>मुख्य मुद्दे</h2>

                <ul>
                    <li>विषयाशी संबंधित महत्त्वाचे शब्द समजून घ्या.</li>
                    <li>विषय दैनंदिन जीवनाशी जोडा.</li>
                    <li>सोप्या उदाहरणांचा सराव करा.</li>
                    <li>प्रश्नमंजुषेपूर्वी धड्याची उजळणी करा.</li>
                </ul>

                <h2>उदाहरण</h2>

                <p>
                    हा विषय शाळेत, घरी किंवा आपल्या परिसरात कुठे दिसतो
                    याचा विचार करा आणि स्वतःच्या शब्दांत समजावून सांगा.
                </p>

                <div class="info-box">
                    <strong>विचार करा:</strong>
                    <p>
                        आज तुम्हाला तुमच्या आसपास या विषयाचे एखादे उदाहरण सापडेल का?
                    </p>
                </div>

                <h2>जलद उजळणी</h2>

                <p>
                    मुख्य मुद्दे लक्षात ठेवा, सराव करा आणि त्यानंतर प्रश्नमंजुषा सोडवा.
                </p>

            </div>
        `
    };
}


/* ============================================================
   7. CERTIFICATE COURSES
   ============================================================ */

const courses = [

    {
        id: "digital-literacy",
        title: {
            en: "Digital Literacy",
            hi: "डिजिटल साक्षरता",
            mr: "डिजिटल साक्षरता"
        },
        description: {
            en: "Learn essential computer and internet skills.",
            hi: "कंप्यूटर और इंटरनेट की आवश्यक जानकारी सीखें।",
            mr: "संगणक आणि इंटरनेटची आवश्यक कौशल्ये शिका."
        },
        duration: 4,
        level: "beginner",
        lessons: [
            "Computer Basics",
            "Files and Folders",
            "Internet Basics",
            "Online Safety"
        ]
    },

    {
        id: "communication",
        title: {
            en: "Communication Skills",
            hi: "संचार कौशल",
            mr: "संवाद कौशल्य"
        },
        description: {
            en: "Build confidence in speaking, listening and writing.",
            hi: "बोलने, सुनने और लिखने में आत्मविश्वास बढ़ाएं।",
            mr: "बोलणे, ऐकणे आणि लिहिण्याचा आत्मविश्वास वाढवा."
        },
        duration: 4,
        level: "beginner",
        lessons: [
            "Listening",
            "Speaking Clearly",
            "Writing Clearly",
            "Presentation Skills"
        ]
    },

    {
        id: "financial-awareness",
        title: {
            en: "Everyday Financial Awareness",
            hi: "दैनिक वित्तीय जागरूकता",
            mr: "दैनंदिन आर्थिक जागरूकता"
        },
        description: {
            en: "Understand saving, budgeting and responsible spending.",
            hi: "बचत, बजट और जिम्मेदार खर्च को समझें।",
            mr: "बचत, बजेट आणि जबाबदार खर्च समजून घ्या."
        },
        duration: 4,
        level: "beginner",
        lessons: [
            "Needs and Wants",
            "Saving Money",
            "Making a Budget",
            "Smart Spending"
        ]
    },

    {
        id: "healthy-habits",
        title: {
            en: "Healthy Habits",
            hi: "स्वस्थ आदतें",
            mr: "आरोग्यदायी सवयी"
        },
        description: {
            en: "Learn everyday habits that support a healthy lifestyle.",
            hi: "स्वस्थ जीवनशैली के लिए आवश्यक दैनिक आदतें सीखें।",
            mr: "आरोग्यदायी जीवनशैलीसाठी आवश्यक दैनंदिन सवयी शिका."
        },
        duration: 4,
        level: "beginner",
        lessons: [
            "Personal Hygiene",
            "Healthy Food",
            "Exercise",
            "Sleep and Rest"
        ]
    }
];


/* ============================================================
   8. QUIZZES
   ============================================================ */

const quizzes = {};

subjects.forEach(subject => {

    quizzes[subject.id] = [
        {
            question: {
                en: `Which statement is most closely related to ${subject.names.en}?`,
                hi: `${subject.names.hi} से संबंधित सही कथन कौन सा है?`,
                mr: `${subject.names.mr} शी संबंधित योग्य विधान कोणते?`
            },

            options: {
                en: [
                    "It is an important area of learning.",
                    "It is only useful outside school.",
                    "It cannot be practised.",
                    "It has no connection with daily life."
                ],
                hi: [
                    "यह सीखने का एक महत्वपूर्ण क्षेत्र है।",
                    "यह केवल स्कूल के बाहर उपयोगी है।",
                    "इसका अभ्यास नहीं किया जा सकता।",
                    "इसका दैनिक जीवन से कोई संबंध नहीं है।"
                ],
                mr: [
                    "हा शिकण्याचा महत्त्वाचा भाग आहे.",
                    "हे फक्त शाळेबाहेर उपयोगी आहे.",
                    "याचा सराव करता येत नाही.",
                    "याचा दैनंदिन जीवनाशी संबंध नाही."
                ]
            },

            answer: 0
        },

        {
            question: {
                en: "What is the best way to improve your understanding?",
                hi: "अपनी समझ बेहतर करने का सबसे अच्छा तरीका क्या है?",
                mr: "आपली समज सुधारण्याचा सर्वोत्तम मार्ग कोणता?"
            },

            options: {
                en: [
                    "Practise regularly and review lessons.",
                    "Never ask questions.",
                    "Avoid examples.",
                    "Stop after reading the title."
                ],
                hi: [
                    "नियमित अभ्यास करें और पाठ की समीक्षा करें।",
                    "कभी प्रश्न न पूछें।",
                    "उदाहरणों से बचें।",
                    "केवल शीर्षक पढ़कर रुक जाएँ।"
                ],
                mr: [
                    "नियमित सराव करा आणि धड्यांची उजळणी करा.",
                    "कधीही प्रश्न विचारू नका.",
                    "उदाहरणे टाळा.",
                    "फक्त शीर्षक वाचून थांबा."
                ]
            },

            answer: 0
        }
    ];

});


/* ============================================================
   9. APPLICATION STATE
   ============================================================ */

let state = {
    language: localStorage.getItem("edubridge_language") || "en",
    classNumber: Number(localStorage.getItem("edubridge_class")) || 5,
    user: JSON.parse(localStorage.getItem("edubridge_user") || "null"),

    completedLessons:
        JSON.parse(localStorage.getItem("edubridge_completed_lessons") || "[]"),

    completedCourses:
        JSON.parse(localStorage.getItem("edubridge_completed_courses") || "[]"),

    quizScores:
        JSON.parse(localStorage.getItem("edubridge_quiz_scores") || "{}"),

    darkMode:
        localStorage.getItem("edubridge_dark_mode") === "true"
};


/* ============================================================
   10. NAVIGATION STATE
   ============================================================ */

/*
   IMPORTANT MOBILE BACK BUTTON FIX

   We maintain a browser history entry for every internal view.

   Example:

   dashboard
       ↓
   subjects
       ↓
   lesson

   Browser Back:
       lesson → subjects → dashboard

   It will NOT immediately leave the website.

   When the mobile menu is open, Back first closes the menu.
*/

let currentView = "dashboard";

let navigationState = {
    view: "dashboard",
    subject: null,
    lesson: null,
    course: null,
    quiz: null
};

let menuOpen = false;


/* ============================================================
   11. DOM HELPERS
   ============================================================ */

function $(selector) {
    return document.querySelector(selector);
}

function $all(selector) {
    return [...document.querySelectorAll(selector)];
}

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ============================================================
   12. STORAGE
   ============================================================ */

function saveState() {

    localStorage.setItem(
        "edubridge_language",
        state.language
    );

    localStorage.setItem(
        "edubridge_class",
        state.classNumber
    );

    localStorage.setItem(
        "edubridge_user",
        JSON.stringify(state.user)
    );

    localStorage.setItem(
        "edubridge_completed_lessons",
        JSON.stringify(state.completedLessons)
    );

    localStorage.setItem(
        "edubridge_completed_courses",
        JSON.stringify(state.completedCourses)
    );

    localStorage.setItem(
        "edubridge_quiz_scores",
        JSON.stringify(state.quizScores)
    );

    localStorage.setItem(
        "edubridge_dark_mode",
        state.darkMode
    );
}


/* ============================================================
   13. TRANSLATION HELPER
   ============================================================ */

function t(key) {

    return (
        translations[state.language]?.[key] ||
        translations.en[key] ||
        key
    );
}


function localized(object) {

    if (!object) return "";

    if (typeof object === "string") {
        return object;
    }

    return (
        object[state.language] ||
        object.en ||
        Object.values(object)[0] ||
        ""
    );
}


/* ============================================================
   14. APPLY LANGUAGE
   ============================================================ */

function applyLanguage() {

    document.documentElement.lang = state.language;

    $all("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (translations[state.language]?.[key]) {
            element.textContent = translations[state.language][key];
        }

    });

    $all("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;

        if (translations[state.language]?.[key]) {
            element.placeholder =
                translations[state.language][key];
        }

    });

}


/* ============================================================
   15. THEME
   ============================================================ */

function applyTheme() {

    document.body.classList.toggle(
        "dark-mode",
        state.darkMode
    );

    document.documentElement.classList.toggle(
        "dark-mode",
        state.darkMode
    );
}


/* ============================================================
   16. MOBILE MENU
   ============================================================ */

function getMobileMenu() {

    return (
        document.querySelector(
            "#mobileMenu, .mobile-menu, .nav-mobile, .sidebar"
        )
    );
}


function getMenuButton() {

    return (
        document.querySelector(
            "#menuToggle, #mobileMenuBtn, .menu-toggle, .hamburger"
        )
    );
}


function openMobileMenu(pushHistory = true) {

    const menu = getMobileMenu();

    if (!menu) return;

    menuOpen = true;

    menu.classList.add("open");
    menu.classList.add("active");
    menu.setAttribute("aria-hidden", "false");

    document.body.classList.add("menu-open");

    const button = getMenuButton();

    if (button) {
        button.setAttribute("aria-expanded", "true");
    }

    if (pushHistory) {

        history.pushState(
            {
                type: "menu",
                previous: navigationState
            },
            "",
            window.location.href.split("#")[0] + "#menu"
        );

    }
}


function closeMobileMenu(fromPopState = false) {

    const menu = getMobileMenu();

    menuOpen = false;

    if (menu) {

        menu.classList.remove("open");
        menu.classList.remove("active");
        menu.setAttribute("aria-hidden", "true");

    }

    document.body.classList.remove("menu-open");

    const button = getMenuButton();

    if (button) {
        button.setAttribute("aria-expanded", "false");
    }

    if (
        fromPopState &&
        window.location.hash === "#menu"
    ) {
        history.replaceState(
            null,
            "",
            window.location.href.split("#")[0]
        );
    }
}


function toggleMobileMenu() {

    if (menuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}


/* ============================================================
   17. HISTORY NAVIGATION
   ============================================================ */

function createHistoryEntry(view, data = {}) {

    const newState = {
        type: "view",

        view,

        subject: data.subject || null,
        lesson: data.lesson || null,
        course: data.course || null,
        quiz: data.quiz || null
    };

    history.pushState(
        newState,
        "",
        "#" + view
    );

    navigationState = newState;
    currentView = view;
}


function navigate(view, data = {}, push = true) {

    if (menuOpen) {
        closeMobileMenu();
    }

    if (push) {
        createHistoryEntry(view, data);
    } else {

        navigationState = {
            type: "view",
            view,
            subject: data.subject || null,
            lesson: data.lesson || null,
            course: data.course || null,
            quiz: data.quiz || null
        };

        currentView = view;
    }

    renderView();
}


function goBackInsideWebsite() {

    if (menuOpen) {

        closeMobileMenu();

        if (window.location.hash === "#menu") {
            history.back();
        }

        return;
    }

    /*
       If there is an internal browser history entry,
       use it.
    */

    if (history.length > 1) {
        history.back();
        return;
    }

    /*
       Fallback:
       Never let the user get trapped on a lesson page.
    */

    if (currentView === "lesson") {

        navigate(
            "subjects",
            {},
            true
        );

        return;
    }

    if (
        currentView === "subjects" ||
        currentView === "quiz" ||
        currentView === "courses" ||
        currentView === "progress" ||
        currentView === "settings"
    ) {

        navigate(
            "dashboard",
            {},
            true
        );

        return;
    }
}


/* ============================================================
   18. BROWSER BACK BUTTON
   ============================================================ */

window.addEventListener("popstate", event => {

    /*
       Menu gets priority.
    */

    if (menuOpen) {

        closeMobileMenu(true);

        return;
    }

    const data = event.state;

    if (
        data &&
        data.type === "view"
    ) {

        navigationState = data;
        currentView = data.view;

        renderView();

        return;
    }

    /*
       If browser gives us an empty history state,
       return safely to dashboard instead of leaving
       the single-page application unexpectedly.
    */

    if (!event.state) {

        if (currentView !== "dashboard") {

            navigationState = {
                type: "view",
                view: "dashboard",
                subject: null,
                lesson: null,
                course: null,
                quiz: null
            };

            currentView = "dashboard";

            renderView();

            history.replaceState(
                navigationState,
                "",
                "#dashboard"
            );
        }
    }

});


/* ============================================================
   19. INITIAL HISTORY ENTRY
   ============================================================ */

function initialiseHistory() {

    const initialState = {
        type: "view",
        view: "dashboard",
        subject: null,
        lesson: null,
        course: null,
        quiz: null
    };

    history.replaceState(
        initialState,
        "",
        "#dashboard"
    );

    navigationState = initialState;
    currentView = "dashboard";
}


/* ============================================================
   20. FIND APPLICATION CONTAINER
   ============================================================ */

function getAppContainer() {

    return (
        document.querySelector(
            "#app, #mainContent, main, .main-content, .content"
        )
    );
}


/* ============================================================
   21. RENDER VIEW
   ============================================================ */

function renderView() {

    applyLanguage();
    applyTheme();

    switch (currentView) {

        case "dashboard":
            renderDashboard();
            break;

        case "subjects":
            renderSubjects();
            break;

        case "lesson":
            renderLesson(
                navigationState.subject,
                navigationState.lesson
            );
            break;

        case "courses":
            renderCourses();
            break;

        case "course":
            renderCourse(
                navigationState.course
            );
            break;

        case "quiz":
            renderQuiz(
                navigationState.subject
            );
            break;

        case "progress":
            renderProgress();
            break;

        case "settings":
            renderSettings();
            break;

        default:
            renderDashboard();
    }

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    updateNavigationActiveState();
}


/* ============================================================
   22. DASHBOARD
   ============================================================ */

function renderDashboard() {

    const app = getAppContainer();

    if (!app) return;

    const completed = state.completedLessons.length;

    const total = getTotalLessons();

    const percentage =
        total === 0
            ? 0
            : Math.round(
                (completed / total) * 100
            );

    const nextLesson = getNextLesson();

    app.innerHTML = `

        <section class="page dashboard-page">

            <div class="page-header">

                <div>

                    <span class="eyebrow">
                        ${t("learningPortal")}
                    </span>

                    <h1>
                        ${t("welcome")}${state.user?.username ? ", " + escapeHTML(state.user.username) : ""}
                    </h1>

                    <p>
                        ${t("dashboardIntro")}
                    </p>

                </div>

                <div class="class-badge">
                    ${t("class")} ${state.classNumber}
                </div>

            </div>


            <div class="stats-grid">

                <div class="stat-card">

                    <strong>
                        ${completed}
                    </strong>

                    <span>
                        ${t("lessonsCompleted")}
                    </span>

                </div>


                <div class="stat-card">

                    <strong>
                        ${percentage}%
                    </strong>

                    <span>
                        ${t("overallProgress")}
                    </span>

                </div>


                <div class="stat-card">

                    <strong>
                        ${getBestQuizScore()}%
                    </strong>

                    <span>
                        ${t("quizScore")}
                    </span>

                </div>

            </div>


            <section class="dashboard-section">

                <div class="section-heading">

                    <div>
                        <span class="eyebrow">
                            ${t("continueLearning")}
                        </span>

                        <h2>
                            ${t("studyToday")}
                        </h2>
                    </div>

                </div>

                ${
                    nextLesson
                        ? lessonCardHTML(
                            nextLesson.subject,
                            nextLesson.lesson
                        )
                        : emptyCompletedHTML()
                }

            </section>


            <section class="dashboard-section">

                <div class="section-heading">

                    <div>
                        <span class="eyebrow">
                            ${t("yourSubjects")}
                        </span>

                        <h2>
                            ${t("learnBySubject")}
                        </h2>
                    </div>

                    <button
                        class="text-button"
                        onclick="navigate('subjects')"
                    >
                        ${t("viewAll")}
                    </button>

                </div>


                <div class="subject-grid">

                    ${subjects
                        .map(subject => subjectCardHTML(subject))
                        .join("")}

                </div>

            </section>


            <section class="dashboard-section">

                <div class="section-heading">

                    <div>
                        <span class="eyebrow">
                            ${t("skillBuilding")}
                        </span>

                        <h2>
                            ${t("featuredCourses")}
                        </h2>
                    </div>

                    <button
                        class="text-button"
                        onclick="navigate('courses')"
                    >
                        ${t("viewAll")}
                    </button>

                </div>


                <div class="course-grid">

                    ${courses
                        .slice(0, 3)
                        .map(course => courseCardHTML(course))
                        .join("")}

                </div>

            </section>

        </section>
    `;
}


/* ============================================================
   23. SUBJECT CARD
   ============================================================ */

function subjectCardHTML(subject) {

    const lessons =
        curriculum[state.classNumber]?.[subject.id] || [];

    const completed =
        lessons.filter(
            lesson =>
                state.completedLessons.includes(lesson.id)
        ).length;

    const percentage =
        lessons.length
            ? Math.round(
                (completed / lessons.length) * 100
            )
            : 0;

    return `

        <article
            class="subject-card ${subject.color}"
            onclick="navigate('subjects', { subject: '${subject.id}' })"
            tabindex="0"
            role="button"
        >

            <div class="subject-icon">
                ${subject.icon}
            </div>

            <div class="subject-card-body">

                <h3>
                    ${escapeHTML(
                        subject.names[state.language] ||
                        subject.names.en
                    )}
                </h3>

                <p>
                    ${lessons.length} ${t("lessons")}
                </p>

                <div class="progress-bar">

                    <span
                        style="width:${percentage}%"
                    ></span>

                </div>

                <small>
                    ${percentage}% ${t("complete")}
                </small>

            </div>

        </article>
    `;
}


/* ============================================================
   24. SUBJECTS PAGE
   ============================================================ */

function renderSubjects() {

    const app = getAppContainer();

    if (!app) return;

    const selectedSubject =
        navigationState.subject;

    if (selectedSubject) {

        renderSubjectLessons(selectedSubject);

        return;
    }

    app.innerHTML = `

        <section class="page subjects-page">

            <button
                class="back-button"
                onclick="goBackInsideWebsite()"
            >
                ← ${t("back")}
            </button>

            <div class="page-header">

                <div>

                    <span class="eyebrow">
                        ${t("curriculum")}
                    </span>

                    <h1>
                        ${t("subjectsTitle")}
                    </h1>

                    <p>
                        ${t("subjectsIntro")}
                    </p>

                </div>

            </div>


            <div class="subject-grid">

                ${subjects
                    .map(subject => subjectCardHTML(subject))
                    .join("")}

            </div>

        </section>
    `;
}


/* ============================================================
   25. SUBJECT LESSONS
   ============================================================ */

function renderSubjectLessons(subjectId) {

    const app = getAppContainer();

    const subject =
        subjects.find(
            item => item.id === subjectId
        );

    if (!subject || !app) {

        navigate("subjects", {}, false);

        return;
    }

    const lessons =
        curriculum[state.classNumber]?.[subjectId] || [];

    app.innerHTML = `

        <section class="page lessons-page">

            <button
                class="back-button"
                onclick="goBackInsideWebsite()"
            >
                ← ${t("back")}
            </button>


            <div class="page-header">

                <div>

                    <span class="eyebrow">
                        ${t("class")} ${state.classNumber}
                    </span>

                    <h1>
                        ${escapeHTML(
                            localized(subject.names)
                        )}
                    </h1>

                    <p>
                        ${lessons.length} ${t("lessons")}
                    </p>

                </div>

            </div>


            <div class="lesson-list">

                ${lessons
                    .map(
                        (lesson, index) =>
                            lessonListItemHTML(
                                subject,
                                lesson,
                                index
                            )
                    )
                    .join("")}

            </div>

        </section>
    `;
}


/* ============================================================
   26. LESSON LIST ITEM
   ============================================================ */

function lessonListItemHTML(
    subject,
    lesson,
    index
) {

    const completed =
        state.completedLessons.includes(
            lesson.id
        );

    return `

        <article
            class="lesson-list-item ${completed ? "completed" : ""}"
            onclick="openLesson('${subject.id}', '${lesson.id}')"
            tabindex="0"
            role="button"
        >

            <div class="lesson-number">
                ${completed ? "✓" : index + 1}
            </div>

            <div class="lesson-info">

                <span class="lesson-label">
                    ${t("lesson")} ${index + 1}
                </span>

                <h3>
                    ${escapeHTML(
                        localized(lesson.title)
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        localized(lesson.description)
                    )}
                </p>

            </div>

            <div class="lesson-meta">

                <span>
                    ${lesson.duration} min
                </span>

                <span>
                    →
                </span>

            </div>

        </article>
    `;
}


/* ============================================================
   27. OPEN LESSON
   ============================================================ */

function openLesson(
    subjectId,
    lessonId
) {

    createHistoryEntry(
        "lesson",
        {
            subject: subjectId,
            lesson: lessonId
        }
    );

    renderView();
}


/* ============================================================
   28. LESSON PAGE
   ============================================================ */

function renderLesson(
    subjectId,
    lessonId
) {

    const app = getAppContainer();

    const subject =
        subjects.find(
            item => item.id === subjectId
        );

    const lesson =
        curriculum[state.classNumber]?.[subjectId]
            ?.find(item => item.id === lessonId);

    if (!subject || !lesson || !app) {

        navigate(
            "subjects",
            {},
            false
        );

        return;
    }

    const completed =
        state.completedLessons.includes(
            lesson.id
        );

    app.innerHTML = `

        <section class="page lesson-page">

            <button
                class="back-button"
                onclick="goBackInsideWebsite()"
            >
                ← ${t("back")}
            </button>


            <div class="lesson-header">

                <span class="eyebrow">
                    ${escapeHTML(
                        localized(subject.names)
                    )}
                </span>

                <h1>
                    ${escapeHTML(
                        localized(lesson.title)
                    )}
                </h1>

                <p>
                    ${escapeHTML(
                        localized(lesson.description)
                    )}
                </p>

                <div class="lesson-meta-row">

                    <span>
                        ${lesson.duration} min
                    </span>

                    ${
                        completed
                            ? `<span class="completed-badge">✓ ${t("completed")}</span>`
                            : ""
                    }

                </div>

            </div>


            <article class="lesson-body">

                ${
                    localized(
                        lesson.content
                    )
                }

            </article>


            <div class="lesson-actions">

                <button
                    class="primary-button"
                    onclick="completeLesson('${lesson.id}')"
                    ${completed ? "disabled" : ""}
                >
                    ${
                        completed
                            ? "✓ " + t("completed")
                            : "✓ " + t("openLesson")
                    }
                </button>


                <button
                    class="secondary-button"
                    onclick="navigate('quiz', { subject: '${subject.id}' })"
                >
                    ${t("takeQuiz")}
                </button>

            </div>

        </section>
    `;
}


/* ============================================================
   29. COMPLETE LESSON
   ============================================================ */

function completeLesson(
    lessonId
) {

    if (
        !state.completedLessons.includes(
            lessonId
        )
    ) {

        state.completedLessons.push(
            lessonId
        );

        saveState();

        showToast(
            t("lessonCompletedMessage")
        );

        renderLesson(
            navigationState.subject,
            navigationState.lesson
        );

        updateDashboardStats();
    }
}


/* ============================================================
   30. COURSES
   ============================================================ */

function renderCourses() {

    const app = getAppContainer();

    if (!app) return;

    app.innerHTML = `

        <section class="page courses-page">

            <button
                class="back-button"
                onclick="goBackInsideWebsite()"
            >
                ← ${t("back")}
            </button>

            <div class="page-header">

                <div>

                    <span class="eyebrow">
                        ${t("certification")}
                    </span>

                    <h1>
                        ${t("coursesTitle")}
                    </h1>

                    <p>
                        ${t("coursesIntro")}
                    </p>

                </div>

            </div>


            <div class="course-grid">

                ${courses
                    .map(course => courseCardHTML(course))
                    .join("")}

            </div>

        </section>
    `;
}


function courseCardHTML(course) {

    const completed =
        state.completedCourses.includes(
            course.id
        );

    return `

        <article
            class="course-card ${completed ? "completed" : ""}"
            onclick="openCourse('${course.id}')"
            tabindex="0"
            role="button"
        >

            <div class="course-card-icon">
                🎓
            </div>

            <div>

                <span class="eyebrow">
                    ${course.level === "beginner"
                        ? t("beginner")
                        : t("intermediate")}
                </span>

                <h3>
                    ${escapeHTML(
                        localized(course.title)
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        localized(course.description)
                    )}
                </p>

                <div class="course-meta">

                    <span>
                        ${course.lessons.length} ${t("lessons")}
                    </span>

                    <span>
                        ${course.duration} ${t("hours")}
                    </span>

                </div>

            </div>

        </article>
    `;
}


/* ============================================================
   31. OPEN COURSE
   ============================================================ */

function openCourse(
    courseId
) {

    createHistoryEntry(
        "course",
        {
            course: courseId
        }
    );

    renderView();
}


/* ============================================================
   32. COURSE PAGE
   ============================================================ */

function renderCourse(
    courseId
) {

    const app = getAppContainer();

    const course =
        courses.find(
            item => item.id === courseId
        );

    if (!course || !app) {

        navigate(
            "courses",
            {},
            false
        );

        return;
    }

    const completed =
        state.completedCourses.includes(
            course.id
        );

    app.innerHTML = `

        <section class="page course-page">

            <button
                class="back-button"
                onclick="goBackInsideWebsite()"
            >
                ← ${t("back")}
            </button>


            <div class="course-header">

                <div class="course-big-icon">
                    🎓
                </div>

                <div>

                    <span class="eyebrow">
                        ${t("certification")}
                    </span>

                    <h1>
                        ${escapeHTML(
                            localized(course.title)
                        )}
                    </h1>

                    <p>
                        ${escapeHTML(
                            localized(course.description)
                        )}
                    </p>

                </div>

            </div>


            <div class="course-outline">

                <h2>
                    ${t("lessons")}
                </h2>

                ${course.lessons
                    .map(
                        (lesson, index) => `
                            <div class="course-lesson">
                                <span>
                                    ${index + 1}
                                </span>

                                <strong>
                                    ${escapeHTML(lesson)}
                                </strong>
                            </div>
                        `
                    )
                    .join("")}

            </div>


            <button
                class="primary-button"
                onclick="completeCourse('${course.id}')"
                ${completed ? "disabled" : ""}
            >
                ${
                    completed
                        ? "✓ " + t("completed")
                        : "🎓 " + t("finishCourse")
                }
            </button>


            ${
                completed
                    ? `
                        <div class="certificate-box">

                            <h2>
                                🎓 ${t("certificate")}
                            </h2>

                            <p>
                                ${t("courseCompleted")}
                            </p>

                            <button
                                class="secondary-button"
                                onclick="printCertificate('${course.id}')"
                            >
                                ${t("certificate")}
                            </button>

                        </div>
                    `
                    : ""
            }

        </section>
    `;
}


/* ============================================================
   33. COMPLETE COURSE
   ============================================================ */

function completeCourse(
    courseId
) {

    if (
        !state.completedCourses.includes(
            courseId
        )
    ) {

        state.completedCourses.push(
            courseId
        );

        saveState();

        showToast(
            t("courseCompleted")
        );

        renderCourse(courseId);
    }
}


/* ============================================================
   34. PRINT CERTIFICATE
   ============================================================ */

function printCertificate(
    courseId
) {

    const course =
        courses.find(
            item => item.id === courseId
        );

    if (!course) return;

    const username =
        state.user?.username ||
        "Student";

    const title =
        localized(course.title);

    const certificateWindow =
        window.open(
            "",
            "_blank",
            "width=900,height=700"
        );

    if (!certificateWindow) {

        showToast(
            "Please allow pop-ups to print your certificate."
        );

        return;
    }

    certificateWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>EduBridge Certificate</title>

            <style>

                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 50px;
                    background: #f5f7fb;
                }

                .certificate {
                    background: white;
                    border: 10px solid #222;
                    padding: 70px;
                    text-align: center;
                    min-height: 500px;
                }

                h1 {
                    font-size: 48px;
                    margin-bottom: 10px;
                }

                h2 {
                    font-size: 30px;
                    margin: 30px 0;
                }

                .student {
                    font-size: 38px;
                    font-weight: bold;
                    margin: 30px;
                }

                .course {
                    font-size: 25px;
                }

                .footer {
                    margin-top: 80px;
                }

                @media print {
                    body {
                        background: white;
                    }
                }

            </style>

        </head>

        <body>

            <div class="certificate">

                <h1>EDUBRIDGE</h1>

                <h2>Certificate of Completion</h2>

                <p>This certificate is proudly presented to</p>

                <div class="student">
                    ${escapeHTML(username)}
                </div>

                <p>for successfully completing</p>

                <div class="course">
                    ${escapeHTML(title)}
                </div>

                <div class="footer">
                    Government School E-Learning Portal
                </div>

            </div>

            <script>
                window.onload = function() {
                    window.print();
                };
            <\/script>

        </body>

        </html>
    `);

    certificateWindow.document.close();
}


/* ============================================================
   35. QUIZ
   ============================================================ */

function renderQuiz(
    subjectId
) {

    const app = getAppContainer();

    if (!app) return;

    const subject =
        subjects.find(
            item => item.id === subjectId
        );

    if (!subject) {

        renderQuizSelection();

        return;
    }

    const questions =
        quizzes[subjectId] || [];

    app.innerHTML = `

        <section class="page quiz-page">

            <button
                class="back-button"
                onclick="goBackInsideWebsite()"
            >
                ← ${t("back")}
            </button>


            <div class="page-header">

                <div>

                    <span class="eyebrow">
                        ${t("practice")}
                    </span>

                    <h1>
                        ${escapeHTML(
                            localized(subject.names)
                        )}
                    </h1>

                    <p>
                        ${t("quizIntro")}
                    </p>

                </div>

            </div>


            <form
                id="quizForm"
                class="quiz-form"
                onsubmit="submitQuiz(event, '${subjectId}')"
            >

                ${questions
                    .map(
                        (question, index) =>
                            quizQuestionHTML(
                                question,
                                index
                            )
                    )
                    .join("")}


                <button
                    type="submit"
                    class="primary-button"
                >
                    ${t("takeQuiz")}
                </button>

            </form>

            <div id="quizResult"></div>

        </section>
    `;
}


function renderQuizSelection() {

    const app = getAppContainer();

    if (!app) return;

    app.innerHTML = `

        <section class="page quiz-page">

            <button
                class="back-button"
                onclick="goBackInsideWebsite()"
            >
                ← ${t("back")}
            </button>

            <div class="page-header">

                <span class="eyebrow">
                    ${t("practice")}
                </span>

                <h1>
                    ${t("quizTitle")}
                </h1>

                <p>
                    ${t("quizIntro")}
                </p>

            </div>


            <div class="subject-grid">

                ${subjects
                    .map(
                        subject => `
                            <article
                                class="subject-card"
                                onclick="navigate('quiz', { subject: '${subject.id}' })"
                            >

                                <div class="subject-icon">
                                    ${subject.icon}
                                </div>

                                <h3>
                                    ${escapeHTML(
                                        localized(subject.names)
                                    )}
                                </h3>

                                <p>
                                    ${t("takeQuiz")}
                                </p>

                            </article>
                        `
                    )
                    .join("")}

            </div>

        </section>
    `;
}


function quizQuestionHTML(
    question,
    index
) {

    return `

        <fieldset class="quiz-question">

            <legend>
                ${index + 1}. ${escapeHTML(
                    localized(question.question)
                )}
            </legend>

            ${question.options[state.language]
                .map(
                    (option, optionIndex) => `
                        <label class="quiz-option">

                            <input
                                type="radio"
                                name="question-${index}"
                                value="${optionIndex}"
                                required
                            >

                            <span>
                                ${escapeHTML(option)}
                            </span>

                        </label>
                    `
                )
                .join("")}

        </fieldset>
    `;
}


function submitQuiz(
    event,
    subjectId
) {

    event.preventDefault();

    const questions =
        quizzes[subjectId] || [];

    let score = 0;

    questions.forEach(
        (question, index) => {

            const selected =
                document.querySelector(
                    `input[name="question-${index}"]:checked`
                );

            if (
                selected &&
                Number(selected.value) ===
                question.answer
            ) {
                score++;
            }

        }
    );

    const percentage =
        questions.length
            ? Math.round(
                (score / questions.length) * 100
            )
            : 0;

    state.quizScores[subjectId] =
        Math.max(
            state.quizScores[subjectId] || 0,
            percentage
        );

    saveState();

    const result =
        document.querySelector("#quizResult");

    if (result) {

        result.innerHTML = `

            <div class="quiz-result">

                <h2>
                    ${percentage}%
                </h2>

                <p>
                    ${score} / ${questions.length}
                </p>

                <button
                    class="secondary-button"
                    onclick="navigate('dashboard')"
                >
                    ${t("dashboard")}
                </button>

            </div>
        `;
    }
}


/* ============================================================
   36. PROGRESS
   ============================================================ */

function renderProgress() {

    const app = getAppContainer();

    if (!app) return;

    const total =
        getTotalLessons();

    const completed =
        state.completedLessons.length;

    const percentage =
        total
            ? Math.round(
                completed / total * 100
            )
            : 0;

    app.innerHTML = `

        <section class="page progress-page">

            <button
                class="back-button"
                onclick="goBackInsideWebsite()"
            >
                ← ${t("back")}
            </button>


            <div class="page-header">

                <span class="eyebrow">
                    ${t("yourJourney")}
                </span>

                <h1>
                    ${t("progressTitle")}
                </h1>

                <p>
                    ${t("progressIntro")}
                </p>

            </div>


            <div class="progress-overview">

                <div class="progress-circle">

                    <strong>
                        ${percentage}%
                    </strong>

                    <span>
                        ${t("overall")}
                    </span>

                </div>

                <div>

                    <h2>
                        ${t("keepGoing")}
                    </h2>

                    <p>
                        ${t("progressMessage")}
                    </p>

                </div>

            </div>


            <h2>
                ${t("subjectProgress")}
            </h2>


            <div class="progress-list">

                ${subjects
                    .map(
                        subject =>
                            progressSubjectHTML(subject)
                    )
                    .join("")}

            </div>

        </section>
    `;
}


function progressSubjectHTML(
    subject
) {

    const lessons =
        curriculum[state.classNumber]?.[
            subject.id
        ] || [];

    const completed =
        lessons.filter(
            lesson =>
                state.completedLessons.includes(
                    lesson.id
                )
        ).length;

    const percentage =
        lessons.length
            ? Math.round(
                completed /
                lessons.length *
                100
            )
            : 0;

    return `

        <div class="progress-subject">

            <div>

                <strong>
                    ${escapeHTML(
                        localized(subject.names)
                    )}
                </strong>

                <span>
                    ${completed}/${lessons.length}
                </span>

            </div>

            <div class="progress-bar">

                <span
                    style="width:${percentage}%"
                ></span>

            </div>

        </div>
    `;
}


/* ============================================================
   37. SETTINGS
   ============================================================ */

function renderSettings() {

    const app = getAppContainer();

    if (!app) return;

    app.innerHTML = `

        <section class="page settings-page">

            <button
                class="back-button"
                onclick="goBackInsideWebsite()"
            >
                ← ${t("back")}
            </button>


            <div class="page-header">

                <span class="eyebrow">
                    ${t("preferences")}
                </span>

                <h1>
                    ${t("settingsTitle")}
                </h1>

                <p>
                    ${t("settingsIntro")}
                </p>

            </div>


            <div class="settings-list">


                <div class="setting-item">

                    <div>

                        <h3>
                            ${t("languageSetting")}
                        </h3>

                        <p>
                            ${t("languageSettingText")}
                        </p>

                    </div>

                    <select
                        onchange="changeLanguage(this.value)"
                        value="${state.language}"
                    >

                        <option value="en">
                            English
                        </option>

                        <option value="hi">
                            हिन्दी
                        </option>

                        <option value="mr">
                            मराठी
                        </option>

                    </select>

                </div>


                <div class="setting-item">

                    <div>

                        <h3>
                            ${t("class")}
                        </h3>

                        <p>
                            Choose your current class.
                        </p>

                    </div>

                    <select
                        onchange="changeClass(this.value)"
                    >

                        ${[5, 6, 7, 8, 9, 10]
                            .map(
                                number => `
                                    <option
                                        value="${number}"
                                        ${state.classNumber === number ? "selected" : ""}
                                    >
                                        Class ${number}
                                    </option>
                                `
                            )
                            .join("")}

                    </select>

                </div>


                <div class="setting-item">

                    <div>

                        <h3>
                            ${t("appearance")}
                        </h3>

                        <p>
                            ${t("appearanceText")}
                        </p>

                    </div>

                    <button
                        class="secondary-button"
                        onclick="toggleTheme()"
                    >
                        ${state.darkMode ? "☀️ Light" : "🌙 Dark"}
                    </button>

                </div>


                <div class="setting-item">

                    <div>

                        <h3>
                            Student Account
                        </h3>

                        <p>
                            ${escapeHTML(
                                state.user?.username ||
                                "Student"
                            )}
                        </p>

                    </div>

                    <button
                        class="secondary-button"
                        onclick="logout()"
                    >
                        ${t("logout")}
                    </button>

                </div>

            </div>

        </section>
    `;
}


/* ============================================================
   38. LANGUAGE
   ============================================================ */

function changeLanguage(
    language
) {

    if (!translations[language]) {
        return;
    }

    state.language =
        language;

    saveState();

    applyLanguage();

    renderView();
}


/* ============================================================
   39. CLASS
   ============================================================ */

function changeClass(
    classNumber
) {

    const number =
        Number(classNumber);

    if (
        number < 5 ||
        number > 10
    ) {
        return;
    }

    state.classNumber =
        number;

    saveState();

    navigate(
        "dashboard"
    );
}


/* ============================================================
   40. THEME
   ============================================================ */

function toggleTheme() {

    state.darkMode =
        !state.darkMode;

    saveState();

    applyTheme();

    renderSettings();
}


/* ============================================================
   41. SEARCH
   ============================================================ */

function performSearch(
    query
) {

    query =
        String(query || "")
            .trim()
            .toLowerCase();

    if (!query) {

        navigate(
            "dashboard"
        );

        return;
    }

    const results = [];

    Object.entries(
        curriculum[state.classNumber] || {}
    )
        .forEach(
            ([subjectId, lessons]) => {

                const subject =
                    subjects.find(
                        item =>
                            item.id === subjectId
                    );

                lessons.forEach(
                    lesson => {

                        const title =
                            localized(
                                lesson.title
                            );

                        const description =
                            localized(
                                lesson.description
                            );

                        if (
                            title
                                .toLowerCase()
                                .includes(query) ||

                            description
                                .toLowerCase()
                                .includes(query)
                        ) {

                            results.push({
                                subject,
                                lesson
                            });

                        }

                    }
                );

            }
        );

    renderSearchResults(
        query,
        results
    );
}


function renderSearchResults(
    query,
    results
) {

    const app =
        getAppContainer();

    if (!app) return;

    app.innerHTML = `

        <section class="page search-page">

            <button
                class="back-button"
                onclick="goBackInsideWebsite()"
            >
                ← ${t("back")}
            </button>


            <div class="page-header">

                <span class="eyebrow">
                    SEARCH
                </span>

                <h1>
                    ${t("searchResults")}
                </h1>

                <p>
                    "${escapeHTML(query)}"
                </p>

            </div>


            ${
                results.length
                    ? `
                        <div class="lesson-list">

                            ${results
                                .map(
                                    result =>
                                        lessonListItemHTML(
                                            result.subject,
                                            result.lesson,
                                            0
                                        )
                                )
                                .join("")}

                        </div>
                    `
                    : `
                        <div class="empty-state">

                            <h2>
                                ${t("noResults")}
                            </h2>

                            <p>
                                Try another keyword.
                            </p>

                        </div>
                    `
            }

        </section>
    `;
}


/* ============================================================
   42. LOGIN
   ============================================================ */

function loginUser(
    username,
    password
) {

    username =
        String(username || "")
            .trim();

    password =
        String(password || "");

    if (!username || !password) {

        showToast(
            t("invalidLogin")
        );

        return false;
    }

    const users =
        JSON.parse(
            localStorage.getItem(
                "edubridge_users"
            ) || "[]"
        );

    const user =
        users.find(
            item =>
                item.username === username &&
                item.password === password
        );

    if (!user) {

        showToast(
            t("invalidLogin")
        );

        return false;
    }

    state.user = {
        username: user.username,
        classNumber: user.classNumber
    };

    state.classNumber =
        user.classNumber || 5;

    saveState();

    navigate(
        "dashboard"
    );

    return true;
}


/* ============================================================
   43. SIGNUP
   ============================================================ */

function signupUser(
    username,
    password,
    confirmPassword,
    classNumber
) {

    username =
        String(username || "")
            .trim();

    password =
        String(password || "");

    confirmPassword =
        String(confirmPassword || "");

    classNumber =
        Number(classNumber);

    if (!username) {

        showToast(
            "Please enter a username."
        );

        return false;
    }

    if (
        !classNumber ||
        classNumber < 5 ||
        classNumber > 10
    ) {

        showToast(
            t("chooseClass")
        );

        return false;
    }

    if (password !== confirmPassword) {

        showToast(
            t("passwordMismatch")
        );

        return false;
    }

    if (password.length < 4) {

        showToast(
            "Password must contain at least 4 characters."
        );

        return false;
    }

    const users =
        JSON.parse(
            localStorage.getItem(
                "edubridge_users"
            ) || "[]"
        );

    if (
        users.some(
            user =>
                user.username.toLowerCase() ===
                username.toLowerCase()
        )
    ) {

        showToast(
            t("usernameExists")
        );

        return false;
    }

    users.push({
        username,
        password,
        classNumber
    });

    localStorage.setItem(
        "edubridge_users",
        JSON.stringify(users)
    );

    showToast(
        t("accountCreated")
    );

    return true;
}


/* ============================================================
   44. LOGOUT
   ============================================================ */

function logout() {

    state.user = null;

    saveState();

    showToast(
        t("loggedOut")
    );

    /*
       If your HTML contains a login screen,
       use its existing function if available.
    */

    if (
        typeof showLoginScreen ===
        "function"
    ) {

        showLoginScreen();

        return;
    }

    navigate(
        "dashboard"
    );
}


/* ============================================================
   45. TOTAL LESSONS
   ============================================================ */

function getTotalLessons() {

    let total = 0;

    Object.values(
        curriculum[state.classNumber] || {}
    )
        .forEach(
            lessons => {
                total += lessons.length;
            }
        );

    return total;
}


/* ============================================================
   46. NEXT LESSON
   ============================================================ */

function getNextLesson() {

    for (
        const subject of subjects
    ) {

        const lessons =
            curriculum[state.classNumber]?.[
                subject.id
            ] || [];

        for (
            const lesson of lessons
        ) {

            if (
                !state.completedLessons.includes(
                    lesson.id
                )
            ) {

                return {
                    subject,
                    lesson
                };

            }

        }

    }

    return null;
}


/* ============================================================
   47. BEST QUIZ SCORE
   ============================================================ */

function getBestQuizScore() {

    const scores =
        Object.values(
            state.quizScores
        );

    if (!scores.length) {
        return 0;
    }

    return Math.max(
        ...scores
    );
}


/* ============================================================
   48. LESSON CARD
   ============================================================ */

function lessonCardHTML(
    subject,
    lesson
) {

    return `

        <article
            class="continue-card"
            onclick="openLesson('${subject.id}', '${lesson.id}')"
        >

            <div class="continue-icon">
                ${subject.icon}
            </div>

            <div>

                <span class="eyebrow">
                    ${escapeHTML(
                        localized(subject.names)
                    )}
                </span>

                <h3>
                    ${escapeHTML(
                        localized(lesson.title)
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        localized(lesson.description)
                    )}
                </p>

            </div>

            <span class="arrow">
                →
            </span>

        </article>
    `;
}


function emptyCompletedHTML() {

    return `

        <div class="empty-state">

            <h2>
                🎉 ${t("completed")}
            </h2>

            <p>
                You have completed all available lessons.
            </p>

            <button
                class="primary-button"
                onclick="navigate('courses')"
            >
                ${t("courses")}
            </button>

        </div>
    `;
}


/* ============================================================
   49. ACTIVE NAVIGATION
   ============================================================ */

function updateNavigationActiveState() {

    $all(
        "[data-view], [data-page]"
    )
        .forEach(
            element => {

                const target =
                    element.dataset.view ||
                    element.dataset.page;

                element.classList.toggle(
                    "active",
                    target === currentView
                );

            }
        );
}


/* ============================================================
   50. TOAST
   ============================================================ */

function showToast(
    message
) {

    let toast =
        document.querySelector(
            "#edubridgeToast"
        );

    if (!toast) {

        toast =
            document.createElement(
                "div"
            );

        toast.id =
            "edubridgeToast";

        toast.className =
            "edubridge-toast";

        document.body.appendChild(
            toast
        );
    }

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        toast._timer
    );

    toast._timer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );
}


/* ============================================================
   51. DASHBOARD STAT UPDATE
   ============================================================ */

function updateDashboardStats() {

    if (
        currentView ===
        "dashboard"
    ) {

        renderDashboard();
    }
}


/* ============================================================
   52. GLOBAL CLICK HANDLING
   ============================================================ */

document.addEventListener(
    "click",
    event => {

        const menu =
            getMobileMenu();

        const button =
            getMenuButton();

        /*
           Close mobile menu when user taps
           outside the menu.
        */

        if (
            menuOpen &&
            menu &&
            !menu.contains(event.target) &&
            button &&
            !button.contains(event.target)
        ) {

            closeMobileMenu();
        }

    }
);


/* ============================================================
   53. MOBILE MENU BUTTON
   ============================================================ */

document.addEventListener(
    "click",
    event => {

        const target =
            event.target.closest(
                "#menuToggle, #mobileMenuBtn, .menu-toggle, .hamburger"
            );

        if (!target) return;

        event.preventDefault();

        toggleMobileMenu();
    }
);


/* ============================================================
   54. ESCAPE KEY
   ============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            menuOpen
        ) {

            closeMobileMenu();
        }

    }
);


/* ============================================================
   55. NAVIGATION BUTTONS
   ============================================================ */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-view]"
            );

        if (!button) return;

        event.preventDefault();

        const view =
            button.dataset.view;

        if (!view) return;

        navigate(
            view
        );

        if (menuOpen) {
            closeMobileMenu();
        }

    }
);


/* ============================================================
   56. SEARCH FORM
   ============================================================ */

document.addEventListener(
    "submit",
    event => {

        const form =
            event.target;

        if (
            !form.matches(
                "#searchForm, .search-form"
            )
        ) {
            return;
        }

        event.preventDefault();

        const input =
            form.querySelector(
                "input"
            );

        if (!input) return;

        performSearch(
            input.value
        );
    }
);


/* ============================================================
   57. KEYBOARD ACCESSIBILITY
   ============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Enter" &&
            event.key !== " "
        ) {
            return;
        }

        const target =
            event.target.closest(
                "[role='button'][tabindex='0']"
            );

        if (!target) return;

        event.preventDefault();

        target.click();
    }
);


/* ============================================================
   58. INITIALISE
   ============================================================ */

function initialiseEduBridge() {

    applyTheme();
    applyLanguage();

    initialiseHistory();

    /*
       If existing HTML has its own startup system,
       don't destroy it.
    */

    if (
        getAppContainer()
    ) {

        renderDashboard();
    }

    /*
       Set language controls.
    */

    $all(
        "select[data-language], #languageSelect"
    )
        .forEach(
            select => {
                select.value =
                    state.language;
            }
        );

    /*
       Set class controls.
    */

    $all(
        "select[data-class], #classSelect"
    )
        .forEach(
            select => {
                select.value =
                    String(
                        state.classNumber
                    );
            }
        );

    /*
       Prevent browser restoring old scroll
       position when navigating.
    */

    if (
        "scrollRestoration" in history
    ) {

        history.scrollRestoration =
            "manual";
    }
}


/* ============================================================
   59. START APPLICATION
   ============================================================ */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialiseEduBridge
    );

} else {

    initialiseEduBridge();
}


/* ============================================================
   60. GLOBAL API
   ============================================================ */

/*
   These are intentionally exposed globally so
   existing onclick="" attributes in your HTML
   continue to work.
*/

window.EduBridge = {

    state,

    navigate,

    openLesson,

    openCourse,

    completeLesson,

    completeCourse,

    performSearch,

    submitQuiz,

    changeLanguage,

    changeClass,

    toggleTheme,

    openMobileMenu,

    closeMobileMenu,

    toggleMobileMenu,

    goBackInsideWebsite,

    logout

};


/* Also expose commonly used functions */

window.navigate =
    navigate;

window.openLesson =
    openLesson;

window.openCourse =
    openCourse;

window.completeLesson =
    completeLesson;

window.completeCourse =
    completeCourse;

window.performSearch =
    performSearch;

window.submitQuiz =
    submitQuiz;

window.changeLanguage =
    changeLanguage;

window.changeClass =
    changeClass;

window.toggleTheme =
    toggleTheme;

window.toggleMobileMenu =
    toggleMobileMenu;

window.openMobileMenu =
    openMobileMenu;

window.closeMobileMenu =
    closeMobileMenu;

window.goBackInsideWebsite =
    goBackInsideWebsite;

window.logout =
    logout;

/* ============================================================
   END OF EDUBRIDGE JAVASCRIPT
   ============================================================ */