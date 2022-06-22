class loginPage {
    //getters
    get inputUsername() { return $('#user-name') }
    get inputPassword() { return $('#password') }
    get btnLogin() { return $('#login-button') }
    get errorContainer() { return $('.error-message-container.error') }
    get botImg() { return $('.bot_column')}
    get loginLogo() { return $('div.login_logo')}
    get btnClearName() { return $('#login_button_container > div > form > div:nth-child(1) > svg')}
    get btnClearPassword() { return $('#login_button_container > div > form > div:nth-child(2) > svg')}
    get btnExitError() { return $('#login_button_container > div > form > div.error-message-container.error > h3 > button')}
    get bodyStore() { return $('#inventory_container')}
    //Setters
    async setUsername(username) {
        await this.inputUsername.setValue(username);
    }
    async setPassword(password) {
        await this.inputPassword.setValue(password);
    }
    //metodos
    async login(username, password) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.btnLogin.click();
        browser.pause(8000);
    }
}

module.exports = new loginPage()