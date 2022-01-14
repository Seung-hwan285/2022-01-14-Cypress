import Counter from "./modules/Counter.js";

export default function App() {
  new Counter({ $app: document.querySelector("#app") });
}

App();



const $=(s)=>document.querySelector(s);

let countValue = $(".count-display");


$(".plus-button").addEventListener("click",(e)=>{
  if(countValue.value >=12){

    return;
  }
  else{

    countValue.value = String(Number(countValue.value)+1);
  }
});



