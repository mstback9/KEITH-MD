/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlJcml0SkM2V05Md0l6Z0ZYeWEra0ovTjNTMjduL0lsM3JLbTRsbFNsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiem5mMUFMUVFqV0s0OHE3UjhibVptd0NGaG1Dbm5JOGV6KzNvWmVhR3QzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSUhrUmdJLy8walI4SGZBQWJZK29KWXdYSmNaSXNRM1R4YURtVjAyeDNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJidlFCY3UrQVZDZjRPZWJZNnU4MkVPc0JFUkZ2bkNVSWFObTl2R2lRc1JZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PWnhEQ2xscVUwZE9RNjlNUks1TGxPZjB1MUJPNktWWnZ2Z0paTWVrV1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRyUGxoZnJBSFNOYnhJK3dSSXNpNzB4a21lMmlLcTh0ZExQZFZlU05JQkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9sSHdzRkF6TnNNNis5OHNBcWRud3BCVXlGNlR4blJ1N250WnNCOTBXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHc3Z3BWSDl3Q2RYYU9Cc3NMaEZONzNad1N5eU95M1NOV0piMTVNdHhnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNVSURHbWF1OWRsbENRVG1FeXFjL0RmQWIrYXEwbTdGUzcwbU45MVNYZnpXSmd1RXRnOWhhWHErNGdtV25rL1J2aTF5U1o4Nm03VUlHN1FhU2RCRWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6IjBZeWNGNXNVYXR4bXREbk1aVGh2Y1NMME5CSnNaQm13VDdWbW1wdmxaSk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNVS29CMTY4U3BpU2R4RTc2bGVmaWciLCJwaG9uZUlkIjoiYzMyYWM4NGEtYmYyMi00N2E4LWE4ZWEtYmRlNTc5MWFmOWQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik53aTJPR3Npb1ZWdnNqSEZXYy9VUUU3QUdwWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5M0NFOFJUMjA0bklWcXFzSHZTL1lNTG1RcFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTENYUTFHUEUiLCJtZSI6eyJpZCI6IjkyMzIzOTk1NjQ3NjozNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTS9Sekw0R0VPRzh0N29HR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYmlCckI3elVEYWU5QVdTd0hOdWdENXR1aWhIUFhhNExkWkZtYmFNNlcxVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOVMxV24rZmxnNWRoRElNUFVvcVpiUVY2WW04MDRLS2JjN0VOakx4TmpHUVlBUG9pQ0FRZ2QrYXo1cGJnWFlacmV6a0w5ODdoMDJraWNSVVlqS3drRGc9PSIsImRldmljZVNpZ25hdHVyZSI6Ikx6N1JZR21KS09mUWtkYXhVUHpLcGUwMTNxdjRFcDdNQnd3UEZIV1duOEdabitOUkpwZzFxQ2EvL0tNUytqV0MzaWpQZkRRb29oK1Jmc3ZZaFFvaGhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjM5OTU2NDc2OjM0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlc0Z2F3ZTgxQTJudlFGa3NCemJvQStiYm9vUnoxMnVDM1dSWm0yak9sdFYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzMxNTY0NjN9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '923239956476';
const DevKeith = dev.split(".");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  anticall,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete
};
