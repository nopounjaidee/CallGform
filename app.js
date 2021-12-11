const { google } = require("googleapis");
var unirest = require("unirest");
const schedule = require('node-schedule');
var result = [".....AllResult"]
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});
const spreadsheetId = "1aRG1ZGo_2qJxNp0OXzU7D7lckfz9AGNjFddeJ_ivWY0";
async function CallGsheet(){
  return new Promise(async (resolve, reject) => {
    // Create client instance for auth
    const client = await auth.getClient();
    
    // Instance of Google Sheets API
    const googleSheets = google.sheets({ version: "v4", auth: client });
    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      // range: "Sheet1",
      range: "Server1!A:I",
    });
    resolve(getRows);
  });
}
async function CallCreateLog(name,carid,log){
  // Create client instance for auth
  const client = await auth.getClient();
  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });
  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "log1!A:D",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[name,carid,log,Date()]],
    },
  });
}
var Dic = {
  MTPR : "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeN1s5WuC9H9iPEhdJai5kKzECD5DVyLZpsXjKN5ssTxLrMaw/formResponse",
  KBLC : "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-7h1j0sPlTpcUDVLkWz79d6y9uxSrFBuIz32TjZApTOcWAQ/formResponse",
  KBLC2 : "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc6_E-Zx3TbvnBT7hKkYOfmLrDOkt1tUlCw1zBB9qf9u1hSlQ/formResponse",
  KSLC :"https://docs.google.com/forms/u/0/d/e/1FAIpQLSeTxEGwORy8NnJ20r3NcTBHkGU0HL3wI4Mzg7chl4K0C0_4vA/formResponse",
  KMLC:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSccvn0AtV4utbVSvRABj-xP-mogj1uTJR8a-oEq-oWqpXIQCw/formResponse",
  KPLC:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSezoXnCDSGOIJoDyfto003IGypUwaG4kyAxb4NVJVn7F_oYLQ/formResponse",
  TESTA:"https://docs.google.com/forms/d/e/1FAIpQLSdPydZ3hO61EoFrHV96rtcwgR4fxuhYZhON_NeaRICE2Dc7mg/formResponse",
  TESTB:"https://docs.google.com/forms/d/e/1FAIpQLSdASzn5k8vRToNxonqRWfamxxCVKLahs0Nm5PxPny8wKxH-aw/formResponse",
  TESTC:"https://docs.google.com/forms/d/e/1FAIpQLSccUMC7Yzf5Sf_QEGyvEFFe79CKw8VJP3axhtB2as4z_FCmVg/formResponse",
};
var listGform = [
  {
    form : "MTPR",
    ar : [
      {
        link:Dic.MTPR,ecartax:"entry.1405683895",ezone:"entry.2062313074",ecom:"entry.546717404",ename:"entry.1556342174",etell:"entry.2136555444"
      }
    ]
  },{
    form : "KBLC",
    ar : [
      {
        link:Dic.KBLC,ecartax:"entry.1405683895",ezone:"entry.2062313074",ecom:"entry.403619387",ename:"entry.1527148059",etell:"entry.719396994"
      }
    ]
  },{
    form : "KBLC2",
    ar : [
      {
        link:Dic.KBLC,ecartax:"entry.1405683895",ezone:"entry.2062313074",ecom:"entry.403619387",ename:"entry.1527148059",etell:"entry.719396994"
      }
    ]
  },{
    form : "KSLC",
    ar : [
      {
        link:Dic.KSLC,ecartax:"entry.1405683895",ezone:"entry.2062313074",ecom:"entry.1013496111",ename:"entry.953475437",etell:"entry.622068130"
      }
    ]
  },{
    form : "KMLC",
    ar : [
      {
        link:Dic.KMLC,ecartax:"entry.1405683895",ezone:"entry.2062313074",ecom:"entry.627358796",ename:"entry.325886033",etell:"entry.1742535871"
      }
    ]
  },{
    form : "KPLC",
    ar : [
      {
        link:Dic.KPLC,ecartax:"entry.1405683895",ezone:"entry.2062313074",ecom:"entry.546717404",ename:"entry.1556342174",etell:"entry.2136555444"
      }
    ]
  },{
    form : "TESTA",
    ar : [
      {
        link:Dic.TESTA,ecartax:"entry.1497021422",ezone:"entry.1101546368",ecom:"entry.1762606640",ename:"entry.550967469",etell:"entry.2035381388"
      }
    ]
  }
]

const sheetlist = []
async function callpost(Gform,person){
  var NameCall = " ("+ Gform[0].form + "-" + person.cartax +") "
  return new Promise(async (resolve, reject) => {
  // setTimeout(async () => {
    await unirest(
      "POST",Gform[0].ar[0].link
    )
      .field(Gform[0].ar[0].ecartax, person.cartax)
      .field(Gform[0].ar[0].ezone, person.zone)
      .field(Gform[0].ar[0].ecom, person.com)
      .field(Gform[0].ar[0].ename, person.name)
      .field(Gform[0].ar[0].etell, person.tell)
      .field("pageHistory", "0,1")
      .end(function (res) {
        if (res.status == 200) {
          result.push("CallPost status : " + res.status +" ->"+ NameCall + " :: Succeed : time : " + new Date().toTimeString().substr(0, 8));
          console.log('\x1b[32m%s\x1b[0m',"CallPost status : " + res.status +" ->"+ NameCall + " :: Succeed : time : " + new Date().toTimeString().substr(0, 8));
          resolve(true);
        } else {
          console.log('\x1b[31m%s\x1b[0m',"CallPost status : " + res.status +" ->"+ NameCall + " :: Fail : time : " + new Date().toTimeString().substr(0, 8));
          resolve(false);
        }
      });
  // }, 300);
});
}
 GetdataSheet()
async function schedulelam(h,m){
  console.log("scheduleJob .........WILL RUNNING AFTER " + h+":"+m+" Min")
  const rule = await new schedule.RecurrenceRule();
        rule.hour = h;
        rule.minute = m;
        rule.second = 50;
        rule.tz = 'Asia/Bangkok';
  const job2 = schedule.scheduleJob(rule,function(){
    console.log('RUNNING..............');
    CallStart();
  });
}
// async function lamtest(){
//   const xx = await sheetlist.filter(word=>word.mote ==="Run")
//   xx.forEach(element => console.log(element));
// }
async function GetdataSheet(){
  var datasheet = await CallGsheet()
  const CArr = datasheet.data.values.length
  const CItem = datasheet.data.values[0].length
  // console.log(datasheet.data.values)
  for (let index = 1; index < CArr; index++) {
    const item = await {cartax:datasheet.data.values[index][0],zone:datasheet.data.values[index][1],com:datasheet.data.values[index][2],name:datasheet.data.values[index][3],tell:datasheet.data.values[index][4],store:datasheet.data.values[index][5],mote:datasheet.data.values[index][6]}
    await sheetlist.push(item)
  }
  schedulelam(datasheet.data.values[0][7],datasheet.data.values[0][8])  
}
async function CallStart(){
  // Param 1  ลิงค์ = MTPR : KBLC : KSLC : KMLC : KPLC : TESTA : TESTB : TESTC
  const filtersheet = await sheetlist.filter(word=>word.mote ==="Run")
  filtersheet.forEach(element => Calling(element.store,element));
}

async function Retry(forms,person){
  Calling(forms,person);
}
// CallStart();
async function Calling(forms,person){
  try {
    var loop = false;
    const filterA = await listGform.filter(word=>word.form ===forms)
    while (loop == false) {
        loop = await callpost(filterA,person) == true ? true : false;
    };
    // CallCreateLog(person.name,person.cartax,"CallPost  " +person.store + ":: " +person.zone + " :: Succeed : time : " + new Date().toTimeString().substr(0, 8))
    result.forEach(element => console.log('\x1b[32m%s\x1b[0m',element));
  } catch (error) {
    console.log('\x1b[31m%s\x1b[0m',"catch IN Calling : " + error +" -> "+ filterA[0].form + " " + filterA[0].ar[0].ecartax +" :: ERROR ! : time : " + new Date().toTimeString().substr(0, 8));
    Retry(forms,person);
  }
};
