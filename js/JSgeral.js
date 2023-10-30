function somarIP(ip, valor) {
  const partesIP = ip.split('.').map(part => parseInt(part));
  partesIP[3] += valor;
  return partesIP.join('.');
}
function diminuirIP(ip, valor) {
  const partesIP = ip.split('.').map(part => parseInt(part));
  partesIP[3] -= valor;
  return partesIP.join('.');
}
function alterarScript(script, novo_CIRCUITO, novo_IPOI)
 {
   let script_alterado = script.replace(/<CIRCUITO>/g, novo_CIRCUITO);
   script_alterado = script_alterado.replace(/<IP OI>/g, novo_IPOI);
   script_alterado = script_alterado.replace(/<IP OI \-1>/g, diminuirIP(novo_IPOI, 1));
   return script_alterado;
}
function copyScriptRouter() {
  const scriptOutputRouter = document.getElementById('scriptOutputRouter');
  const range = document.createRange();
  range.selectNodeContents(scriptOutputRouter);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  selection.removeAllRanges();
  alert('Script do ROTEADOR copiado!');
}

function showGpomOptions() {
  const gpomOptionsDiv = document.getElementById('gpomOptions');
  const gpomRadio = document.getElementById('gpom');
  if (gpomRadio.checked) {
    gpomOptionsDiv.style.display = 'flex';
  } else {
    gpomOptionsDiv.style.display = 'none';
  }
}
const gpomRadio = document.getElementById('gpom');
gpomRadio.addEventListener('click', showGpomOptions);
const serialRadio = document.getElementById('serial');
serialRadio.addEventListener('click', showGpomOptions);

function onOptionSelected() {
  const gpomOptionsDiv = document.getElementById('gpomOptions');
  gpomOptionsDiv.style.display = 'none';
}