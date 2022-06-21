const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Home page testing',()=> {
    beforeAll('open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    it('Login success', async ()=>{
        await LoginPage.login('standard_user', 'secret_sauce');
    })
    it('Verify headerLogo to be displayed', async ()=> {
        await expect(HomePage.headerLogo).toBeDisplayed()
    })
    it('Verify btn car', async ()=> {
        await expect(HomePage.btnCar).toBeClickable();
    })
    it('Verify btn hambur', async ()=> {
        await expect(HomePage.btnHambur).toBeClickable()
    })
    it('Verify btn filter', async ()=> {
        await expect(HomePage.btnFilter).toBeClickable()
    })
    it('Img Back should be displayed after successful login', async () => {
        await expect(HomePage.backpackImg).toHaveAttrContaining('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    });
    it('Img bikeLight should be displayed after successful login', async () => {
        await expect(HomePage.bikeLightImg).toHaveAttrContaining('src', '/static/media/bike-light-1200x1500.a0c9caae.jpg');
    });
    it('Img tshirt should be displayed after successful login', async () => {
        await expect(HomePage.tShirtImg).toHaveAttrContaining('src', '/static/media/bolt-shirt-1200x1500.c0dae290.jpg');
    });
    it('Img jacket should be displayed after successful login', async () => {
        await expect(HomePage.jacketImg).toHaveAttrContaining('src', '/static/media/sauce-pullover-1200x1500.439fc934.jpg');
    });
    it('enter in item backpack', async () => {
        await expect(HomePage.backpackHref).toHaveAttribute('href', false)
    });
    it('Verify btn add to car backpack', async ()=> {
        await expect(HomePage.addToCarBack).toBeClickable()
    })
    it('Verify btn in btnCar', async ()=> {
        await expect(HomePage.btnCar).toHaveAttribute('class', 'shopping_cart_link')
    })
})
describe('Login page testing', () => {
    it('open browser', () => {
        browser.url('https://www.saucedemo.com/cart.html')
    })
    it('Verify btn checkout', async ()=> {
        await expect(HomePage.btnContinueShop).toHaveText('CHECKOUT')
    })
})
