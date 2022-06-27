var hostUri = "new.pahe.my.id";
const initCostomAds = async (dataHost) => {
    const uriLoc = document.location;
    const hostLoc = uriLoc.hostname;
    const uriScript = "https://" + hostUri + "/sc/main/" + hostLoc + ".js";
    const el = document.createElement("script");
    el.setAttribute("src", uriScript);
    await document.querySelector("body").append(el);
    el.onerror = async () => {
        el.remove();
        const uriScriptNew = "https://" + hostUri + "/global.js";
        const newEL = document.createElement("script");
        newEL.setAttribute("src", uriScriptNew);
        await document.querySelector("body").append(newEL);
    };
};
initCostomAds(hostUri);
