/* =========================================================
   EDUSETU E-LEARNING WEBSITE
   HTML + CSS + JAVASCRIPT
   ========================================================= */


/* ================= TRANSLATIONS ================= */

const translations = {

    en: {

        brandSub: "E-Learning for Government Schools",

        welcomeBack: "Welcome Back",
        loginSubtitle: "Login to continue your learning journey.",
        username: "Student Username",
        password: "Password",
        usernamePlaceholder: "Enter your username",
        passwordPlaceholder: "Enter your password",
        login: "Login",
        noAccount: "Don't have an account?",
        createAccount: "Create Account",

        createAccountTitle: "Create Student Account",
        signupSubtitle: "Create your account to start learning.",
        class: "Class / Standard",
        selectClass: "Select Class",
        medium: "Medium",
        signUp: "Sign Up",
        alreadyAccount: "Already have an account?",

        dashboard: "Dashboard",
        subjects: "Subjects",
        quizzes: "Quizzes",
        certificates: "Certificate Courses",
        progress: "My Progress",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        logout: "Logout",

        learningPortal: "GOVERNMENT SCHOOL LEARNING PORTAL",
        hello: "Hello",
        dashboardIntro: "Learn at your own pace with lessons, quizzes and skill courses.",
        continueLearning: "Continue Learning",

        availableSubjects: "Available Subjects",
        lessonsCompleted: "Lessons Completed",
        overallProgress: "Overall Progress",
        certificatesEarned: "Certificates",

        quickLearning: "Quick Learning",
        quickLearningSub: "Pick something to learn today.",
        viewAll: "View All",

        dailyGoal: "Daily Learning Goal",
        dailyGoalSub: "Complete lessons regularly and build your skills.",
        keepLearning: "Keep Learning Every Day",
        goalText: "Complete at least one lesson today to move forward.",

        learning: "LEARNING",
        subjectsTitle: "Subjects & Lessons",
        subjectsIntro: "Explore your class curriculum and learn through interactive lessons.",

        back: "Back",

        testYourKnowledge: "TEST YOUR KNOWLEDGE",
        quizTitle: "Quizzes",
        quizIntro: "Test what you have learned from your lessons.",
        backToQuizzes: "Back to Quizzes",

        skillDevelopment: "SKILL DEVELOPMENT",
        certificateTitle: "Certificate Courses",
        certificateIntro: "Learn useful skills and earn certificates after completing courses.",
        backToCourses: "Back to Courses",

        yourJourney: "YOUR LEARNING JOURNEY",
        progressTitle: "My Progress",
        progressIntro: "Track the lessons and courses you have completed.",

        searchPlaceholder: "Search lessons, subjects or courses...",

        startLesson: "Start Lesson",
        completeLesson: "Mark Lesson Complete",
        completed: "Completed",
        lesson: "Lesson",
        lessons: "Lessons",

        startQuiz: "Start Quiz",
        questions: "Questions",
        submitAnswer: "Submit Answer",
        nextQuestion: "Next Question",
        quizCompleted: "Quiz Completed",
        score: "Your Score",
        tryAgain: "Try Again",

        startCourse: "Open Course",
        courseCompleted: "Course Completed",
        earnCertificate: "Earn Certificate",
        printCertificate: "Print Certificate",
        modules: "Modules",

        logoutConfirm: "Are you sure you want to logout?",
        accountCreated: "Account created successfully!",
        loginSuccess: "Login successful!",
        invalidLogin: "Username or password is incorrect.",
        usernameTaken: "This username already exists.",
        lessonCompleted: "Lesson completed!",
        courseCompletedMessage: "Congratulations! Course completed.",
        noResults: "No results found.",
        certificatePrinted: "Certificate is ready to print.",

        classText: "Class",
        mediumText: "Medium",

        search: "Search",

        subjectsNames: {
            mathematics: "Mathematics",
            science: "Science",
            english: "English",
            hindi: "Hindi",
            marathi: "Marathi",
            socialScience: "Social Science"
        }
    },


    hi: {

        brandSub: "सरकारी स्कूलों के लिए ई-लर्निंग",

        welcomeBack: "वापसी पर स्वागत है",
        loginSubtitle: "अपनी पढ़ाई जारी रखने के लिए लॉगिन करें।",
        username: "छात्र उपयोगकर्ता नाम",
        password: "पासवर्ड",
        usernamePlaceholder: "अपना उपयोगकर्ता नाम दर्ज करें",
        passwordPlaceholder: "अपना पासवर्ड दर्ज करें",
        login: "लॉगिन",
        noAccount: "क्या आपका खाता नहीं है?",
        createAccount: "खाता बनाएं",

        createAccountTitle: "छात्र खाता बनाएं",
        signupSubtitle: "पढ़ाई शुरू करने के लिए अपना खाता बनाएं।",
        class: "कक्षा",
        selectClass: "कक्षा चुनें",
        medium: "माध्यम",
        signUp: "साइन अप",
        alreadyAccount: "क्या आपका पहले से खाता है?",

        dashboard: "डैशबोर्ड",
        subjects: "विषय",
        quizzes: "क्विज़",
        certificates: "प्रमाणपत्र पाठ्यक्रम",
        progress: "मेरी प्रगति",
        darkMode: "डार्क मोड",
        lightMode: "लाइट मोड",
        logout: "लॉगआउट",

        learningPortal: "सरकारी स्कूल लर्निंग पोर्टल",
        hello: "नमस्ते",
        dashboardIntro: "अपनी गति से पाठ, क्विज़ और कौशल पाठ्यक्रम सीखें।",
        continueLearning: "पढ़ाई जारी रखें",

        availableSubjects: "उपलब्ध विषय",
        lessonsCompleted: "पूर्ण किए गए पाठ",
        overallProgress: "कुल प्रगति",
        certificatesEarned: "प्रमाणपत्र",

        quickLearning: "त्वरित पढ़ाई",
        quickLearningSub: "आज कुछ नया सीखें।",
        viewAll: "सभी देखें",

        dailyGoal: "दैनिक पढ़ाई का लक्ष्य",
        dailyGoalSub: "नियमित रूप से पाठ पूरा करें और अपने कौशल बढ़ाएं।",
        keepLearning: "हर दिन सीखते रहें",
        goalText: "आगे बढ़ने के लिए आज कम से कम एक पाठ पूरा करें।",

        learning: "पढ़ाई",
        subjectsTitle: "विषय और पाठ",
        subjectsIntro: "अपनी कक्षा के पाठ्यक्रम को देखें और इंटरैक्टिव पाठों के माध्यम से सीखें।",

        back: "वापस",

        testYourKnowledge: "अपना ज्ञान जांचें",
        quizTitle: "क्विज़",
        quizIntro: "अपने सीखे हुए ज्ञान का परीक्षण करें।",
        backToQuizzes: "क्विज़ पर वापस",

        skillDevelopment: "कौशल विकास",
        certificateTitle: "प्रमाणपत्र पाठ्यक्रम",
        certificateIntro: "उपयोगी कौशल सीखें और पाठ्यक्रम पूरा करने के बाद प्रमाणपत्र प्राप्त करें।",
        backToCourses: "पाठ्यक्रमों पर वापस",

        yourJourney: "आपकी सीखने की यात्रा",
        progressTitle: "मेरी प्रगति",
        progressIntro: "अपने पूरे किए गए पाठ और पाठ्यक्रम देखें।",

        searchPlaceholder: "पाठ, विषय या पाठ्यक्रम खोजें...",

        startLesson: "पाठ शुरू करें",
        completeLesson: "पाठ पूरा करें",
        completed: "पूरा हुआ",
        lesson: "पाठ",
        lessons: "पाठ",

        startQuiz: "क्विज़ शुरू करें",
        questions: "प्रश्न",
        submitAnswer: "उत्तर जमा करें",
        nextQuestion: "अगला प्रश्न",
        quizCompleted: "क्विज़ पूरा हुआ",
        score: "आपका स्कोर",
        tryAgain: "फिर प्रयास करें",

        startCourse: "पाठ्यक्रम खोलें",
        courseCompleted: "पाठ्यक्रम पूरा हुआ",
        earnCertificate: "प्रमाणपत्र प्राप्त करें",
        printCertificate: "प्रमाणपत्र प्रिंट करें",
        modules: "मॉड्यूल",

        logoutConfirm: "क्या आप लॉगआउट करना चाहते हैं?",
        accountCreated: "खाता सफलतापूर्वक बनाया गया!",
        loginSuccess: "लॉगिन सफल रहा!",
        invalidLogin: "उपयोगकर्ता नाम या पासवर्ड गलत है।",
        usernameTaken: "यह उपयोगकर्ता नाम पहले से मौजूद है।",
        lessonCompleted: "पाठ पूरा हो गया!",
        courseCompletedMessage: "बधाई! पाठ्यक्रम पूरा हो गया।",
        noResults: "कोई परिणाम नहीं मिला।",
        certificatePrinted: "प्रमाणपत्र प्रिंट के लिए तैयार है।",

        classText: "कक्षा",
        mediumText: "माध्यम",
        search: "खोजें",

        subjectsNames: {
            mathematics: "गणित",
            science: "विज्ञान",
            english: "अंग्रेज़ी",
            hindi: "हिंदी",
            marathi: "मराठी",
            socialScience: "सामाजिक विज्ञान"
        }
    },


    mr: {

        brandSub: "सरकारी शाळांसाठी ई-लर्निंग",

        welcomeBack: "पुन्हा स्वागत आहे",
        loginSubtitle: "तुमचा अभ्यास सुरू ठेवण्यासाठी लॉगिन करा.",
        username: "विद्यार्थी वापरकर्ता नाव",
        password: "पासवर्ड",
        usernamePlaceholder: "तुमचे वापरकर्ता नाव लिहा",
        passwordPlaceholder: "तुमचा पासवर्ड लिहा",
        login: "लॉगिन",
        noAccount: "तुमचे खाते नाही?",
        createAccount: "खाते तयार करा",

        createAccountTitle: "विद्यार्थी खाते तयार करा",
        signupSubtitle: "अभ्यास सुरू करण्यासाठी तुमचे खाते तयार करा.",
        class: "इयत्ता",
        selectClass: "इयत्ता निवडा",
        medium: "माध्यम",
        signUp: "साइन अप",
        alreadyAccount: "आधीपासून खाते आहे?",

        dashboard: "डॅशबोर्ड",
        subjects: "विषय",
        quizzes: "क्विझ",
        certificates: "प्रमाणपत्र अभ्यासक्रम",
        progress: "माझी प्रगती",
        darkMode: "डार्क मोड",
        lightMode: "लाईट मोड",
        logout: "लॉगआउट",

        learningPortal: "सरकारी शाळा शिक्षण पोर्टल",
        hello: "नमस्कार",
        dashboardIntro: "तुमच्या गतीने धडे, क्विझ आणि कौशल्य अभ्यासक्रम शिका.",
        continueLearning: "अभ्यास सुरू ठेवा",

        availableSubjects: "उपलब्ध विषय",
        lessonsCompleted: "पूर्ण केलेले धडे",
        overallProgress: "एकूण प्रगती",
        certificatesEarned: "प्रमाणपत्रे",

        quickLearning: "जलद अभ्यास",
        quickLearningSub: "आज काहीतरी नवीन शिका.",
        viewAll: "सर्व पहा",

        dailyGoal: "दैनंदिन अभ्यासाचे लक्ष्य",
        dailyGoalSub: "नियमित धडे पूर्ण करा आणि तुमची कौशल्ये वाढवा.",
        keepLearning: "दररोज शिकत राहा",
        goalText: "पुढे जाण्यासाठी आज किमान एक धडा पूर्ण करा.",

        learning: "अभ्यास",
        subjectsTitle: "विषय आणि धडे",
        subjectsIntro: "तुमच्या इयत्तेचा अभ्यासक्रम पहा आणि परस्परसंवादी धड्यांद्वारे शिका.",

        back: "मागे",

        testYourKnowledge: "तुमचे ज्ञान तपासा",
        quizTitle: "क्विझ",
        quizIntro: "तुम्ही शिकलेल्या गोष्टींची चाचणी घ्या.",
        backToQuizzes: "क्विझकडे परत",

        skillDevelopment: "कौशल्य विकास",
        certificateTitle: "प्रमाणपत्र अभ्यासक्रम",
        certificateIntro: "उपयुक्त कौशल्ये शिका आणि अभ्यासक्रम पूर्ण केल्यानंतर प्रमाणपत्र मिळवा.",
        backToCourses: "अभ्यासक्रमांकडे परत",

        yourJourney: "तुमचा शिक्षण प्रवास",
        progressTitle: "माझी प्रगती",
        progressIntro: "पूर्ण केलेले धडे आणि अभ्यासक्रम पहा.",

        searchPlaceholder: "धडे, विषय किंवा अभ्यासक्रम शोधा...",

        startLesson: "धडा सुरू करा",
        completeLesson: "धडा पूर्ण करा",
        completed: "पूर्ण",
        lesson: "धडा",
        lessons: "धडे",

        startQuiz: "क्विझ सुरू करा",
        questions: "प्रश्न",
        submitAnswer: "उत्तर जमा करा",
        nextQuestion: "पुढील प्रश्न",
        quizCompleted: "क्विझ पूर्ण",
        score: "तुमचा गुण",
        tryAgain: "पुन्हा प्रयत्न करा",

        startCourse: "अभ्यासक्रम उघडा",
        courseCompleted: "अभ्यासक्रम पूर्ण",
        earnCertificate: "प्रमाणपत्र मिळवा",
        printCertificate: "प्रमाणपत्र प्रिंट करा",
        modules: "मॉड्यूल",

        logoutConfirm: "तुम्हाला लॉगआउट करायचे आहे का?",
        accountCreated: "खाते यशस्वीरित्या तयार झाले!",
        loginSuccess: "लॉगिन यशस्वी!",
        invalidLogin: "वापरकर्ता नाव किंवा पासवर्ड चुकीचा आहे.",
        usernameTaken: "हे वापरकर्ता नाव आधीपासून आहे.",
        lessonCompleted: "धडा पूर्ण झाला!",
        courseCompletedMessage: "अभिनंदन! अभ्यासक्रम पूर्ण झाला.",
        noResults: "परिणाम सापडला नाही.",
        certificatePrinted: "प्रमाणपत्र प्रिंट करण्यासाठी तयार आहे.",

        classText: "इयत्ता",
        mediumText: "माध्यम",
        search: "शोधा",

        subjectsNames: {
            mathematics: "गणित",
            science: "विज्ञान",
            english: "इंग्रजी",
            hindi: "हिंदी",
            marathi: "मराठी",
            socialScience: "सामाजिक शास्त्र"
        }
    }

};


/* ================= SUBJECT CONTENT ================= */

/*
   Each class has different content.
   No class simply copies another class.
*/

const classData = {

5: {
    subjects: [
        {
            id: "mathematics",
            icon: "fa-calculator",
            lessons: [
                {
                    title: {
                        en: "Numbers Around Us",
                        hi: "हमारे आसपास की संख्याएँ",
                        mr: "आपल्या आजूबाजूच्या संख्या"
                    },
                    content: {
                        en: `
                            <h2>Understanding Numbers</h2>
                            <p>Numbers help us count, compare and describe things around us. We use numbers when counting books, measuring distance, telling time and buying items.</p>

                            <h2>Place Value</h2>
                            <p>In a number, the position of a digit tells us its value. For example, in 4,582, the digit 4 represents four thousands, 5 represents five hundreds, 8 represents eight tens and 2 represents two ones.</p>

                            <div class="lesson-example"><strong>Example:</strong> 3,246 = 3 thousands + 2 hundreds + 4 tens + 6 ones.</div>

                            <h2>Remember</h2>
                            <p>Moving one place to the left makes the value of a digit ten times greater.</p>
                        `,
                        hi: `
                            <h2>संख्याओं को समझना</h2>
                            <p>संख्याएँ हमें गिनने, तुलना करने और अपने आसपास की चीजों का वर्णन करने में मदद करती हैं।</p>

                            <h2>स्थान-मूल्य</h2>
                            <p>किसी संख्या में अंक का स्थान उसका मूल्य बताता है। उदाहरण के लिए 4,582 में 4 हजार, 5 सैकड़ा, 8 दहाई और 2 इकाई को दर्शाता है।</p>

                            <div class="lesson-example"><strong>उदाहरण:</strong> 3,246 = 3 हजार + 2 सैकड़ा + 4 दहाई + 6 इकाई।</div>

                            <h2>याद रखें</h2>
                            <p>किसी अंक को एक स्थान बाईं ओर ले जाने पर उसका मूल्य दस गुना बढ़ जाता है।</p>
                        `,
                        mr: `
                            <h2>संख्या समजून घेणे</h2>
                            <p>संख्या आपल्याला मोजणी, तुलना आणि आपल्या आजूबाजूच्या वस्तूंचे वर्णन करण्यास मदत करतात.</p>

                            <h2>स्थानिक किंमत</h2>
                            <p>संख्येतील अंकाचे स्थान त्याची किंमत ठरवते. उदाहरणार्थ, 4,582 मध्ये 4 हजार, 5 शेकडे, 8 दशके आणि 2 एकक दर्शवते.</p>

                            <div class="lesson-example"><strong>उदाहरण:</strong> 3,246 = 3 हजार + 2 शेकडे + 4 दशके + 6 एकक.</div>

                            <h2>लक्षात ठेवा</h2>
                            <p>अंक एक स्थान डावीकडे गेल्यास त्याची किंमत दहापट वाढते.</p>
                        `
                    }
                },
                {
                    title: {
                        en: "Fractions in Daily Life",
                        hi: "दैनिक जीवन में भिन्न",
                        mr: "दैनंदिन जीवनातील अपूर्णांक"
                    },
                    content: {
                        en: `
                            <h2>What is a Fraction?</h2>
                            <p>A fraction represents a part of a whole. The top number is called the numerator and the bottom number is called the denominator.</p>
                            <div class="lesson-example"><strong>Example:</strong> In 3/4, 3 is the numerator and 4 is the denominator.</div>
                            <h2>Where We Use Fractions</h2>
                            <p>Fractions are used while sharing food, measuring ingredients, reading a clock and dividing distances.</p>
                        `,
                        hi: `
                            <h2>भिन्न क्या है?</h2>
                            <p>भिन्न किसी पूर्ण वस्तु के एक भाग को दर्शाता है। ऊपर की संख्या अंश और नीचे की संख्या हर कहलाती है।</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> 3/4 में 3 अंश और 4 हर है।</div>
                            <h2>भिन्न का उपयोग</h2>
                            <p>भिन्न का उपयोग भोजन बाँटने, सामग्री मापने, घड़ी पढ़ने और दूरी बाँटने में होता है।</p>
                        `,
                        mr: `
                            <h2>अपूर्णांक म्हणजे काय?</h2>
                            <p>अपूर्णांक पूर्ण वस्तूचा एक भाग दर्शवतो. वरच्या संख्येला अंश आणि खालच्या संख्येला छेद म्हणतात.</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> 3/4 मध्ये 3 अंश आणि 4 छेद आहे.</div>
                            <h2>अपूर्णांकाचा उपयोग</h2>
                            <p>अपूर्णांकाचा उपयोग अन्न वाटताना, पदार्थ मोजताना, घड्याळ वाचताना आणि अंतर विभागताना होतो.</p>
                        `
                    }
                }
            ]
        },

        {
            id: "science",
            icon: "fa-flask",
            lessons: [
                {
                    title: {
                        en: "Plants and Their Parts",
                        hi: "पौधे और उनके भाग",
                        mr: "वनस्पती आणि त्यांचे भाग"
                    },
                    content: {
                        en: `
                            <h2>Parts of a Plant</h2>
                            <p>A typical plant has roots, stem, leaves, flowers and fruits. Each part performs an important function.</p>
                            <h2>Roots</h2>
                            <p>Roots hold the plant firmly in the soil and absorb water and minerals.</p>
                            <h2>Leaves</h2>
                            <p>Leaves prepare food for the plant using sunlight, water and carbon dioxide. This process is called photosynthesis.</p>
                        `,
                        hi: `
                            <h2>पौधे के भाग</h2>
                            <p>एक सामान्य पौधे में जड़, तना, पत्तियाँ, फूल और फल होते हैं। प्रत्येक भाग महत्वपूर्ण कार्य करता है।</p>
                            <h2>जड़</h2>
                            <p>जड़ पौधे को मिट्टी में मजबूती से पकड़ती है और पानी तथा खनिजों को अवशोषित करती है।</p>
                            <h2>पत्तियाँ</h2>
                            <p>पत्तियाँ सूर्य के प्रकाश, पानी और कार्बन डाइऑक्साइड की सहायता से भोजन बनाती हैं। इसे प्रकाश संश्लेषण कहते हैं।</p>
                        `,
                        mr: `
                            <h2>वनस्पतीचे भाग</h2>
                            <p>सामान्य वनस्पतीमध्ये मुळे, खोड, पाने, फुले आणि फळे असतात. प्रत्येक भाग महत्त्वाचे कार्य करतो.</p>
                            <h2>मुळे</h2>
                            <p>मुळे वनस्पतीला जमिनीत घट्ट धरून ठेवतात आणि पाणी व खनिजे शोषून घेतात.</p>
                            <h2>पाने</h2>
                            <p>पाने सूर्यप्रकाश, पाणी आणि कार्बन डायऑक्साइडच्या मदतीने अन्न तयार करतात. या प्रक्रियेला प्रकाशसंश्लेषण म्हणतात.</p>
                        `
                    }
                },
                {
                    title: {
                        en: "States of Matter",
                        hi: "पदार्थ की अवस्थाएँ",
                        mr: "पदार्थाच्या अवस्था"
                    },
                    content: {
                        en: `
                            <h2>Three Common States</h2>
                            <p>Matter commonly exists as solids, liquids and gases.</p>
                            <ul>
                                <li><strong>Solid:</strong> Has a fixed shape and volume.</li>
                                <li><strong>Liquid:</strong> Has a fixed volume but takes the shape of its container.</li>
                                <li><strong>Gas:</strong> Has neither a fixed shape nor fixed volume.</li>
                            </ul>
                            <h2>Change of State</h2>
                            <p>Heating and cooling can change matter from one state to another.</p>
                        `,
                        hi: `
                            <h2>तीन सामान्य अवस्थाएँ</h2>
                            <p>पदार्थ सामान्यतः ठोस, द्रव और गैस के रूप में पाया जाता है।</p>
                            <ul>
                                <li><strong>ठोस:</strong> इसका आकार और आयतन निश्चित होता है।</li>
                                <li><strong>द्रव:</strong> इसका आयतन निश्चित होता है लेकिन आकार पात्र के अनुसार बदलता है।</li>
                                <li><strong>गैस:</strong> इसका आकार और आयतन निश्चित नहीं होता।</li>
                            </ul>
                            <h2>अवस्था में परिवर्तन</h2>
                            <p>गर्म करने और ठंडा करने से पदार्थ की अवस्था बदल सकती है।</p>
                        `,
                        mr: `
                            <h2>तीन सामान्य अवस्था</h2>
                            <p>पदार्थ सामान्यतः घन, द्रव आणि वायू या अवस्थांमध्ये आढळतो.</p>
                            <ul>
                                <li><strong>घन:</strong> आकार आणि घनफळ निश्चित असते.</li>
                                <li><strong>द्रव:</strong> घनफळ निश्चित असते पण पात्रानुसार आकार बदलतो.</li>
                                <li><strong>वायू:</strong> आकार आणि घनफळ निश्चित नसते.</li>
                            </ul>
                            <h2>अवस्थेतील बदल</h2>
                            <p>उष्णता देणे किंवा थंड करणे यामुळे पदार्थाची अवस्था बदलू शकते.</p>
                        `
                    }
                }
            ]
        }
    ]
},

6: {
    subjects: [
        {
            id: "mathematics",
            icon: "fa-calculator",
            lessons: [
                {
                    title: {
                        en: "Integers and Number Lines",
                        hi: "पूर्णांक और संख्या रेखा",
                        mr: "पूर्णांक आणि संख्या रेषा"
                    },
                    content: {
                        en: `
                            <h2>Integers</h2>
                            <p>Integers include positive numbers, negative numbers and zero. Examples are -5, -2, 0, 3 and 8.</p>
                            <h2>Number Line</h2>
                            <p>On a number line, numbers increase as we move to the right and decrease as we move to the left.</p>
                            <div class="lesson-example"><strong>Example:</strong> 4 is greater than -2 because 4 lies to the right of -2.</div>
                        `,
                        hi: `
                            <h2>पूर्णांक</h2>
                            <p>पूर्णांकों में धनात्मक संख्याएँ, ऋणात्मक संख्याएँ और शून्य शामिल होते हैं। उदाहरण: -5, -2, 0, 3 और 8।</p>
                            <h2>संख्या रेखा</h2>
                            <p>संख्या रेखा पर दाईं ओर जाने पर संख्याएँ बढ़ती हैं और बाईं ओर जाने पर घटती हैं।</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> 4, -2 से बड़ा है क्योंकि 4 संख्या रेखा पर -2 के दाईं ओर है।</div>
                        `,
                        mr: `
                            <h2>पूर्णांक</h2>
                            <p>पूर्णांकांमध्ये धन संख्या, ऋण संख्या आणि शून्य यांचा समावेश होतो. उदाहरणे: -5, -2, 0, 3 आणि 8.</p>
                            <h2>संख्या रेषा</h2>
                            <p>संख्या रेषेवर उजवीकडे गेल्यास संख्या वाढतात आणि डावीकडे गेल्यास कमी होतात.</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> 4 हा -2 पेक्षा मोठा आहे कारण 4 हा संख्या रेषेवर -2 च्या उजवीकडे आहे.</div>
                        `
                    }
                },
                {
                    title: {
                        en: "Basic Algebra",
                        hi: "बीजगणित की मूल बातें",
                        mr: "बीजगणिताची मूलभूत माहिती"
                    },
                    content: {
                        en: `
                            <h2>Using Variables</h2>
                            <p>In algebra, letters such as x and y can represent unknown numbers.</p>
                            <div class="lesson-example"><strong>Example:</strong> If x + 5 = 12, then x = 7.</div>
                            <h2>Expressions</h2>
                            <p>An algebraic expression can contain numbers, variables and mathematical operations.</p>
                        `,
                        hi: `
                            <h2>चर का उपयोग</h2>
                            <p>बीजगणित में x और y जैसे अक्षर अज्ञात संख्याओं को दर्शा सकते हैं।</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> यदि x + 5 = 12, तो x = 7।</div>
                            <h2>व्यंजक</h2>
                            <p>बीजगणितीय व्यंजक में संख्याएँ, चर और गणितीय क्रियाएँ हो सकती हैं।</p>
                        `,
                        mr: `
                            <h2>चलांचा उपयोग</h2>
                            <p>बीजगणितामध्ये x आणि y सारखी अक्षरे अज्ञात संख्या दर्शवू शकतात.</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> जर x + 5 = 12 असेल, तर x = 7.</div>
                            <h2>बीजगणितीय राशी</h2>
                            <p>बीजगणितीय राशीमध्ये संख्या, चल आणि गणितीय क्रिया असू शकतात.</p>
                        `
                    }
                }
            ]
        },

        {
            id: "science",
            icon: "fa-leaf",
            lessons: [
                {
                    title: {
                        en: "Food and Nutrition",
                        hi: "भोजन और पोषण",
                        mr: "अन्न आणि पोषण"
                    },
                    content: {
                        en: `
                            <h2>Nutrients</h2>
                            <p>Our body needs carbohydrates, proteins, fats, vitamins, minerals, fibre and water.</p>
                            <h2>Balanced Diet</h2>
                            <p>A balanced diet contains different nutrients in suitable amounts. Eating a variety of foods helps us remain healthy.</p>
                        `,
                        hi: `
                            <h2>पोषक तत्व</h2>
                            <p>हमारे शरीर को कार्बोहाइड्रेट, प्रोटीन, वसा, विटामिन, खनिज, रेशा और पानी की आवश्यकता होती है।</p>
                            <h2>संतुलित आहार</h2>
                            <p>संतुलित आहार में विभिन्न पोषक तत्व उचित मात्रा में होते हैं। अलग-अलग प्रकार के भोजन से हम स्वस्थ रहते हैं।</p>
                        `,
                        mr: `
                            <h2>पोषक घटक</h2>
                            <p>आपल्या शरीराला कर्बोदके, प्रथिने, चरबी, जीवनसत्त्वे, खनिजे, तंतू आणि पाणी आवश्यक असते.</p>
                            <h2>संतुलित आहार</h2>
                            <p>संतुलित आहारामध्ये विविध पोषक घटक योग्य प्रमाणात असतात. विविध प्रकारचे अन्न खाल्ल्याने आपण निरोगी राहतो.</p>
                        `
                    }
                }
            ]
        }
    ]
},

7: {
    subjects: [
        {
            id: "mathematics",
            icon: "fa-square-root-variable",
            lessons: [
                {
                    title: {
                        en: "Rational Numbers",
                        hi: "परिमेय संख्याएँ",
                        mr: "परिमेय संख्या"
                    },
                    content: {
                        en: `
                            <h2>What Are Rational Numbers?</h2>
                            <p>A rational number can be written in the form p/q, where p and q are integers and q is not zero.</p>
                            <div class="lesson-example"><strong>Examples:</strong> 1/2, -3/5 and 7/4 are rational numbers.</div>
                            <h2>Comparison</h2>
                            <p>Fractions can be compared by finding common denominators or converting them to decimals.</p>
                        `,
                        hi: `
                            <h2>परिमेय संख्याएँ क्या हैं?</h2>
                            <p>जिस संख्या को p/q के रूप में लिखा जा सकता है, जहाँ p और q पूर्णांक हैं तथा q शून्य नहीं है, उसे परिमेय संख्या कहते हैं।</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> 1/2, -3/5 और 7/4 परिमेय संख्याएँ हैं।</div>
                            <h2>तुलना</h2>
                            <p>भिन्नों की तुलना समान हर बनाकर या दशमलव में बदलकर की जा सकती है।</p>
                        `,
                        mr: `
                            <h2>परिमेय संख्या म्हणजे काय?</h2>
                            <p>p/q या स्वरूपात लिहिता येणाऱ्या संख्येला परिमेय संख्या म्हणतात, येथे p आणि q पूर्णांक असून q शून्य नसतो.</p>
                            <div class="lesson-example"><strong>उदाहरणे:</strong> 1/2, -3/5 आणि 7/4 या परिमेय संख्या आहेत.</div>
                            <h2>तुलना</h2>
                            <p>भिन्नांची तुलना समान छेद करून किंवा दशांशात रूपांतर करून करता येते.</p>
                        `
                    }
                }
            ]
        },
        {
            id: "science",
            icon: "fa-bolt",
            lessons: [
                {
                    title: {
                        en: "Heat and Temperature",
                        hi: "ऊष्मा और तापमान",
                        mr: "उष्णता आणि तापमान"
                    },
                    content: {
                        en: `
                            <h2>Heat</h2>
                            <p>Heat is energy transferred from a warmer object to a cooler object.</p>
                            <h2>Temperature</h2>
                            <p>Temperature tells us how hot or cold something is. Thermometers are used to measure temperature.</p>
                            <h2>Daily Example</h2>
                            <p>When a hot cup of tea is left on a table, heat moves from the tea to the surrounding air.</p>
                        `,
                        hi: `
                            <h2>ऊष्मा</h2>
                            <p>ऊष्मा वह ऊर्जा है जो गर्म वस्तु से ठंडी वस्तु की ओर स्थानांतरित होती है।</p>
                            <h2>तापमान</h2>
                            <p>तापमान बताता है कि कोई वस्तु कितनी गर्म या ठंडी है। तापमान मापने के लिए थर्मामीटर का उपयोग किया जाता है।</p>
                            <h2>दैनिक उदाहरण</h2>
                            <p>गर्म चाय का कप मेज पर रखने पर ऊष्मा चाय से आसपास की हवा में जाती है।</p>
                        `,
                        mr: `
                            <h2>उष्णता</h2>
                            <p>उष्णता ही उष्ण वस्तूपासून थंड वस्तूकडे जाणारी ऊर्जा आहे.</p>
                            <h2>तापमान</h2>
                            <p>तापमानामुळे वस्तू किती गरम किंवा थंड आहे हे समजते. तापमान मोजण्यासाठी थर्मामीटर वापरतात.</p>
                            <h2>दैनंदिन उदाहरण</h2>
                            <p>गरम चहाचा कप टेबलवर ठेवल्यावर उष्णता चहातून आजूबाजूच्या हवेत जाते.</p>
                        `
                    }
                }
            ]
        }
    ]
},

8: {
    subjects: [
        {
            id: "mathematics",
            icon: "fa-chart-pie",
            lessons: [
                {
                    title: {
                        en: "Linear Equations",
                        hi: "रैखिक समीकरण",
                        mr: "रेषीय समीकरणे"
                    },
                    content: {
                        en: `
                            <h2>Understanding an Equation</h2>
                            <p>An equation states that two mathematical expressions are equal.</p>
                            <div class="lesson-example"><strong>Example:</strong> 2x + 3 = 11. Subtract 3 from both sides: 2x = 8. Divide by 2: x = 4.</div>
                            <h2>Important Rule</h2>
                            <p>Whatever operation is performed on one side of an equation should also be performed on the other side.</p>
                        `,
                        hi: `
                            <h2>समीकरण को समझना</h2>
                            <p>समीकरण बताता है कि दो गणितीय व्यंजक बराबर हैं।</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> 2x + 3 = 11। दोनों ओर से 3 घटाएँ: 2x = 8। 2 से भाग दें: x = 4।</div>
                            <h2>महत्वपूर्ण नियम</h2>
                            <p>समीकरण के एक पक्ष पर की गई क्रिया दूसरे पक्ष पर भी करनी चाहिए।</p>
                        `,
                        mr: `
                            <h2>समीकरण समजून घेणे</h2>
                            <p>समीकरण दोन गणितीय राशी समान असल्याचे दर्शवते.</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> 2x + 3 = 11. दोन्ही बाजूंनी 3 वजा करा: 2x = 8. 2 ने भाग द्या: x = 4.</div>
                            <h2>महत्त्वाचा नियम</h2>
                            <p>समीकरणाच्या एका बाजूला केलेली क्रिया दुसऱ्या बाजूलाही करावी.</p>
                        `
                    }
                }
            ]
        },
        {
            id: "science",
            icon: "fa-atom",
            lessons: [
                {
                    title: {
                        en: "Microorganisms",
                        hi: "सूक्ष्मजीव",
                        mr: "सूक्ष्मजीव"
                    },
                    content: {
                        en: `
                            <h2>Invisible Life</h2>
                            <p>Microorganisms are tiny living organisms that generally cannot be seen with our naked eyes.</p>
                            <h2>Useful Microorganisms</h2>
                            <p>Some microorganisms help make curd, bread and medicines. Others are useful in agriculture and decomposition.</p>
                            <h2>Harmful Microorganisms</h2>
                            <p>Some microorganisms can cause diseases and spoil food.</p>
                        `,
                        hi: `
                            <h2>अदृश्य जीवन</h2>
                            <p>सूक्ष्मजीव बहुत छोटे जीव होते हैं जिन्हें सामान्यतः नंगी आँखों से नहीं देखा जा सकता।</p>
                            <h2>उपयोगी सूक्ष्मजीव</h2>
                            <p>कुछ सूक्ष्मजीव दही, ब्रेड और दवाइयाँ बनाने में मदद करते हैं।</p>
                            <h2>हानिकारक सूक्ष्मजीव</h2>
                            <p>कुछ सूक्ष्मजीव रोग पैदा कर सकते हैं और भोजन खराब कर सकते हैं।</p>
                        `,
                        mr: `
                            <h2>अदृश्य जीवन</h2>
                            <p>सूक्ष्मजीव हे अतिशय लहान सजीव असतात जे सामान्यतः उघड्या डोळ्यांनी दिसत नाहीत.</p>
                            <h2>उपयुक्त सूक्ष्मजीव</h2>
                            <p>काही सूक्ष्मजीव दही, ब्रेड आणि औषधे तयार करण्यास मदत करतात.</p>
                            <h2>हानिकारक सूक्ष्मजीव</h2>
                            <p>काही सूक्ष्मजीव रोग निर्माण करतात आणि अन्न खराब करतात.</p>
                        `
                    }
                }
            ]
        }
    ]
},

9: {
    subjects: [
        {
            id: "mathematics",
            icon: "fa-function",
            lessons: [
                {
                    title: {
                        en: "Polynomials",
                        hi: "बहुपद",
                        mr: "बहुपदी"
                    },
                    content: {
                        en: `
                            <h2>What is a Polynomial?</h2>
                            <p>A polynomial is an algebraic expression made from variables and coefficients using addition, subtraction and multiplication.</p>
                            <div class="lesson-example"><strong>Example:</strong> 3x² + 5x - 7 is a polynomial.</div>
                            <h2>Degree</h2>
                            <p>The highest power of the variable in a polynomial is called its degree.</p>
                        `,
                        hi: `
                            <h2>बहुपद क्या है?</h2>
                            <p>बहुपद एक बीजीय व्यंजक है जो चर और गुणांकों से बनता है तथा इसमें जोड़, घटाव और गुणा का उपयोग होता है।</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> 3x² + 5x - 7 एक बहुपद है।</div>
                            <h2>घात</h2>
                            <p>बहुपद में चर की सबसे बड़ी घात को बहुपद की घात कहते हैं।</p>
                        `,
                        mr: `
                            <h2>बहुपदी म्हणजे काय?</h2>
                            <p>बहुपदी ही चल आणि गुणकांपासून बेरीज, वजाबाकी आणि गुणाकार वापरून तयार झालेली बीजगणितीय राशी आहे.</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> 3x² + 5x - 7 ही बहुपदी आहे.</div>
                            <h2>बहुपदीची कोटी</h2>
                            <p>बहुपदीमध्ये चलाची सर्वात मोठी घात म्हणजे बहुपदीची कोटी.</p>
                        `
                    }
                }
            ]
        },
        {
            id: "science",
            icon: "fa-microscope",
            lessons: [
                {
                    title: {
                        en: "Cell: The Basic Unit of Life",
                        hi: "कोशिका: जीवन की मूल इकाई",
                        mr: "पेशी: जीवनाचे मूलभूत एकक"
                    },
                    content: {
                        en: `
                            <h2>The Cell</h2>
                            <p>The cell is the basic structural and functional unit of living organisms.</p>
                            <h2>Main Structures</h2>
                            <p>The cell membrane controls movement of substances. The nucleus contains genetic material. Plant cells also contain a cell wall and chloroplasts.</p>
                            <h2>Why Cells Matter</h2>
                            <p>Cells perform essential activities such as obtaining energy, removing waste and making new cells.</p>
                        `,
                        hi: `
                            <h2>कोशिका</h2>
                            <p>कोशिका जीवों की संरचनात्मक और कार्यात्मक मूल इकाई है।</p>
                            <h2>मुख्य संरचनाएँ</h2>
                            <p>कोशिका झिल्ली पदार्थों की गति को नियंत्रित करती है। केंद्रक में आनुवंशिक पदार्थ होता है। पादप कोशिकाओं में कोशिका भित्ति और हरितलवक भी होते हैं।</p>
                            <h2>कोशिकाएँ क्यों महत्वपूर्ण हैं?</h2>
                            <p>कोशिकाएँ ऊर्जा प्राप्त करने, अपशिष्ट हटाने और नई कोशिकाएँ बनाने जैसे कार्य करती हैं।</p>
                        `,
                        mr: `
                            <h2>पेशी</h2>
                            <p>पेशी हे सजीवांचे संरचनात्मक आणि कार्यात्मक मूलभूत एकक आहे.</p>
                            <h2>मुख्य रचना</h2>
                            <p>पेशीपटल पदार्थांची हालचाल नियंत्रित करते. केंद्रकामध्ये आनुवंशिक पदार्थ असतो. वनस्पती पेशींमध्ये पेशीभित्तिका आणि हरितलवके असतात.</p>
                            <h2>पेशी महत्त्वाच्या का आहेत?</h2>
                            <p>पेशी ऊर्जा मिळवणे, टाकाऊ पदार्थ काढणे आणि नवीन पेशी तयार करणे अशी आवश्यक कामे करतात.</p>
                        `
                    }
                }
            ]
        }
    ]
},

10: {
    subjects: [
        {
            id: "mathematics",
            icon: "fa-square-root-variable",
            lessons: [
                {
                    title: {
                        en: "Quadratic Equations",
                        hi: "द्विघात समीकरण",
                        mr: "द्विघाती समीकरणे"
                    },
                    content: {
                        en: `
                            <h2>Quadratic Equation</h2>
                            <p>A quadratic equation is generally written as ax² + bx + c = 0, where a is not zero.</p>
                            <h2>Methods of Solving</h2>
                            <p>Quadratic equations can be solved by factorisation, completing the square or using the quadratic formula.</p>
                            <div class="lesson-example"><strong>Example:</strong> x² - 5x + 6 = 0 can be factorised as (x - 2)(x - 3) = 0, giving x = 2 or x = 3.</div>
                        `,
                        hi: `
                            <h2>द्विघात समीकरण</h2>
                            <p>द्विघात समीकरण सामान्यतः ax² + bx + c = 0 के रूप में लिखा जाता है, जहाँ a शून्य नहीं होता।</p>
                            <h2>हल करने की विधियाँ</h2>
                            <p>द्विघात समीकरण को गुणनखंड विधि, पूर्ण वर्ग बनाने की विधि या द्विघात सूत्र द्वारा हल किया जा सकता है।</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> x² - 5x + 6 = 0 को (x - 2)(x - 3) = 0 लिखा जा सकता है। इसलिए x = 2 या x = 3।</div>
                        `,
                        mr: `
                            <h2>द्विघाती समीकरण</h2>
                            <p>द्विघाती समीकरण सामान्यतः ax² + bx + c = 0 असे लिहिले जाते, येथे a शून्य नसतो.</p>
                            <h2>सोडवण्याच्या पद्धती</h2>
                            <p>द्विघाती समीकरण अवयव पाडणे, पूर्ण वर्ग करणे किंवा द्विघाती सूत्र वापरून सोडवता येते.</p>
                            <div class="lesson-example"><strong>उदाहरण:</strong> x² - 5x + 6 = 0 चे (x - 2)(x - 3) = 0 असे अवयव पाडता येतात. त्यामुळे x = 2 किंवा x = 3.</div>
                        `
                    }
                }
            ]
        },
        {
            id: "science",
            icon: "fa-lightbulb",
            lessons: [
                {
                    title: {
                        en: "Electricity and Circuits",
                        hi: "विद्युत और परिपथ",
                        mr: "वीज आणि विद्युत परिपथ"
                    },
                    content: {
                        en: `
                            <h2>Electric Current</h2>
                            <p>Electric current is the flow of electric charge through a conductor.</p>
                            <h2>Circuit</h2>
                            <p>A simple circuit can contain a cell, connecting wires, a switch and a bulb. A closed circuit allows current to flow.</p>
                            <h2>Safety</h2>
                            <p>Never touch electrical appliances with wet hands. Electricity can be dangerous when handled incorrectly.</p>
                        `,
                        hi: `
                            <h2>विद्युत धारा</h2>
                            <p>विद्युत धारा चालक के माध्यम से विद्युत आवेश के प्रवाह को कहते हैं।</p>
                            <h2>परिपथ</h2>
                            <p>एक सरल परिपथ में सेल, जोड़ने वाले तार, स्विच और बल्ब हो सकते हैं। बंद परिपथ में धारा प्रवाहित होती है।</p>
                            <h2>सुरक्षा</h2>
                            <p>गीले हाथों से विद्युत उपकरणों को कभी न छुएँ। गलत तरीके से बिजली का उपयोग खतरनाक हो सकता है।</p>
                        `,
                        mr: `
                            <h2>विद्युत प्रवाह</h2>
                            <p>वाहकातून विद्युतभाराच्या प्रवाहाला विद्युत प्रवाह म्हणतात.</p>
                            <h2>विद्युत परिपथ</h2>
                            <p>सोप्या परिपथामध्ये सेल, जोडणीच्या तारा, स्विच आणि बल्ब असू शकतात. बंद परिपथामधून विद्युत प्रवाह वाहतो.</p>
                            <h2>सुरक्षितता</h2>
                            <p>ओल्या हातांनी विद्युत उपकरणांना स्पर्श करू नका. चुकीच्या पद्धतीने वीज वापरणे धोकादायक ठरू शकते.</p>
                        `
                    }
                }
            ]
        }
    ]
}

};


/* ================= CERTIFICATE COURSES ================= */

const certificateCourses = [

    {
        id: "digital-literacy",
        icon: "fa-computer",
        title: {
            en: "Digital Literacy",
            hi: "डिजिटल साक्षरता",
            mr: "डिजिटल साक्षरता"
        },
        description: {
            en: "Learn computer basics, internet safety, digital documents and responsible technology use.",
            hi: "कंप्यूटर की मूल बातें, इंटरनेट सुरक्षा, डिजिटल दस्तावेज़ और तकनीक का जिम्मेदार उपयोग सीखें।",
            mr: "संगणकाच्या मूलभूत गोष्टी, इंटरनेट सुरक्षितता, डिजिटल दस्तऐवज आणि तंत्रज्ञानाचा जबाबदार वापर शिका."
        },
        modules: [
            {
                en: "Computer Fundamentals",
                hi: "कंप्यूटर की मूल बातें",
                mr: "संगणकाच्या मूलभूत गोष्टी"
            },
            {
                en: "Internet Safety",
                hi: "इंटरनेट सुरक्षा",
                mr: "इंटरनेट सुरक्षितता"
            },
            {
                en: "Digital Documents",
                hi: "डिजिटल दस्तावेज़",
                mr: "डिजिटल दस्तऐवज"
            }
        ]
    },

    {
        id: "communication",
        icon: "fa-comments",
        title: {
            en: "Communication Skills",
            hi: "संचार कौशल",
            mr: "संवाद कौशल्य"
        },
        description: {
            en: "Develop clear speaking, listening, writing and presentation skills for school and future work.",
            hi: "स्कूल और भविष्य के काम के लिए बोलने, सुनने, लिखने और प्रस्तुति देने का कौशल विकसित करें।",
            mr: "शाळा आणि भविष्यातील कामासाठी बोलणे, ऐकणे, लेखन आणि सादरीकरण कौशल्य विकसित करा."
        },
        modules: [
            {
                en: "Effective Listening",
                hi: "प्रभावी सुनना",
                mr: "प्रभावी ऐकणे"
            },
            {
                en: "Speaking Clearly",
                hi: "स्पष्ट बोलना",
                mr: "स्पष्ट बोलणे"
            },
            {
                en: "Presentation Basics",
                hi: "प्रस्तुति की मूल बातें",
                mr: "सादरीकरणाच्या मूलभूत गोष्टी"
            }
        ]
    },

    {
        id: "financial-literacy",
        icon: "fa-coins",
        title: {
            en: "Financial Literacy",
            hi: "वित्तीय साक्षरता",
            mr: "आर्थिक साक्षरता"
        },
        description: {
            en: "Understand saving, budgeting, responsible spending and basic financial decision-making.",
            hi: "बचत, बजट, जिम्मेदार खर्च और बुनियादी वित्तीय निर्णय लेना सीखें।",
            mr: "बचत, अर्थसंकल्प, जबाबदार खर्च आणि मूलभूत आर्थिक निर्णय घेणे शिका."
        },
        modules: [
            {
                en: "Saving Money",
                hi: "पैसे बचाना",
                mr: "पैशांची बचत"
            },
            {
                en: "Making a Simple Budget",
                hi: "सरल बजट बनाना",
                mr: "सोपे अर्थसंकल्प तयार करणे"
            },
            {
                en: "Smart Spending",
                hi: "समझदारी से खर्च",
                mr: "शहाणपणाने खर्च"
            }
        ]
    },

    {
        id: "coding-basics",
        icon: "fa-code",
        title: {
            en: "Coding Fundamentals",
            hi: "कोडिंग की मूल बातें",
            mr: "कोडिंगची मूलभूत माहिती"
        },
        description: {
            en: "Understand programming logic, variables, conditions and simple problem solving.",
            hi: "प्रोग्रामिंग लॉजिक, चर, शर्तें और सरल समस्या समाधान समझें।",
            mr: "प्रोग्रामिंग लॉजिक, चल, अटी आणि सोपे समस्या निराकरण समजून घ्या."
        },
        modules: [
            {
                en: "Programming Logic",
                hi: "प्रोग्रामिंग लॉजिक",
                mr: "प्रोग्रामिंग लॉजिक"
            },
            {
                en: "Variables and Data",
                hi: "चर और डेटा",
                mr: "चल आणि डेटा"
            },
            {
                en: "Problem Solving",
                hi: "समस्या समाधान",
                mr: "समस्या निराकरण"
            }
        ]
    },

    {
        id: "study-skills",
        icon: "fa-book-open-reader",
        title: {
            en: "Effective Study Skills",
            hi: "प्रभावी अध्ययन कौशल",
            mr: "प्रभावी अभ्यास कौशल्य"
        },
        description: {
            en: "Learn time management, note-making, revision techniques and exam preparation strategies.",
            hi: "समय प्रबंधन, नोट्स बनाना, दोहराने की तकनीक और परीक्षा तैयारी सीखें।",
            mr: "वेळेचे व्यवस्थापन, नोट्स बनवणे, उजळणी तंत्र आणि परीक्षा तयारी शिका."
        },
        modules: [
            {
                en: "Time Management",
                hi: "समय प्रबंधन",
                mr: "वेळेचे व्यवस्थापन"
            },
            {
                en: "Smart Note Making",
                hi: "स्मार्ट नोट्स बनाना",
                mr: "स्मार्ट नोट्स तयार करणे"
            },
            {
                en: "Exam Preparation",
                hi: "परीक्षा की तैयारी",
                mr: "परीक्षेची तयारी"
            }
        ]
    },

    {
        id: "cyber-safety",
        icon: "fa-shield-halved",
        title: {
            en: "Cyber Safety",
            hi: "साइबर सुरक्षा",
            mr: "सायबर सुरक्षितता"
        },
        description: {
            en: "Learn safe passwords, privacy, phishing awareness and responsible online behaviour.",
            hi: "सुरक्षित पासवर्ड, गोपनीयता, फिशिंग से बचाव और जिम्मेदार ऑनलाइन व्यवहार सीखें।",
            mr: "सुरक्षित पासवर्ड, गोपनीयता, फिशिंगपासून संरक्षण आणि जबाबदार ऑनलाइन वर्तन शिका."
        },
        modules: [
            {
                en: "Strong Passwords",
                hi: "मजबूत पासवर्ड",
                mr: "मजबूत पासवर्ड"
            },
            {
                en: "Online Privacy",
                hi: "ऑनलाइन गोपनीयता",
                mr: "ऑनलाइन गोपनीयता"
            },
            {
                en: "Recognising Scams",
                hi: "ऑनलाइन फसवणूक ओळखणे",
                mr: "ऑनलाइन फसवणूक ओळखणे"
            }
        ]
    }

];


/* ================= QUIZZES ================= */

const quizzes = [

    {
        id: "math5",
        class: 5,
        subject: "mathematics",
        questions: [
            {
                q: {
                    en: "What is the place value of 5 in 3,582?",
                    hi: "3,582 में 5 का स्थान-मूल्य क्या है?",
                    mr: "3,582 मध्ये 5 ची स्थानिक किंमत किती आहे?"
                },
                options: {
                    en: ["5", "50", "500", "5000"],
                    hi: ["5", "50", "500", "5000"],
                    mr: ["5", "50", "500", "5000"]
                },
                answer: 2
            },
            {
                q: {
                    en: "Which fraction represents one half?",
                    hi: "कौन सा भिन्न एक आधा दर्शाता है?",
                    mr: "एक अर्धा कोणता अपूर्णांक दर्शवतो?"
                },
                options: {
                    en: ["1/2", "1/3", "2/3", "3/4"],
                    hi: ["1/2", "1/3", "2/3", "3/4"],
                    mr: ["1/2", "1/3", "2/3", "3/4"]
                },
                answer: 0
            }
        ]
    },

    {
        id: "science6",
        class: 6,
        subject: "science",
        questions: [
            {
                q: {
                    en: "Which part of a plant absorbs water from the soil?",
                    hi: "पौधे का कौन सा भाग मिट्टी से पानी अवशोषित करता है?",
                    mr: "वनस्पतीचा कोणता भाग जमिनीतून पाणी शोषतो?"
                },
                options: {
                    en: ["Flower", "Root", "Fruit", "Leaf"],
                    hi: ["फूल", "जड़", "फल", "पत्ती"],
                    mr: ["फूल", "मूळ", "फळ", "पान"]
                },
                answer: 1
            },
            {
                q: {
                    en: "Which state of matter has a fixed shape?",
                    hi: "पदार्थ की किस अवस्था का आकार निश्चित होता है?",
                    mr: "पदार्थाच्या कोणत्या अवस्थेचा आकार निश्चित असतो?"
                },
                options: {
                    en: ["Solid", "Liquid", "Gas", "All gases"],
                    hi: ["ठोस", "द्रव", "गैस", "सभी गैस"],
                    mr: ["घन", "द्रव", "वायू", "सर्व वायू"]
                },
                answer: 0
            }
        ]
    },

    {
        id: "math7",
        class: 7,
        subject: "mathematics",
        questions: [
            {
                q: {
                    en: "Which number is greater?",
                    hi: "कौन सी संख्या बड़ी है?",
                    mr: "यापैकी मोठी संख्या कोणती?"
                },
                options: {
                    en: ["-5", "-2", "-8", "-10"],
                    hi: ["-5", "-2", "-8", "-10"],
                    mr: ["-5", "-2", "-8", "-10"]
                },
                answer: 1
            },
            {
                q: {
                    en: "If x + 5 = 12, what is x?",
                    hi: "यदि x + 5 = 12 है, तो x कितना है?",
                    mr: "जर x + 5 = 12 असेल तर x किती?"
                },
                options: {
                    en: ["5", "6", "7", "8"],
                    hi: ["5", "6", "7", "8"],
                    mr: ["5", "6", "7", "8"]
                },
                answer: 2
            }
        ]
    },

    {
        id: "science8",
        class: 8,
        subject: "science",
        questions: [
            {
                q: {
                    en: "What are microorganisms?",
                    hi: "सूक्ष्मजीव क्या हैं?",
                    mr: "सूक्ष्मजीव म्हणजे काय?"
                },
                options: {
                    en: [
                        "Very large animals",
                        "Tiny living organisms",
                        "Only plants",
                        "Only insects"
                    ],
                    hi: [
                        "बहुत बड़े जानवर",
                        "बहुत छोटे जीव",
                        "केवल पौधे",
                        "केवल कीड़े"
                    ],
                    mr: [
                        "खूप मोठे प्राणी",
                        "अतिशय लहान सजीव",
                        "फक्त वनस्पती",
                        "फक्त कीटक"
                    ]
                },
                answer: 1
            }
        ]
    },

    {
        id: "science9",
        class: 9,
        subject: "science",
        questions: [
            {
                q: {
                    en: "What is the basic unit of life?",
                    hi: "जीवन की मूल इकाई क्या है?",
                    mr: "जीवनाचे मूलभूत एकक कोणते?"
                },
                options: {
                    en: ["Tissue", "Organ", "Cell", "Organ system"],
                    hi: ["ऊतक", "अंग", "कोशिका", "अंग तंत्र"],
                    mr: ["ऊतक", "अवयव", "पेशी", "अवयव संस्था"]
                },
                answer: 2
            }
        ]
    },

    {
        id: "math10",
        class: 10,
        subject: "mathematics",
        questions: [
            {
                q: {
                    en: "What are the roots of x² - 5x + 6 = 0?",
                    hi: "x² - 5x + 6 = 0 के मूल क्या हैं?",
                    mr: "x² - 5x + 6 = 0 ची मूळे कोणती?"
                },
                options: {
                    en: ["1 and 6", "2 and 3", "3 and 4", "2 and 4"],
                    hi: ["1 और 6", "2 और 3", "3 और 4", "2 और 4"],
                    mr: ["1 आणि 6", "2 आणि 3", "3 आणि 4", "2 आणि 4"]
                },
                answer: 1
            }
        ]
    }

];


/* ================= STATE ================= */

let currentUser = null;
let currentLanguage = "en";
let currentPage = "dashboard";
let currentLesson = null;
let currentQuiz = null;
let currentQuestion = 0;
let quizScore = 0;
let currentCertificate = null;


/* ================= STORAGE ================= */

function getUsers() {
    return JSON.parse(localStorage.getItem("edusetu_users") || "{}");
}

function saveUsers(users) {
    localStorage.setItem("edusetu_users", JSON.stringify(users));
}

function saveCurrentUser() {
    if (!currentUser) return;

    const users = getUsers();
    users[currentUser.username] = currentUser;
    saveUsers(users);
}


/* ================= TRANSLATION ================= */

function t(key) {

    const lang = translations[currentLanguage] || translations.en;

    return lang[key] || translations.en[key] || key;
}


function applyTranslations() {

    document.querySelectorAll("[data-i18n]").forEach(el => {

        const key = el.dataset.i18n;

        if (translations[currentLanguage] &&
            translations[currentLanguage][key]) {

            el.textContent = translations[currentLanguage][key];
        }

    });


    document.querySelectorAll("[data-placeholder]").forEach(el => {

        const key = el.dataset.placeholder;

        el.placeholder = t(key);

    });


    updateDarkModeText();

    renderCurrentPage();

    updateUserUI();
}


/* ================= LANGUAGE ================= */

function setLanguage(language) {

    if (!translations[language]) return;

    currentLanguage = language;

    localStorage.setItem("edusetu_language", language);

    document.documentElement.lang = language;

    document.getElementById("authLanguage").value = language;

    if (document.getElementById("appLanguage")) {
        document.getElementById("appLanguage").value = language;
    }

    applyTranslations();
}


/* ================= AUTH ================= */

function showLogin() {

    document.getElementById("loginBox").classList.remove("hidden");
    document.getElementById("signupBox").classList.add("hidden");

    clearAuthMessage();
}


function showSignup() {

    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("signupBox").classList.remove("hidden");

    clearAuthMessage();
}


function showAuthMessage(message, success = false) {

    const box = document.getElementById("authMessage");

    box.textContent = message;

    box.style.color = success
        ? "#16a36a"
        : "#ef4444";
}


function clearAuthMessage() {

    document.getElementById("authMessage").textContent = "";
}


document.getElementById("showSignup").addEventListener("click", showSignup);
document.getElementById("showLogin").addEventListener("click", showLogin);


/* SIGNUP */

document.getElementById("signupForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const username =
        document.getElementById("signupUsername").value.trim();

    const password =
        document.getElementById("signupPassword").value;

    const classNumber =
        document.getElementById("signupClass").value;

    const medium =
        document.getElementById("signupMedium").value;


    if (!username || !password || !classNumber) return;


    const users = getUsers();


    if (users[username]) {

        showAuthMessage(t("usernameTaken"));

        return;
    }


    const user = {

        username,

        password,

        classNumber,

        medium,

        language: medium,

        completedLessons: [],

        completedCourses: [],

        quizScores: {},

        createdAt: Date.now()

    };


    users[username] = user;

    saveUsers(users);

    currentUser = user;

    currentLanguage = medium;

    localStorage.setItem("edusetu_current_user", username);
    localStorage.setItem("edusetu_language", medium);

    showAuthMessage(t("accountCreated"), true);

    setTimeout(() => {

        openApp();

    }, 500);

});


/* LOGIN */

document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const username =
        document.getElementById("loginUsername").value.trim();

    const password =
        document.getElementById("loginPassword").value;

    const users = getUsers();

    const user = users[username];


    if (!user || user.password !== password) {

        showAuthMessage(t("invalidLogin"));

        return;
    }


    currentUser = user;

    currentLanguage = user.language || "en";

    localStorage.setItem("edusetu_current_user", username);
    localStorage.setItem("edusetu_language", currentLanguage);

    showAuthMessage(t("loginSuccess"), true);

    setTimeout(openApp, 300);

});


/* PASSWORD TOGGLE */

function setupPasswordToggle(buttonId, inputId) {

    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);

    button.addEventListener("click", () => {

        if (input.type === "password") {

            input.type = "text";

            button.innerHTML =
                '<i class="fa-regular fa-eye-slash"></i>';

        } else {

            input.type = "password";

            button.innerHTML =
                '<i class="fa-regular fa-eye"></i>';

        }

    });

}

setupPasswordToggle(
    "loginPasswordToggle",
    "loginPassword"
);

setupPasswordToggle(
    "signupPasswordToggle",
    "signupPassword"
);


/* ================= APP OPEN ================= */

function openApp() {

    document.getElementById("authPage").classList.add("hidden");
    document.getElementById("appPage").classList.remove("hidden");

    updateUserUI();

    renderDashboard();

    showPage("dashboard");
}


/* ================= USER UI ================= */

function updateUserUI() {

    if (!currentUser) return;

    const username = currentUser.username;

    const classNumber = currentUser.classNumber;

    document.getElementById("profileUsername").textContent = username;

    document.getElementById("welcomeUsername").textContent = username;

    document.getElementById("avatar").textContent =
        username.charAt(0).toUpperCase();

    document.getElementById("profileClass").textContent =
        `${t("classText")} ${classNumber}`;

    document.getElementById("subjectClass").textContent =
        classNumber;

    const subjects =
        classData[classNumber]?.subjects || [];

    document.getElementById("subjectCount").textContent =
        subjects.length;

    document.getElementById("completedLessons").textContent =
        currentUser.completedLessons.length;

    document.getElementById("certificateCount").textContent =
        currentUser.completedCourses.length;

    updateProgress();

}


/* ================= NAVIGATION ================= */

function showPage(page) {

    currentPage = page;

    document.querySelectorAll(".content-page")
        .forEach(p => p.classList.add("hidden"));


    const target =
        document.getElementById(page + "Page");

    if (target) {
        target.classList.remove("hidden");
    }


    document.querySelectorAll(".nav-item[data-page]")
        .forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.page === page
            );

        });


    if (page === "dashboard") renderDashboard();

    if (page === "subjects") renderSubjects();

    if (page === "quizzes") renderQuizzes();

    if (page === "certificates") renderCertificates();

    if (page === "progress") renderProgress();

    document.getElementById("sidebar")
        .classList.remove("open");
}


/* SIDEBAR NAV */

document.querySelectorAll(".nav-item[data-page]")
    .forEach(button => {

        button.addEventListener("click", () => {

            showPage(button.dataset.page);

        });

    });


/* TEXT BUTTONS */

document.querySelectorAll("[data-page-link]")
    .forEach(button => {

        button.addEventListener("click", () => {

            showPage(button.dataset.pageLink);

        });

    });


document.getElementById("continueLearningBtn")
    .addEventListener("click", () => {

        showPage("subjects");

    });


/* MOBILE MENU */

document.getElementById("menuBtn")
    .addEventListener("click", () => {

        document.getElementById("sidebar")
            .classList.toggle("open");

    });


/* ================= SUBJECTS ================= */

function getCurrentSubjects() {

    return classData[currentUser.classNumber]?.subjects || [];

}


function getSubjectName(subjectId) {

    const map =
        translations[currentLanguage].subjectsNames;

    return map[subjectId] ||
        translations.en.subjectsNames[subjectId] ||
        subjectId;
}


function renderDashboard() {

    if (!currentUser) return;

    const container =
        document.getElementById("dashboardSubjects");

    container.innerHTML = "";

    getCurrentSubjects()
        .slice(0, 3)
        .forEach(subject => {

            container.appendChild(
                createSubjectCard(subject)
            );

        });

    updateUserUI();

}


function renderSubjects() {

    const container =
        document.getElementById("subjectsGrid");

    container.innerHTML = "";

    getCurrentSubjects()
        .forEach(subject => {

            container.appendChild(
                createSubjectCard(subject)
            );

        });

}


function createSubjectCard(subject) {

    const card = document.createElement("div");

    card.className = "subject-card";

    const completed =
        subject.lessons.filter(lesson =>
            currentUser.completedLessons.includes(
                getLessonId(
                    currentUser.classNumber,
                    subject.id,
                    lesson.title.en
                )
            )
        ).length;


    card.innerHTML = `

        <div class="subject-icon">
            <i class="fa-solid ${subject.icon}"></i>
        </div>

        <h3>${escapeHTML(getSubjectName(subject.id))}</h3>

        <p>
            ${getSubjectDescription(subject.id)}
        </p>

        <div class="subject-meta">

            <span>
                ${subject.lessons.length} ${t("lessons")}
            </span>

            <span>
                ${completed}/${subject.lessons.length}
            </span>

        </div>
    `;


    card.addEventListener("click", () => {

        showSubjectLessons(subject);

    });


    return card;
}


function getSubjectDescription(id) {

    const descriptions = {

        mathematics: {
            en: "Build mathematical thinking through numbers, patterns and problem solving.",
            hi: "संख्याओं, पैटर्न और समस्या समाधान के माध्यम से गणितीय सोच विकसित करें।",
            mr: "संख्या, नमुने आणि समस्या निराकरणातून गणितीय विचार विकसित करा."
        },

        science: {
            en: "Understand the world through observation, experiments and scientific ideas.",
            hi: "अवलोकन, प्रयोग और वैज्ञानिक विचारों से दुनिया को समझें।",
            mr: "निरीक्षण, प्रयोग आणि वैज्ञानिक विचारांद्वारे जग समजून घ्या."
        },

        english: {
            en: "Improve reading, vocabulary, grammar and communication.",
            hi: "पठन, शब्दावली, व्याकरण और संचार कौशल सुधारें।",
            mr: "वाचन, शब्दसंग्रह, व्याकरण आणि संवाद कौशल्य सुधारा."
        },

        hindi: {
            en: "Develop Hindi reading, writing and language understanding.",
            hi: "हिंदी पढ़ने, लिखने और भाषा समझने की क्षमता विकसित करें।",
            mr: "हिंदी वाचन, लेखन आणि भाषेचे आकलन विकसित करा."
        },

        marathi: {
            en: "Develop Marathi language, reading and writing skills.",
            hi: "मराठी भाषा, पठन और लेखन कौशल विकसित करें।",
            mr: "मराठी भाषा, वाचन आणि लेखन कौशल्य विकसित करा."
        },

        socialScience: {
            en: "Explore society, geography, history, civics and the world around us.",
            hi: "समाज, भूगोल, इतिहास, नागरिक शास्त्र और दुनिया को समझें।",
            mr: "समाज, भूगोल, इतिहास, नागरिकशास्त्र आणि आपल्या जगाचा अभ्यास करा."
        }

    };

    return descriptions[id]?.[currentLanguage] ||
        descriptions[id]?.en ||
        "";
}


/* ================= LESSON ================= */

function getLessonId(classNumber, subjectId, title) {

    return `${classNumber}_${subjectId}_${title}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_");
}


function showSubjectLessons(subject) {

    currentLesson = {
        subject
    };


    const container =
        document.getElementById("lessonContent");

    const lessonCards = subject.lessons.map(
        (lesson, index) => {

            const id =
                getLessonId(
                    currentUser.classNumber,
                    subject.id,
                    lesson.title.en
                );

            const done =
                currentUser.completedLessons.includes(id);

            return `

                <div class="course-module">

                    <h3>
                        ${index + 1}. 
                        ${escapeHTML(lesson.title[currentLanguage] || lesson.title.en)}
                    </h3>

                    <p>
                        ${done ? `✓ ${t("completed")}` : t("startLesson")}
                    </p>

                    <button
                        class="primary-btn"
                        onclick="openLesson('${subject.id}', ${index})">

                        ${done ? t("completed") : t("startLesson")}

                        <i class="fa-solid fa-arrow-right"></i>

                    </button>

                </div>
            `;
        }
    ).join("");


    container.innerHTML = `

        <div class="lesson-header">

            <span class="eyebrow">
                ${escapeHTML(getSubjectName(subject.id))}
            </span>

            <h1>
                ${escapeHTML(getSubjectName(subject.id))}
            </h1>

            <p>
                ${getSubjectDescription(subject.id)}
            </p>

        </div>

        <div>
            ${lessonCards}
        </div>
    `;


    showPage("lesson");

}


window.openLesson = function(subjectId, index) {

    const subject =
        getCurrentSubjects()
            .find(s => s.id === subjectId);

    if (!subject) return;

    const lesson = subject.lessons[index];

    const lessonId =
        getLessonId(
            currentUser.classNumber,
            subject.id,
            lesson.title.en
        );

    const done =
        currentUser.completedLessons.includes(lessonId);


    document.getElementById("lessonContent").innerHTML = `

        <div class="lesson-header">

            <span class="eyebrow">
                ${escapeHTML(getSubjectName(subject.id))}
            </span>

            <h1>
                ${escapeHTML(
                    lesson.title[currentLanguage] ||
                    lesson.title.en
                )}
            </h1>

            <p>
                ${t("classText")} ${currentUser.classNumber}
            </p>

        </div>

        <article class="lesson-body">

            ${lesson.content[currentLanguage] || lesson.content.en}

            <button
                class="primary-btn complete-btn"
                id="completeLessonBtn">

                ${
                    done
                    ? "✓ " + t("completed")
                    : t("completeLesson")
                }

            </button>

        </article>
    `;


    document.getElementById("completeLessonBtn")
        .addEventListener("click", () => {

            if (!currentUser.completedLessons.includes(lessonId)) {

                currentUser.completedLessons.push(lessonId);

                saveCurrentUser();

                showToast(t("lessonCompleted"));

            }

            updateUserUI();

            openLesson(subjectId, index);

        });


    showPage("lesson");

};


document.getElementById("backFromLesson")
    .addEventListener("click", () => {

        showPage("subjects");

    });


/* ================= QUIZZES ================= */

function renderQuizzes() {

    const container =
        document.getElementById("quizList");

    const classNumber =
        Number(currentUser.classNumber);

    const available =
        quizzes.filter(q => q.class === classNumber);


    if (!available.length) {

        container.innerHTML = `
            <div class="quiz-card">
                <h3>${t("noResults")}</h3>
            </div>
        `;

        return;
    }


    container.innerHTML = available.map(quiz => {

        const subjectName =
            getSubjectName(quiz.subject);

        const score =
            currentUser.quizScores[quiz.id];


        return `

            <div class="quiz-card">

                <div class="quiz-card-icon">
                    <i class="fa-solid fa-circle-question"></i>
                </div>

                <h3>
                    ${escapeHTML(subjectName)} Quiz
                </h3>

                <p>
                    ${quiz.questions.length}
                    ${t("questions")}
                </p>

                ${
                    score !== undefined
                    ? `<p><strong>${t("score")}: ${score}%</strong></p>`
                    : ""
                }

                <button
                    class="primary-btn"
                    onclick="startQuiz('${quiz.id}')">

                    ${
                        score !== undefined
                        ? t("tryAgain")
                        : t("startQuiz")
                    }

                    <i class="fa-solid fa-arrow-right"></i>

                </button>

            </div>
        `;

    }).join("");

}


window.startQuiz = function(quizId) {

    currentQuiz =
        quizzes.find(q => q.id === quizId);

    if (!currentQuiz) return;

    currentQuestion = 0;
    quizScore = 0;

    renderQuizQuestion();

    showPage("quizPlayer");

};


function renderQuizQuestion() {

    const question =
        currentQuiz.questions[currentQuestion];

    const questionText =
        question.q[currentLanguage] ||
        question.q.en;

    const options =
        question.options[currentLanguage] ||
        question.options.en;


    document.getElementById("quizContent").innerHTML = `

        <div class="quiz-question">

            <span class="eyebrow">
                ${getSubjectName(currentQuiz.subject)}
                • ${currentQuestion + 1}/${currentQuiz.questions.length}
            </span>

            <h2>
                ${escapeHTML(questionText)}
            </h2>

            <div id="quizOptions">

                ${options.map((option, index) => `

                    <button
                        class="quiz-option"
                        data-option="${index}">

                        ${escapeHTML(option)}

                    </button>

                `).join("")}

            </div>

        </div>
    `;


    document.querySelectorAll(".quiz-option")
        .forEach(button => {

            button.addEventListener("click", () => {

                const selected =
                    Number(button.dataset.option);

                checkQuizAnswer(selected);

            });

        });

}


function checkQuizAnswer(selected) {

    const question =
        currentQuiz.questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".quiz-option");


    buttons.forEach(button => {

        button.disabled = true;

        const index =
            Number(button.dataset.option);

        if (index === question.answer) {

            button.classList.add("correct");

        }

    });


    if (selected === question.answer) {

        quizScore++;

    } else {

        buttons[selected].classList.add("wrong");

    }


    setTimeout(() => {

        currentQuestion++;

        if (
            currentQuestion >=
            currentQuiz.questions.length
        ) {

            finishQuiz();

        } else {

            renderQuizQuestion();

        }

    }, 700);

}


function finishQuiz() {

    const percentage =
        Math.round(
            quizScore /
            currentQuiz.questions.length *
            100
        );


    currentUser.quizScores[currentQuiz.id] =
        percentage;

    saveCurrentUser();


    document.getElementById("quizContent").innerHTML = `

        <div class="quiz-question quiz-result">

            <i class="fa-solid fa-circle-check"></i>

            <h1>${t("quizCompleted")}</h1>

            <h2>
                ${t("score")}: ${percentage}%
            </h2>

            <p>
                ${quizScore}/${currentQuiz.questions.length}
            </p>

            <button
                class="primary-btn"
                onclick="showPage('quizzes')">

                ${t("backToQuizzes")}

            </button>

        </div>
    `;

}


document.getElementById("backFromQuiz")
    .addEventListener("click", () => {

        showPage("quizzes");

    });


/* ================= CERTIFICATES ================= */

function renderCertificates() {

    const container =
        document.getElementById("certificateGrid");

    container.innerHTML =
        certificateCourses.map(course => {

            const completed =
                currentUser.completedCourses
                    .includes(course.id);


            return `

                <div class="certificate-card">

                    <div class="certificate-icon">
                        <i class="fa-solid ${course.icon}"></i>
                    </div>

                    <h3>
                        ${escapeHTML(
                            course.title[currentLanguage] ||
                            course.title.en
                        )}
                    </h3>

                    <p>
                        ${escapeHTML(
                            course.description[currentLanguage] ||
                            course.description.en
                        )}
                    </p>

                    <div class="course-meta">

                        <span>
                            ${course.modules.length}
                            ${t("modules")}
                        </span>

                        <span>
                            ${completed
                                ? "✓ " + t("courseCompleted")
                                : "Self-paced"
                            }
                        </span>

                    </div>

                    <button
                        class="primary-btn"
                        onclick="openCertificateCourse('${course.id}')">

                        ${t("startCourse")}

                        <i class="fa-solid fa-arrow-right"></i>

                    </button>

                </div>

            `;

        }).join("");

}


window.openCertificateCourse = function(courseId) {

    currentCertificate =
        certificateCourses.find(
            course => course.id === courseId
        );

    if (!currentCertificate) return;


    const completed =
        currentUser.completedCourses
            .includes(currentCertificate.id);


    const title =
        currentCertificate.title[currentLanguage] ||
        currentCertificate.title.en;

    const description =
        currentCertificate.description[currentLanguage] ||
        currentCertificate.description.en;


    document.getElementById(
        "certificateCourseContent"
    ).innerHTML = `

        <div class="course-header">

            <div class="certificate-icon">

                <i class="fa-solid ${currentCertificate.icon}"></i>

            </div>

            <span class="eyebrow">
                ${t("skillDevelopment")}
            </span>

            <h1>${escapeHTML(title)}</h1>

            <p>${escapeHTML(description)}</p>

        </div>

        <div>

            ${currentCertificate.modules.map(
                (module, index) => `

                <div class="course-module">

                    <h3>
                        ${index + 1}.
                        ${escapeHTML(
                            module[currentLanguage] ||
                            module.en
                        )}
                    </h3>

                    <p>
                        ${getModuleDescription(
                            currentCertificate.id,
                            index
                        )}
                    </p>

                </div>

            `).join("")}

        </div>

        <div class="course-complete">

            ${
                completed

                ? `
                    <button
                        class="primary-btn"
                        id="printCertificateBtn">

                        <i class="fa-solid fa-print"></i>
                        ${t("printCertificate")}

                    </button>
                `

                : `
                    <button
                        class="primary-btn"
                        id="completeCourseBtn">

                        <i class="fa-solid fa-award"></i>
                        ${t("earnCertificate")}

                    </button>
                `
            }

        </div>
    `;


    if (completed) {

        document.getElementById(
            "printCertificateBtn"
        ).addEventListener(
            "click",
            printCertificate
        );

    } else {

        document.getElementById(
            "completeCourseBtn"
        ).addEventListener(
            "click",
            () => {

                currentUser.completedCourses.push(
                    currentCertificate.id
                );

                saveCurrentUser();

                showToast(
                    t("courseCompletedMessage")
                );

                openCertificateCourse(
                    currentCertificate.id
                );

            }
        );

    }


    showPage("certificateCourse");

};


function getModuleDescription(courseId, index) {

    const descriptions = {

        "digital-literacy": [
            {
                en: "Learn the basic parts of a computer, files, folders and common digital tools.",
                hi: "कंप्यूटर के मुख्य भाग, फाइल, फोल्डर और सामान्य डिजिटल उपकरणों की जानकारी प्राप्त करें।",
                mr: "संगणकाचे मुख्य भाग, फाइल, फोल्डर आणि सामान्य डिजिटल साधने शिका."
            },
            {
                en: "Learn how to protect personal information and stay safe while browsing online.",
                hi: "व्यक्तिगत जानकारी की सुरक्षा और इंटरनेट पर सुरक्षित रहने के तरीके सीखें।",
                mr: "वैयक्तिक माहितीचे संरक्षण आणि इंटरनेटवर सुरक्षित राहण्याचे मार्ग शिका."
            },
            {
                en: "Understand how to create, organise and save simple digital documents.",
                hi: "सरल डिजिटल दस्तावेज़ बनाना, व्यवस्थित करना और सुरक्षित रखना सीखें।",
                mr: "सोपे डिजिटल दस्तऐवज तयार करणे, व्यवस्थित करणे आणि जतन करणे शिका."
            }
        ],

        communication: [
            {
                en: "Learn how careful listening improves understanding and teamwork.",
                hi: "ध्यान से सुनना समझ और टीमवर्क को कैसे बेहतर बनाता है, यह सीखें।",
                mr: "लक्षपूर्वक ऐकल्याने समज आणि टीमवर्क कसे सुधारते ते शिका."
            },
            {
                en: "Practice organising ideas and expressing them clearly and confidently.",
                hi: "विचारों को व्यवस्थित करके स्पष्ट और आत्मविश्वास से व्यक्त करना सीखें।",
                mr: "विचार व्यवस्थित करून स्पष्ट आणि आत्मविश्वासाने मांडण्याचा सराव करा."
            },
            {
                en: "Learn how to prepare a simple presentation with a clear structure.",
                hi: "स्पष्ट संरचना के साथ सरल प्रस्तुति तैयार करना सीखें।",
                mr: "स्पष्ट रचनेसह साधे सादरीकरण तयार करायला शिका."
            }
        ],

        "financial-literacy": [
            {
                en: "Understand why saving a part of available money is useful for future needs.",
                hi: "भविष्य की जरूरतों के लिए पैसे का एक हिस्सा बचाना क्यों उपयोगी है, यह समझें।",
                mr: "भविष्यातील गरजांसाठी उपलब्ध पैशातील काही भाग वाचवणे का महत्त्वाचे आहे ते समजा."
            },
            {
                en: "Learn to list income and expenses and plan spending.",
                hi: "आय और खर्च की सूची बनाकर खर्च की योजना बनाना सीखें।",
                mr: "उत्पन्न आणि खर्चाची नोंद करून खर्चाचे नियोजन करायला शिका."
            },
            {
                en: "Learn to compare needs and wants before spending money.",
                hi: "पैसे खर्च करने से पहले जरूरत और इच्छा में अंतर समझें।",
                mr: "पैसे खर्च करण्यापूर्वी गरज आणि इच्छा यातील फरक समजा."
            }
        ],

        "coding-basics": [
            {
                en: "Understand how programmers break a large problem into smaller logical steps.",
                hi: "प्रोग्रामर बड़ी समस्या को छोटे तार्किक चरणों में कैसे बाँटते हैं, यह समझें।",
                mr: "प्रोग्रामर मोठी समस्या छोट्या तार्किक टप्प्यांमध्ये कशी विभागतात ते समजा."
            },
            {
                en: "Learn how variables store information that a program can use.",
                hi: "चर में प्रोग्राम द्वारा उपयोग की जाने वाली जानकारी कैसे रखी जाती है, यह सीखें।",
                mr: "चलामध्ये प्रोग्राम वापरत असलेली माहिती कशी साठवली जाते ते शिका."
            },
            {
                en: "Practice breaking everyday problems into clear steps that a computer can follow.",
                hi: "दैनिक समस्याओं को कंप्यूटर द्वारा पालन किए जा सकने वाले चरणों में बाँटना सीखें।",
                mr: "दैनंदिन समस्या संगणकाला समजतील अशा स्पष्ट टप्प्यांमध्ये विभागण्याचा सराव करा."
            }
        ],

        "study-skills": [
            {
                en: "Create a realistic timetable that balances study, rest and other activities.",
                hi: "पढ़ाई, आराम और अन्य गतिविधियों के बीच संतुलन बनाने वाली समय-सारणी तैयार करें।",
                mr: "अभ्यास, विश्रांती आणि इतर उपक्रमांमध्ये संतुलन साधणारे वेळापत्रक तयार करा."
            },
            {
                en: "Learn to convert a long lesson into short, useful notes.",
                hi: "लंबे पाठ को छोटे और उपयोगी नोट्स में बदलना सीखें।",
                mr: "मोठा धडा छोट्या आणि उपयुक्त नोट्समध्ये बदलायला शिका."
            },
            {
                en: "Use revision, practice questions and mock tests to prepare for examinations.",
                hi: "परीक्षा की तैयारी के लिए दोहराव, अभ्यास प्रश्न और मॉडल टेस्ट का उपयोग करें।",
                mr: "परीक्षेच्या तयारीसाठी उजळणी, सराव प्रश्न आणि नमुना चाचण्यांचा वापर करा."
            }
        ],

        "cyber-safety": [
            {
                en: "Learn why strong and unique passwords help protect accounts.",
                hi: "मजबूत और अलग-अलग पासवर्ड खाते की सुरक्षा में कैसे मदद करते हैं, यह समझें।",
                mr: "मजबूत आणि वेगवेगळे पासवर्ड खाते सुरक्षित ठेवण्यास कसे मदत करतात ते समजा."
            },
            {
                en: "Understand what personal information should be kept private online.",
                hi: "समझें कि ऑनलाइन कौन सी व्यक्तिगत जानकारी निजी रखनी चाहिए।",
                mr: "ऑनलाइन कोणती वैयक्तिक माहिती गुप्त ठेवावी हे समजा."
            },
            {
                en: "Learn to identify suspicious links, messages and online offers.",
                hi: "संदिग्ध लिंक, संदेश और ऑनलाइन ऑफर पहचानना सीखें।",
                mr: "संशयास्पद लिंक, संदेश आणि ऑनलाइन ऑफर ओळखायला शिका."
            }
        ]

    };


    return descriptions[courseId]?.[index]?.[currentLanguage] ||
        descriptions[courseId]?.[index]?.en ||
        "";

}


function printCertificate() {

    if (!currentCertificate) return;


    document.getElementById(
        "certificateStudentName"
    ).textContent =
        currentUser.username;


    document.getElementById(
        "certificateCourseName"
    ).textContent =
        currentCertificate.title[currentLanguage] ||
        currentCertificate.title.en;


    document.getElementById(
        "certificateDate"
    ).textContent =
        new Date().toLocaleDateString();


    showToast(t("certificatePrinted"));

    setTimeout(() => {

        window.print();

    }, 300);

}


document.getElementById("backFromCertificate")
    .addEventListener("click", () => {

        showPage("certificates");

    });


/* ================= PROGRESS ================= */

function calculateProgress() {

    let total = 0;

    getCurrentSubjects().forEach(subject => {

        total += subject.lessons.length;

    });


    if (!total) return 0;


    const completed =
        currentUser.completedLessons.length;


    return Math.min(
        100,
        Math.round((completed / total) * 100)
    );

}


function updateProgress() {

    if (!currentUser) return;

    const progress =
        calculateProgress();


    document.getElementById(
        "overallProgress"
    ).textContent =
        `${progress}%`;


    document.getElementById(
        "bigProgress"
    ).textContent =
        `${progress}%`;


    document.getElementById(
        "dailyPercent"
    ).textContent =
        `${Math.min(progress,100)}%`;


    document.getElementById(
        "dailyProgressBar"
    ).style.width =
        `${Math.min(progress,100)}%`;


    document.querySelectorAll(
        ".goal-circle, .big-progress-circle"
    ).forEach(circle => {

        circle.style.background =
            `conic-gradient(
                var(--primary) ${progress * 3.6}deg,
                #e8ebf2 ${progress * 3.6}deg
            )`;

    });

}


function renderProgress() {

    const progress =
        calculateProgress();

    document.getElementById(
        "bigProgress"
    ).textContent =
        `${progress}%`;


    document.getElementById(
        "progressSummary"
    ).textContent =
        `${currentUser.completedLessons.length} ${t("lessonsCompleted").toLowerCase()}`;


    const container =
        document.getElementById("progressList");


    container.innerHTML =
        getCurrentSubjects().map(subject => {

            const total =
                subject.lessons.length;

            const completed =
                subject.lessons.filter(
                    lesson =>
                        currentUser.completedLessons.includes(
                            getLessonId(
                                currentUser.classNumber,
                                subject.id,
                                lesson.title.en
                            )
                        )
                ).length;


            const percent =
                total
                    ? Math.round(completed / total * 100)
                    : 0;


            return `

                <div class="progress-row">

                    <div class="progress-row-head">

                        <strong>
                            ${escapeHTML(
                                getSubjectName(subject.id)
                            )}
                        </strong>

                        <span>
                            ${completed}/${total}
                        </span>

                    </div>

                    <div class="progress-track">

                        <div
                            class="progress-fill"
                            style="width:${percent}%">
                        </div>

                    </div>

                </div>

            `;

        }).join("");

}


/* ================= SEARCH ================= */

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


searchInput.addEventListener("input", () => {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();


    if (!query) {

        searchResults.classList.add("hidden");

        return;
    }


    const results = [];


    /* Subjects */

    getCurrentSubjects().forEach(subject => {

        const subjectName =
            getSubjectName(subject.id);

        if (
            subjectName.toLowerCase().includes(query)
        ) {

            results.push({
                type: "subject",
                title: subjectName,
                subtitle: t("subjects"),
                action: () => showSubjectLessons(subject)
            });

        }


        subject.lessons.forEach((lesson, index) => {

            const title =
                lesson.title[currentLanguage] ||
                lesson.title.en;


            const englishTitle =
                lesson.title.en.toLowerCase();


            if (
                title.toLowerCase().includes(query) ||
                englishTitle.includes(query)
            ) {

                results.push({
                    type: "lesson",
                    title,
                    subtitle: subjectName,
                    action: () =>
                        openLesson(subject.id, index)
                });

            }

        });

    });


    /* Certificate courses */

    certificateCourses.forEach(course => {

        const title =
            course.title[currentLanguage] ||
            course.title.en;


        if (
            title.toLowerCase().includes(query) ||
            course.description.en
                .toLowerCase()
                .includes(query)
        ) {

            results.push({
                type: "course",
                title,
                subtitle: t("certificateTitle"),
                action: () =>
                    openCertificateCourse(course.id)
            });

        }

    });


    if (!results.length) {

        searchResults.innerHTML = `
            <div class="search-result">
                <strong>${t("noResults")}</strong>
            </div>
        `;

    } else {

        searchResults.innerHTML =
            results.slice(0, 8).map(
                (result, index) => `

                <div
                    class="search-result"
                    data-search-index="${index}">

                    <strong>
                        ${escapeHTML(result.title)}
                    </strong>

                    <span>
                        ${escapeHTML(result.subtitle)}
                    </span>

                </div>
            `).join("");


        searchResults
            .querySelectorAll(".search-result")
            .forEach((element, index) => {

                element.addEventListener("click", () => {

                    results[index].action();

                    searchInput.value = "";

                    searchResults
                        .classList.add("hidden");

                });

            });

    }


    searchResults.classList.remove("hidden");

});


document.addEventListener("click", e => {

    if (
        !searchResults.contains(e.target) &&
        !searchInput.contains(e.target)
    ) {

        searchResults.classList.add("hidden");

    }

});


/* ================= DARK MODE ================= */

function updateDarkModeText() {

    const darkButton =
        document.getElementById("darkModeBtn");

    if (!darkButton) return;


    const icon =
        darkButton.querySelector("i");

    const span =
        darkButton.querySelector("span");


    if (document.body.classList.contains("dark")) {

        icon.className =
            "fa-solid fa-sun";

        span.textContent =
            t("lightMode");

    } else {

        icon.className =
            "fa-solid fa-moon";

        span.textContent =
            t("darkMode");

    }

}


document.getElementById("darkModeBtn")
    .addEventListener("click", () => {

        document.body.classList.toggle("dark");

        localStorage.setItem(
            "edusetu_dark",
            document.body.classList.contains("dark")
        );

        updateDarkModeText();

    });


/* ================= LOGOUT ================= */

document.getElementById("logoutBtn")
    .addEventListener("click", () => {

        if (!confirm(t("logoutConfirm"))) {
            return;
        }

        saveCurrentUser();

        currentUser = null;

        localStorage.removeItem(
            "edusetu_current_user"
        );

        document.getElementById("appPage")
            .classList.add("hidden");

        document.getElementById("authPage")
            .classList.remove("hidden");

        document.getElementById("loginForm")
            .reset();

        showLogin();

    });


/* ================= NOTIFICATION ================= */

function showToast(message) {

    const toast =
        document.getElementById("notificationToast");

    document.getElementById("toastText")
        .textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}


document.getElementById("notificationBtn")
    .addEventListener("click", () => {

        showToast(
            `${t("hello")} ${currentUser?.username || ""}!`
        );

    });


/* ================= LANGUAGE EVENTS ================= */

document.getElementById("authLanguage")
    .addEventListener("change", e => {

        setLanguage(e.target.value);

    });


document.getElementById("appLanguage")
    .addEventListener("change", e => {

        currentLanguage = e.target.value;

        if (currentUser) {

            currentUser.language =
                currentLanguage;

            saveCurrentUser();

        }

        setLanguage(currentLanguage);

    });


/* Signup medium changes language */

document.getElementById("signupMedium")
    .addEventListener("change", e => {

        setLanguage(e.target.value);

    });


/* ================= INITIALIZATION ================= */

function initialize() {

    const savedLanguage =
        localStorage.getItem(
            "edusetu_language"
        );

    if (savedLanguage &&
        translations[savedLanguage]) {

        currentLanguage =
            savedLanguage;

    }


    const dark =
        localStorage.getItem("edusetu_dark")
        === "true";


    if (dark) {

        document.body.classList.add("dark");

    }


    const savedUsername =
        localStorage.getItem(
            "edusetu_current_user"
        );


    if (savedUsername) {

        const users = getUsers();

        if (users[savedUsername]) {

            currentUser =
                users[savedUsername];

            currentLanguage =
                currentUser.language ||
                currentLanguage;

            openApp();

            return;

        }

    }


    document.getElementById("authLanguage")
        .value = currentLanguage;

    applyTranslations();

}


initialize();


/* ================= UTIL ================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        String(value);

    return div.innerHTML;

}


/* ================= PAGE RENDER ================= */

function renderCurrentPage() {

    if (!currentUser) return;

    if (currentPage === "dashboard") {

        renderDashboard();

    } else if (currentPage === "subjects") {

        renderSubjects();

    } else if (currentPage === "quizzes") {

        renderQuizzes();

    } else if (currentPage === "certificates") {

        renderCertificates();

    } else if (currentPage === "progress") {

        renderProgress();

    } else if (currentPage === "lesson" && currentLesson) {

        showSubjectLessons(
            currentLesson.subject
        );

    } else if (
        currentPage === "certificateCourse" &&
        currentCertificate
    ) {

        openCertificateCourse(
            currentCertificate.id
        );

    }

}