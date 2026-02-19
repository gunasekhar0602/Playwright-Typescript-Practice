import{Page,Locator} from'@playwright/test'

 export class RegistationPage
{
    private readonly page:Page;
    private readonly firstname:Locator;
    private readonly lastname:Locator;
    private readonly email:Locator;
    private readonly telephone:Locator;
    private readonly password:Locator;
    private readonly confirmpassword:Locator;
    private readonly privacypolicy:Locator;
    private readonly continuebutton:Locator;
    private readonly confmessage:Locator



    constructor(page:Page)
    {
        this.page=page;
        this.firstname=page.locator('#input-firstname');
        this.lastname=page.locator('#input-lastname');
        this.email=page.locator('#input-email');
        this.telephone=page.locator('#input-telephone');
        this.password=page.locator('#input-password');
        this.confirmpassword=page.locator('#input-confirm');
        this.privacypolicy=page.locator('input[name="agree"]');
        this.continuebutton=page.locator('//input[@type="submit"]');
        this.confmessage=page.locator('div#content h1')
    }


    //action methods
    async enterFirstName(firstname:string)
    {
        await this.firstname.fill(firstname);
    }

    async enterLastName(lastname:string)
    {
        await this.lastname.fill(lastname);
    }

    async enterEmail(email:string)
    {
        await this.email.fill(email);
    }

    async enterTelephone(telephone:string)
    {
        await this.telephone.fill(telephone);
    }

    async enterPassword(password:string)
    {
        await this.password.fill(password);
    }

    async enterConfirmPassword(confirmpassword:string)
    {
        await this.confirmpassword.fill(confirmpassword);
    }

    async clickonPrivacyPolicy()
    {
        await this.privacypolicy.check();
    }       

    async clickonContinueButton()
    {
        await this.continuebutton.click();
    }

    async getconfimatiomnmessage():Promise<string>
    {

        return await this.confmessage.textContent()?? '';
    }
}