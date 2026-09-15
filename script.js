const input = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const chatArea = document.getElementById("chatArea");
const welcome = document.getElementById("welcome");
const newChatButton = document.getElementById("newChatButton");


function addMessage(text, type) {

    if (welcome) {
        welcome.remove();
    }

    const message = document.createElement("div");

    message.classList.add("message");

    if (type === "user") {
        message.classList.add("user-message");
    } else {
        message.classList.add("ai-message");
    }

    message.textContent = text;

    chatArea.appendChild(message);

    chatArea.scrollTop = chatArea.scrollHeight;
}


function sendMessage() {

    const message = input.value.trim();

    if (!message) return;

    addMessage(message, "user");

    input.value = "";

    // Temporary response.
    // We'll replace this with the real AI later.

    setTimeout(() => {

        addMessage(
            "I'm Creations AI. My AI brain isn't connected yet — but the chat interface is working! 🚀",
            "ai"
        );

    }, 500);
}


sendButton.addEventListener("click", sendMessage);


input.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();
    }

});


newChatButton.addEventListener("click", () => {

    chatArea.innerHTML = `
        <section class="welcome" id="welcome">

            <div class="welcome-icon">✦</div>

            <h1>What can I help you create?</h1>

            <p>
                Stories, ideas, characters, questions and more.
            </p>

        </section>
    `;

});
