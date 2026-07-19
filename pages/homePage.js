class HomePage{

    constructor(page){
        this.page=page;
        this.Samsunggalaxys6 = this.page.getByRole("link",{name:"Samsung galaxy s6"})
        this.Nokialumia1520 = this.page.getByRole("link",{name:"Nokia lumia 1520"})
        this.Nexus6= this.page.getByRole("link",{name:"Nexus 6"})
        this.Samsunggalaxys7 = this.page.getByRole("link",{name:"Samsung galaxy s7"})
        this.addtoCartbutton = this.page.getByRole("link",{name:"Add to cart"})
    }
        async SelectSamsunggalaxys6(){
            await this.Samsunggalaxys6.click()
    }
        async SelectNokialumia1520(){
            await this.Nokialumia1520.click()
    }
        async SelectNexus6(){
            await this.Nexus6.click()
    }
        async SelectSamsunggalaxys7(){
        await this.Samsunggalaxys7.click()
    }
    async clickonAddtoCartButton(){
        await this.addtoCartbutton.click()
    }
}

module.exports = { HomePage }