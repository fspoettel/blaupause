/* eslint-disable no-console */
import { IS_PRODUCTION } from './constants';

/**
 * Log a decorated message to the console
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
const message = (method, ...messages) => {
  if (IS_PRODUCTION) { return; }

  if (console && console[method]) {
    console[method](...messages);
  }
};

/**
 * Clear the console
 */
export const clear = () => {
  if (IS_PRODUCTION) { return; }
  console.clear();
};

/**
 * Error wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const error = (...messages) => message('error', ...messages);

/**
 * Info wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const info = (...messages) => message('info', ...messages);

/**
 * Log wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const log = (...messages) => message('log', ...messages);

/**
 * Warn wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
export const warn = (...messages) => message('warn', ...messages);
