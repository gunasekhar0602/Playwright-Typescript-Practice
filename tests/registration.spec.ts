import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { RegistationPage } from '../pages/RegistrationPage'
import { Randomdata } from '../utiles/randomdatagenerator'
import { DataProvider } from '../utiles/dataprovider'
import { Testconfig } from '../TestConfig'
import { CLIENT_RENEG_WINDOW } from 'tls'


let homepage: HomePage
let registrationpage: RegistationPage

test.beforeEach(async ({ page }) => {
    const testconf = new Testconfig()
    await page.goto(testconf.appUrl)     // Navigate to URL

    homepage = new HomePage(page)
    registrationpage = new RegistationPage(page);

})


test.afterEach(async ({ page }) => {
    await page.close()
})

test('Registration' ,async ({ page }) => {
    /* const testconf=new Testconfig()
    await page.goto(testconf.appUrl)     // Navigate to URL */



    //const homepage=new HomePage(page)
    await homepage.clcikonMyAccount();
    await homepage.clickonRegister();


    //const registrationpage=new RegistationPage(page);
    await registrationpage.enterFirstName(Randomdata.getfirstname())
    await registrationpage.enterLastName(Randomdata.getlastname());
    await registrationpage.enterEmail(Randomdata.getUseremail());
    await registrationpage.enterTelephone(Randomdata.getphonenumber());


    const password = Randomdata.getPassword()
    console.log(password)
    await registrationpage.enterPassword(password)
    await registrationpage.enterConfirmPassword(password)

    await registrationpage.clickonPrivacyPolicy();
    await registrationpage.clickonContinueButton();


    // validate the confirmation message

    const confmsg = await registrationpage.getconfimatiomnmessage()
    expect(confmsg).toContain('Your Account Has Been Created!')

    await page.waitForTimeout(3000)
})