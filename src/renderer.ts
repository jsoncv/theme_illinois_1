const Handlebars = require("handlebars")
import fs from 'fs'

const render = (cv:any) => {
    const mainTemplate = fs.readFileSync(__dirname + '/../templates/main.hbs', 'utf-8')
    const style = fs.readFileSync(__dirname + '/../templates/style.css', 'utf-8')
    const templateScript = Handlebars.compile(mainTemplate)
    // TODO: Add Partials as well
    return templateScript({
        cv: cv,
        css: style
    })
}

export default render
