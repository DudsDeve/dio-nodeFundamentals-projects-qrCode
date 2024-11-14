import chalk from "chalk";

//arquivo de configuração do prompt
export const mainPrompt = [
    {
        name: "select",
         //description: chalk.bgYellow("Escolha entre as ferramentas, qrcode ou password?"),
        description: "Escolha a ferramenta (1- QRCODE ou (2- PASSWORD",
        //pattern: /^(qrcode|password)$/,
        pattern: /^[1-2]+$/,
        menssage: chalk.red("Escolha apenas entre qrcode e password"),
        required: true,
    }
]