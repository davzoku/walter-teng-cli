#!/usr/bin/env node
import chalk from 'chalk';
import * as dotenv from 'dotenv';
import { createSpinner } from 'nanospinner';
import path from 'path';
import RSSParser from 'rss-parser';

const __dirname = path.resolve();
dotenv.config({ path: `${__dirname}/./.env` });

const rssUrl = process.env.RSS_URL;

async function getLatestPosts(url, count) {
  const spinner = createSpinner(`Fetching ${count} latest posts`).start();
  const posts = await new RSSParser().parseURL(url);

  // console.log(posts.items);
  for (let i = 0; i < count; i++) {
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

getLatestPosts(rssUrl, 10);
