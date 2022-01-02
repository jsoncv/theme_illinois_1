// Importing necessary libraries
import fs from 'fs'
import { parseISO, format } from 'date-fns'
const Handlebars = require("handlebars")

// The following function is required by jsoncv
const render = (cv:any):string => {
    // Here I am using `handlebars` as templating library, but nothing is enforced
    // Loading Template
    const mainTemplate = fs.readFileSync(__dirname + '/../templates/main.hbs', 'utf-8')
    // Loading Style
    const style = fs.readFileSync(__dirname + '/../templates/style.css', 'utf-8')
    // Loading Partial Sections
    const partialsDir = fs.readdirSync(__dirname + '/../templates/partials')
    partialsDir.forEach(function (filename:string) {
        const matches = /^([^.]+).hbs$/.exec(filename)
        if (!matches) {
            return
        }
        const name = matches[1];
        const filePath = `/../templates/partials/${filename}`
        const template = fs.readFileSync(__dirname + filePath, 'utf8')
        Handlebars.registerPartial(name, template)
    })
    // Creating helpers for dates
    Handlebars.registerHelper("formatDateRange", (startDate:string, endDate:string) => {
        const startDateString = format(parseISO(startDate), 'yyyy MMM')
        const endDateString = endDate === undefined ? 'Present' : format(parseISO(endDate), 'yyyy MMM')
        return new Handlebars.SafeString(`${startDateString} - ${endDateString}`)
    })
    Handlebars.registerHelper("formatDate", (date:string) => {
        const dateString = format(parseISO(date), 'yyyy MMM')
        return new Handlebars.SafeString(dateString)
    })
    // Serving and compiling
    const templateScript = Handlebars.compile(mainTemplate)
    return templateScript({
        cv: cv,
        css: style
    })
}

// Renderer should be the default export
export default render
