// navbar js(working also without it)

// function toggleMenu() {
//     const menu = document.getElementById('dropdownMenu');
//     if (menu.style.display === 'block') {
//         menu.style.display = 'none';
//     } else {
//         menu.style.display = 'block';
//     }
// }

// // Optional: close the menu if clicked outside
// window.onclick = function(event) {
//     if (!event.target.matches('.three-dots')) {
//         const menu = document.getElementById('dropdownMenu');
//         if (menu.style.display === 'block') {
//             menu.style.display = 'none';
//         }
//     }
// }


  //Dark Mode toggle
  document.getElementById('toggleDarkMode').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
  });



  //Enter button also work as send
  var input = document.getElementById("input");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("send").click();
  }
});





   // A simple chatbot  answers
 function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, nice to meet you! 😊";
    }
     else if (input.includes("how are you")) {
      output = "You know, I'm a Machine, so I'm always fine, thank you for asking.";
    }
     else if (input.includes("what is your name")) {
      output = "My name is XYZ and I'm a chatbot.";
    }
     else if (input.includes("what can you do")) {
      output = "I can chat with you and answer your questions.";
    }
     else if (input.includes("what is google" || "tell me about google" || "google")) {
      output = "Google is an American search engine company ";
    }
     else if (input.includes("what is chatgpt" || "tell me about chatgpt")) {
      output = "ChatGPT is an AI that uses NLP to help Users to solve their problem ";
    }
    else if (input.includes("ai" || "are you ai" || " are you ai model")) {
      output = "No, I am just a program , I can only answer some specific question , read the readme file for more ";
    }
     else if (input.includes("India" || "where is India")) {
      output = "India is a Country that is located in South Asia.";
    }
     
    
     else if (input.includes("tell me a joke")) {
      output = "Tell me....Why did the chicken go to the seance?";
      
      setTimeout(() => {
          displayBotMessage("To get to the other side.");
      }, 5000); // Delay of 5 seconds
    }
     else {
      output = "Sorry, I don't understand that. or I don't know the answer about it";
    }
    return output;
  }

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);



  // Add a keypress event listener to the input(also working without it)
  // document.getElementById("input").addEventListener("keypress", function(event) {
  //   if (event.keyCode == 13) {
  //     sendMessage();
  //   }
  // });


  
