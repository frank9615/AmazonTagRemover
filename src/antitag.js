// # see https://developer.chrome.com/docs/extensions/reference/webRequest/#registering-event-listeners

const opt_extraInfoSpec = ['blocking'];
const filter = {
    urls: [
        "*://*.amazon.ca/*",
        "*://*.amazon.co.jp/*",
        "*://*.amazon.co.uk/*",
        "*://*.amazon.com.au/*",
        "*://*.amazon.com.br/*",
        "*://*.amazon.com.mx/*",
        "*://*.amazon.com/*",
        "*://*.amazon.de/*",
        "*://*.amazon.es/*",
        "*://*.amazon.fr/*",
        "*://*.amazon.in/*",
        "*://*.amazon.it/*",
        "*://*.amazon.nl/*",
        "*://*.amzn.com/*"
    ]
};
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        let redirect = false;
        let url = details.url;
        const regextag = /tag=.*/g;
        const found1 = url.match(regextag);
        if (found1 && found1.length > 0) {
            url = url.replace(regextag, "");
            redirect = true;
        }
        const regexlinkcode = /linkCode=.*/g;
        const found2 = url.match(regexlinkcode);
        if (found2 && found2.length > 0) {
            url = url.replace(regexlinkcode, "");
            redirect = true;
        }
        if (redirect) {
            return { redirectUrl: url };
        }
    }, filter, opt_extraInfoSpec);


