const { google } = require("googleapis");
var unirest = require("unirest");
const schedule = require('node-schedule');
var result = [".....AllResult"]
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});
const spreadsheetId = "1aRG1ZGo_2qJxNp0OXzU7D7lckfz9AGNjFddeJ_ivWY0";
var kumtob = ""
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
      range: "Server3!A:I",
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
    range: "log3!A:D",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[name,carid,log,Date()]],
    },
  });
}
var Dic = {
  MTPR : "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeUdmVxPjlVwmr9_OLKQ7BbKPo3VLrQX2bsZuHnQtjkPklt8w/formResponse",
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
        link:Dic.MTPR,tob:"1405683895",ecartax:"entry.2062313074",ezone:"entry.2020696256",ecom:"entry.1013496111",ename:"entry.953475437",etell:"entry.622068130"
      }
    ]
  },{
    form : "KBLC",
    ar : [
      {
        link:Dic.KBLC,tob:"1405683895",ecartax:"entry.1414324870",ezone:"entry.2062313074",ecom:"entry.403619387",ename:"entry.1527148059",etell:"entry.719396994"
      }
    ]
  },{
    form : "KBLC2",
    ar : [
      {
        link:Dic.KBLC,tob:"1405683895",ecartax:"entry.966225020",ezone:"entry.2062313074",ecom:"entry.403619387",ename:"entry.1527148059",etell:"entry.719396994"
      }
    ]
  },{
    form : "KSLC",
    ar : [
      {
        link:Dic.KSLC,tob:"1405683895",ecartax:"entry.848406278",ezone:"entry.2062313074",ecom:"entry.1013496111",ename:"entry.953475437",etell:"entry.622068130"
      }
    ]
  },{
    form : "KMLC",
    ar : [
      {
        link:Dic.KMLC,tob:"1405683895",ecartax:"entry.856525795",ezone:"entry.2062313074",ecom:"entry.627358796",ename:"entry.325886033",etell:"entry.1742535871"
      }
    ]
  },{
    form : "KPLC",
    ar : [
      {
        link:Dic.KPLC,tob:"1405683895",ecartax:"entry.2021303156",ezone:"entry.2062313074",ecom:"entry.546717404",ename:"entry.1556342174",etell:"entry.2136555444"
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
      .field(Gform[0].ar[0].tob, kumtob)
      .field(Gform[0].ar[0].ecartax, person.cartax)
      .field(Gform[0].ar[0].ezone, person.zone)
      .field(Gform[0].ar[0].ecom, person.com)
      .field(Gform[0].ar[0].ename, person.name)
      .field(Gform[0].ar[0].etell, person.tell)
      .field("pageHistory", "0,2")
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
async function running(){
  while (kumtob == "") {
    var callkp = await CallgetKP()
    if(callkp != null){
       break
    }
    var callks = await CallgetKS()
    if(callks != null){
       break
    }
    var callkm = await CallgetKM()
    if(callkm != null){
       break
    }
    var callkb = await CallgetKB()
    if(callkb != null){
       break
    }
    // var callmt = await CallgetMT()
    // if(callmt != null){
    //    break
    // }
 }
 CallStart()
}
async function schedulelam(h,m){
  console.log("scheduleJob .........WILL RUNNING AFTER " + h+":"+m+" Min")
  const rule = await new schedule.RecurrenceRule();
        rule.hour = h;
        rule.minute = m;
        // rule.second = 50;
        rule.tz = 'Asia/Bangkok';
  const job2 = schedule.scheduleJob(rule,function(){
    console.log('RUNNING..............');
    // CallStart();
    running()
  });
}
async function Callget(){
  return new Promise(async (resolve, reject) => {
    unirest
    .get('https://docs.google.com/forms/d/e/1FAIpQLSdASzn5k8vRToNxonqRWfamxxCVKLahs0Nm5PxPny8wKxH-aw/formResponse')
    .then(async (response) => {
      console.log(response.status)
       var resp = response.body
       if(response.status == 200){
          if(response.body.includes("1568024900")){
            let responseBody =  response.body.match(/null,-2/)
            var A =  responseBody.index - 26
            var ooo =  response.body.substr(A,30)
            const words =  ooo.split('&');
            const wordsA =  words[1].split(';');
            console.log("kumtob : "+ wordsA[1]);
            kumtob = wordsA[1]
            resolve(resp);
          }else{
            resolve(null);
          }
       }else{
        resolve(null);
       }
    })
    .catch(err => {
      resolve(null);
      console.log("err"+ err)
    })
  });
}
async function CallgetKB(){
  return new Promise(async (resolve, reject) => {
    unirest
    .get('https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-7h1j0sPlTpcUDVLkWz79d6y9uxSrFBuIz32TjZApTOcWAQ/formResponse')
    .then(async (response) => {
      console.log(response.status)
       var resp = response.body
       if(response.status == 200){
          if(response.body.includes("1405683895")){
            let responseBody = response.body.match(/705493264/)
            var A = responseBody.index - 26
            var ooo = response.body.substr(A,30)
            const words = ooo.split('&');
            const wordsA = words[1].split(';');
            console.log("kumtob : "+ wordsA[1]);
            kumtob = wordsA[1]
            resolve(resp);
          }else{
            resolve(null);
          }
       }else{
        resolve(null);
       }
    })
    .catch(err => {
      resolve(null);
      console.log("err"+ err)
    })
  });
}
async function CallgetKS(){
  return new Promise(async (resolve, reject) => {
    unirest
    .get('https://docs.google.com/forms/u/0/d/e/1FAIpQLSeTxEGwORy8NnJ20r3NcTBHkGU0HL3wI4Mzg7chl4K0C0_4vA/formResponse')
    .then(async (response) => {
      console.log(response.status)
       var resp = response.body
       if(response.status == 200){
          if(response.body.includes("1405683895")){
            let responseBody = response.body.match(/879751300/)
            var A = responseBody.index - 26
            var ooo = response.body.substr(A,30)
            const words = ooo.split('&');
            const wordsA = words[1].split(';');
            console.log("kumtob : "+ wordsA[1]);
            kumtob = wordsA[1]
            resolve(resp);
          }else{
            resolve(null);
          }
       }else{
        resolve(null);
       }
    })
    .catch(err => {
      resolve(null);
      console.log("err"+ err)
    })
  });
}
async function CallgetKM(){
  return new Promise(async (resolve, reject) => {
    unirest
    .get('https://docs.google.com/forms/u/0/d/e/1FAIpQLSccvn0AtV4utbVSvRABj-xP-mogj1uTJR8a-oEq-oWqpXIQCw/formResponse')
    .then(async (response) => {
      console.log(response.status)
       var resp = response.body
       if(response.status == 200){
          if(response.body.includes("1405683895")){
            let responseBody = response.body.match(/1400649790/)
            var A = responseBody.index - 26
            var ooo = response.body.substr(A,30)
            const words = ooo.split('&');
            const wordsA = words[1].split(';');
            console.log("kumtob : "+ wordsA[1]);
            kumtob = wordsA[1]
            resolve(resp);
          }else{
            resolve(null);
          }
       }else{
        resolve(null);
       }
    })
    .catch(err => {
      resolve(null);
      console.log("err"+ err)
    })
  });
}
async function CallgetKP(){
  return new Promise(async (resolve, reject) => {
    unirest
    .get('https://docs.google.com/forms/u/0/d/e/1FAIpQLSezoXnCDSGOIJoDyfto003IGypUwaG4kyAxb4NVJVn7F_oYLQ/formResponse')
    .then(async (response) => {
      console.log(response.status)
       var resp = response.body
       if(response.status == 200){
          if(response.body.includes("1405683895")){
            let responseBody = response.body.match(/1945488737/)
            var A = responseBody.index - 26
            var ooo = response.body.substr(A,30)
            const words = ooo.split('&');
            const wordsA = words[1].split(';');
            console.log("kumtob : "+ wordsA[1]);
            kumtob = wordsA[1]
            resolve(resp);
          }else{
            resolve(null);
          }
       }else{
        resolve(null);
       }
    })
    .catch(err => {
      resolve(null);
      console.log("err"+ err)
    })
  });
}
async function CallgetMT(){
  return new Promise(async (resolve, reject) => {
    unirest
    .get('https://docs.google.com/forms/u/0/d/e/1FAIpQLSeUdmVxPjlVwmr9_OLKQ7BbKPo3VLrQX2bsZuHnQtjkPklt8w/formResponse')
    .then(async (response) => {
      console.log(response.status)
       var resp = response.body
       if(response.status == 200){
          if(response.body.includes("1405683895")){
            let responseBody = response.body.match(/328838042/)
            var A = responseBody.index - 26
            var ooo = response.body.substr(A,30)
            const words = ooo.split('&');
            const wordsA = words[1].split(';');
            console.log("kumtob : "+ wordsA[1]);
            kumtob = wordsA[1]
            resolve(resp);
          }else{
            resolve(null);
          }
       }else{
        resolve(null);
       }
    })
    .catch(err => {
      resolve(null);
      console.log("err"+ err)
    })
  });
}
async function GetdataSheet(){
  var datasheet = await CallGsheet()
  const CArr = datasheet.data.values.length
  const CItem = datasheet.data.values[0].length
  console.log(datasheet.data.values)
  for (let index = 1; index < CArr; index++) {
    const item = await {cartax:datasheet.data.values[index][0],zone:datasheet.data.values[index][1],com:datasheet.data.values[index][2],name:datasheet.data.values[index][3],tell:datasheet.data.values[index][4],store:datasheet.data.values[index][5],mote:datasheet.data.values[index][6]}
    await sheetlist.push(item)
  }
  // schedulelam(datasheet.data.values[0][7],datasheet.data.values[0][8])  
  schedulelam("15","17") 
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
