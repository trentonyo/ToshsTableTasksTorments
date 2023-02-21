console.log("Loaded style.js")

let text_gradient = document.getElementsByClassName("text-gradient")
let new_background_gradient = document.querySelectorAll(".new.background-gradient")
let view_background_gradient = document.querySelectorAll(".view.background-gradient")

const animationSwitch = document.getElementById("animationSwitch")
const animationSwitchContainer = document.getElementById("modal_animationSwitch")

function getGradient(angle, color1, color2, text)
{
    return `    background: linear-gradient(${angle}deg, ${color1} 1.32%, ${color2} 50.03%);
    background: -webkit-linear-gradient(${angle}deg, ${color1} 1.32%, ${color2} 50.03%);
    ${text ? "background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;" : ""}  
    `
}

// Credit: https://javascript.info/js-animation
let start = Date.now(); // remember start time

let timer = setInterval(function()
{
    // how much time passed from the start?
    let timePassed = Date.now() - start;

    if (timePassed >= 60 * 1000 || !animationSwitch.checked) {
        clearInterval(timer); // finish the animation after 60 seconds
        animationSwitchContainer.classList.add("hidden")
        return;
    }

    // draw the animation at the moment timePassed
    draw(timePassed);

}, 20);

function getAngle(timePassed, i)
{
    return (Math.sin(timePassed / 1000) * 90) + (timePassed / 1000) + (Math.sin(i) * 120)
}
function draw(timePassed)
{
    //Wobble the text gradient
    for (let i = 0; i < text_gradient.length; i++)
    {
        text_gradient[i].style.cssText = getGradient( getAngle(timePassed, i), "#066903", "#1acd29", true)
    }

    //Wobble background gradients
    for (let i = 0; i < new_background_gradient.length; i++)
    {
        new_background_gradient[i].style.cssText = getGradient( getAngle(timePassed, i), "#80edf1", "#1ab2cd", false)
    }
    for (let i = 0; i < view_background_gradient.length; i++)
    {
        view_background_gradient[i].style.cssText = getGradient( getAngle(timePassed, i), "#735eab", "#561acd", false)
    }
}