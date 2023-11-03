document.addEventListener('DOMContentLoaded', function () {
  const ipoiInput = document.getElementById('ipoi');
  const vlanInput = document.getElementById('vlan');

  ipoiInput.addEventListener('input', function() {
    let valor = ipoiInput.value;

    valor = valor.replace(/[^\d.]/g, '');
    if (valor.length > 15) {
      valor = valor.slice(0, 15);
    }

    ipoiInput.value = valor;
  });

  vlanInput.addEventListener('input', function() {
    let valor = vlanInput.value;

    valor = valor.replace(/[^\d.]/g, '');
    if (valor.length > 15) {
      valor = valor.slice(0, 15);
    }

    vlanInput.value = valor;
  });
});



const radioGPOM = document.getElementById('gpom');
const radioSerial = document.getElementById('serial');

const ipInputContainer = document.getElementById('ipInputContainer');
const ipInput = document.getElementById('ip');


radioSerial.addEventListener('change', function() {

    if (radioSerial.checked) {

        ipInputContainer.style.display = 'none';
    }
});

radioGPOM.addEventListener('change', function() {
    if (radioGPOM.checked) {
        ipInputContainer.style.display = 'block';
    } else {
        ipInputContainer.style.display = 'none';
    }
});

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
function alterarScript(script, novo_CIRCUITO, novo_IPOI, novo_VLAN, porta)
 {
   console.log('Valor de porta:', porta);
   let script_alterado = script.replace(/<CIRCUITO>/g, novo_CIRCUITO);
   script_alterado = script_alterado.replace(/<IP OI>/g, novo_IPOI);
   script_alterado = script_alterado.replace(/<IP OI \-1>/g, diminuirIP(novo_IPOI, 1));
   script_alterado = script_alterado.replace(/<VLAN>/g, novo_VLAN);

   if (porta === "comSwitch") {
    script_alterado = script_alterado.replace(/<PORTA>/g, "0/2");
  } else if (porta === "semSwitch") {
    script_alterado = script_alterado.replace(/<PORTA>/g, "0/1");
  }

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