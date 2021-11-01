const Handlebars = require("handlebars")
import fs from 'fs'

const render = (cv:any):string => {
    const mainTemplate = fs.readFileSync(__dirname + '/../templates/main.hbs', 'utf-8')
    const style = fs.readFileSync(__dirname + '/../templates/style.css', 'utf-8')
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
    const templateScript = Handlebars.compile(mainTemplate)
    return templateScript({
        cv: cv,
        css: style
    })
}

export default render
