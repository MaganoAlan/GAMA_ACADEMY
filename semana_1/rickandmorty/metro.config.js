// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
require("ts-node/register");
module.exports = require("./metro.config.ts");

module.exports = getDefaultConfig(__dirname);
