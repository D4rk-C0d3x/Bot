const chalk = require("chalk")
const fs = require("fs")

//owmner v card
//domain && apikey && capikey && egg sesuai panel klian ya
// subrek channel AlwaysAnan
global.owner = ['2347030626048'] //ur owner number
global.ownernomer = "2347030626048" //ur owner number2
global.ownername = "C0D3 BR34K3R" //ur owner name
global.ytname = "YT: ZeusTech" //ur yt chanel name
global.socialm = "IG: @anan.offc" //ur github or insta name
global.location = "Nigeria" //ur location
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = '_' // isi dengan domain panel lu
global.apikey = '_' // Isi Apikey Plta Lu
global.capikey = '_' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//new
global.ownergc = "zeus"
global.botname = "ZEUS CPANEL"
global.ownerNumber = ["2347030626048@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@Chenkopap"
global.themeemoji = ''
global.wm = "YT: ZeusTech"
global.packname = "YT: ZeusTech"
global.author = "ZeusTech\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'

global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'thumb.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'ZEUS x C0D3 BR34K3R',
    private: 'Private',
    group: 'Group',
    wait: 'LOADING...',
}

//Setting Channel / link
global.linkchannel = {"https://whatsapp.com/channel/0029VautBuL7NoZwPcAxlJ1a"
:global.idchannel = "120363372633282419@newsletter"
,global,namechannel: "𝗭𝗘𝗨𝗦 𝗙𝗜𝗘𝗟𝗗 𝗧𝗘𝗖𝗛🤖.ʜᴋ"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
