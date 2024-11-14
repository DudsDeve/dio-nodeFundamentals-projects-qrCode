import qrcode from 'qrcode-terminal'
import chalk from 'chalk';


export async function handle(err, result){

    // err ? console.log('Erro na aplicação') : null;
    if(err){
        console.log('erro na aplicação')
    }
    const isSmall = result?.type == 2;

    //aqui estou pegando a lib de qr code, e pegando o link que vai ser passado para gerar o qr code
    qrcode.generate('This will be a small QRCode, eh!', {small: isSmall});

    qrcode.generate('This will be a small QRCode, eh!', {small: true}, function (qrcode) {
        console.log(qrcode)
    });
}