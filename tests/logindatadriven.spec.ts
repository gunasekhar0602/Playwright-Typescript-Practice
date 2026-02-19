import {test,expect,Locator} from'@playwright/test'
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { Testconfig } from "../TestConfig";
import { DataProvider } from '../utiles/dataprovider';


// load json test data from the file - logindata.json

const jsonPath= "testdata/logindata.json";

//(now to load this data into a variable, we need to call the function which we already created in data provider)


const jsontestdata=DataProvider.getDatafromJson(jsonPath)

for(const data of jsontestdata)
{
    test(`login test with JSon data:${data.testName} @master`,async({page})=>
    {
        const config=new Testconfig();
        await page.goto(config.appUrl);

        const homepage=new HomePage(page);
        await homepage.clcikonMyAccount()
        await homepage.clickonLogin();

        const loginpage=new LoginPage(page);
        await loginpage.enteremail(data.email);
        await loginpage.enterpassword(data.password);

        if(data.expected.toLowerCase()==='success')
        {
            const myaccountpage=new MyAccountPage(page)
            const isloggedin=myaccountpage.isMyAccountPageExists();
            expect(isloggedin).toBeTruthy()
        }
        else
        {
            const errormessage=await loginpage.getloginError()
            expect(errormessage).toBe('Warning: No match for E-Mail Address and/or Password.')
        }
    })
}