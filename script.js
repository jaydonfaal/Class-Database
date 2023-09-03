//285 class data fethced from the sheet
fetch('https://script.google.com/macros/s/AKfycbz2kGLlfwjgRXD52r_OZwOCmPckoWf7I452IX3AmZRP2YUSu-B2MBfnKZ_OhMfcKtRjog/exec')
		.then(res => res.json())
		.then(data => {
				 data.content.reduce((prev, cur) => {
						users285.push(new student(cur[1], cur[2], cur[3], cur[4]));
				})
		});
//338 class  data fethced from the sheet
 fetch('https://script.google.com/macros/s/AKfycbz2lA3jETcgI9oNX18DGbWH8dq1S0CcuCzv6UVcoGHFaYeBGw4TNjdE3b1Rg9VzMCuDgg/exec')
		.then(res => res.json())
		.then(data => {
				 data.content.reduce((prev, cur) => {
						users338.push(new student(cur[1], cur[2], cur[3], cur[4]));
				})
		});       


let users285 = [];
let users338 = [];
const classOne = document.getElementById("285");
const classTwo = document.getElementById("338");
const resultBox = document.getElementById("results")

//turns the html i'm writing in js into an appendable element for my html page
function elementFromHtml(html) {
	const template = document.createElement("template");
	template.innerHTML = html.trim();
	return template.content.firstElementChild;
}

//each students info gathered from the google sheet
class student{
    constructor(first, last, id, git) {
      this.first = first;
      this.last = last;
      this.caseID = id;
      this.git = git;
    }
  }

 
//waits to display the homepage to give the program time to fetch the student info
setTimeout(() => {
    const welcome = elementFromHtml(`
<p class="pine">Welcome to your class, portal, please select a section.</p>
`);
resultBox.append(welcome)
}, 3000);

//waits for the 285 button to be clicked to display the content
classOne.addEventListener('click', () => {
resultBox.innerHTML ="";
for(element of users285){
    console.log(element);
    const infoCard = elementFromHtml(`
    <div class="card">
                <p class="card-text">${element.first} ${element.last}</p>
                <button class="submit-btn" onclick="window.open('http://eecslab-22/~${element.caseID}/', '_blank')">EECS Website</button>
                <button class="submit-btn" onclick="window.open('http://github.com/${element.git}?tab=repositories', '_blank')">GitHub</button>
                <button class="submit-btn" onclick="window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${element.caseID}@case.edu&su=We%20Need%20To%20Meet', '_blank')">Contact Student</button>
    </div>
`);
resultBox.append(infoCard);
}
})

//waits for the 338 button to be clicked to display the content
classTwo.addEventListener('click', () => {
    resultBox.innerHTML ="";
    for(element of users338){
        console.log(element);
        const infoCard = elementFromHtml(`
        <div class="card">
                    <p class="card-text">${element.first} ${element.last}</p>
                    <button class="submit-btn" onclick="window.open('http://eecslab-22/~${element.caseID}/', '_blank')">EECS Website</button>
                    <button class="submit-btn" onclick="window.open('http://github.com/${element.git}?tab=repositories', '_blank')">GitHub</button>
                    <button class="submit-btn" onclick="window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${element.caseID}@case.edu&su=We%20Need%20To%20Meet', '_blank')">Contact Student</button>
        </div>
    `);
    resultBox.append(infoCard);
    }
    })
 
   
