/* 
Test case :Login with valid credentials

Tags:@master @santity @regression


steps:
1) Navigate to the application URL
2) Navigate to Login via Homage
3) Enter valid credentials and log in
4) Verify succeesfull login by checking 'My Account' page presence

*/

// import page object classes
import {test,expect,Locator} from'@playwright/test'
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { Testconfig } from "../TestConfig";


// created global variables so that we can access them in every test
let config:Testconfig
let homepage:HomePage
let loginpage:LoginPage
let myaccountpage:MyAccountPage



// this hook runs before each test

test.beforeEach(async({page})=>
{
    config=new Testconfig();
    await page.goto(config.appUrl)


    // Initialize page objects
    homepage=new HomePage(page)
    loginpage=new LoginPage(page)
    myaccountpage=new MyAccountPage(page)
    
})


test ('user login test', async({page})=>
{
    // navigate to login page via Home Page

    await homepage.clcikonMyAccount();
    await homepage.clickonLogin();

    //Enter valid credentials

    await loginpage.enteremail('Apple1@123.com')
    await loginpage.enterpassword('Apple@123')

    await loginpage.clicklogin();

  
    // Verify successfully login by checking 'My Account' page presence

    const isloggedin=await myaccountpage.isMyAccountPageExists();

    expect(isloggedin).toBeTruthy()
    
})