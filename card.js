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
                name: `Visit my ${chalk.bold("website")} server?`,
                value: () => {
                    open("https://bigbeastishank.com/");
                    console.log("\nThanks for seeing my site! :D\n");
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
    fact: chalk.hex('#ff0000')('Programming is life!'),
    github: chalk.hex('#ffac00')("https://bigbeastishank.com/github"),
    discord: chalk.hex('#fff100')("https://bigbeastishank.com/discord"),
    website: chalk.hex('#0bff00')("https://bigbeastishank.com/spotify"),
    npx: chalk.hex('#00f6ff')("npx bigbeastishank"),

    labelFact: chalk.hex('#00f6ff').bold("          Fun Fact:"),
    labelDiscord: chalk.hex('#0bff00').bold("        Github:"),
    labelGitHub: chalk.hex('#fff100').bold("         Discord:"),
    labelWebsite: chalk.hex('#ffac00').bold("        Spotify:"),
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
        `${chalk.bold("    Hello Goiz! My name is BIGBEASTISHANK aka Ishank")}`,
        `${chalk.bold("       I am a 16-years-old programmer and hacker.")}`,
        `${chalk.bold("     I Like to create and destroy stuff at same time!")}`,
        `${chalk.bold("     I am not an expert in any programming language.")}`,
        `${chalk.bold("     I am just good at all of the languages (I know).")}`,
        `${chalk.bold("My theory is bad but my practical is much better then yours")}`,
        `${chalk.bold("      Wanna talk? we can talk on discord or on mails!")}`,
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
