console.log("Loaded style.js")

/* https://www.w3schools.com/js/js_cookies.asp */
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

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

// how much time passed from the start?
// let timePassed = Date.now() - start;

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

if(getCookie('animation').length === 0)
{
    console.log("Resetting animation")
    setCookie('animation', true, 1)
}

document.getElementById('animationSwitch').checked = getCookie('animation') === 'true'

let updateAnimationStatus = function (event)
{
    let enabled = event.target.checked
    setCookie('animation', enabled, 1)

    if (enabled)
    {
        timer = setInterval(function()
        {
            // how much time passed from the start?
            // let timePassed = Date.now() - start;

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
    }
    else
    {
        start = Date.now()
    }
}
updateAnimationStatus({target : document.getElementById('animationSwitch')})
animationSwitch.addEventListener("change", updateAnimationStatus)

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

draw(0)