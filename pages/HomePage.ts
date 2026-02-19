import{Page,expect,Locator}from '@playwright/test'

export class HomePage
{
    private readonly page:Page;
    private readonly accountlink:Locator;
    private readonly registerlink:Locator;
    private readonly loginlink:Locator;
    private readonly searchbox:Locator;
    private readonly seachbutton:Locator;
    

    constructor(page:Page)
    {
        this.page=page;
        this.accountlink=page.locator("//a[@title='My Account']")
        this.registerlink=page.getByText('Register');
        this.loginlink=page.getByText('Login');
        this.searchbox=page.getByPlaceholder('Search');
        this.seachbutton=page.locator('.btn.btn-default.btn-lg');
        
    }



    //actionmethods
    async clcikonMyAccount()
    {
        await this.accountlink.click();
    }

    async clickonRegister()
    {
        await this.registerlink.click();
    }

    async clickonLogin()
    {
        await this.loginlink.click();
    }

    async enterProductName(productName:string)
    {
        await this.searchbox.fill(productName);
    }

    async clickonsearchbutton()
    {
        await this.seachbutton.click();
    }

    
}