function smallWindow() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

function exitWindow() {
    document.getElementById("overlay").style.display = "none";
}

function proceed() {
    window.location = 
    "FunctionPage.html"
}

function email() {
    window.location = 
    "EmailDraft.html"
}

function goBack() {
    window.location = 
    "FunctionPage.html"
}

function spendingTracker() {
    window.location = 
    "SpendingTracker.html"
}

function reportWriter() {
    window.location = 
    "ReportWriting.html"
}

function timeConverter() {
        window.location = 
    "TimeConverter.html"
}

function generateEmail() {
    const yourName = document.getElementById("yourName").value;
    const recipientName = document.getElementById("recipientName").value;
    const emailTopics = document.getElementsByName("emailTopic");
    let selectedTopics = [];

    for (let topic of emailTopics) {
        if (topic.checked) {
            selectedTopics.push(topic.value);
        }
    }

    if (selectedTopics.length === 0) {
        alert("Please select at least one email topic.");
        return;
    } else if (selectedTopics.length > 1) {
        alert("Please select only one email topic.");
        return;
    }

    let emailContent = `Dear ${recipientName},\n\n`;

    switch (selectedTopics[0]) {
        case "Meeting Requests/Invitations":
            emailContent += "I would like to be able to speak to you in a private meeting. Is there a time slot this week that you would be free to talk? I look forward to hearing from you.\n\n";
            break;
        case "Follow-ups":
            emailContent += "I wanted to just quickly follow up on how things have been since our previous conversation. How have you been? I hope things have been going well.\n\n";
            break;
        case "Customer Support/Service":
            emailContent += "This is [insert name here], a member of the [company name] customer service department. At [company name], we want to ensure all of our customers feel taken care of. Please let us know what your issue is so we can give you assistance.\n\n";
            break;
        case "Invoices/Billing":
            emailContent += "I have attached the invoice that covers the costs of my services below. I hope that you are able to respond to this message promptly. If the payment has been made already, please inform me of this in a followup email.\n\n";
            break;
        case "Networking/Introductions":
            emailContent += "My name is [insert name here] and I would like to introduce myself to you. I was told about who you are and would like to get to know you better in a one-on-one environment. Would you like to schedule going out for coffee sometime the next week?\n\n";
            break;
        default:
            alert("Invalid email topic selected.");
            return;
    }

    emailContent += `Best regards,\n${yourName}`;

    document.getElementById("emailContent").value = emailContent;
}