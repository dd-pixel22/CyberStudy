/* =========================================================
   CYBERSTUDY JAVASCRIPT
   ========================================================= */


/* =========================================================
   LOGIN
   ========================================================= */

const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("loginPage");
const dashboard = document.getElementById("dashboard");

const loginError = document.getElementById("loginError");
const userEmail = document.getElementById("userEmail");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    loginError.textContent = "";

    if (!email) {
        loginError.textContent = "Please enter your email address.";
        return;
    }

    if (password.length < 8) {
        loginError.textContent =
            "Password must contain at least 8 characters.";
        return;
    }

    if (!email.includes("@")) {
        loginError.textContent =
            "Please enter a valid email address.";
        return;
    }

    userEmail.textContent = email;

    loginPage.classList.add("hidden");
    dashboard.classList.remove("hidden");

    showSection("home");

});


/* =========================================================
   LOGOUT
   ========================================================= */

document.getElementById("logoutButton").addEventListener("click", function() {

    dashboard.classList.add("hidden");
    loginPage.classList.remove("hidden");

    document.getElementById("password").value = "";

});


/* =========================================================
   NAVIGATION
   ========================================================= */

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        const section = item.dataset.section;

        showSection(section);

    });

});


function showSection(sectionName) {

    const sections = document.querySelectorAll(".content-section");

    sections.forEach(function(section) {
        section.classList.remove("active-section");
    });

    navItems.forEach(function(item) {
        item.classList.remove("active");
    });


    const target = document.getElementById(
        sectionName + "Section"
    );

    if (target) {
        target.classList.add("active-section");
    }


    const activeNav = document.querySelector(
        `[data-section="${sectionName}"]`
    );

    if (activeNav) {
        activeNav.classList.add("active");
    }


    const titles = {

        home: "Dashboard",

        ciphers: "Cipher Techniques",

        games: "Cyber Games",

        materials: "Study Materials"

    };

    document.getElementById("pageTitle").textContent =
        titles[sectionName] || "Dashboard";

}


window.showSection = showSection;


/* =========================================================
   CLOCK
   ========================================================= */

function updateClock() {

    const clock = document.getElementById("clock");

    const now = new Date();

    const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    clock.textContent = time;

}

setInterval(updateClock, 1000);

updateClock();


/* =========================================================
   AI STUDY ASSISTANT
   ========================================================= */

const aiInput = document.getElementById("aiInput");
const aiSend = document.getElementById("aiSend");
const aiChat = document.getElementById("aiChat");


function addAIMessage(question, answer) {

    const userMessage = document.createElement("div");

    userMessage.className = "ai-message";

    userMessage.style.marginBottom = "20px";

    userMessage.innerHTML = `
        <div class="message-avatar">YOU</div>

        <div class="message-content">

            <strong>Student</strong>

            <p>${escapeHTML(question)}</p>

        </div>
    `;

    aiChat.appendChild(userMessage);


    const aiMessage = document.createElement("div");

    aiMessage.className = "ai-message";

    aiMessage.innerHTML = `
        <div class="message-avatar">AI</div>

        <div class="message-content">

            <strong>CyberStudy AI</strong>

            <p>${answer}</p>

        </div>
    `;

    aiChat.appendChild(aiMessage);

    aiChat.scrollTop = aiChat.scrollHeight;

}


function getAIResponse(question) {

    const q = question.toLowerCase();


    if (q.includes("caesar")) {

        return `
            <strong>Caesar Cipher</strong> is a classical
            substitution cipher where each letter is shifted by
            a fixed number of positions in the alphabet.
            <br><br>
            Example: with a shift of 3,
            <strong>HELLO → KHOOR</strong>.
            <br><br>
            Go to <strong>Cipher Techniques</strong> to try the
            interactive demonstration.
        `;

    }


    if (q.includes("hill")) {

        return `
            The <strong>Hill Cipher</strong> is a polygraphic
            substitution cipher based on matrix multiplication.
            It represents letters as numerical values and uses
            a key matrix for encryption.
        `;

    }


    if (q.includes("playfair")) {

        return `
            The <strong>Playfair Cipher</strong> encrypts pairs
            of letters rather than individual letters.
            It uses a 5×5 matrix generated from a keyword.
        `;

    }


    if (
        q.includes("monoalphabetic") ||
        q.includes("mono alphabetic")
    ) {

        return `
            A <strong>Monoalphabetic Cipher</strong> uses one
            substitution alphabet. Each plaintext letter maps
            consistently to another letter.
            <br><br>
            Frequency analysis can often be used to attack it.
        `;

    }


    if (
        q.includes("vigenere") ||
        q.includes("verman")
    ) {

        return `
            The <strong>Vigenère Cipher</strong> is a
            polyalphabetic substitution cipher that uses a
            keyword to perform changing shifts.
            <br><br>
            Note: if you meant <strong>Vernam Cipher</strong>,
            that is a different technique based on combining
            plaintext with a key stream.
        `;

    }


    if (
        q.includes("otp") ||
        q.includes("one time pad")
    ) {

        return `
            A <strong>One-Time Pad</strong> uses a truly random
            key that is at least as long as the message and is
            never reused.
            <br><br>
            When implemented correctly, it provides
            <strong>information-theoretic security</strong>.
        `;

    }


    if (
        q.includes("cryptography") ||
        q.includes("encryption")
    ) {

        return `
            <strong>Cryptography</strong> is the study of techniques
            used to protect information.
            <br><br>
            Start with the Cipher Techniques section to learn
            classical encryption methods before moving to modern
            cryptography.
        `;

    }


    if (
        q.includes("quiz") ||
        q.includes("game")
    ) {

        return `
            You can test yourself using the
            <strong>Cyber Games</strong> section.
            Try Cyber Quiz, Crack the Cipher, Cyber Detective,
            and Threat Hunter.
        `;

    }


    if (
        q.includes("phishing") ||
        q.includes("malware") ||
        q.includes("ransomware")
    ) {

        return `
            This is a cybersecurity threat topic.
            <br><br>
            You can study threats such as phishing, malware,
            ransomware and social engineering in
            <strong>Study Materials</strong>.
        `;

    }


    return `
        I can help you explore cybersecurity concepts such as:
        <br><br>

        • Caesar Cipher<br>
        • Hill Cipher<br>
        • Playfair Cipher<br>
        • Monoalphabetic Cipher<br>
        • Vigenère Cipher<br>
        • Vernam / One-Time Pad<br>
        • Cryptography<br>
        • Phishing<br>
        • Malware<br>
        • Network Security<br>
        • Digital Forensics
        <br><br>

        Try asking: <strong>"Explain Caesar Cipher"</strong>.
    `;

}


function sendAIMessage() {

    const question = aiInput.value.trim();

    if (!question) {
        return;
    }

    const answer = getAIResponse(question);

    addAIMessage(question, answer);

    aiInput.value = "";

}


aiSend.addEventListener("click", sendAIMessage);


aiInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        sendAIMessage();

    }

});


/* QUICK AI BUTTONS */

document.querySelectorAll(".suggestion").forEach(function(button) {

    button.addEventListener("click", function() {

        const question = button.textContent.trim();

        aiInput.value = question;

        sendAIMessage();

    });

});


/* =========================================================
   CAESAR CIPHER DEMO
   ========================================================= */

function caesarEncrypt(text, shift) {

    let result = "";

    shift = Number(shift) || 0;

    shift = shift % 26;


    for (let i = 0; i < text.length; i++) {

        const char = text[i];

        if (char >= "A" && char <= "Z") {

            const code =
                ((char.charCodeAt(0) - 65 + shift) % 26) + 65;

            result += String.fromCharCode(code);

        }

        else if (char >= "a" && char <= "z") {

            const code =
                ((char.charCodeAt(0) - 97 + shift) % 26) + 97;

            result += String.fromCharCode(code);

        }

        else {

            result += char;

        }

    }

    return result;

}


function runCaesar() {

    const input =
        document.getElementById("cipherInput").value;

    const shift =
        document.getElementById("cipherShift").value;

    const output =
        document.getElementById("cipherOutput");


    if (!input.trim()) {

        output.textContent =
            "Please enter a message first.";

        return;

    }

    output.textContent =
        caesarEncrypt(input, shift);

}


window.runCaesar = runCaesar;


/* =========================================================
   CIPHER INFORMATION
   ========================================================= */

function openCipher(cipher) {

    const information = {

        "Caesar Cipher": `
            <p>
                The Caesar Cipher is a substitution technique
                where letters are shifted by a fixed number.
            </p>

            <p>
                <strong>Example:</strong>
                A shift of 3 changes A → D,
                B → E and C → F.
            </p>

            <p>
                <strong>Security:</strong>
                It is not secure for modern applications because
                there are only 26 possible shifts.
            </p>
        `,

        "Hill Cipher": `
            <p>
                The Hill Cipher uses linear algebra and matrix
                multiplication to encrypt groups of letters.
            </p>

            <p>
                Letters are converted into numerical values and
                multiplied by a key matrix.
            </p>
        `,

        "Playfair Cipher": `
            <p>
                Playfair encrypts pairs of letters using a
                5×5 matrix created from a keyword.
            </p>

            <p>
                It was historically useful because it hides
                simple single-letter frequency patterns better
                than basic substitution ciphers.
            </p>
        `,

        "Monoalphabetic Cipher": `
            <p>
                A monoalphabetic substitution cipher uses a
                fixed substitution alphabet.
            </p>

            <p>
                Each plaintext letter always maps to the same
                ciphertext letter.
            </p>
        `,

        "Vigenere Cipher": `
            <p>
                The Vigenère Cipher uses a repeating keyword
                to apply different Caesar-style shifts.
            </p>

            <p>
                This makes it more resistant to simple frequency
                analysis than the Caesar Cipher.
            </p>
        `,

        "One-Time Pad": `
            <p>
                The One-Time Pad uses a truly random key that is
                as long as the plaintext.
            </p>

            <p>
                The key must remain secret and must never be reused.
                Correctly implemented, OTP provides perfect secrecy.
            </p>
        `

    };


    showModal(
        cipher,
        information[cipher] ||
        "<p>Information unavailable.</p>"
    );

}


window.openCipher = openCipher;


/* =========================================================
   CYBER GAMES
   ========================================================= */

function startQuiz() {

    showModal(

        "Cyber Quiz",

        `
            <p>
                <strong>Question:</strong>
                What does the CIA Triad represent?
            </p>

            <button
                class="quiz-answer"
                onclick="quizAnswer('A')"
            >
                A. Confidentiality, Integrity, Availability
            </button>

            <button
                class="quiz-answer"
                onclick="quizAnswer('B')"
            >
                B. Cyber Intelligence Agency
            </button>

            <button
                class="quiz-answer"
                onclick="quizAnswer('C')"
            >
                C. Control, Internet, Access
            </button>

            <div id="quizResult"></div>
        `

    );

}


window.startQuiz = startQuiz;


function quizAnswer(answer) {

    const result =
        document.getElementById("quizResult");

    if (answer === "A") {

        result.innerHTML = `
            <p style="color:#37d67a; margin-top:20px;">
                ✓ Correct! CIA = Confidentiality, Integrity,
                Availability.
            </p>
        `;

    }

    else {

        result.innerHTML = `
            <p style="color:#e5092f; margin-top:20px;">
                ✕ Incorrect. Try again.
            </p>
        `;

    }

}


window.quizAnswer = quizAnswer;


function startCipherGame() {

    showModal(

        "Crack the Cipher",

        `
            <p>
                <strong>Encrypted message:</strong>
            </p>

            <p style="
                background:#050505;
                padding:20px;
                color:#e5092f;
                font-family:monospace;
            ">
                KHOOR
            </p>

            <p>
                Hint: Caesar Cipher with a shift of 3.
            </p>

            <button
                class="login-button"
                onclick="showModal(
                    'Crack the Cipher',
                    '<p style=color:#37d67a>✓ Correct! KHOOR → HELLO</p>'
                )"
            >
                DECODE MESSAGE
            </button>
        `

    );

}


window.startCipherGame = startCipherGame;


function startDetective() {

    showModal(

        "Cyber Detective",

        `
            <p>
                <strong>Incident #CYB-204</strong>
            </p>

            <p>
                A student receives an email claiming that their
                university account will be disabled unless they
                immediately click a link and enter their password.
            </p>

            <p>
                The sender address contains a suspicious domain.
            </p>

            <p>
                <strong>Question:</strong>
                What type of attack is most likely occurring?
            </p>

            <p style="color:#e5092f;">
                Investigation clue: Examine the sender,
                urgency and requested credentials.
            </p>

            <button
                class="login-button"
                onclick="showModal(
                    'Investigation Result',
                    '<p style=color:#37d67a>✓ Correct analysis: This is a phishing scenario.</p>'
                )"
            >
                IDENTIFY THREAT
            </button>
        `

    );

}


window.startDetective = startDetective;


function startThreatHunter() {

    showModal(

        "Threat Hunter",

        `
            <p>
                Your simulated security system detected:
            </p>

            <p style="
                background:#050505;
                padding:18px;
                font-family:monospace;
                color:#aaa;
            ">
                LOGIN SUCCESS<br>
                LOGIN SUCCESS<br>
                LOGIN SUCCESS<br>
                LOGIN FAILED<br>
                LOGIN FAILED<br>
                LOGIN FAILED<br>
                LOGIN FAILED<br>
                LOGIN FAILED
            </p>

            <p>
                What should a security analyst investigate?
            </p>

            <button
                class="login-button"
                onclick="showModal(
                    'Threat Analysis',
                    '<p style=color:#37d67a>✓ Correct. Multiple failed login attempts can indicate a brute-force or credential attack.</p>'
                )"
            >
                ANALYSE EVENT
            </button>
        `

    );

}


window.startThreatHunter = startThreatHunter;


/* =========================================================
   WEB + YOUTUBE
   ========================================================= */

function openWebSearch() {

    window.open(
        "https://www.google.com/search?q=cybersecurity+learning",
        "_blank"
    );

}


window.openWebSearch = openWebSearch;


function openYouTubeSearch() {

    window.open(
        "https://www.youtube.com/results?search_query=cybersecurity+tutorial",
        "_blank"
    );

}


window.openYouTubeSearch = openYouTubeSearch;


/* =========================================================
   MODAL
   ========================================================= */

function showModal(title, content) {

    document.getElementById("modalTitle").textContent =
        title;

    document.getElementById("modalContent").innerHTML =
        content;

    document.getElementById("modal").classList.remove("hidden");

}


window.showModal = showModal;


function closeModal() {

    document.getElementById("modal").classList.add("hidden");

}


window.closeModal = closeModal;


document.getElementById("modal").addEventListener(
    "click",
    function(event) {

        if (event.target.id === "modal") {

            closeModal();

        }

    }
);


/* =========================================================
   SECURITY / HTML ESCAPING
   ========================================================= */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}
