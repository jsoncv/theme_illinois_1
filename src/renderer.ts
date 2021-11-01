const Handlebars = require("handlebars")
import fs from 'fs'

const render = (cv:any) => {
    const tpl = fs.readFileSync(__dirname + '/../templates/main.hbs', 'utf-8');
    const templateScript = Handlebars.compile(tpl)
    return templateScript({
        cv: cv
    })
}

export default render
