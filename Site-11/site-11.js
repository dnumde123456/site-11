// scripts.js

function unlockFiles() {
    const files = document.getElementById("classified-files");
    if (files.classList.contains("hidden")) {
        alert("Clearance Granted.");
        files.classList.remove("hidden");
    } else {
        files.classList.add("hidden");
    }
}

function showContact() {
    const contactInfo = document.getElementById("contact-info");
    if (contactInfo.classList.contains("hidden")) {
        contactInfo.classList.remove("hidden");
    } else {
        contactInfo.classList.add("hidden");
    }
}
