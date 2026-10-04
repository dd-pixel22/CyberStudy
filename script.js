/* =========================================================
   CYBERSTUDY JAVASCRIPT
========================================================= */


/* =========================================================
   GLOBAL STATE
========================================================= */

let xp = 0;

let labsCompleted = 0;

let gamesCompleted = 0;

let cipherCompleted = false;


/* =========================================================
   LOGIN
========================================================= */

const loginPage = document.getElementById("loginPage");

const dashboard = document.getElementById("dashboard");

const loginForm = document.getElementById("loginForm");

const loginError = document.getElementById("loginError");

const userEmail = document.getElementById("userEmail");


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    loginError.textContent = "";

    if (!email) {

        loginError.textContent =
            "Please enter your email.";

        return;
    }

    if (password.length < 8) {

        loginError.textContent =
            "Password must contain at least 8 characters.";

        return;
    }

    userEmail.textContent = email;

    loginPage.classList.add("hidden");

    dashboard.classList.remove("hidden");

});


/* =========================================================
   LOGOUT
========================================================= */

document
    .getElementById("logoutButton")
    .addEventListener("click", function() {

        dashboard.classList.add("hidden");

        loginPage.classList.remove("hidden");

        document.getElementById("password").value = "";

    });


/* =========================================================
   NAVIGATION
========================================================= */

const navItems =
    document.querySelectorAll(".nav-item");

const sections =
    document.querySelectorAll(".content-section");

const pageTitle =
    document.getElementById("pageTitle");


const sectionTitles = {

    home: "Cybersecurity Dashboard",

    ai: "AI Study Agent",

    ciphers: "Cipher Laboratory",

    labs: "Cybersecurity Labs",

    games: "Cyber Games",

    materials: "Study Materials",

    progress: "My Progress"

};


function openSection(sectionName) {

    sections.forEach(section => {

        section.classList.remove("active-section");

    });

    const target =
        document.getElementById(sectionName);

    if (target) {

        target.classList.add("active-section");

    }


    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.dataset.section === sectionName) {

            item.classList.add("active");

        }

    });


    pageTitle.textContent =
        sectionTitles[sectionName] ||
        "CyberStudy";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


navItems.forEach(item => {

    item.addEventListener("click", function() {

        openSection(this.dataset.section);

    });

});


document
    .querySelectorAll("[data-go]")
    .forEach(button => {

        button.addEventListener("click", function() {

            openSection(this.dataset.go);

        });

    });


/* =========================================================
   WEB + YOUTUBE
========================================================= */

document
    .getElementById("webButton")
    .addEventListener("click", function() {

        window.open(
            "https://www.google.com/search?q=cybersecurity+study",
            "_blank"
        );

    });


document
    .getElementById("youtubeButton")
    .addEventListener("click", function() {

        window.open(
            "https://www.youtube.com/results?search_query=cybersecurity+tutorial",
            "_blank"
        );

    });


/* =========================================================
   AI STUDY AGENT
========================================================= */

const aiInput =
    document.getElementById("aiInput");

const sendAI =
    document.getElementById("sendAI");

const chatMessages =
    document.getElementById("chatMessages");


function addMessage(text, type) {

    const message =
        document.createElement("div");

    message.className =
        "chat-message " + type;

    const icon =
        type === "ai" ? "AI" : "YOU";

    message.innerHTML = `

        <div class="message-icon">
            ${icon}
        </div>

        <div>

            <strong>
                ${type === "ai"
                    ? "CyberStudy AI"
                    : "You"}
            </strong>

            <p>
                ${text}
            </p>

        </div>

    `;

    chatMessages.appendChild(message);

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}


/*
   The AI in this GitHub-only version is a
   local educational assistant.

   Later, a real AI API can be connected here.
*/

function generateAIResponse(question) {

    const q =
        question.toLowerCase().trim();


    /* -----------------------------------------
       PERSONAL / UNRELATED QUESTIONS
    ----------------------------------------- */

    const personalPatterns = [

        "girlfriend",
        "boyfriend",
        "love",
        "relationship",
        "date me",
        "marry me",
        "my future",
        "my personality",
        "my family",
        "who am i",
        "personal",
        "joke",
        "gossip",
        "celebrity",
        "movie",
        "song",
        "food",
        "game recommendation"

    ];


    const unrelated =
        personalPatterns.some(
            pattern => q.includes(pattern)
        );


    if (unrelated) {

        return `
            Sorry, I can't help you with that.
            I'm designed to help you with your studies
            and cybersecurity learning. 🔐
        `;

    }


    /* -----------------------------------------
       CIA TRIAD
    ----------------------------------------- */

    if (
        q.includes("cia triad") ||
        q.includes("confidentiality") ||
        q.includes("integrity") ||
        q.includes("availability")
    ) {

        return `
            <strong>CIA Triad</strong><br><br>

            The CIA Triad is a fundamental cybersecurity
            model consisting of three principles:

            <br><br>

            <strong>1. Confidentiality</strong><br>
            Only authorized people should access information.

            <br><br>

            <strong>2. Integrity</strong><br>
            Information should remain accurate and
            protected from unauthorized modification.

            <br><br>

            <strong>3. Availability</strong><br>
            Systems and information should be available
            when authorized users need them.

            <br><br>

            <strong>Exam trick:</strong>
            Think <em>Secret → Correct → Available</em>.
        `;

    }


    /* -----------------------------------------
       ENCRYPTION
    ----------------------------------------- */

    if (
        q.includes("encryption") ||
        q.includes("encrypt")
    ) {

        return `
            <strong>Encryption</strong><br><br>

            Encryption converts readable plaintext into
            ciphertext using an encryption algorithm and
            usually a key.

            <br><br>

            Example:

            <br>

            Plaintext → "HELLO"<br>
            Encryption → "KHOOR"<br>
            Ciphertext → "KHOOR"

            <br><br>

            The purpose is to protect confidentiality.

            <br><br>

            <strong>Remember:</strong>
            Encryption is reversible when the correct
            decryption process/key is available.
        `;

    }


    /* -----------------------------------------
       HASHING
    ----------------------------------------- */

    if (
        q.includes("hash") ||
        q.includes("hashing")
    ) {

        return `
            <strong>Hashing</strong><br><br>

            Hashing converts data into a fixed-length
            value called a hash.

            <br><br>

            Unlike normal encryption, secure hashing is
            designed to be one-way.

            <br><br>

            Common examples include:

            <br>
            • SHA-256<br>
            • SHA-512<br>
            • SHA-3

            <br><br>

            <strong>Common use:</strong>
            Password storage, integrity checking and
            digital forensic analysis.
        `;

    }


    /* -----------------------------------------
       SQL INJECTION
    ----------------------------------------- */

    if (
        q.includes("sql injection") ||
        q.includes("sqli")
    ) {

        return `
            <strong>SQL Injection</strong><br><br>

            SQL Injection occurs when untrusted input
            is improperly incorporated into a database
            query.

            <br><br>

            It can potentially allow an attacker to
            manipulate database queries.

            <br><br>

            <strong>Prevention:</strong>

            <br>

            • Prepared statements<br>
            • Parameterized queries<br>
            • Input validation<br>
            • Least privilege

            <br><br>

            <strong>Exam memory:</strong>
            "Untrusted input + unsafe query = SQL Injection risk."
        `;

    }


    /* -----------------------------------------
       PHISHING
    ----------------------------------------- */

    if (
        q.includes("phishing") ||
        q.includes("suspicious email")
    ) {

        return `
            <strong>Phishing</strong><br><br>

            Phishing is a social engineering technique
            where attackers attempt to trick users into
            revealing information or performing an unsafe action.

            <br><br>

            Look for:

            <br>
            • Urgent language<br>
            • Suspicious links<br>
            • Fake login pages<br>
            • Unexpected attachments<br>
            • Sender/domain mismatch

            <br><br>

            <strong>Study trick:</strong>
            Stop → Inspect → Verify → Report.
        `;

    }


    /* -----------------------------------------
       CAESAR
    ----------------------------------------- */

    if (
        q.includes("caesar")
    ) {

        return `
            <strong>Caesar Cipher</strong><br><br>

            Caesar Cipher shifts every letter by a fixed
            number of positions.

            <br><br>

            With shift 3:

            <br>

            A → D<br>
            B → E<br>
            C → F

            <br><br>

            Therefore:

            <br>

            HELLO → KHOOR

            <br><br>

            Try the interactive Cipher Lab to experiment
            with different shifts.
        `;

    }


    /* -----------------------------------------
       PLAYFAIR
    ----------------------------------------- */

    if (
        q.includes("playfair")
    ) {

        return `
            <strong>Playfair Cipher</strong><br><br>

            Playfair is a digraph substitution cipher.

            <br><br>

            Instead of encrypting individual letters,
            it processes pairs of letters.

            <br><br>

            It uses a 5×5 matrix generated from a keyword.

            <br><br>

            This makes it different from simple
            monoalphabetic substitution.
        `;

    }


    /* -----------------------------------------
       HILL
    ----------------------------------------- */

    if (
        q.includes("hill cipher") ||
        q.includes("hill")
    ) {

        return `
            <strong>Hill Cipher</strong><br><br>

            The Hill Cipher is a classical encryption
            technique based on matrix mathematics.

            <br><br>

            Plaintext letters are converted into numbers
            and multiplied by a key matrix.

            <br><br>

            It is useful for understanding how mathematics
            can be applied to cryptography.
        `;

    }


    /* -----------------------------------------
       VIGENERE
    ----------------------------------------- */

    if (
        q.includes("vigenere") ||
        q.includes("vigenère")
    ) {

        return `
            <strong>Vigenère Cipher</strong><br><br>

            Vigenère uses a keyword to create a sequence
            of Caesar shifts.

            <br><br>

            Unlike a simple Caesar cipher, the shift can
            change for different letters.

            <br><br>

            This makes it a polyalphabetic substitution
            cipher.
        `;

    }


    /* -----------------------------------------
       NETWORK SECURITY
    ----------------------------------------- */

    if (
        q.includes("network security") ||
        q.includes("firewall")
    ) {

        return `
            <strong>Network Security</strong><br><br>

            Network security protects network systems,
            devices and data from unauthorized access
            and attacks.

            <br><br>

            Important concepts include:

            <br>
            • Firewalls<br>
            • IDS / IPS<br>
            • VPNs<br>
            • Network segmentation<br>
            • Authentication<br>
            • Monitoring

            <br><br>

            If you're studying for an exam, I can also
            give you scenario-based questions.
        `;

    }


    /* -----------------------------------------
       QUIZ
    ----------------------------------------- */

    if (
        q.includes("quiz") ||
        q.includes("question")
    ) {

        return `
            <strong>Cybersecurity Quick Quiz</strong><br><br>

            Which principle of the CIA Triad focuses
            on preventing unauthorized modification
            of information?

            <br><br>

            A) Confidentiality<br>
            B) Integrity<br>
            C) Availability<br>
            D) Authentication

            <br><br>

            <strong>Think before checking:</strong>
            Which principle protects information
            from being changed incorrectly?
        `;

    }


    /* -----------------------------------------
       DEFAULT STUDY RESPONSE
    ----------------------------------------- */

    return `
        <strong>Let's study that.</strong><br><br>

        I can help you understand cybersecurity and
        computer-science study topics using:

        <br><br>

        • Simple explanations<br>
        • Examples<br>
        • Exam-focused notes<br>
        • Scenario questions<br>
        • Practice quizzes<br>
        • Step-by-step reasoning

        <br><br>

        Try asking:

        <br>

        <em>
        "Explain CIA Triad"<br>
        "What is hashing?"<br>
        "Give me a phishing scenario"<br>
        "Explain Caesar Cipher"<br>
        "Give me a cybersecurity quiz"
        </em>
    `;

}


/* SEND AI */

function sendQuestion() {

    const question =
        aiInput.value.trim();

    if (!question) return;


    addMessage(
        question,
        "user"
    );

    aiInput.value = "";


    setTimeout(function() {

        const response =
            generateAIResponse(question);

        addMessage(
            response,
            "ai"
        );

    }, 350);

}


sendAI.addEventListener(
    "click",
    sendQuestion
);


aiInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendQuestion();

        }

    }
);


/* SUGGESTIONS */

document
    .querySelectorAll(".suggestion")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                aiInput.value =
                    this.textContent;

                sendQuestion();

            }
        );

    });


/* =========================================================
   CAESAR CIPHER
========================================================= */

const cipherText =
    document.getElementById("cipherText");

const cipherShift =
    document.getElementById("cipherShift");

const cipherOutput =
    document.getElementById("cipherOutput");


function caesarCipher(text, shift) {

    let result = "";

    for (let i = 0; i < text.length; i++) {

        const char = text[i];

        const code =
            char.charCodeAt(0);

        if (
            code >= 65 &&
            code <= 90
        ) {

            result += String.fromCharCode(
                ((code - 65 + shift + 26) % 26) + 65
            );

        }

        else if (
            code >= 97 &&
            code <= 122
        ) {

            result += String.fromCharCode(
                ((code - 97 + shift + 26) % 26) + 97
            );

        }

        else {

            result += char;

        }

    }

    return result;

}


document
    .getElementById("encryptButton")
    .addEventListener(
        "click",
        function() {

            const text =
                cipherText.value;

            const shift =
                Number(cipherShift.value);

            cipherOutput.textContent =
                caesarCipher(text, shift);

            cipherCompleted = true;

            addXP(25);

            unlockBadge("badgeCipher");

        }
    );


document
    .getElementById("decryptButton")
    .addEventListener(
        "click",
        function() {

            const text =
                cipherText.value;

            const shift =
                Number(cipherShift.value);

            cipherOutput.textContent =
                caesarCipher(text, -shift);

        }
    );


/* =========================================================
   CIPHER CARDS
========================================================= */

document
    .querySelectorAll(".cipher-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            function() {

                const cipher =
                    this.dataset.cipher;

                const names = {

                    caesar: "Caesar Cipher",

                    hill: "Hill Cipher",

                    playfair: "Playfair Cipher",

                    mono: "Monoalphabetic Cipher",

                    vigenere: "Vigenère Cipher",

                    otp: "Vernam / One-Time Pad"

                };

                const descriptions = {

                    caesar:
                        "A substitution cipher where letters are shifted by a fixed amount.",

                    hill:
                        "A matrix-based cipher that uses linear algebra for encryption.",

                    playfair:
                        "A digraph cipher that encrypts pairs of letters using a 5×5 matrix.",

                    mono:
                        "A substitution cipher where each plaintext character maps to another character.",

                    vigenere:
                        "A polyalphabetic cipher using a repeating keyword.",

                    otp:
                        "A One-Time Pad uses a random key of equal length to the message."
                };


                showModal(
                    names[cipher],
                    `
                        <p class="challenge-question">
                            ${descriptions[cipher]}
                        </p>

                        <div class="result-message">
                            <strong>Study Tip:</strong><br><br>
                            Ask the AI Study Agent to explain
                            this cipher with an example,
                            then return to the Cipher Lab
                            for practice.
                        </div>
                    `
                );

            }
        );

    });


/* =========================================================
   LAB SYSTEM
========================================================= */

const labQuestions = {

    password: {

        title: "Password Guardian",

        question:
            "Which password is generally the strongest choice?",

        options: [

            "password123",

            "Cyber@2024",

            "A long unique passphrase with multiple words",

            "123456789"

        ],

        answer: 2

    },


    base64: {

        title: "Base64 Decoder",

        question:
            "Base64 is primarily a form of what?",

        options: [

            "Encryption",

            "Encoding",

            "Hashing",

            "Authentication"

        ],

        answer: 1

    },


    phishing: {

        title: "Phishing Detective",

        question:
            "An email says your account will be deleted in 5 minutes unless you click a strange link. What should you do first?",

        options: [

            "Click immediately",

            "Forward it to everyone",

            "Verify the message through an official channel",

            "Enter your password to check"

        ],

        answer: 2

    },


    hash: {

        title: "Hash Detective",

        question:
            "Which property is normally expected from a secure cryptographic hash?",

        options: [

            "Easy reversal",

            "Fixed-length output",

            "No input required",

            "Guaranteed encryption"

        ],

        answer: 1

    },


    incident: {

        title: "Incident Response",

        question:
            "A serious cyber incident has just been detected. What should an organization generally do first according to its incident response process?",

        options: [

            "Ignore the alert",

            "Follow the established incident response procedure",

            "Delete all evidence",

            "Post the incident publicly"

        ],

        answer: 1

    },


    cia: {

        title: "CIA Scenario",

        question:
            "A hospital database is changed without authorization. Which CIA principle is primarily affected?",

        options: [

            "Confidentiality",

            "Integrity",

            "Availability",

            "Non-repudiation"

        ],

        answer: 1

    }

};


function startLab(labName) {

    const lab =
        labQuestions[labName];

    if (!lab) return;


    showQuestionModal(
        lab.title,
        lab.question,
        lab.options,
        lab.answer,
        "lab"
    );

}


document
    .querySelectorAll(".lab-start")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                startLab(
                    this.dataset.lab
                );

            }
        );

    });


/* =========================================================
   GAMES
========================================================= */

const gameQuestions = {

    cipher: {

        title: "Cipher Breaker",

        question:
            "You intercept the message 'KHOOR'. The sender says a Caesar cipher with shift 3 was used. What is the plaintext?",

        options: [

            "HELLO",

            "WORLD",

            "CYBER",

            "SECURE"

        ],

        answer: 0

    },


    phishing: {

        title: "Phishing Detective",

        question:
            "You receive an unexpected email asking you to log into your bank using a shortened URL. What is the safest response?",

        options: [

            "Click it immediately",

            "Reply with your password",

            "Verify through the official banking website",

            "Download the attachment"

        ],

        answer: 2

    },


    threat: {

        title: "Threat Hunter",

        question:
            "Files suddenly become encrypted and a message demands payment to restore access. What type of attack does this resemble?",

        options: [

            "Ransomware",

            "Firewall",

            "Authentication",

            "Backup"

        ],

        answer: 0

    },


    incident: {

        title: "Incident Commander",

        question:
            "A suspicious machine may be compromised. Which action is most appropriate according to an organization's incident-response process?",

        options: [

            "Delete all evidence",

            "Follow the organization's response and containment procedures",

            "Ignore the alert",

            "Share confidential evidence publicly"

        ],

        answer: 1

    }

};


document
    .querySelectorAll(".game-start")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                const game =
                    gameQuestions[
                        this.dataset.game
                    ];

                showQuestionModal(
                    game.title,
                    game.question,
                    game.options,
                    game.answer,
                    "game"
                );

            }
        );

    });


/* =========================================================
   QUESTION MODAL
========================================================= */

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalContent =
    document.getElementById("modalContent");


function showQuestionModal(
    title,
    question,
    options,
    answer,
    type
) {

    modalTitle.textContent =
        title;

    modalContent.innerHTML = `

        <div class="challenge-question">
            ${question}
        </div>

        <div id="answerArea"></div>

        <div id="questionResult"></div>

    `;

    const answerArea =
        document.getElementById("answerArea");


    options.forEach(
        (option, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer-option";

            button.textContent =
                option;

            button.addEventListener(
                "click",
                function() {

                    answerArea
                        .querySelectorAll(
                            ".answer-option"
                        )
                        .forEach(
                            btn =>
                                btn.disabled = true
                        );


                    if (index === answer) {

                        button.classList.add(
                            "correct"
                        );

                        document
                            .getElementById(
                                "questionResult"
                            )
                            .innerHTML = `
                                <div class="result-message">
                                    ✓ Correct! Excellent work.
                                    <br><br>
                                    +${type === "game" ? 100 : 50} XP
                                </div>
                            `;


                        if (type === "game") {

                            gamesCompleted++;

                            addXP(100);

                            unlockBadge(
                                "badgeMission"
                            );

                        }

                        else {

                            labsCompleted++;

                            addXP(50);

                            unlockBadge(
                                "badgeLab"
                            );

                        }


                        updateProgress();

                    }

                    else {

                        button.classList.add(
                            "wrong"
                        );

                        document
                            .getElementById(
                                "questionResult"
                            )
                            .innerHTML = `
                                <div class="result-message">
                                    ✕ Not quite.
                                    <br><br>
                                    Review the concept and
                                    try another challenge.
                                </div>
                            `;

                    }

                }
            );

            answerArea.appendChild(button);

        }
    );


    modal.classList.remove("hidden");

}


/* =========================================================
   GENERAL MODAL
========================================================= */

function showModal(title, content) {

    modalTitle.textContent =
        title;

    modalContent.innerHTML =
        content;

    modal.classList.remove("hidden");

}


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        function() {

            modal.classList.add(
                "hidden"
            );

        }
    );


modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            modal.classList.add(
                "hidden"
            );

        }

    }
);


/* =========================================================
   XP + PROGRESS
========================================================= */

function addXP(amount) {

    xp += amount;

    updateProgress();

}


function updateProgress() {

    document
        .getElementById("xpValue")
        .textContent = xp;


    document
        .getElementById("labsCompleted")
        .textContent = labsCompleted;


    document
        .getElementById("gamesCompleted")
        .textContent = gamesCompleted;


    let progress =
        Math.min(
            100,
            Math.round(
                (xp / 500) * 100
            )
        );


    document
        .getElementById("progressPercent")
        .textContent =
        progress + "%";


    document
        .getElementById("progressFill")
        .style.width =
        progress + "%";


    if (xp >= 500) {

        unlockBadge(
            "badgeScholar"
        );

    }

}


function unlockBadge(id) {

    const badge =
        document.getElementById(id);

    if (badge) {

        badge.classList.remove(
            "locked"
        );

        badge.classList.add(
            "unlocked"
        );

    }

}


/* =========================================================
   MATERIAL BUTTONS
========================================================= */

document
    .querySelectorAll(".material-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                showModal(
                    "Study Materials",
                    `
                        <p class="challenge-question">
                            This topic is part of the
                            CyberStudy knowledge base.
                        </p>

                        <div class="result-message">

                            Use the AI Study Agent to ask
                            questions about this topic.

                            <br><br>

                            Try asking:

                            <br><br>

                            "Explain this topic simply."<br>
                            "Give me an exam example."<br>
                            "Give me a scenario question."<br>
                            "Quiz me on this topic."

                        </div>
                    `
                );

            }
        );

    });


/* =========================================================
   INITIALIZATION
========================================================= */

updateProgress();

console.log(
    "CYBERSTUDY SYSTEM INITIALIZED."
);
