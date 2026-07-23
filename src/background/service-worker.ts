/// <reference types="chrome" />

chrome.runtime.onInstalled.addListener(() => {
  console.log("Tally extension installed");
});
