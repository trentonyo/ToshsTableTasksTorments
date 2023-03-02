console.log("Loaded style.js")

// const JSP_PALETTE = {
//     global: {dark: "#0b0206", medium: "#2c1b47", light: "#dccae9", black: "#171718", white: "#e5e3ea"},
//     logo: {dark: "#030b02", medium: "#308c2a", light: "#5fc252"},
//     quest: {dark: "#33122a", medium: "#7a2786", light: "#E99ff4"},
//     monster: {dark: "#420a10", medium: "#ed3046", light: "#f2949f"},
//     ability: {dark: "#0c2240", medium: "#264d60", light: "#6fc2bf"},
//     loot: {dark: "#544018", medium: "#d1c25a", light: "#f7f0b5"},
//     new: {dark: "#062120", medium: "#2cb2a2", light: "#8fe2ed"},
//     view: {dark: "#150423", medium: "#644ac7", light: "#a794f0"},
// }
//
// let generateCSSPalette = function ()
// {
//     let output = ""
//     for (let category in JSP_PALETTE)
//     {
//         if (Object.hasOwnProperty.call(JSP_PALETTE, category))
//         {
//             for (let color in JSP_PALETTE[category])
//             {
//                 if (Object.hasOwnProperty.call(JSP_PALETTE[category], color))
//                 {
//                     output += `.jsp-${category}-${color}-backgroundColor { background-color: ${JSP_PALETTE[category][color]}; }\n`
//                     output += `.jsp-${category}-${color}-textColor { color: ${JSP_PALETTE[category][color]}; }\n`
//                     output += `.jsp-${category}-${color}-thinBorderColor { border: ${JSP_PALETTE[category][color]} solid 1px; }\n`
//                     output += `.jsp-${category}-${color}-thickerBorderColor { border: ${JSP_PALETTE[category][color]} solid 2px; }\n`
//                 }
//             }
//         }
//     }
//
//     return output
// }
//
// module.exports.generateCSSPalette = generateCSSPalette

// console.log(generateCSSPalette())

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
        animationSwitch.remove()
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