const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// remove menu mobile
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// qualifi
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });

    tab.classList.add("qualification-active");
  });
});

const boxViews = document.querySelectorAll(".services-box"),
  boxBtns = document.querySelectorAll(".services-button"),
  boxCloses = document.querySelectorAll(".services-box-close");

let box = function (boxClick) {
  boxViews[boxClick].classList.add("active-box");
};

boxBtns.forEach((boxBtn, i) => {
  boxBtn.addEventListener("click", () => {
    box(i);
  });
});

boxCloses.forEach((boxClose) => {
  boxClose.addEventListener("click", () => {
    boxViews.forEach((boxView) => {
      boxView.classList.remove("active-box");
    });
  });
});

//scroll section active link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// change bg header
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//dark light mode------------------
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//swiper
let swiperPortfolio = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiperTestimonial = new Swiper(".testimonial-container", {
  cssMode: true,
  loop: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

// swiper
let swiperAchievements = new Swiper(".Achievement .swiper-container", {
  cssMode: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".Achievement .swiper-pagination",
    clickable: true,
  },
});


// // Swiper initialization for Projects section
// let swiperProjects = new Swiper(".portfolio .swiper-container", {
//   cssMode: true,
//   loop: true,
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".portfolio .swiper-pagination",
//     clickable: true,
//   },
// });



// Adding everything for chat box here
// Selectors
const heartBtn = document.querySelector(".fa-heart");
let userText = $("#textInput").val();
function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Simple Greetings
  if (
    input == "Hello" ||
    input == "Hello!" ||
    input == "hello" ||
    input == "hello!" ||
    input == "Hey" ||
    input == "Hey!" ||
    input == "hey" ||
    input == "hey!" ||
    input == "Hi" ||
    input == "Hi!" ||
    input == "hi" ||
    input == "hi!" ||
    input == "Yo!" ||
    input == "Yo" ||
    input == "yo!" ||
    input == "yo" ||
    input == "Sup" ||
    input == "Sup!" ||
    input == "sup" ||
    input == "sup!" ||
    input == "Good morning" ||
    input == "Good morning!" ||
    input == "good morning" ||
    input == "good morning!" ||
    input == "Good day" ||
    input == "Good day!" ||
    input == "good day" ||
    input == "good day!" ||
    input == "Good evening" ||
    input == "Good evening!" ||
    input == "good evening" ||
    input == "good evening!" ||
    input == "Good afternoon" ||
    input == "Good afternoon!" ||
    input == "good afternoon" ||
    input == "good afternoon!"
  ) {
    return "Hello there!";
  }

  //   Asking Robot name
  else if (
    input == "What's your name?" ||
    input == "What's your name" ||
    input == "Whats your name?" ||
    input == "Whats your name" ||
    input == "what's your name?" ||
    input == "what's your name" ||
    input == "whats your name?" ||
    input == "whats your name" ||
    input == "who are you?" ||
    input == "Who are you?" ||
    input == "Who are you" ||
    input == "who are you" ||
    input == "What is your name" ||
    input == "What is your name?" ||
    input == "what is your name" ||
    input == "what is your name?" ||
    input == "your name" ||
    input == "Your name"
  ) {
    return "My name is Arsh.";
  }

  //   Health questions
  else if (
    input == "How are you?" ||
    input == "how are you?" ||
    input == "How are you" ||
    input == "how are you" ||
    input == "How are you felling?" ||
    input == "How are you felling" ||
    input == "how are you felling?" ||
    input == "how are you felling"
  ) {
    return "I'm fine. Thanks for asking";
  }
  // EVE: Joke
  else if (
    input == "Tell me a joke" ||
    input == "tell me a joke" ||
    input == "Say a joke" ||
    input == "say a joke"
  ) {
    return "You, you're the joke 🤡";
  }

  // Simple Valediction
  else if (
    input == "Goodbye" ||
    input == "goodbye" ||
    input == "Goodbye!" ||
    input == "goodbye!" ||
    input == "goodbye" ||
    input == "Good bye" ||
    input == "Good bye!" ||
    input == "good bye" ||
    input == "good bye!" ||
    input == "Bye" ||
    input == "Bye!" ||
    input == "bye" ||
    input == "bye!" ||
    input == "Take care" ||
    input == "Take care!" ||
    input == "take care" ||
    input == "take care!" ||
    input == "Peace" ||
    input == "Peace!" ||
    input == "peace" ||
    input == "peace!" ||
    input == "Peace out!" ||
    input == "Peace out" ||
    input == "peace out" ||
    input == "peace out!" ||
    input == "Later" ||
    input == "later" ||
    input == "Catch you later" ||
    input == "catch you later" ||
    input == "I'm out" ||
    input == "Im out" ||
    input == "Good night!" ||
    input == "Good night" ||
    input == "good night" ||
    input == "good night!" ||
    input == "be right back" ||
    input == "brb"
  ) {
    return "Talk to you later!";
  } // Curse Words
  else if (
    input == "Fuck" ||
    input == "fuck" ||
    input == "fuck you" ||
    input == "Fuck you" ||
    input == "Fuck off" ||
    input == "fuck off" ||
    input == "Piss of" ||
    input == "piss of" ||
    input == "Bastard" ||
    input == "bastard" ||
    input == "Bitch" ||
    input == "bitch" ||
    input == "Bloody hell" ||
    input == "bloody hell" ||
    input == "Slut" ||
    input == "slut" ||
    input == "Whore" ||
    input == "whore" ||
    input == "Hoe" ||
    input == "hoe"
  ) {
    return "That's not nice to say.";
  }
  // Favorite clor
  else if (
    input == "What is your favorite color?" ||
    input == "what is your favorite color?" ||
    input == "What is your favorite color" ||
    input == "what is your favorite color" ||
    input == "What's your favorite color?" ||
    input == "what's your favorite color?" ||
    input == "What's your favorite color" ||
    input == "what's your favorite color" ||
    input == "Whats your favorite color?" ||
    input == "whats your favorite color?" ||
    input == "Whats your favorite color" ||
    input == "whats your favorite color"
  ) {
    return "My favorite color is blue.";
  }
  // Irrelevant
  else {
    return "Try asking something else!";
  }
}


// Collapsible
let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Get Time
function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage = "Hello There! I am Arsh's Chat bot. Is there anything i can assist you with?";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text, text from the input box and processes it
// Gets the text, text from the input box and processes it
function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "🙂";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  // Now, you can send the user's input to the bot and receive a response
  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}


// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  //Uncomment this if you want the bot to respond to this buttonSendText event
  setTimeout(() => {
    getHardResponse(sampleText);
  }, 1000);
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("❤️");
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});

