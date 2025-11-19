import{test}from '@playwright/test'
import{login} from '../../Pages/Safelogin.page';
test.describe('Safetrax homepage',()=>{
let loginpage :login;
test.beforeEach(async({page})=>{
    loginpage = new login(page);
    loginpage.open();
})
test("verify the safetraxhome", async({page})=>{
  await loginpage.verifylogo();
  await loginpage.verifyhelpbutton();
  await loginpage.verifycopyingphone();
  await loginpage.verifyusername("pardeepa1")
  await loginpage.verifypassword();
  await loginpage.verifysignin();
  //await page.waitForLoadState('networkidle');  // defaults to "load"
})
})
oinpimoinmoinm
