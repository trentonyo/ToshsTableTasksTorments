console.log("Loaded ux.js")

let input_fields = document.getElementsByTagName("input")

for (let i = 0; i < input_fields.length; i++)
{
    let plc = input_fields[i].placeholder

    if (plc.length > 0)
    {
        input_fields[i].addEventListener("auxclick", function (e)
        {
            input_fields[i].value = plc
        })
    }
}

