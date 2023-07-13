import Page from "./page.js";

class frontPage extends Page {
    get linkLoginBtn() { 
        return $(`[data-target='#logInModal']`) }
    
    get inputUsername() {
        return $(`#loginusername`) }

    get inputPassword() {
        return $(`#loginpassword`)
    }

    get loginBtn() { 
        return $(`[onclick='logIn()']`) 
    }

    async loginBox() {
        await (await this.loginBtn).waitForDisplayed(2000);
        return (await this.loginBtn).isDisplayed()

    }

    async login(username, password) {
        await this.linkLoginBtn.click()
        await this.loginBox()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.loginBtn.click()
    }


    open() {
        return super.open(`index.html`)
    }
}

export default new frontPage