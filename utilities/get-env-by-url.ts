export function getEnvByURL(dev: boolean, prestage: boolean, preploy: boolean, prod: boolean) {
  if (typeof window == "undefined") return false

  const isDev = window.location.hostname.includes("gym-master");
  const isLocal = window.location.hostname.includes("localhost");
  const isPrestag = window.location.hostname.includes("addons.cms");
  const isPreploy = window.location.hostname.includes("addons.apps");

  if (isDev || isLocal) {
    return dev;
  } else if (isPrestag) {
    return prestage;
  } else if (isPreploy) {
    return preploy;
  } else {
    return prod;
  }
};