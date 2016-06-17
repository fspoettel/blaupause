/**
 * bundle.js
 * Entry-point for webpack - import your app from here!
 */

import { ready, info } from './utils';

function onReady(e) {
  info(`${e.type}`);
}

ready(onReady, {});
