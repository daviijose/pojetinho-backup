const dataAtual = document.querySelector(".calendario__mes-atual"),
diasTag = document.querySelector(".calendario__dias"),
prevNextIcon = document.querySelectorAll(".calendario__header span");



//Coletando a data, mês e ano atuais
let data = new Date(),
anoAtual = data.getFullYear(),
mesAtual = data.getMonth();

const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho",
                "Agosto","Setembro","Outubro","Novembro","Dezembro"];

const renderCalendario = () =>{
    let primeiroDiaMes = new Date(anoAtual, mesAtual, 1).getDay(), //Retorna o primeiro dia do mês
    ultimoDiaMes = new Date(anoAtual, mesAtual + 1, 0).getDate(), //Retorna o último dia do mês
    fimdoMes = new Date(anoAtual, mesAtual,ultimoDiaMes).getDay(),
    ultimoDiaMesPassado = new Date(anoAtual, mesAtual, 0).getDate(), //Retorna o último dia do mês passado
    liTag = "";
    
    for (let i = primeiroDiaMes; i > 0; i--) {
        liTag += `<li class="dia__inativo">${ultimoDiaMesPassado - i + 1}</li>`;
        
    }

    for(let i = 1; i <= ultimoDiaMes; i++){
        let Hoje = i === data.getDate() && mesAtual === new Date().getMonth()
                         && anoAtual === new Date().getFullYear() ? "dia__ativo" : "";
        liTag += `<li class="${Hoje}">${i}</li>`
    }

    for (let i = fimdoMes; i < 6; i++) {
        liTag += `<li class="dia__inativo">${i - fimdoMes + 1}</li>`;
        
    }

    dataAtual.innerHTML = `${meses[mesAtual]} ${anoAtual}`;
    diasTag.innerHTML = liTag;
}

renderCalendario();

prevNextIcon.forEach(icon=>{
    icon.addEventListener("click", ()=>{
        mesAtual = icon.id == "prev" ? mesAtual - 1 : mesAtual + 1; //não sei. não me pergunte. funciona.

        if(mesAtual < 0 || mesAtual > 11){
            data = new Date(anoAtual, mesAtual);
            anoAtual = data.getFullYear();
            mesAtual = data.getMonth();
        } else{
            data = new Date();
        }

        renderCalendario();
    })
});