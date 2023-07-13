export default class Page {
    open(patch) {
        return browser.url(`https://www.demoblaze.com/${patch}`)
    }
}