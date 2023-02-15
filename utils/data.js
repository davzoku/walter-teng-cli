import chalk from 'chalk';

const { dim } = chalk;
const { italic } = chalk;
const websiteOrange = chalk.hex(`#ffb814`).bold.inverse;
const twitterBlue = chalk.hex(`#00aced`).bold.inverse;
const githubGray = chalk.hex(`#F0F6FC`).bold.inverse;
const linkedinBlue = chalk.hex(`#007bb6`).bold.inverse;
const infoBlue = chalk.blue.bold.inverse;

const bio = `${`Software engineer with a focus on delivering business through technology. Interest in developing innovative solutions that can help solve complex problems at the intersections of business, AI and software engineering.`}
`;

const callToAction = `${italic(
  `Let's connect and see how we can make things happen!`
)}`;

const social = `
${websiteOrange(` Website `)}  ${`https://walterteng.com`}
${githubGray(` GitHub `)}   ${dim(`https://github.com/davzoku`)}
${twitterBlue(` Twitter `)}  ${dim(`https://twitter.com/davzoku`)}
${linkedinBlue(` LinkedIn `)} ${dim(`https://www.linkedin.com/in/tengkokwai/`)}
`;

const info = `${`${chalk.blue(`ℹ`)} ${infoBlue(` INFO `)} ${dim(
  `use`
)} help ${dim(`to access help information`)}`}
`;

export { bio, callToAction, social, info };
