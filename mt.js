
var unirest = require("unirest");
const schedule = require('node-schedule');
var result = [".....AllResult"]
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
var listper = [
  {
    id:"1",dt:[
      {
        cartax:"3ฒญ5043",zone:"UPC (ต่างจังหวัด)",com:"บริษัท ทีเอสบี ทรานสปอร์ต จำกัด",name:"บุญมา คำบุตรษิ 🤫",tell:"0822350163"
      }
    ]
  },{
    id:"2",dt:[
      {
        cartax:"3ฒฉ1862",zone:"UPC (ต่างจังหวัด)",com:"บริษัท ทีเอสบี ทรานสปอร์ต จำกัด",name:"วีรศักดิ์ ศรีสมโภชน์ 🤫",tell:"0908549092"
      }
    ]
  },{
    id:"3",dt:[
      {
        cartax:"3ฒฐ9061",zone:"UPC (ต่างจังหวัด)",com:"บริษัท ทีเอสบี ทรานสปอร์ต จำกัด",name:"ตุลาพร สีจุ้ย 🤫",tell:"0981195595"
      }
    ]
  },{
    id:"4",dt:[
      {
        cartax:"ฒฒ9847",zone:"UPC (ต่างจังหวัด)",com:"บริษัท ทีเอสบี ทรานสปอร์ต จำกัด",name:"ณัฐสิทธิ์ อ่วมสอาด 🤫",tell:"0630382987"
      }
    ]
  },{
    id:"5",dt:[
      {
        cartax:"3ฒค4430",zone:"UPC (ต่างจังหวัด)",com:"หจก.ราชัญ ทรานสปอร์ต 2019",name:"นนทชัย แสนศรี 🤫",tell:"0933799998"
      }
    ]
  },{
    id:"6",dt:[
      {
        cartax:"ผต1054",zone:"UPC (ต่างจังหวัด)",com:"หจก.เพชรสุวรรณ 2019 ทรานสปอร์ต",name:"เกียรติพิทักษ์  แน่นอุดร 🤫",tell:"0880079009"
      }
    ]
  },{
    id:"7",dt:[
      {
        cartax:"2ฒอ2078",zone:"UPC (ต่างจังหวัด)",com:"หจก.ราชัญ ทรานสปอร์ต 2019",name:"อิทธิพัฒน์ 🤫",tell:"0922656772"
      }
    ]
  },{
    id:"8",dt:[
      {
        cartax:"นม6",zone:"UPC (ต่างจังหวัด)",com:"Godthefive Company",name:"LAmOJDEE",tell:"055555555555"
      }
    ]
  },{
    id:"9",dt:[
      {
        cartax:"ฒฒ9847",zone:"BKK (กทม. และปริมณฑล)",com:"บริษัท ทีเอสบี ทรานสปอร์ต จำกัด",name:"ณัฐสิทธิ์ อ่วมสอาด 🤫",tell:"0630382987"
      }
    ]
  },{
    id:"10",dt:[
      {
        cartax:"2ฒอ9253",zone:"UPC (ต่างจังหวัด)",com:"บริษัท เอ็มสแควร์ พาส จำกัด",name:"ภานุพงศ์ ไพเราะ 🤫",tell:"0954477180"
      }
    ]
  }
]

async function callpost(Gform,person){
  var NameCall = " ("+ Gform[0].form + "-" + person[0].dt[0].cartax +") "
  // console.log(Gform[0]);
  return new Promise(async (resolve, reject) => {
  // setTimeout(async () => {
    await unirest(
      "POST",Gform[0].ar[0].link
    )
      .field(Gform[0].ar[0].ecartax, person[0].dt[0].cartax)
      .field(Gform[0].ar[0].ezone, person[0].dt[0].zone)
      .field(Gform[0].ar[0].ecom, person[0].dt[0].com)
      .field(Gform[0].ar[0].ename, person[0].dt[0].name)
      .field(Gform[0].ar[0].etell, person[0].dt[0].tell)
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
const job = schedule.scheduleJob('59 16 * * *', function(){
  console.log('Start..................');
  CallStart()
});
async function CallStart(){
  // Param 1  ลิงค์ = MTPR : KBLC : KSLC : KMLC : KPLC : TESTA : TESTB : TESTC
  // Param 2  ID = 1 : "บุญมา" | ID = 2 : "วีรศักดิ์" | ID = 3 : "ตุลาพร สีจุ้ย" | ID = 4 : "ณัฐสิทธิ์ อ่วมสอาด"  | ID = 5 : "นนทชัย แสนศรี"  | ID = 6 : "เกียรติพิทักษ์  แน่นอุดร"
  Calling("MTPR","10")
  Calling("MTPR","4")
//   Calling("MTPR","3")
//   Calling("MTPR","2")
}

async function Retry(forms,person){
  Calling(forms,person);
}
// CallStart();
async function Calling(forms,person){
  try {
    var loop = false;
    const filterA = await listGform.filter(word=>word.form ===forms)
    const filterB = await listper.filter(word=>word.id ===person)
    while (loop == false) {
        loop = await callpost(filterA,filterB) == true ? true : false;
    };
    result.forEach(element => console.log('\x1b[32m%s\x1b[0m',element));
  } catch (error) {
    console.log('\x1b[31m%s\x1b[0m',"catch IN Calling : " + error +" -> "+ filterA[0].form + " " + filterA[0].ar[0].ecartax +" :: ERROR ! : time : " + new Date().toTimeString().substr(0, 8));
    Retry(forms,person);
  }
};
