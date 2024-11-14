
import prompt from "prompt"
import {mainPrompt} from "./prompts/prompt-main.js"
import { createQrCode } from "./services/qr-code/create.js";
(async function main(){
prompt.get(mainPrompt, async (err,choose) =>{
//choose.select === "qrcode" ? createQrCode() : choose.select === "password" ? console.log('passqord') : null
if(choose.select == 1) await createQrCode();
if(choose.select == 2)console.log('password');
});

prompt.start()
})()

