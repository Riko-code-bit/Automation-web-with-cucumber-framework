import Page from "./page.js";

class homePage extends Page {

    get accName() { 
        return $(`#nameofuser`)}


        async verify(user) {
            return await expect(await this.accName).toHaveTextContaining(user)
        }

    // adding item to cart functionality
     async buttonItemName (itemName) {
        return await $(`//a[.='${itemName}']`)
     }

     get addToCart () {
        return $(`//a[.='Add to cart']`)
     }

     async clickItemBtn(itemName) {
        await (await this.buttonItemName(itemName)).click()
     }

     async addCart() {
        await (await this.addToCart).click()
        await browser.pause(2000)
     }
     
     async acceptAlert() {
        await browser.acceptAlert()
     }

     async browserBack() {
        await browser.back()
        await browser.back()
     }



}

export default new homePage