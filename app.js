var myname = "Rishabh Jain";
myname = myname.toUpperCase();
console.log("Name: ",myname);
console.log("Career: Electrical Engineer / Full Stack Engineer /  Student");
console.log("Description: I like chocolates");
console.log("My Interests:","\n","* Watching movie(The best)","\n","* Science and Technology","\n","* Entrepreneurship and startups","\n","* Songs","\n");
console.log("My Previous Experience:");

function displayPosition(companyName,jobTitle,description) {
    console.log("*" + companyName +" - "+ jobTitle +" - "+ description);
}
displayPosition('Esummit IIT Bhubaneswar','Core team member','Sponsership related work in first year then swtched to web team');
displayPosition('S4S IIT Bhubaneswar','Core team member','Social welfare work');

function displaySkill(skillName,boolVal) {
    if(boolVal == true) {
        console.log("BAM: " +"* "+skillName);
    } else {
        console.log("* "+skillName);
    }
}
displaySkill('English,Hindi,French',false);
displaySkill("Html, CSS, Javascript",true);
displaySkill("C/C++",true);
displaySkill("Git/Github",false);