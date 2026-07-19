import {test,expect} from '@playwright/test';

const {LoginPage} = require ('../pages/loginPage')
const {HomePage} = require ('../pages/homePage')    

test("Login with valid creds",async({page})=>{

    const login =new LoginPage(page);
    await login.openURL();
    await login.clickonLoginLink();
    await login.enterUSerName("pavnol");
    await login.enterPassword("test@123");
    await login.clickonLoginButton();
    await page.waitForTimeout(3000);

    const home = new HomePage(page);
    await home.SelectSamsunggalaxys6();

    const dialogPromise = page.waitForEvent('dialog');
    await home.clickonAddtoCartButton();
    const dialog = await dialogPromise;
    expect(dialog.message()).toBe('Product added.');
    await dialog.accept();
});


