function sendMessage() {
    let input = document.getElementById("chatInput").value;
    let chatbox = document.getElementById("chatbox");
    let userMsg = `<p><b>Você:</b> ${input}</p>`;
    let botReply = `<p><b>Bot:</b> ${simulatedChat(input)}</p>`;
    chatbox.innerHTML += userMsg + botReply;
    document.getElementById("chatInput").value = "";
}

function simulatedChat(msg) {
    return "Não entendi, mas estou aprendendo!";
}
