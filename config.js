const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348145301700";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_10_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgODUsXG4gICAgICAgIDg0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk2LFxuICAgICAgICAzMixcbiAgICAgICAgMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk2LFxuICAgICAgICA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAzOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlgxMmY0MllIaXRDaURIU0hHUkFlbXA3SURBai8rZlVvWHJCL3BsR0djTVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5HSDZwRzFNUkVXbW1IVkM5dDI2a2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmZiZTRlNGEtOTFiOS00NTM0LWI2MDUtZmE1MDMwZjU5OWYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMzAsXG4gICAgICAxNTQsXG4gICAgICA0NSxcbiAgICAgIDE1MCxcbiAgICAgIDEwLFxuICAgICAgMjA1LFxuICAgICAgMjM5LFxuICAgICAgMTc3LFxuICAgICAgMTk4LFxuICAgICAgNTksXG4gICAgICAxMjQsXG4gICAgICA1MCxcbiAgICAgIDI2LFxuICAgICAgNDIsXG4gICAgICAyNDAsXG4gICAgICA2MSxcbiAgICAgIDM4LFxuICAgICAgMTksXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDEwMixcbiAgICAgIDExMyxcbiAgICAgIDE0MixcbiAgICAgIDI0MyxcbiAgICAgIDI1MCxcbiAgICAgIDEzNCxcbiAgICAgIDE4NSxcbiAgICAgIDIzLFxuICAgICAgMTM5LFxuICAgICAgMTQwLFxuICAgICAgMjE0LFxuICAgICAgNTUsXG4gICAgICA0OSxcbiAgICAgIDIzNixcbiAgICAgIDI0MyxcbiAgICAgIDIxNixcbiAgICAgIDI0LFxuICAgICAgMTY5LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNFWTM1RERDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ1MzAxNzAwOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMjIyOTc4Njk0MzYwMjozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJTFl2UnNRM0lIMXRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZneW9vbzlPUTB3ampYNjhCSFBsNDZXV3ljQnhpUDE4QUJGZmJOR3p0ek09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiKzVGYjM2Q2QrVm9iNXZnSitYU1VBZ1ZtWTg4QStQdU1JaG5WRlp1M0Y0OTNRYW9ZZFhsSkVyR0lWTFozTE5FWFIraUQ0WG93eUFBeVlOUG1hbUV3RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOG93R2F4SVA5dzdLOGVjZkIrMGdxNjBKYldCZzZwVzFxN3pUUnZUeE9Rd2prQ2p4cHZSNmk5RjVoTUNEblljT2kxUGtNYUprQ3lPVXozWGtBV2N5aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NTMwMTcwMDozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU4MTc5MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
