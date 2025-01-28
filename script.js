/* script.js */
function showResponse() {
    const responses = {
        notInterested: "I completely understand. May I ask what specifically isn't of interest to you? This will help me provide more relevant information.",
        workingWithSomeone: "That's great to hear! May I ask what you like most about your current provider? I'm curious to know how we compare and if there might be additional value we could offer.",
        callBackLater: "I will be happy to do that. When would be a more convenient time for you? I want to make sure I'm respecting your schedule.",
        sendInfo: "Of course! To ensure I send the most relevant information, can you tell me a bit more about what interests you or any specific challenges you’re facing?",
        tooExpensive: "I understand. Budget is important for every business. Can I clarify what aspects you're comparing it against, and what budget range you’re comfortable with?",
        noBudget: "I understand budget constraints can be tough. If we found a way to make this affordable, would this be a priority for you?",
        busyNow: "I apologize for the interruption. Can we schedule a better time to connect, or is there someone else on your team who might have a moment to chat?",
        thinkAboutIt: "I completely understand the need to consider this thoroughly. Can I address any specific concerns or questions that you have to help with your decision?",
        speakWithSomeone: "That's perfectly fine. Would it be possible for us to arrange a meeting with the decision-maker, or would you like me to follow up after you've had a chance to discuss this internally?",
        happyWithCurrent: "I'm glad to hear that. Could you share what factors are most important to you with your current solution? This helps me understand if we offer anything that might enhance your satisfaction."
    };

    const objection = document.getElementById("objections").value;
    const responseElement = document.getElementById("response");

    responseElement.textContent = objection ? responses[objection] : "";
}

function resetSelection() {
    document.getElementById("objections").value = "";
    document.getElementById("response").textContent = "";
}