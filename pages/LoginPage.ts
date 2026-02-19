import{Page,expect,Locator} from'@playwright/test'

export class LoginPage
{
    private readonly page:Page;
    private readonly txtemailbox:Locator;
    private readonly txtpasswordbox:Locator;
    private readonly loginbutton:Locator;
    private readonly txtErrorMessage:Locator;



    constructor(page:Page)
    {
        this.page=page;
        this.txtemailbox=page.locator('#input-email')
        this.txtpasswordbox=page.locator('#input-password')
        this.loginbutton=page.locator('//input[@type="submit"]')
        this.txtErrorMessage=page.locator('.alert.alert-danger.alert-dismissible')
    }


    //action methods

    async enteremail(email:string)
    {
        await this.txtemailbox.fill(email)
    }

    async enterpassword(pwd:string)
    {
        await this.txtpasswordbox.fill(pwd)
    }

    async clicklogin()
    {
        await this.loginbutton.click()
    }


    async getloginError():Promise<null|string>
    {
        return(this.txtErrorMessage.textContent())
    }

}