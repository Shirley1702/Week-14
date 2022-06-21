class homePage {
    //getters
    get backpackImg() { return $('#item_4_img_link > img') }
    get bikeLightImg() { return $('#item_0_img_link > img') }
    get headerLogo () { return $('.header_label') }
    get btnHambur () { return $('#react-burger-menu-btn')}
    get btnCar () { return $('#shopping_cart_container > a')}
    get btnFilter () { return $('.right_component > span > select')}
    get sideBar () { return $('bm-menu-wrap')}
    get btnAllItems () { return $('#inventory_sidebar_link')}
    get imgHambur () { return $('#menu_button_container > div > div:nth-child(1) > div > img')}
    get btnLogout () { return $('#logout_sidebar_link')}
    get tShirtImg () { return $('#item_1_img_link > img')}
    get jacketImg () { return $('#item_5_img_link > img')}
    get backpackHref () { return $('#item_4_img_link')}
    get addToCarBack () { return $('#add-to-cart-sauce-labs-backpack')}
    get btnCheckout () { return $('#checkout')}
    get btnContinueShopp () { return $('#continue-shopping')}
    get inputFirstName () { return $('#first-name')}
    get inputLastName () { return $('#last-name')}
    get inputZip () { return $('#postal-code')}
    get btnContinueCheck () { return $('#continue')}
    get errorMsgFirstName () { return $('.error-message-container.error')}
    get descriptionCar () { return $('#cart_contents_container > div > div.cart_list')}
    get listBuyCar () { return $('#item_4_title_link')}
    get quantityBack () { return $('.cart_quantity')}
    get btnAddToCarLight () { return $('#add-to-cart-sauce-labs-bike-light')}
    get btnRemoveLight () { return $('#remove-sauce-labs-bike-light')}
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
        await this.btnContinueShopp.click()
    }
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
    async clickContinueShopp(){
        this.btnContinueShopp.click();
        browser.pause(3000);
    };
    async clickAddToLight(){
        this.btnAddToCarLight.click();
        browser.pause(8000);
    };
    async accountLogout(){
        this.btnHambur.click();
        browser.pause(3000);
        this.logoutBtn.click()
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