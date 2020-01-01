const puppeteer = require("puppeteer");
const LOGIN = require("../config.js");

const getBankingData = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
	
    await page.goto("https://www.bakerboyer.com/");

    const tellerUrl = await page.$eval(".online-banking-link>a", e => e.href);	
    await page.goto(tellerUrl);
    await page.$eval(".LoginIdTextBox", (e, LOGIN) => e.value = LOGIN.USERNAME, LOGIN);
    await page.click("#ctl00_PageContent_Login1_IdSubmitButton");
    await page.waitFor(1000);
    await page.keyboard.type(LOGIN.PASSWORD);
    await page.click("#ctl00_PageContent_Login1_PasswordSubmitButton");
    await page.waitFor(5000);
    await page.click("#ctl00_ctl27_retailSecondaryMenuAccountTransactionsMenuItemLinkButton");
	
    await page.waitForSelector("table tr:not(.th):not(.Total)");
	
    const data = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll("table tr:not(.th):not(.Total)"));
        return tds.map(td => Array.from(td.cells).map(e => e.innerText));
    });
	
    await browser.close();
    return data;
};

module.exports = getBankingData;