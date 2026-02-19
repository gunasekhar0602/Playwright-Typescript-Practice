import { th } from '@faker-js/faker';
import{Page,Locator}from'@playwright/test'
import { error } from 'node:console';

export class MyAccountPage
{
    private readonly page:Page;
    private readonly msgheading:Locator
    private readonly logoutlink:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.msgheading=page.locator('h2:has-text("My Account")')
        this.logoutlink=page.locator("text='Logout'").nth(1);
    }



    async isMyAccountPageExists():Promise<boolean>
    {
        try
        {
            const isVisible=await this.msgheading.isVisible();
            return isVisible;
        }

        catch
        {
            console.log(`Error:${error}`);
            return false
        }
    }

    async clicklogout()
    {
        await this.clicklogout()
    }
}