/**
 * main.js
 * Entrypoint for webpack
 */
import ready from './utils/ready';
import registerServiceWorker from './utils/serviceWorker';
import { info } from './utils/debug';

function onReady(e) {
  registerServiceWorker();
  info(`Event: ${e.type}`, `Datestamp: ${this.date}`);
}

ready(onReady, {
  date: new Date(),
});
