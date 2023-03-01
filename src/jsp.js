const JSP_PALETTE = {
    global: {dark: "#0b0206", medium: "#2c1b47", light: "#dccae9", black: "#0a0a0a", white: "#e5e3ea"},
    logo: {dark: "#030b02", medium: "#308c2a", light: "#5fc252"},
    quest: {dark: "#33122a", medium: "#7a2786", light: "#E99ff4"},
    monster: {dark: "#420a10", medium: "#ed3046", light: "#f2949f"},
    ability: {dark: "#0c2240", medium: "#264d60", light: "#6fc2bf"},
    loot: {dark: "#544018", medium: "#d1c25a", light: "#f7f0b5"},
    new: {dark: "#062120", medium: "#2cb2a2", light: "#8fe2ed"},
    view: {dark: "#150423", medium: "#644ac7", light: "#a794f0"},
}

let generateCSSPalette = function ()
{
    let output = ""
    for (let category in JSP_PALETTE)
    {
        if (Object.hasOwnProperty.call(JSP_PALETTE, category))
        {
            for (let color in JSP_PALETTE[category])
            {
                if (Object.hasOwnProperty.call(JSP_PALETTE[category], color))
                {
                    output += `.jsp-${category}-${color}-backgroundColor { background-color: ${JSP_PALETTE[category][color]}; }\n`
                    output += `.jsp-${category}-${color}-textColor { color: ${JSP_PALETTE[category][color]}; }\n`
                    output += `.jsp-${category}-${color}-thinBorderColor { border: ${JSP_PALETTE[category][color]} solid 1px; }\n`
                    output += `.jsp-${category}-${color}-thickerBorderColor { border: ${JSP_PALETTE[category][color]} solid 2px; }\n`
                }
            }
        }
    }

    return output
}

module.exports.generateCSSPalette = generateCSSPalette
