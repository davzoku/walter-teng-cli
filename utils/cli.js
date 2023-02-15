import meow from 'meow';
import meowHelp from 'cli-meow-help';

const flags = {
  posts: {
    type: 'boolean',
    default: false,
    alias: 'p',
    desc: `Latest Posts`,
  },
  version: {
    type: `boolean`,
    alias: `v`,
    desc: `Print CLI version`,
  },
};

const commands = {
  help: { desc: `Print help info` },
};

const helpText = meowHelp({
  name: `wt`,
  defaults: false,
  flags,
  commands,
});

const options = {
  inferType: true,
  importMeta: import.meta,
  description: false,
  hardRejection: false,
  flags,
};

export default meow(helpText, options);
