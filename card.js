#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:ishank@bigbeastishank.com");
                    console.log("\nThanks for contacting me! :D\n");
                }
            },
            {
                name: `Want to view my ${chalk.bold("website")}?`,
                value: () => {
                    open("https://bigbeastishank.com/");
                    console.log("\nThanks for visiting my site! :D\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Have a nice day! :D\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                       BIGBEASTISHANK"),
    fact: chalk.hex('#ff0000')('Confussion is part of programming!'),
    github: chalk.hex('#ffac00')("https://bigbeastishank.com/github"),
    discord: chalk.hex('#fff100')("https://bigbeastishank.com/discord"),
    website: chalk.hex('#0bff00')("https://bigbeastishank.com/"),
    npx: chalk.hex('#00f6ff')("npx bigbeastishank"),

    labelFact: chalk.hex('#00f6ff').bold("          Fun Fact:"),
    labelWebsite: chalk.hex('#0bff00').bold("        Website:"),
    labelGitHub: chalk.hex('#fff100').bold("         Github:"),
    labelDiscord: chalk.hex('#ffac00').bold("        Discord:"),
    labelCard: chalk.hex('#ff0000').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelDiscord}  ${data.discord}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelWebsite}  ${data.website}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold("             Hello noob coders! My name is Ishank")}`,
        `${chalk.bold("             I'm Opensource Game & Web Developer.")}`,
        `${chalk.bold("   Apart from making website and games I am also intrested in:")}`,
        `${chalk.bold("             Computer Networking and Cyber Security")}`,
        `${chalk.bold("         Wanna talk? We can talk on discord or on mails!")}`,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above to open them in your broswer.`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());
