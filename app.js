

async function callpostKB(cRegis,com,name,tell,link,type){
  var unirest = require("unirest");
   var NameCall = " ("+ type +") "
   return new Promise(async (resolve, reject) => {
   // setTimeout(async () => {
     await unirest(
       "POST",link
     )
       .field("entry.1405683895", cRegis)
       .field("entry.2062313074", "UPC (ต่างจังหวัด)")
       .field("entry.403619387", com)
       .field("entry.1527148059", name)
       .field("entry.719396994", tell)
       .field("pageHistory", "0,1")
       .end(function (res) {
         if (res.status == 200) {
           console.log('\x1b[32m%s\x1b[0m',"CallPost status : " + res.status +" ->"+ NameCall + " :: Succeed : time : " + new Date().toTimeString().substr(2, 6));
           resolve(true);
         } else {
           console.log('\x1b[31m%s\x1b[0m',"CallPost status : " + res.status +" ->"+ NameCall + " :: Fail : time : " + new Date().toTimeString().substr(2, 6));
           resolve(false);
         }
       });
   // }, 300);
 });
}
async function callpostKS(cRegis,com,name,tell,link,type){
  var unirest = require("unirest");
   var NameCall = " ("+ type +") "
   return new Promise(async (resolve, reject) => {
   // setTimeout(async () => {
     await unirest(
       "POST",link
     )
       .field("entry.1405683895", cRegis)
       .field("entry.2062313074", "UPC (ต่างจังหวัด)")
       .field("entry.1013496111", com)
       .field("entry.953475437", name)
       .field("entry.622068130", tell)
       .field("pageHistory", "0,1")
       .end(function (res) {
         if (res.status == 200) {
           console.log('\x1b[32m%s\x1b[0m',"CallPost status : " + res.status +" ->"+ NameCall + " :: Succeed : time : " + new Date().toTimeString().substr(2, 6));
           resolve(true);
         } else {
           console.log('\x1b[31m%s\x1b[0m',"CallPost status : " + res.status +" ->"+ NameCall + " :: Fail : time : " + new Date().toTimeString().substr(2, 6));
           resolve(false);
         }
       });
   // }, 300);
 });
}
async function callpostKM(cRegis,com,name,tell,link,type){
  var unirest = require("unirest");
   var NameCall = " ("+ type +") "
   return new Promise(async (resolve, reject) => {
   // setTimeout(async () => {
     await unirest(
       "POST",link
     )
       .field("entry.1405683895", cRegis)
       .field("entry.2062313074", "UPC (ต่างจังหวัด)")
       .field("entry.627358796", com)
       .field("entry.325886033", name)
       .field("entry.1742535871", tell)
       .field("pageHistory", "0,1")
       .end(function (res) {
         if (res.status == 200) {
           console.log('\x1b[32m%s\x1b[0m',"CallPost status : " + res.status +" ->"+ NameCall + " :: Succeed : time : " + new Date().toTimeString().substr(2, 6));
           resolve(true);
         } else {
           console.log('\x1b[31m%s\x1b[0m',"CallPost status : " + res.status +" ->"+ NameCall + " :: Fail : time : " + new Date().toTimeString().substr(2, 6));
           resolve(false);
         }
       });
   // }, 300);
 });
}
async function callpostKP(cRegis,com,name,tell,link,type){
  var unirest = require("unirest");
   var NameCall = " ("+ type +") "
   return new Promise(async (resolve, reject) => {
   // setTimeout(async () => {
     await unirest(
       "POST",link
     )
       .field("entry.1405683895", cRegis)
       .field("entry.2062313074", "UPC (ต่างจังหวัด)")
       .field("entry.546717404", com)
       .field("entry.1556342174", name)
       .field("entry.2136555444", tell)
       .field("pageHistory", "0,1")
       .end(function (res) {
         if (res.status == 200) {
           console.log('\x1b[32m%s\x1b[0m',"CallPost status : " + res.status +" ->"+ NameCall + " :: Succeed : time : " + new Date().toTimeString().substr(2, 6));
           resolve(true);
         } else {
           console.log('\x1b[31m%s\x1b[0m',"CallPost status : " + res.status +" ->"+ NameCall + " :: Fail : time : " + new Date().toTimeString().substr(2, 6));
           resolve(false);
         }
       });
   // }, 300);
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
var TypeName = async (link) => {
    var TyName = "";
    if(link.includes("Maw")){
      TyName = "MTPR";
    }else if(link.includes("WAQ")){
      TyName = "KBLC";
    }else if(link.includes("1hSlQ")){
      TyName = "KBLC2";
    }else if(link.includes("4vA")){
      TyName = "KSLC";
    }else if(link.includes("IQCw")){
      TyName = "KMLC";
    }else if(link.includes("oYLQ")){
      TyName = "KPLC";
    }else if(link.includes("H-aw")){
      TyName = "TESTB";
    }else if(link.includes("FCmVg")){
      TyName = "TESTC";
    }else{
      TyName = "TESTA";
    }
    // console.log("TypeName :: " + TyName);
    return TyName;
}
async function CallStart(){
  // Param 1  ทะเบียน
  // Param 2  ลิงค์ = MTPR : KBLC : KSLC : KMLC : KPLC : TEST
  // Calling("3ฒญ5043","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","บุญมา คำบุตรษิ","0822350163",Dic.KBLC); 
  // Calling("3ฒญ5043","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","บุญมา คำบุตรษิ","0822350163",Dic.KSLC); 
  // Calling("3ฒญ5043","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","บุญมา คำบุตรษิ","0822350163",Dic.KMLC); 
  // Calling("3ฒญ5043","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","บุญมา คำบุตรษิ","0822350163",Dic.KPLC);  

  Calling("3ฒฉ1862","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","วีรศักดิ์ ศรีสมโภชน์","0908549092",Dic.KBLC); 
  Calling("3ฒฉ1862","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","วีรศักดิ์ ศรีสมโภชน์","0908549092",Dic.KSLC); 
  // Calling("3ฒฉ1862","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","วีรศักดิ์ ศรีสมโภชน์","0908549092",Dic.KMLC); 
  Calling("3ฒฉ1862","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","วีรศักดิ์ ศรีสมโภชน์","0908549092",Dic.KPLC);  

  // Calling("ฒฒ9847","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","ณัฐสิทธิ์ อ่วมสอาด","0630382987",Dic.KBLC); 
  // Calling("ฒฒ9847","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","ณัฐสิทธิ์ อ่วมสอาด","0630382987",Dic.KSLC); 
  // Calling("ฒฒ9847","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","ณัฐสิทธิ์ อ่วมสอาด","0630382987",Dic.KMLC); 
  // Calling("ฒฒ9847","บริษัท ทีเอสบี ทรานสปอร์ต จำกัด","ณัฐสิทธิ์ อ่วมสอาด","0630382987",Dic.KPLC);  
}
async function Retry(CarReg,com,name,tell,link){
  Calling(CarReg,com,name,tell,link);
}
CallStart();
async function Calling(CarReg,com,name,tell,link){
  try {
    var loop = false;
    var fuc = 0;
    var CarRegist = CarReg;
    var TypeCall = await TypeName(link) +"-"+ CarRegist; 
    while (loop == false) {
      if("KBLC"){
        loop = await callpostKB(CarRegist,com,name,tell,link,TypeCall) == true ? true : false;
      }else if ("KSLC"){
        loop = await callpostKS(CarRegist,com,name,tell,link,TypeCall) == true ? true : false;
      }else if ("KMLC"){
        loop = await callpostKM(CarRegist,com,name,tell,link,TypeCall) == true ? true : false;
      }else if ("KPLC"){
        loop = await callpostKP(CarRegist,com,name,tell,link,TypeCall) == true ? true : false;
      }
        
    };
  } catch (error) {
    console.log('\x1b[31m%s\x1b[0m',"catch IN Calling : " + error +" -> "+ TypeCall + " :: ERROR ! : time : " + new Date().toTimeString().substr(2, 6));
    Retry(CarReg,com,name,tell,link);
  }
};
