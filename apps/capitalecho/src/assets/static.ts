// Static asset URLs. Binaries live in `public/assets` (moved losslessly from
// the original Lovable `.asset.json` manifests / src assets). The object shape
// (`{ url }`) is preserved for manifest-backed assets so call sites are unchanged.

export const echoIntelligenceAsset = "/assets/echo-intelligence-transparent.png";
export const ecosystemAsset = "/assets/from-information-to-action-transparent.png";
export const homeScreenAsset = "/assets/capitalecho-home-transparent.png";
export const logoAsset = { url: "/assets/capitalecho-logo-transparent.png" } as const;
export const phonesAsset = { url: "/assets/capitalecho-app-phones.png" } as const;
