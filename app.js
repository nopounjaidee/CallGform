var unirest = require("unirest");
async function callpost(cRegis,link,type){
    var NameCall = " ("+ type +") "
    return new Promise(async (resolve, reject) => {
    // setTimeout(async () => {
      await unirest(
        "POST",link
      )
        .field("entry.1405683895", cRegis)
        .field("entry.2062313074", "UPC (ต่างจังหวัด)")
        // .field("entry.1497021422", cRegis)
        // .field("entry.1101546368", "UPC (ต่างจังหวัด)")
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
    // Calling("3ฒฉ1862",Dic.MTPR); 
  // Calling("3ฒญ5043",Dic.MTPR); 
  // Calling("ข0624",Dic.MTPR); 
  // Calling("3ฒฉ1862",Dic.KBLC); 
  // Calling("3ฒญ5043",Dic.KBLC); 
  Calling("ข0624",Dic.KBLC); 
  // Calling("3ฒฉ1862",Dic.KSLC); 
  // Calling("3ฒญ5043",Dic.KSLC); 
  Calling("ข0624",Dic.KSLC); 
}
async function Retry(CarReg,link){
  Calling(CarReg,link);
}
CallStart();
async function Calling(CarReg,link){
  try {
    var loop = false;
    var fuc = 0;
    var CarRegist = CarReg;
    var TypeCall = await TypeName(link) +"-"+ CarRegist; 
    while (loop == false) {
        loop = await callpost(CarRegist,link,TypeCall) == true ? true : false;
    };
  } catch (error) {
    console.log('\x1b[31m%s\x1b[0m',"catch IN Calling : " + error +" -> "+ TypeCall + " :: ERROR ! : time : " + new Date().toTimeString().substr(2, 6));
    Retry(CarReg,link);
  }
};
