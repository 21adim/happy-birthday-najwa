/* =========================
   LOADING + COVER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

        document.getElementById("cover").style.display = "flex";

        setTimeout(() => {
            document
                .getElementById("birthdayText")
                .classList.add("fade-in");
        }, 500);

        setTimeout(() => {
            document
                .getElementById("nameText")
                .classList.add("fade-in");
        }, 1500);

        setTimeout(() => {
            document
                .getElementById("subtitleText")
                .classList.add("fade-in");
        }, 2500);

        setTimeout(() => {
            document
                .getElementById("startBtn")
                .classList.add("fade-in");
        }, 3500);

    }, 2500);

});


/* =========================
   OPEN GIFT
========================= */

const startBtn =
document.getElementById("startBtn");

const music =
document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {

    music.play();

    document.getElementById("cover")
        .style.display = "none";

    document.getElementById("game")
        .style.display = "flex";

});


/* =========================
   CATCH THE GIFT
========================= */

let score = 0;

const gift =
document.getElementById("movingGift");

const counter =
document.getElementById("counter");

const popup =
document.getElementById("popup");

const popupText =
document.getElementById("popupText");

const popupEmoji =
document.getElementById("popupEmoji");

function showPopup(message, emoji){

    popupText.innerText =
    message;

    popupEmoji.innerText =
    emoji;

    popup.style.display =
    "flex";

    setTimeout(()=>{

        popup.style.display =
        "none";

    },1500);

}
function moveGift() {

    const maxX =
    window.innerWidth - 150;

    const maxY =
    window.innerHeight - 150;

    const randomX =
    Math.random() * maxX;

    const randomY =
    Math.random() * maxY;

    gift.style.left =
    randomX + "px";

    gift.style.top =
    randomY + "px";

}


/* hadiah suka kabur */

gift.addEventListener("mouseenter", () => {

    if (Math.random() < 0.7) {

        moveGift();

    }

});


/* hadiah berhasil diklik */

gift.addEventListener("click", () => {

    score++;

    counter.innerText =
    score + " / 5";

    moveGift();

    switch(score){

    case 1:

        showPopup(
            "Akhirnya ketangkap 😝",
            "😝"
        );

        break;

    case 2:

        showPopup(
            "Hehe belum cukup 💚",
            "💚"
        );

        break;

    case 3:

        showPopup(
            "Serius banget ngejarnya 😂",
            "😂"
        );

        break;

    case 4:

        showPopup(
            "Dikit lagi sayang ✨",
            "✨"
        );

        break;

    case 5:

        showPopup(
            "Yeay! Hadiah terbuka 🎁",
            "🎁"
        );

        gift.style.display =
        "none";

        setTimeout(()=>{

            document
            .getElementById("game")
            .style.display =
            "none";

            document
            .getElementById("quiz")
            .style.display =
            "flex";

        },1500);

        break;
    }

});
/* =========================
   QUIZ
========================= */

const questionNumber =
document.getElementById("questionNumber");

const questionText =
document.getElementById("questionText");

const answerButtons =
document.querySelectorAll(".answerBtn");

let currentQuestion = 0;

const quizData = [

    {
        number:"Question 1 of 3",

        question:
        "Siapa orang paling ganteng di dunia ini? 😎",

        answers:[
            "Adhim 😎",
            "Bang Adhim 😎",
            "Pacarku Adhim 😎",
            "Adhim yang paling ganteng 😎"
        ],

        popup:
        "Bagus aku emang ganteng bangetttt 😎"
    },

    {
        number:"Question 2 of 3",

        question:
        "Kenapa kamu cinta banget sama aku? 💚",

        answers:[
            "Karena aku ganteng 😎",
            "Karena aku baik 🥰",
            "Karena aku manis 🍭",
            "Karena aku lucu 😂"
        ],

        popup:
        "Aduhhhhh jadiii maluuuu akuuuu 😆"
    },

    {
        number:"Question 3 of 3",

        question:
        "Kamu penasaran yaa?? 👀",

        answers:[
            "Iya banget 😍",
            "Bangetttttt 😆",
            "Penasaran parah 😭",
            "Banget banget 💚"
        ],

        popup:
        "Nah sekarang hadiahnya beneran dimulai 🎁"
    }

];
function loadQuestion(){

    questionNumber.innerText =
    quizData[currentQuestion].number;

    questionText.innerText =
    quizData[currentQuestion].question;

    answerButtons.forEach((btn,index)=>{

        btn.innerText =
        quizData[currentQuestion]
        .answers[index];

    });

}

answerButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        showPopup(
            quizData[currentQuestion].popup,
            "💚"
        );

        setTimeout(()=>{

            currentQuestion++;

            if(
                currentQuestion <
                quizData.length
            ){

                loadQuestion();

            }

            else{

                showPopup(
                    "Perfect Score! 💚",
                    "🎉"
                );

                setTimeout(()=>{

                    document
                    .getElementById("quiz")
                    .style.display =
                    "none";

                    document
                    .getElementById("secretDate")
                    .style.display =
                    "flex";

                },1500);

            }

        },1500);

    });

});

loadQuestion();
/* =========================
   SECRET DATE
========================= */

const unlockBtn =
document.getElementById("unlockBtn");

const dateInput =
document.getElementById("dateInput");

unlockBtn.addEventListener("click",()=>{

    const value =
    dateInput.value.trim();

    if(value === "08092018"){

        showPopup(
            "Yeay! Kamu masih ingat ❤️",
            "💚"
        );

        setTimeout(()=>{

            document
            .getElementById("secretDate")
            .style.display =
            "none";

            document
            .getElementById("letter")
            .style.display =
            "flex";

        },1500);

    }

    else{

        showPopup(
            "Salah nih 😝 Coba ingat lagi",
            "🥺"
        );

        dateInput.value = "";

    }

});
/* =========================
   LOVE LETTER
========================= */

const openLetterBtn =
document.getElementById(
    "openLetterBtn"
);

const envelope =
document.getElementById(
    "envelope"
);

const letterPaper =
document.getElementById(
    "letterPaper"
);

const letterContent =
document.getElementById(
    "letterContent"
);

const fullLetter = `Dear Najwa ❤️

Selamat ulang tahun yaa sayangkuu 🎂✨

Hari ini adalah hari spesial karena seseorang yang sangat berarti buat aku lahir ke dunia.

Terima kasih ya karena sudah hadir di hidup aku.

Terima kasih untuk semua tawa yang kita bagi, semua cerita yang kita simpan, dan semua perhatian kecil yang selalu berhasil bikin hari-hariku lebih indah.

Aku mungkin nggak selalu sempurna, kadang nyebelin, kadang bikin kamu kesal, tapi percayalah satu hal:

Aku selalu bersyukur karena punya kamu. ❤️

Di umur yang baru ini aku berharap kamu selalu sehat, bahagia, dimudahkan semua urusannya, dan dikelilingi banyak hal baik.

Kalau suatu hari nanti kamu merasa lelah, ingat ya...

Akan selalu ada aku yang siap dengerin cerita kamu, nemenin kamu, dan berusaha bikin kamu tersenyum lagi. 💚

Terima kasih sudah menjadi Najwa yang aku kenal.

Terima kasih sudah bertahan sampai hari ini.

Dan terima kasih karena sudah menjadi bagian paling indah dari hidup aku. ✨

Happy Birthday Sayang ❤️

I Love You More Than Yesterday,
But Less Than Tomorrow 💚

- Adhim 🤍`;

openLetterBtn.addEventListener(
    "click",
    ()=>{

        envelope.style.display =
        "none";

        letterPaper.style.display =
        "block";

        typeLetter();

    }
);

function typeLetter(){

    let i = 0;

    letterContent.innerHTML = "";

    const typing =
    setInterval(()=>{

        letterContent.innerHTML +=
        fullLetter.charAt(i);

        i++;

        if(
            i >= fullLetter.length
        ){

            clearInterval(
                typing
            );

            document
            .getElementById("nextBtn")
            .style.display =
            "block";

        }

    },35);

}
/* =========================
   GALLERY
========================= */

const nextBtn =
document.getElementById(
    "nextBtn"
);

const gallery =
document.getElementById(
    "gallery"
);

nextBtn.addEventListener(
    "click",
    ()=>{

        document
        .getElementById("letter")
        .style.display =
        "none";

        gallery.style.display =
        "flex";

    }
);

const memoryImage =
document.getElementById(
    "memoryImage"
);

const memoryCaption =
document.getElementById(
    "memoryCaption"
);

const galleryNextBtn =
document.getElementById(
    "galleryNextBtn"
);

let currentMemory = 0;

const memories = [

    {
        image:"images/memory1.jpg",
        caption:"eh dulu kita sekurus ini loh ayo diet ❤️"
    },

    {
        image:"images/memory2.jpg",
        caption:"ini pertama kali kita CFD yaa keknya pengen lagi✨"
    },

    {
        image:"images/memory3.jpg",
        caption:"Ini kita ke pantai yaa waktu ituuu  💚"
    },

    {
        image:"images/memory4.jpg",
        caption:"Ini foto studio pertama kali mudahan nanti ada lagi yaaa ❤️"
    }

];

galleryNextBtn.addEventListener(
    "click",
    ()=>{

        currentMemory++;

        if(
            currentMemory <
            memories.length
        ){

            memoryImage.src =
            memories[currentMemory]
            .image;

            memoryCaption.innerText =
            memories[currentMemory]
            .caption;

        }

        else{

            document
            .getElementById("gallery")
            .style.display =
            "none";

            document
            .getElementById("videoSection")
            .style.display =
            "flex";
            const video =
            document.getElementById("memoryVideo");

            music.pause();
            video.play();
        }

    }
);
/* =========================
   VIDEO
========================= */

const memoryVideo =
document.getElementById(
    "memoryVideo"
);

const videoNextBtn =
document.getElementById(
    "videoNextBtn"
);

/* sembunyikan tombol dulu */

videoNextBtn.style.display =
"none";

/* setelah video selesai */

memoryVideo.addEventListener(
    "ended",
    ()=>{

        videoNextBtn.style.display =
        "block";

    }
);

/* tombol menuju final page */

videoNextBtn.addEventListener(
    "click",
    ()=>{

        document
        .getElementById("videoSection")
        .style.display =
        "none";

        document
        .getElementById("finalPage")
        .style.display =
        "flex";

    }
);