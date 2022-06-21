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
    get firstNameInput () { return $('#first-name')}
    get lastNameInput () { return $('#last-name')}
    get zipInput () { return $('#postal-code')}
    get btnContinueCheck () { $('#continue')}
    //Setters
    //metodos
    async continueShoppClick() {
        await this.btnContinueShopp.click()
    }
    async chacktOutInput(firstNameInput, lastNameInput, zipInput) {
        await this.setFirstName(firstNameInput);
        await this.setLastName(lastNameInput);
        await this.setZip(zipInput);
        await this.btnContinueCheck.click()
    }
}
module.exports = new homePage()