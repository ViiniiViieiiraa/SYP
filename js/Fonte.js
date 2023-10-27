let scriptInput = "";
let gpomSelected = document.getElementById('gpom').checked;
let portaGpom = "";
if(gpomSelected) {
    if(document.getElementById('ETH').checked) {
        portaGpom = "ETH";
    }else if (document.getElementById('GIGA').checked) {
        portaGpom = "GIGA";
    }
}

function reescreverScript() {
    const circuito = document.getElementById('circuito').value;
    const ipoi = document.getElementById('ipoi').value;



if (document.getElementById('serial').checked) {
  scriptInput = document.getElementById('comSwitch').checked ?
`
SELECIONADO:
CABO SERIAL - COM SWITCH

Circuito: <CIRCUITO>
Ip Oi: <IP OI>
Ip Oi -1: <IP OI \-1>
`
:
`
SELECIONADO:
CABO SERIAL - SEM SWITCH

Circuito: <CIRCUITO>
Ip Oi: <IP OI>
Ip Oi -1: <IP OI \-1>
`
;}
else if (document.getElementById('gpom').checked && document.getElementById('ETH').checked) {
  scriptInput = document.getElementById('comSwitch').checked ?
`
SELECIONADO:
CABO GPOM - COM PORTA ETH - COM SWITCH

Circuito: <CIRCUITO>
Ip Oi: <IP OI>
Ip Oi -1: <IP OI \-1>
`
:
`
SELECIONADO:
CABO GPOM - COM PORTA ETH - SEM SWITCH

Circuito: <CIRCUITO>
Ip Oi: <IP OI>
Ip Oi -1: <IP OI \-1>
`
;}
else if (document.getElementById('gpom').checked && document.getElementById('GIGA').checked) {
  scriptInput = document.getElementById('comSwitch').checked ?
`
SELECIONADO:
CABO GPOM - COM PORTA GIGA - COM SWITCH

Circuito: <CIRCUITO>
Ip Oi: <IP OI>
Ip Oi -1: <IP OI \-1>
`
:
`
SELECIONADO:
CABO GPOM - COM PORTA GIGA - SEM SWITCH

Circuito: <CIRCUITO>
Ip Oi: <IP OI>
Ip Oi -1: <IP OI \-1>
`
;}  
else  {
    scriptInput = `
Selecione uma opção válida
`
;}
const script_alterado = alterarScript(scriptInput, circuito, ipoi);
document.getElementById('scriptOutputRouter').innerText = script_alterado;

const scriptOutputRouter = document.getElementById('scriptOutputRouter');
const scriptContent = scriptOutputRouter.innerText.trim();

const copyButtonRouter = document.getElementById('copyButtonRouter');
 if (scriptContent.trim().length > 0) {
   copyButtonRouter.style.display = 'block';
 } else {
   copyButtonRouter.style.display = 'none';
 }

}