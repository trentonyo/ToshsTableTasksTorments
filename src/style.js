console.log("Loaded style.js")

let text_gradient = document.getElementsByClassName("text-gradient")
let new_background_gradient = document.querySelectorAll(".new.background-gradient")
let view_background_gradient = document.querySelectorAll(".view.background-gradient")

console.log("text_gradient", text_gradient)
console.log("new_background_gradient", new_background_gradient)
console.log("view_background_gradient", view_background_gradient)

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

    if (timePassed >= 60 * 1000) {
        clearInterval(timer); // finish the animation after 60 seconds
        return;
    }

    // draw the animation at the moment timePassed
    draw(timePassed);

}, 20);

function draw(timePassed)
{
    //Wobble the text gradient
    for (let i = 0; i < text_gradient.length; i++)
    {
        text_gradient[i].style.cssText = getGradient(
            (Math.sin(timePassed / 1000) * 90) + (Math.sin(timePassed / 100000) * 100) + (Math.sin(i) * 120),
            "#066903", "#1acd29", true
        )
    }

    //Wobble background gradients
    for (let i = 0; i < new_background_gradient.length; i++)
    {
        new_background_gradient[i].style.cssText = getGradient(
            (Math.sin(timePassed / 1000) * 90) + (Math.sin(timePassed / 100000) * 100) + (Math.sin(i) * 120),
            "#62c7b4", "#1ab2cd", false
        )
    }
    for (let i = 0; i < view_background_gradient.length; i++)
    {
        view_background_gradient[i].style.cssText = getGradient(
            (Math.sin(timePassed / 1000) * 90) + (Math.sin(timePassed / 100000) * 100) + (Math.sin(i) * 120),
            "#735eab", "#561acd", false
        )
    }
}