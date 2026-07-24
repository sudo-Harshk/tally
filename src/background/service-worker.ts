/// <reference types="chrome" />
import { increment, decrement, reset } from "@/services/counter.service";

chrome.runtime.onInstalled.addListener(() => {
  console.log("Tally extension installed");
});

chrome.commands.onCommand.addListener(async (command) => {
  switch (command) {
    case "increment":
      await increment();
      break;
    case "decrement":
      await decrement();
      break;
    case "reset":
      await reset();
      break;
  }
});
