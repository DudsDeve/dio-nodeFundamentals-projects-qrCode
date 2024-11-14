import chalk from "chalk";

export const promptQrCode = [
    {
        name: "link",
        description: chalk.bgGreen("Digite o link para gerar o QrCode"),
    },
    {
        name: "type",
        description: chalk.bgYellow("Escolha o tipo de QrCode, normal ou terminal?"),
        // pattern: /^(normal|terminal)$/,
        pattertn: /^[1-2]+$/,
        menssage: chalk.red("Escolha apenas entre normal e terminal"),
        required: true,
    }
]