"use strict"

// Tranfering username of the User using query params
var url = document.location.href, params = url.split('?')[1].split('&'), data = {}, tmp;

for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
}

document.getElementById('user-name').innerText = "Hi, " + data["username"];

// Smooth Scroll
var allLinks = document.querySelectorAll('.nav-menu a');

for(var i = 0 ; i < allLinks.length ; i++){
    allLinks[i].addEventListener('click', function(event){
        event.preventDefault();

        var targetLink = this.innerText.trim().toLowerCase();
        var targetLinkId = document.getElementById(targetLink);
        var id = setInterval(function(){
            if(window.pageYOffset >= targetLinkId.offsetTop - 45 || window.pageYOffset >= 2655){
                clearInterval(id);
                return;
            }

            scrollBy(0,40);
        },20);
    });
}



//Skill Bar Animation for each Skill Bar Pill
var skills = document.getElementsByClassName('skill-progressbar');

window.addEventListener('scroll', function(){

    for(let i = 0 ; i < skills.length ; i++){

        let distance = skills[i].getBoundingClientRect().top;
        
        if(distance <= window.innerHeight && skills[i].getAttribute('data-visited') == "false"){

            console.log("skill-Progress bar reached of name  " + skills[i].innerText);

            skills[i].setAttribute('data-visited', 'true');            
            fillBars(skills[i]);
        }
        else if(distance > window.innerHeight){
            skills[i].setAttribute('data-visited', 'false')
        }
    } 
});

function fillBars(currentSkill){
    let targetWidth = currentSkill.getAttribute('data-skill-level');
    let count = 1;

    let id = setInterval(function(){
        if(count > targetWidth){
            clearInterval(id);
            return;
        }

        currentSkill.style.width = count+ '%';
        count++;
    },25);
}