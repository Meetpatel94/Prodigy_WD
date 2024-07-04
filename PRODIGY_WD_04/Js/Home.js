let tablinks = document.getElementsByClassName("tab-links");
let skills = document.querySelector("#skills");
let experience = document.querySelector("#experience");
let education = document.querySelector("#education");
let tabcontents = document.getElementsByClassName("tab-contents")

function skl() {
    skills.style.display = 'block'
    experience.style.display = 'none';
    education.style.display = 'none';
}
function exp() {
    skills.style.display = 'none'
    experience.style.display = 'block';
    education.style.display = 'none';
}
function edu() {
    skills.style.display = 'none'
    experience.style.display = 'none';
    education.style.display = 'block';
}
