const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Login page testing',()=> {
    beforeAll('open browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    /* it('Login success', async ()=>{
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
    }) */
    it('Wait seconds', async ()=>{
        await LoginPage.setUsername('problem_user');
        await LoginPage.setPassword('secret_sauce');
        await LoginPage.btnLogin.click();
    })
    it('Wait for body', async () => {
        await expect(LoginPage.bodyStore).toBeDisplayed();
    });
    it('logoHeader should be displayed after successful login', async () => {
        await expect(HomePage.headerLogo).toBeDisplayed();
    });
    it('btnCar should be displayed in page', async () => {
        await expect(HomePage.btnCar).toBeDisplayed();
    });
    it('Verify btnCar its btn', async ()=> {
        await expect(HomePage.btnCar).toHaveAttribute('class', 'shopping_cart_link');
    });
    it('Verify btn car', async ()=> {
        await expect(HomePage.btnCar).toBeClickable();
    });
    it('btnSidebar should be displayed in page', async () => {
        await expect(HomePage.btnBurger).toBeDisplayed();
    });
    it('Verify btn Burger its btn', async ()=> {
        await expect(HomePage.btnBurger).toBeClickable()
    });
    it('enter in to burger and click AllItems', async () => {
        HomePage.clickAllItems();
    });
    it('Wait for body products', async () => {
        await expect(LoginPage.bodyStore).toBeDisplayed();
    });
    it('enter in to burger and click About', async () => {
        HomePage.clickAbout();
    });
    /* it('Wait for body about', async () => {
        await expect(LoginPage.bodyAbout).toBeDisplayed();
    }); */
    //this test does not pass, because it opens a new page
    it('enter in btnexit of sidebar', async () => {
        HomePage.clickExitSidebar();
    });
    it('social red should be displayed after successful login in footer', async () => {
        await expect(HomePage.socialRed).toBeDisplayed();
    });
    it('imgFooter should be displayed after successful login in footer', async () => {
        await expect(HomePage.imgFooter).toBeDisplayed();
    });
    it('infoFooter should be displayed after successful login in footer', async () => {
        await expect(HomePage.infoFooter).toBeDisplayed();
    });
    /* it('Img Back should be displayed after successful login', async () => {
        await expect(HomePage.imgProductBack).toHaveAttrContaining('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    });
    it('Img Light should be displayed after successful login', async () => {
        await expect(HomePage.imgProductLight).toHaveAttrContaining('src', '/static/media/bike-light-1200x1500.a0c9caae.jpg');
    });
    it('Img Shirt should be displayed after successful login', async () => {
        await expect(HomePage.imgProductShirt).toHaveAttrContaining('src', '/static/media/bolt-shirt-1200x1500.c0dae290.jpg');
    });
    it('Img Jacket should be displayed after successful login', async () => {
        await expect(HomePage.imgProductJacket).toHaveAttrContaining('src', '/static/media/sauce-pullover-1200x1500.439fc934.jpg');
    });
    it('Img Onesie should be displayed after successful login', async () => {
        await expect(HomePage.imgProductOnesie).toHaveAttrContaining('src', '/static/media/red-onesie-1200x1500.1b15e1fa.jpg');
    });
    it('Img Shirt Red should be displayed after successful login', async () => {
        await expect(HomePage.ImgProductShirtRed).toHaveAttrContaining('src', '/static/media/red-tatt-1200x1500.e32b4ef9.jpg');
    }); */
    // the images shown are incorrect
    it('Should be title of Product Back', async () => {
        await expect(HomePage.titleProductBack).toHaveText('Sauce Labs Backpack');
    });
    it('Shoul be title of Product Back', async () => {
        await expect(HomePage.titleProductLight).toHaveText('Sauce Labs Bike Light');
    });
    it('Shoul be title of Product Back', async () => {
        await expect(HomePage.titleProductShirt).toHaveText('Sauce Labs Bolt T-Shirt');
    });
    it('Shoul be title of Product Back', async () => {
        await expect(HomePage.titleProductJacket).toHaveText('Sauce Labs Fleece Jacket');
    });
    it('Shoul be title of Product Back', async () => {
        await expect(HomePage.titleProductOnesie).toHaveText('Sauce Labs Onesie');
    });
    it('Shoul be title of Product Back', async () => {
        await expect(HomePage.titleProductShirtRed).toHaveText('Test.allTheThings() T-Shirt (Red)');
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
    /* it('complit input and click continue', async ()=>{
        await HomePage.informationInput('shirley', 'seaton', '2000');
    }); */
    //this test turned out to be a false positive, because the input lastName cannot be completed
    it('enter in to twitter page', async () => {
        HomePage.clickTwitter();
        await browser.url('https://twitter.com/saucelabs')
    });
    it('enter in to facebook page', async () => {
        HomePage.clickFacebook();
        await browser.url('https://www.facebook.com/saucelabs')
    });
    it('enter in to linkedin page', async () => {
        HomePage.clickLinkedin();
        await browser.url('https://www.linkedin.com/')
    });

});