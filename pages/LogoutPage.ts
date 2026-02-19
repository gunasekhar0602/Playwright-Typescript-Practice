import{Page,Locator} from'@playwright/test'
import { HomePage } from './HomePage';

export class LogoutPage
{
    private readonly page:Page;
    private readonly btncontinue:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.btncontinue=page.locator('.btn.btn-primary')
    }




    // clicks the continue button after logout
    // @returns Promise<HomePage> - Returns instance of HomePage
    async clickContinue():Promise<HomePage>
    {
        await this.btncontinue.click();
        return new HomePage(this.page);
    }

    async iscontinueButtonVisible(): Promise<boolean>
    {
        return await this.btncontinue.isVisible();
    }



}