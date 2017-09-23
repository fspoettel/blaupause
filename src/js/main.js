/**
 * main.js
 * Entrypoint for webpack
 */
import 'core-js';
import { ready } from './utils/ready';
import { info } from './utils/debug';

function onReady(e) {
  info(`Event: ${e.type}`, `Datestamp: ${this.date}`);
}

ready(onReady, {
  date: new Date(),
});
