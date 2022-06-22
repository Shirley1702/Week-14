class homePage {
    //getters
    get btnBurger () { return $('#react-burger-menu-btn')}
    get btnCar () { return $('#shopping_cart_container > a')}
    get btnFilter () { return $('.right_component > span > select')}
    get btnAllItems () { return $('#inventory_sidebar_link')}
    get btnAbout () { return $('#about_sidebar_link')}
    get btnLogout () { return $('#logout_sidebar_link')}
    get btnResetAppState () { return $('#reset_sidebar_link')}
    get btnExitSidebar () { return $('#react-burger-cross-btn')}
    get addToCarBack () { return $('#add-to-cart-sauce-labs-backpack')}
    get btnCheckout () { return $('#checkout')}
    get btnContinueShopp () { return $('#continue-shopping')}
    get btnContinueCheck () { return $('#continue')}
    get btnAddToCarLight () { return $('#add-to-cart-sauce-labs-bike-light')}
    get btnRemoveLight () { return $('#remove-sauce-labs-bike-light')}
    get btnTwitter () { return $('#page_wrapper > footer > ul > li.social_twitter > a')}
    get btnFacebook () { return $('#page_wrapper > footer > ul > li.social_facebook > a')}
    get btnLinkedin () { return $('#page_wrapper > footer > ul > li.social_linkedin > a')}
    get btnfinishedCheck () { return $('#finish')}
    get btnBackHome () { return $('#back-to-products')}
    get imgProductBack() { return $('#item_4_img_link > img')}
    get imgProductLight() { return $('#item_0_img_link > img')}
    get imgProductShirt() { return $('#item_1_img_link > img')}
    get imgProductJacket() { return $('#item_5_img_link > img')}
    get imgProductOnesie() { return $('#item_2_img_link > img')}
    get ImgProductShirtRed() { return $('#item_3_img_link > img')}
    get titleProductBack() { return $('#item_4_title_link > div')}
    get titleProductLight() { return $('#item_0_title_link > div')}
    get titleProductShirt() { return $('#item_1_title_link > div')}
    get titleProductJacket() { return $('#item_5_title_link > div')}
    get titleProductOnesie() { return $('#item_2_title_link > div')}
    get titleProductShirtRed() { return $('#item_3_title_link > div')}
    get descriptionProductBack() { return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > div')}
    get descriptionProductLight() { return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.inventory_item_label > div')}
    get descriptionProductShirt() { return $('#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.inventory_item_label > div')}
    get descriptionProductJacket() { return $('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.inventory_item_label > div')}
    get descriptionProductOnesie() { return $('#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.inventory_item_label > div')}
    get descriptionProductShirtRed() { return $('#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.inventory_item_label > div')}
    get priceProductBack() { return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div')}
    get priceProductLight() { return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.pricebar > div')}
    get priceProductShirt() { return $('#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.pricebar > div')}
    get priceProductJacket() { return $('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.pricebar > div')}
    get priceProductOnesie() { return $('#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.pricebar > div')}
    get priceProductShirtRed() { return $('#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > div')}
    get AddToCarProductBack() { return $('#item_4_img_link')}
    get AddToCarProductLight() { return $('#item_0_img_link')}
    get AddToCarProductShirt() { return $('#item_1_img_link')}
    get AddToCarProductJacket() { return $('#item_5_img_link')}
    get AddToCarProductOnesie() { return $('#item_2_img_link')}
    get AddToCarProductShirtRed() { return $('#item_3_img_link')}
    get headerLogo () { return $('.header_label > div') }
    get sideBar () { return $('bm-menu-wrap')}
    get imgHambur () { return $('#menu_button_container > div > div:nth-child(1) > div > img')}
    get socialRed () { return $('#page_wrapper > footer > ul')}
    get imgFooter () { return $('#page_wrapper > footer > img')}
    get infoFooter () { return $ ('#page_wrapper > footer > div')}
    get carNumber () { return $('#shopping_cart_container > a > span')}
    get inputFirstName () { return $('#first-name')}
    get inputLastName () { return $('#last-name')}
    get inputZip () { return $('#postal-code')}
    get errorMsgFirstName () { return $('.error-message-container.error')}
    get descriptionCar () { return $('#cart_contents_container > div > div.cart_list')}
    get listBuyCar () { return $('#item_4_title_link')}
    get quantityBack () { return $('.cart_quantity')}
    get bodyFinishedCheck () { return $('#checkout_complete_container')}
    //Setters
    async setFirstName(firstName) {
        await this.inputFirstName.setValue(firstName);
    }
    async setLastName(lastName) {
        await this.inputLastName.setValue(lastName);
    }
    async setZip(zip) {
        await this.inputZip.setValue(zip);
    }
    //metodos
    async continueShoppClick() {
        await this.btnContinueShopp.click();
        browser.pause(3000);
    }
    async clickBurger(){
        this.btnBurger.click();
        browser.pause(4000);
    };
    async addToCarItemBack(){
        this.addToCarBack.click();
        browser.pause(3000);
    };
    async clickToCar(){
        this.btnCar.click();
        browser.pause(3000);
    };
    async clickCheckout(){
        this.btnCheckout.click();
        browser.pause(3000);
    };
    async clickContinueCheck(){
        this.btnContinueCheck.click();
        browser.pause(8000);
    };
    async clickFinished(){
        this.btnfinishedCheck.click();
        browser.pause(8000);
    };
    async clickBackHome(){
        this.btnBackHome.click();
        browser.pause(8000);
    };
    async clickContinueShopp(){
        this.btnContinueShopp.click();
        browser.pause(8000);
    };
    async clickAddToLight(){
        this.btnAddToCarLight.click();
        browser.pause(8000);
    };
    async clickToRemoveLight(){
        this.btnRemoveLight.click();
        browser.pause(8000);
    };
    async clickAllItems(){
        this.btnHambur.click();
        browser.pause(3000);
        this.btnAllItems.click()
    };
    async clickAbout(){
        this.btnHambur.click();
        browser.pause(3000);
        this.btnAbout.click()
    };
    async accountLogout(){
        this.btnHambur.click();
        browser.pause(3000);
        this.logoutBtn.click()
    };
    async clickResetApp(){
        this.btnHambur.click();
        browser.pause(3000);
        this.btnResetAppState.click()
    };
    async clickExitSidebar(){
        this.btnHambur.click();
        browser.pause(3000);
        this.btnExitSidebar.click()
    };
    async clickTwitter(){
        this.btnTwitter.click();
        browser.pause(3000);
    };
    async clickFacebook(){
        this.btnFacebook.click();
        browser.pause(3000);
    };
    async clickLinkedin(){
        this.btnLinkedin.click();
        browser.pause(3000);
    };
    async informationInput(firstName, lastName, zip) {
        await this.setFirstName(firstName);
        await this.setLastName(lastName);
        await this.setZip(zip);
        await this.btnContinueCheck.click();
        browser.pause(4000);
    }
}
module.exports = new homePage()