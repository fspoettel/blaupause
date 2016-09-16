/**
 * main.js
 * Entrypoint for webpack
 */
import { ready, info } from './utils';

function onReady(e) {
  info(`Event: ${e.type}`, `Datestamp: ${this.date}`);
}

ready(onReady, {
  date: new Date(),
});
