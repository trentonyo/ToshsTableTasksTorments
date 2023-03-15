console.log("Loaded style.js")

let text_gradient               = document.getElementsByClassName("animate-text-gradient")
let new_background_gradient     = document.querySelectorAll(".new.animate-background-gradient")
let view_background_gradient    = document.querySelectorAll(".view.animate-background-gradient")

let animated_text_gradient_objects          = document.getElementsByClassName("animate-text-gradient")
let animated_background_gradient_objects    = document.getElementsByClassName("animate-background-gradient")

let updateGradientElements = function ()
{
    text_gradient               = document.getElementsByClassName("animate-text-gradient")
    new_background_gradient     = document.querySelectorAll(".new.animate-background-gradient")
    view_background_gradient    = document.querySelectorAll(".view.animate-background-gradient")

    animated_text_gradient_objects          = document.getElementsByClassName("animate-text-gradient")
    animated_background_gradient_objects    = document.getElementsByClassName("animate-background-gradient")
}

const animationSwitch = document.getElementById("animationSwitch")
const animationSwitchContainer = document.getElementById("modal_animationSwitch")
let cancelAnimation = false

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

    if (timePassed >= 60 * 1000 || !animationSwitch.checked || cancelAnimation) {
        clearInterval(timer); // finish the animation after 60 seconds
        // animationSwitchContainer.classList.add("hidden")
        // animationSwitch.remove()
        return;
    }

    // draw the animation at the moment timePassed
    draw(timePassed);

}, 20);

animationSwitch.addEventListener("change", function (event)
{
    let enabled = event.target.checked

    console.log(enabled) //TODO debug

    if (enabled)
    {
        timer = setInterval(function()
        {
            // how much time passed from the start?
            // let timePassed = Date.now() - start;

            if (timePassed >= 60 * 1000 || !animationSwitch.checked || cancelAnimation) {
                clearInterval(timer); // finish the animation after 60 seconds
                // animationSwitchContainer.classList.add("hidden")
                // animationSwitch.remove()
                return;
            }

            // draw the animation at the moment timePassed
            draw(timePassed);

        }, 20);
    }
})

function getAngle(timePassed, i)
{
    return (Math.sin(timePassed / 1000) * 90) + (timePassed / 1000) + (Math.sin(i) * 120)
}
function draw(timePassed)
{
    //Wobble any .animate-text-gradient by the colors of their jsp JSP_PALETTE
    for (let i = 0; i < animated_text_gradient_objects.length; i++)
    {
        let color1 = JSP_PALETTE.global.light
        let color2 = JSP_PALETTE.global.medium

        let currentJspPalette = animated_text_gradient_objects[i].dataset.jspPalette

        if(currentJspPalette)
        {
            color1 = JSP_PALETTE[currentJspPalette].light
            color2 = JSP_PALETTE[currentJspPalette].medium
        }

        animated_text_gradient_objects[i].style.cssText = getGradient( getAngle(timePassed, i), color1, color2, true )
    }

    //Wobble any .animate-background-gradient by the colors of their jsp JSP_PALETTE
    for (let i = 0; i < animated_background_gradient_objects.length; i++)
    {
        let color1 = JSP_PALETTE.global.light
        let color2 = JSP_PALETTE.global.medium

        let currentJspPalette = animated_background_gradient_objects[i].dataset.jspPalette

        if(currentJspPalette)
        {
            color1 = JSP_PALETTE[currentJspPalette].light
            color2 = JSP_PALETTE[currentJspPalette].medium
        }

        animated_background_gradient_objects[i].style.cssText = getGradient( getAngle(timePassed, i), color1, color2 )
    }
}