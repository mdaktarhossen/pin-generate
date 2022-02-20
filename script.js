document.getElementById("generate-pin").addEventListener("click", ()=>{
  function getPin(){
    const pin=Math.round(Math.random()* 10000)
    const stringPing=pin+""
    if(stringPing.length==4){
      return pin;
    }
    else{
      return getPin();
    }
  }
  getPin();
  function generatePin(){
    const pin=getPin();
    document.getElementById("pin-input").value=pin;
  }
  generatePin();
});