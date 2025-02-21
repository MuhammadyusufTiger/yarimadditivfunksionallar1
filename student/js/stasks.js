let staskL=[
    {
        id: 0,
        title:"Metrik fazolarda kompaktlik.",
        link: "sourses/books/lectures/Metrik fazolarda kompaktlik..pdf",
    },
    {
        id: 1,
        title:"Qisqartirib_akslantirish_printspi",
        link: "sourses/books/lectures/Qisqartirib_akslantirish_printspi.pdf",
    },
    {
        id: 2,
        title:"Chiziqli fazolar",
        link: "sourses/books/lectures/Chiziqli fazolar.pdf",
    },
    {
        id: 3,
        title:"Chiziqli_va_qavariq_funktsionallar",
        link: "sourses/books/lectures/Chiziqli_va_qavariq_funktsionallar.pdf",
    },
    {
        id: 4,
        title:"Normalangan fazolar",
        link: "sourses/books/lectures/Normalangan fazolar.pdf",
    },
    {
        id: 5,
        title:"Chiziqli operatorlar",
        link: "sourses/books/lectures/Chiziqli operatorlar.pdf",
    }
    
]

let stasksBtns=document.querySelector("#stasksLink");
let objT=document.querySelector("#objL");
let countT=document.querySelector("#taskCount");

// countT.textContent=`${staskL.length} ta`;
// for(let k=0;k<staskL.length;k++){
    
// }

$(document).ready(() => {
    countT.textContent=`${staskL.length} ta`
    for(let i=0;i<staskL.length;i++){
        stasksBtns.innerHTML+=`<button 
                                    type="button" 
                                    class="btn btn-lg btn-primary w-100 text-start mb-2" 
                                    style="font-size: 14px; height:50px;"
                                    onclick="setLink(${i})">
                                    ${staskL[i].title}
                                </button>`;
    }
});
function setLink(i){
    objT.data=staskL[i].link;
}