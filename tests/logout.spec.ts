import {test,expect,Locator}from'@playwright/test'
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { Testconfig } from "../TestConfig";



// Declare the shared variables

let homepage:HomePage
let loginpage:LoginPage
let logoutpage:LogoutPage
let myaccountpage:MyAccountPage
let config:Testconfig


// setup before each test

test.beforeEach(async({page})=>
{
    // step 01 - navigate to AppURL
    config=new Testconfig()
    await page.goto(config.appUrl);          



    // Initialize objects

    homepage=new HomePage(page);
    loginpage=new LoginPage(page);
    logoutpage=new LogoutPage(page);
    myaccountpage= new MyAccountPage(page);

})

test ('User logout test @master @regression',async({page})=>
{
    // step 2 - Navigate to login page from homepage
    await homepage.clcikonMyAccount();
    await homepage.clickonLogin();


    // step 3 - Enter details in the login page
    await loginpage.enteremail(config.email);
    await loginpage.enterpassword(config.password);
    await loginpage.clicklogin();

    //step 4 - Verify the successfull login
    expect(await myaccountpage.isMyAccountPageExists()).toBeTruthy()

    // step 5 - logout from the My Account page
    logoutpage=await myaccountpage.clicklogout();

    // step 6 - Verify continue button is visible before clicking
    expect(await logoutpage.iscontinueButtonVisible()).toBe(true)


    homepage=await logoutpage.clickContinue()





})
