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
    const vlan = document.getElementById('vlan').value;

    let porta;
    const comSwitch = document.getElementById('comSwitch');
    const semSwitch = document.getElementById('semSwitch');
    if (comSwitch.checked) {
      porta = comSwitch.value;
    } else if (semSwitch.checked) {
      porta = semSwitch.value;
    }

if (document.getElementById('serial').checked) {
  scriptInput = document.getElementById('comSwitch').checked ?
`
sys
#
sysname <CIRCUITO>
#
domain default enable system
#
telnet server enable
#
password-recovery enable
#
vlan 1
#
domain system
access-limit disable
state active
idle-cut disable
self-service-url disable
#
user-group system
group-attribute allow-guest
#
local-user admin
password cipher Oi12345678
authorization-attribute level 3
service-type ssh telnet terminal
#
interface Aux0
async mode flow
link-protocol ppp
interface serial 0/0
ip address <IP OI> 255.255.255.252
link-protocol ppp
#
interface NULL0
#
interface Vlan-interface1
#
ip route-static 0.0.0.0 0.0.0.0 <IP OI \-1>
#
snmp-agent
snmp-agent local-engineid 800063A203CC3E5F38080E
snmp-agent community write CGS31SPRO
snmp-agent sys-info version all
undo snmp-agent trap enable voice dial
#
load xml-configuration
#
load tr069-configuration
#
user-interface aux 0
user-interface vty 0 4
authentication-mode scheme
Protocol inbound all
idle-timeout 5 30
terminal type vt100
#
return
#
s f
#
`
:
`
sys
#
sysname <CIRCUITO>
#
domain default enable system
#
telnet server enable
#
password-recovery enable
#
vlan 1
#
domain system
access-limit disable
state active
idle-cut disable
self-service-url disable
#
user-group system
group-attribute allow-guest
#
local-user admin
password cipher Oi12345678
authorization-attribute level 3
service-type ssh telnet terminal
#
interface Aux0
async mode flow
link-protocol ppp
interface serial 0/0
ip address <IP OI> 255.255.255.252
link-protocol ppp
#
interface NULL0
#
interface Vlan-interface1
#
ip route-static 0.0.0.0 0.0.0.0 <IP OI \-1>
#
snmp-agent
snmp-agent local-engineid 800063A203CC3E5F38080E
snmp-agent community write CGS31SPRO
snmp-agent sys-info version all
undo snmp-agent trap enable voice dial
#
load xml-configuration
#
load tr069-configuration
#
user-interface aux 0
user-interface vty 0 4
authentication-mode scheme
Protocol inbound all
idle-timeout 5 30
terminal type vt100
#
return
#
s f
#
`
;}
else if (document.getElementById('gpom').checked && document.getElementById('ETH').checked) {
  scriptInput = document.getElementById('comSwitch').checked ?
`
sys
#
sysname <CIRCUITO>
#
domain default enable system
#
telnet server enable
#
password-recovery enable
#
vlan 1
#
domain system
access-limit disable
state active
idle-cut disable
self-service-url disable
#
user-group system
group-attribute allow-guest
#
local-user admin
password cipher Oi12345678
authorization-attribute level 3
service-type ssh telnet terminal
#
interface Aux0
async mode flow
link-protocol ppp
#
interface Ethernet<PORTA>
port link-mode route
#
interface Ethernet<PORTA>.<VLAN>
vlan-type dot1q vid <VLAN>
ip address <IP OI> 255.255.255.252
#
interface NULL0
#
interface Vlan-interface1
#
ip route-static 0.0.0.0 0.0.0.0 <IP OI \-1>
#
snmp-agent
snmp-agent local-engineid 800063A203CC3E5F38080E
snmp-agent community write CGS31SPRO
snmp-agent sys-info version all
undo snmp-agent trap enable voice dial
#
load xml-configuration
#
load tr069-configuration
#
user-interface aux 0
user-interface vty 0 4
authentication-mode scheme
Protocol inbound all
idle-timeout 5 30
terminal type vt100
#
return
#
s f
#
`
:
`
sys
#
sysname <CIRCUITO>
#
domain default enable system
#
telnet server enable
#
password-recovery enable
#
vlan 1
#
domain system
access-limit disable
state active
idle-cut disable
self-service-url disable
#
user-group system
group-attribute allow-guest
#
local-user admin
password cipher Oi12345678
authorization-attribute level 3
service-type ssh telnet terminal
#
interface Aux0
async mode flow
link-protocol ppp
#
interface Ethernet<PORTA>
port link-mode route
#
interface Ethernet<PORTA>.<VLAN>
vlan-type dot1q vid <VLAN>
ip address <IP OI> 255.255.255.252
#
interface Vlan-interface1
#
interface NULL0
#
ip route-static 0.0.0.0 0.0.0.0 <IP OI \-1>
#
snmp-agent
snmp-agent local-engineid 800063A203CC3E5F38080E
snmp-agent community write CGS31SPRO
snmp-agent sys-info version all
undo snmp-agent trap enable voice dial
#
load xml-configuration
#
load tr069-configuration
#
user-interface aux 0
user-interface vty 0 4
authentication-mode scheme
Protocol inbound all
idle-timeout 5 30
terminal type vt100
#
return
#
s f
#
`
;}
else if (document.getElementById('gpom').checked && document.getElementById('GIGA').checked) {
  scriptInput = document.getElementById('comSwitch').checked ?
`
sys
#
sysname <CIRCUITO>
#
domain default enable system
#
telnet server enable
#
password-recovery enable
#
vlan 1
#
domain system
access-limit disable
state active
idle-cut disable
self-service-url disable
#
user-group system
group-attribute allow-guest
#
local-user admin
password cipher Oi12345678
authorization-attribute level 3
service-type ssh telnet terminal
#
interface Aux0
async mode flow
link-protocol ppp
#
interface g<PORTA>
port link-mode route
#
interface g<PORTA>.<VLAN>
vlan-type dot1q vid <VLAN>
ip address <IP OI> 255.255.255.252
#
interface NULL0
#
interface Vlan-interface1
#
ip route-static 0.0.0.0 0.0.0.0 <IP OI \-1>
#
snmp-agent
snmp-agent local-engineid 800063A203CC3E5F38080E
snmp-agent community write CGS31SPRO
snmp-agent sys-info version all
undo snmp-agent trap enable voice dial
#
load xml-configuration
#
load tr069-configuration
#
user-interface aux 0
user-interface vty 0 4
authentication-mode scheme
Protocol inbound all
idle-timeout 5 30
terminal type vt100
#
return
#
s f
#
`
:
`
sys
#
sysname <CIRCUITO>
#
domain default enable system
#
telnet server enable
#
password-recovery enable
#
vlan 1
#
domain system
access-limit disable
state active
idle-cut disable
self-service-url disable
#
user-group system
group-attribute allow-guest
#
local-user admin
password cipher Oi12345678
authorization-attribute level 3
service-type ssh telnet terminal
#
interface Aux0
async mode flow
link-protocol ppp
#
interface g<PORTA>
port link-mode route
#
interface g<PORTA>.<VLAN>
vlan-type dot1q vid <VLAN>
ip address <IP OI> 255.255.255.252
#
interface NULL0
#
interface Vlan-interface1
#
ip route-static 0.0.0.0 0.0.0.0 <IP OI \-1>
#
snmp-agent
snmp-agent local-engineid 800063A203CC3E5F38080E
snmp-agent community write CGS31SPRO
snmp-agent sys-info version all
undo snmp-agent trap enable voice dial
#
load xml-configuration
#
load tr069-configuration
#
user-interface aux 0
user-interface vty 0 4
authentication-mode scheme
Protocol inbound all
idle-timeout 5 30
terminal type vt100
#
return
#
s f
#
`
;}  
else  {
    scriptInput = `
Selecione uma opção válida
`
;}
const script_alterado = alterarScript(scriptInput, circuito, ipoi, vlan, porta);
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