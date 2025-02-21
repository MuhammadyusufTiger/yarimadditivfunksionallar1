let lectureL=[
    {
        id: 0,
        title:"Метрик фазоларда компактлик.",
        link: "sourses/books/lectures/2. Метрик фазоларда компактлик.pdf",
    },
    {
        id: 1,
        title:"Қисқартириб_акслантириш_принцпи",
        link: "sourses/books/lectures/3_Қисқартириб_акслантириш_принцпи.pdf",
    },
    {
        id: 2,
        title:"Чизиқли фазолар",
        link: "sourses/books/lectures/4. Чизиқли фазолар.pdf",
    },
    {
        id: 3,
        title:"Чизиқли_ва_қавариқ_функционаллар",
        link: "sourses/books/lectures/5_Чизиқли_ва_қавариқ_функционаллар.pdf",
    },
    {
        id: 4,
        title:"Нормаланган фазолар",
        link: "sourses/books/lectures/6. Нормаланган фазолар.pdf",
    },
    {
        id: 5,
        title:"Чизиқли операторлар",
        link: "sourses/books/lectures/7. Чизиқли операторлар.pdf",
    }
]

const lectureBtns=document.querySelector("#lectureLink");
const objL=document.querySelector("#objL");
const count=document.querySelector("#lecCount");
$(document).ready(() => {
    count.textContent=`${lectureL.length} ta`
    for(let i=0;i<lectureL.length;i++){
        lectureBtns.innerHTML+=`<button 
                                    type="button" 
                                    class="btn btn-lg btn-primary w-100 text-start mb-2" 
                                    style="font-size: 13px; height:50px;"
                                    onclick="setLink(${i})">
                                    ${i+1}-${lectureL[i].title}
                                </button>`;
    }
});

function setLink(i){
    objL.data=lectureL[i].link;
}