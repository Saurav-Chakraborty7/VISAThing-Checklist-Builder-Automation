class Utility {
    async randomNumber(max, min) {
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomValue;
    }
    async randomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    async scrollToBottom() {
    let oldPosition = 0;
    let newPosition = -1;

    while (oldPosition !== newPosition) {
        oldPosition = await browser.execute(() => window.scrollY);
        await browser.execute(() => window.scrollBy(0, 1000));
        await driver.pause(500);
        newPosition = await browser.execute(() => window.scrollY);
    }
}
async scrollIntoView(element) {
    await browser.execute(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }), element);
}

    
}
module.exports = new Utility();