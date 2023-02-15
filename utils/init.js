import welcome from 'cli-welcome';
import unhandled from 'cli-handle-unhandled';
import * as data from './data.js';
import { PKG_VERSION } from './constants.js';

const version = PKG_VERSION;

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
