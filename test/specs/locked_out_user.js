const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Login page testing',()=> {
    beforeAll('open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    it('empty username should display error', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required')
    })
    it('Page should be refreshed', async () => {
        await browser.refresh();
        await browser.pause(400);
    });
    it('empty password should display error', async () => {
        await LoginPage.login('standard_user', '');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Password is required')
    })
    it('invalid username', async () => {
        await LoginPage.login('invalid', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
    it('verify botImg to be displayed', async ()=> {
        await expect(LoginPage.botImg).toBeDisplayed()
    })
    it('verify loginLogo to be displayed', async ()=> {
        await expect(LoginPage.loginLogo).toBeDisplayed()
    })
    it('Verify icon to be displayed', async ()=> {
        await expect(LoginPage.botImg).toBeDisplayed()
    })
    it('Verify headerLogo to be displayed', async ()=> {
        await expect(LoginPage.loginLogo).toBeDisplayed()
    })
    /* it('Verify btn clear userName', async ()=> {
        await expect(LoginPage.btnClearName).toBeClickable()
    })
    it('Verify btn clear password', async ()=> {
        await expect(LoginPage.btnClearPassword).toBeClickable()
    }) */
    //this test gives a false positive
    it('Verify btn exit error msg', async ()=> {
        await expect(LoginPage.btnExitError).toBeClickable()
    })
    it('Login success', async ()=>{
        await LoginPage.login('locked_out_user', 'secret_sauce');
    })
    //this test gives a false positive
});
