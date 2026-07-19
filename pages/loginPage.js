
class LoginPage {

    constructor(page){
        this.page=page;
        this.loginlink= "#login2"
        this.username= "#loginusername"
        this.password="#loginpassword"
        this.loginButton=page.getByRole("button", { name: 'Log in' })
    }
    async openURL(){
        await this.page.goto("https://www.demoblaze.com/")
        
    }
    async clickonLoginLink(){
        await this.page.locator(this.loginlink).click()
    }
    async enterUSerName(username){
        await this.page.locator(this.username).fill(username)
    }
    async enterPassword(password){
        await this.page.locator(this.password).fill(password)
    }
    async clickonLoginButton(){
        await this.loginButton.click()
    }
}

module.exports = { LoginPage }

