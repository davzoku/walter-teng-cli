import welcome from 'cli-welcome';
import unhandled from 'cli-handle-unhandled';
import path from 'path';
import * as dotenv from 'dotenv';
import * as data from './data.js';

const __dirname = path.resolve();
dotenv.config({ path: `${__dirname}/./.env` });
const version = process.env.PKG_VERSION;

export default function init() {
  unhandled();
  welcome({
    title: `Walter Teng`,
    tagLine: `Hey 👋, glad you are here!`,
    description: `Get to know Walter Teng via npm`,
    version,
    bgColor: '#36C8EE',
    color: '#000000',
    bold: true,
  });

  console.log(data.info);
  console.log(data.bio);
  console.log(data.callToAction);
  console.log(data.social);
}
