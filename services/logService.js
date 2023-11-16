import chalk from "chalk"
const printError = (error) => {
    console.log(chalk.bgRed("ERROR") + " " + error)
}
const printSuccess = (message) => {
    console.log(chalk.bgGreen("SUCCESS") + " " + message)
}

const printHelp = () => {
    console.log(
        `\t${chalk.bgCyan(" HELP ")}
        Без параметров - вывод погоды 
        -h вывод помощи
        -s [CITY] - установка города 
        -t установка токена 
        `
    )
}

export { printError, printSuccess, printHelp }
