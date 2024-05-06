#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import chalk from "chalk"

console.log(chalk.bold.underline.magentaBright( "Welcom to CountDown Timer With MehwishNaz" ))

let number_In_Seconds = await inquirer.prompt({
    name: "countdown",  type: "number",
    message: "Please Enter the Number you want to Start Countdown in Second: "
})
let input = number_In_Seconds.countdown

function countdown_Timer(i: number){
    const Time = new Date().setSeconds(new Date().getSeconds() + i)
    const check_Time = new Date(Time)
    setInterval(() => {
        const current_Time = new Date()
        const time_Difference = differenceInSeconds(check_Time, current_Time)
        if(time_Difference <= 0) {
            console.log(chalk.bold.magenta("Countdown Completed!"))
            process.exit()
        }
        const second = Math.floor(time_Difference % 60)
        console.log(`Remaing Seconds: ${second}`) }, 1000);
}
countdown_Timer(input);