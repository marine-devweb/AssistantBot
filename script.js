const question = [
    "Puis-je vous aider ?"
];
// Contenu de la conversation
const chatContent = document.querySelector(".chat-content");

// Fonction pour ajouter les messages du bot à la conversation
function appendBotMessage(messageText) {
    const avatar = document.createElement("div");
    avatar.className = "fas fa-robot message-avatar";
    
    // Création de l'élément div pour le message et le contenu
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = messageText;

    // Ajout de l'avatar et du contenu du message à l'élément div
    messageDiv.append(avatar, contentDiv);
    // Ajout du message à l'élément div
    chatContent.appendChild(messageDiv);    
}

// Appel de la fonction avec les messages et mise en place d'un délai
appendBotMessage("Bonjour, je m'appelle Assistant Bot.");
setTimeout(function() {
    appendBotMessage("Je suis votre assistant personnel");
}, 6000);

// Appel de la fonction et récupération d'une question dans le tableau de la variable question
setTimeout(function() {
    appendBotMessage(question[0]);
}, 9500);