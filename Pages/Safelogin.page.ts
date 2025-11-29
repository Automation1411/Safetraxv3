import{Page, Locator, expect, BrowserContext}from '@playwright/test';
export class login{
    readonly page:Page;
    readonly logo: Locator;
    readonly helpbutton: Locator;
    readonly copyingphone: Locator;
    readonly website: Locator;
    readonly safetraxlogo: Locator;
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
        this.safetraxlogo = page.locator('.logo_container').getByAltText('Safetrax');
        this.helpbutton = page.locator('#helpButton');
        this.copyingphone = page.locator('#helpDropdown').getByText("08046808888");
        this.website = page.locator('.header-container').getByAltText('safetrax.in');
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
    await this.page.goto("https://dev112.safetrax.in/auth/");
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
    const context = this.page.context(); // get context automatically
    const [newpage] = await Promise.all([
       context.waitForEvent('page'),
       this.website.click()
      
    ])
     await newpage.waitForLoadState();
     await expect(newpage).toHaveURL("https://www.safetrax.in/");
     const safettitle= newpage.getByText("Automate employee commutes effortlessly with Safetrax. Our cloud-based software ensures safe and efficient transport management. It’s an all-in-one platform for ETS, shuttles, and ad-hoc trips. Our tech-only approach makes us the right choice for corporates and fleet operators.")
     await expect(safettitle).toBeVisible();

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
    await expect(this.page).toHaveURL(/.*superadmindashboard.*/);
}
}
