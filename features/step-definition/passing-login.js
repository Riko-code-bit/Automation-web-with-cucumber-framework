import { Given, When, Then } from "@wdio/cucumber-framework";

import homePage from "../pageobject/home.js";
import frontPage from "../pageobject/front-page.js";

Given(`I m in front page`, async() => {
    await frontPage.open()
})

When(`I m tryng login with as {string} and password {string}`, async(username, password) => {
    await frontPage.login(username, password)
})

Then(`I m success as {string}`, async(user) => {
    await homePage.verify(user)
})


// REGULER EXPRETION AND ADDING ITEM TO CART FUNCTION
When(`I m tryng login with Username {string} and password {string}`, async(username, password) => {
    await frontPage.login(username, password)
})

Then(`Im succcessfully logged in with username as {string}`, async(user) => {
    await homePage.verify(user)
})

When(`I m trying add item to cart:`, async(table) => {
    let data = table.hashes()
    for( let i = 0; i < data.length; i++) {
        await homePage.clickItemBtn(data[i].itemName)
        await homePage.addCart()
        await homePage.acceptAlert()
        await homePage.browserBack()

    }
})
