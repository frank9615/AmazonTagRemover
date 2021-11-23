window.addEventListener("load", () => {
    let reload = false;
    let href = window.location.href;
    const regextag = /tag=.*/g;
    const found1 = href.match(regextag);
    if (found1 && found1.length > 0) {
        href = href.replace(regextag, "");
        reload = true;

    }
    const regexlinkcode = /linkCode=.*/g;
    const found2 = href.match(regexlinkcode);
    if (found2 && found2.length > 0) {
        href = href.replace(regexlinkcode, "");
        reload = true;
    }

    if (reload) {
        window.location.href = href;
    }
});
