import{Page, Locator, expect}from '@playwright/test';
export class login{
    readonly page:Page;
    readonly logo: Locator;
    readonly helpbutton: Locator;
    readonly copyingphone: Locator;
    readonly website: Locator;
    readonly bodylogo: Locator;
    readonly headertext: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly forgotpassword: Locator;
    readonly formsubmit: Locator;
    readonly loginresetform : Locator;
    readonly resetpassword: Locator;

    constructor(page:Page){
        this.page = page;
        this.logo = page.locator('.header-container').getByAltText('Safetrax Logo');
        this.helpbutton = page.locator('#helpButton');
        this.copyingphone = page.locator('#helpDropdown').getByText("08046808888");
        this.website = page.getByRole('link', {name : 'website'});
        this.bodylogo = page.locator(".top-right-container-body").getByAltText("Safetrax Logo");
        this.headertext = page.getByText('Unified Platform for Employee Transport Automation');
        this.username = page.getByPlaceholder("Enter username");
        this.password = page.getByPlaceholder('Enter password');
        this.formsubmit = page.locator('.submit');
        this.forgotpassword = page.getByRole('link',{name :'Forgot password?'});
        this.loginresetform = page.locator('.input-wrapper').getByPlaceholder('Enter username');
        this.resetpassword = page.locator("input[value='RESET PASSWORD']");
    }

// verify safetrax home
async open(){
    await this.page.goto("/");
}
async verifylogo(){
    await expect(this.logo).toBeVisible();
}

async verifyhelpbutton(){
    await this.helpbutton.click();
}
async verifycopyingphone(){
    await this.copyingphone.click();
}
async verifywebsite(){
    await this.website.click();
}
async verifybodylogo(){
    await expect(this.bodylogo).toBeVisible();
}
async verifyheadtext(){
    await expect(this.headertext).toBeVisible()
}
async verifyusername(user:string){
    await this.username.fill(user);
}
async verifypassword(){
await this.password.fill("Safe@#123");
}
async verifysignin(){
    await this.formsubmit.click();
    await this.page.waitForURL(/.*superadmindashboard.*/);
}
}
