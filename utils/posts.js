import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import RSSParser from 'rss-parser';
import { RSS_URL } from './constants.js';

export default async function getLatestPosts(count) {
  const spinner = createSpinner(`Fetching ${count} latest posts`).start();
  const posts = await new RSSParser().parseURL(RSS_URL);

  for (let i = 0; i < count; i += 1) {
    console.log(
      `\n#${chalk.dim(i + 1)} - ${chalk.bold.blueBright(
        posts.items[i].title
      )} - ${chalk.underline(posts.items[i].link)}\n${chalk.italic(
        posts.items[i].contentSnippet
      )}\n${chalk.dim(posts.items[i].isoDate.substring(0, 10))}`
    );
  }
  spinner.success({ text: `Fetched ${count} latest posts, Enjoy~!` });
}
