#!/usr/bin/env node
import init from './utils/init.js';
import cli from './utils/cli.js';
import posts from './utils/posts.js';

const { input, flags } = cli;

(async () => {
  init();
  if (input.includes('help')) {
    cli.showHelp(0);
  }

  if (flags.posts) {
    await posts(5);
  }
})();
