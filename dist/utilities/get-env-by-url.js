"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvByURL = getEnvByURL;
function getEnvByURL(dev, prestage, preploy, prod) {
    if (typeof window == "undefined")
        return false;
    var isDev = window.location.hostname.includes("gym-master");
    var isLocal = window.location.hostname.includes("localhost");
    var isPrestag = window.location.hostname.includes("addons.cms");
    var isPreploy = window.location.hostname.includes("addons.apps");
    if (isDev || isLocal) {
        return dev;
    }
    else if (isPrestag) {
        return prestage;
    }
    else if (isPreploy) {
        return preploy;
    }
    else {
        return prod;
    }
}
;
//# sourceMappingURL=get-env-by-url.js.map