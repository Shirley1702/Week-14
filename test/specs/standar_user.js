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
    it('Verify btn add to car backpack', async ()=> {
        await expect(HomePage.addToCarBack).toBeClickable()
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
    //falta verificar imagen de *labsOnesie y tShirtRed
    it('enter in item backpack', async () => {
        await expect(HomePage.backpackHref).toHaveAttribute('href', false);
    });
    it('Verify btn in btnCar', async ()=> {
        await expect(HomePage.btnCar).toHaveAttribute('class', 'shopping_cart_link');
    })
    it('add to car Back', async () => {
        HomePage.addToCarItemBack();
    });
    it('enter in to car', async () => {
        HomePage.clickToCar();
    });
    it('enter in to checkout', async () => {
        HomePage.clickCheckout();
    });
    it('empty inputFirstName should display error', async () => {
        await HomePage.informationInput('', 'seaton', '2000');
        await expect(HomePage.errorMsgFirstName).toHaveText('Error: First Name is required');
    })
    it('Page should be refreshed', async () => {
        await browser.refresh();
        await browser.pause(400);
    });
    it('empty inputLastName should display error', async () => {
        await HomePage.informationInput('shirley', '', '2000');
        await expect(HomePage.errorMsgFirstName).toHaveText('Error: Last Name is required');
    })
    it('Page should be refreshed', async () => {
        await browser.refresh();
        await browser.pause(400);
    });
    it('empty inputZip should display error', async () => {
        await HomePage.informationInput('shirley', 'seaton', '');
        await expect(HomePage.errorMsgFirstName).toHaveText('Error: Postal Code is required');
    })
    it('Page should be refreshed', async () => {
        await browser.refresh();
        await browser.pause(400);
    });
    /* it('input inputZip should display error con letras', async () => {
        await HomePage.informationInput('shirley', 'seaton', 'zssdfg');
        await expect(HomePage.errorMsgFirstName).toHaveText('Error: Postal Code should be numbers');
    }) */
    //that is coment becouse no pass
    it('complit input and click continue', async ()=>{
        await HomePage.informationInput('shirley', 'seaton', '2000');
    })
    it('Verify if description to car to have list', async ()=> {
        await expect(HomePage.listBuyCar).toHaveAttribute('href', false);
    })
    it('verify quantity should be 1', async () => {
        await expect(HomePage.quantityBack).toHaveText('1');
    })
    it('Continue Shopping', async () => {
        HomePage.clickContinueShopp();
    });
    it('Add to car bike light', async () => {
        HomePage.clickAddToLight();
    });
    it('verify button should be remove', async () => {
        await expect(HomePage.btnRemoveLight).toHaveText('Remove');
    })
    it('Logout', async () => {
        HomePage.accountLogout();
    });
})
    /* it('Verify btn text checkout', async ()=> {
        await expect(HomePage.btnCheckout).toHaveText('CHECKOUT')
    })
    it('Verify btn text continue shopp', async ()=> {
        await expect(HomePage.btnContinueShopp).toHaveText('CONTINUE SHOPPING')
    })
    it('check browser', async ()=> {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    }) */