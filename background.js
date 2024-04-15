setInterval(next, 5000);
var counter = 0;
function next(){
    imgs = ['https://s2.glbimg.com/EF4xrNhme2XFPmYx3H9r3xL3wJ8=/e.glbimg.com/og/ed/f/original/2018/12/10/gettyimages-658448738.jpg',
    'https://destinoberlim.com.br/wp-content/uploads/2016/03/Padaria.jpg',
    'https://blog.praticabr.com/wp-content/uploads/2020/01/312430-como-melhorar-a-experiencia-gastronomica-na-sua-padaria.jpg'];
    if(counter == imgs.length-1){
        document.getElementById("carousel").style.backgroundImage = "url("+imgs[counter]+")";
        counter = 0;
    }else{
        document.getElementById("carousel").style.backgroundImage = "url("+imgs[counter]+")";
        counter++;
    }
}

function exibirMensagem() {
    alert("O pedido foi enviado com sucesso!");
  }
  
  var form = document.querySelector("form");
  form.addEventListener("submit", exibirMensagem);