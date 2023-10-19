import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6283730802015', 'Azkaa', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '628xxx'
global.packname = 'Streliz - MD by'
global.author = '© Azkaa'
global.namebot = '​Streliz - MD'
global.wm = '© Streliz By Azka'
global.stickpack = 'Streliz - MD by'
global.stickauth = '© Azkaa'
global.fotonya = 'https://telegra.ph/file/94f85c38ae17bef10b56c.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/Azkaazhrzlva_'
global.sgh = 'https://github.com/Azkaazhrzlva'
global.sgc = 'https://chat.whatsapp.com/DyIPRiPkRCt3rf2MQUOSll'
// Donasi
global.psaweria = 'https://saweria.co/azkaazhrzlva'
global.ptrakterr = 'https://trakteer.id/azkaazhrzlva'
global.povo = '0838-3080-2015'
// Info Wait
global.wait = 'Sedang Di Proses, Mohon Tunggu....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.lol = 'cf1b2a5e6e52b735f96c9120'
global.rose = 'Rs-putangina'
global.xyro = 'qBzLJjhbAp'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/Apikey/
global.APIKeys = {
    "https://api.xyroinee.xyz": "apikeymu",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
})

