const LoginPage = require('../pageobjects/login.page');

/* describe('Login page testing',()=> {
    beforeAll('open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    it('empty username should display error', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Username is required')
    })
});

describe('Login page testing',()=> {
    beforeAll('open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
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
}); */