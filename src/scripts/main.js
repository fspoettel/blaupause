/**
 * main.js
 * Entrypoint for webpack
 */
import { ready, debug } from './utils';

function onReady(e) {
  debug('info', `Event: ${e.type}`, `Datestamp: ${this.date}`);
}

ready(onReady, {
  date: new Date(),
});
