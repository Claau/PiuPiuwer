var submitButtonPiu = $(".basics_submit_piu");
var boxPiu=$(".basics_piu_box");
var qtdSavedPius= 7; //numero de PIUS guardados no servidor


$(function(){
    console.log("app iniciada");
    
    boxPiu.on("input",testeValidPiu);
    submitButtonPiu.on("click",function(e){
        e.preventDefault();
        inserirPiuPropio()});
        loadSavedPius();
});

function loadSavedPius(){
    console.log("pius carregados");

    $.get("http://www.json-generator.com/api/json/get/ceycmRLqWa?indent=2", function(data){
        for(var i=0; i<qtdSavedPius ; i++){
            var Piu= inserirPiuDoServidor(data[i]); }
    });
}


function zerarPiuBox() { boxPiu.val(""); };
function zerarContador() {  $(".basics_contador").text( "0/140");};

//validacao dos Pius
function testeValidPiu(){

    var conteudoPiu = $(".basics_piu_box").val();
    var qtdLetrasPiu = conteudoPiu.split("").length;
    
    //xcontador
    $(".basics_contador").text(qtdLetrasPiu + "/140");

    if( qtdLetrasPiu > 140 ){
        boxPiu.css( { "border": "2px solid red", "color": "red" })
        submitButtonPiu.attr("disabled", true); 
        if( qtdLetrasPiu == 150) alert("Max of caracters 140");
    }

    if( qtdLetrasPiu == 0 ){
        
        alert("Incorrect number of caracters!");  
        boxPiu.css( { "border": "2px solid red", "color": "red" })
        submitButtonPiu.attr("disabled", true); 
        alert("Min of caracters 1");
    }

    if (qtdLetrasPiu <= 140 && qtdLetrasPiu!=0 ){
        boxPiu.css( { 
            "border": "1.5px solid rgb(21, 206, 98)",  "color": "black"})
            submitButtonPiu.attr("disabled", false);
    }
        
};


function inserirPiuPropio(){
    var antigoPiu = $(".basics_divPius");
    var contentPiu = $(".basics_piu_box").val();
    var username = "@Name_profile";

  
    var novoPiu=NovoPiuPropio( contentPiu, username);
    antigoPiu.prepend(novoPiu);
    
    //FUNCAO REMOVER PIU
    novoPiu.find(".basics_Piu_delete_button").on("click",function(e){
        e.preventDefault();
        removePiu($(this));
    });

    //FUNCAO REMOVER PIU
    novoPiu.find(".basics_Piu_delete_button").on("click",function(e){
        e.preventDefault();
        removePiu($(this));
    });

    //FUNCAO EDITAR PIU
    novoPiu.find(".basics_Piu_edit_button").on("click",function(e){
        e.preventDefault();
        editPiu($(this))
    });

    //FUNCAO ADICIONAR LIKE
    novoPiu.find(".basics_Piu_like_button").on("click",function(e){
        console.log("clikou em adicionar like");
        e.preventDefault();
        adiconarLike($(this));
    });

    //ADICIONAR DISLIKE
    novoPiu.find(".basics_Piu_dislike_button").on("click",function(e){
        e.preventDefault();
        adiconarDislike($(this));
    });

    //DESTACAR PIU
    novoPiu.find(".basics_Piu_highlight_button").on("click",function(e){
        e.preventDefault();
        destacarPiu($(this));
    });

    zerarPiuBox();
    zerarContador();
    return novoPiu;
};

function inserirPiuDoServidor(data){
    console.log
    var antigoPiu = $(".basics_divPius");
    var contentPiu = data.mensagem;
    var usernamePiu= data.username;
    var profilePhoto= data.imagem;
  
    var novoPiu=NovoPiudoServidor(contentPiu, usernamePiu, profilePhoto);
    antigoPiu.prepend(novoPiu);
    
    //FUNCAO REMOVER PIU
    novoPiu.find(".basics_Piu_delete_button").on("click",function(e){
        e.preventDefault();
        removePiu($(this));
    });

    //FUNCAO REMOVER PIU
    novoPiu.find(".basics_Piu_delete_button").on("click",function(e){
        e.preventDefault();
        removePiu($(this));
    });

    //FUNCAO EDITAR PIU
    novoPiu.find(".basics_Piu_edit_button").on("click",function(e){
        e.preventDefault();
        editPiu($(this))
    });

    //FUNCAO ADICIONAR LIKE
    novoPiu.find(".basics_Piu_like_button").on("click",function(e){
        console.log("clikou em adicionar like");
        e.preventDefault();
        adiconarLike($(this));
    });

    //ADICIONAR DISLIKE
    novoPiu.find(".basics_Piu_dislike_button").on("click",function(e){
        e.preventDefault();
        adiconarDislike($(this));
    });

    //DESTACAR PIU
    novoPiu.find(".basics_Piu_highlight_button").on("click",function(e){
        e.preventDefault();
        destacarPiu($(this));
    });


    zerarPiuBox();
    zerarContador();
    return novoPiu;

}

function NovoPiuPropio(contentPiu, input_username, input_profilePhoto, contador_likes,contador_dislikes){

    var div=$("<article>").addClass("basics_Piu");
    var dislike_button = $("<button>").addClass("basics_Piu_dislike_button");
    var like_button = $("<button>").addClass("basics_Piu_like_button");
    var delete_button = $("<button>").addClass("basics_Piu_delete_button");
    var edit_button= $("<button>").addClass("basics_Piu_edit_button");
    var highlight_button= $("<button>").addClass("basics_Piu_highlight_button");
    var contador_likes= $("<span>").addClass("basics_contadorLikes");
    var contador_dislikes= $("<span>").addClass("basics_contadorDislikes");
    var textPiu= $("<p>").addClass("basics_Piu_p").text(contentPiu); 
    var username= $("<span>").addClass("basics_usernamePiu").text(input_username);
    var profilePhoto= $("<img>").addClass("basics_photoProfile_piu").attr('src',input_profilePhoto);

    if(input_profilePhoto == ""){ 
       profilePhoto.attr("src", false); }//backgroun-image default

    contador_likes.text("0");
    contador_dislikes.text("0");

    div.append(dislike_button);
    div.append(like_button);
    div.append(delete_button);
    div.append(edit_button);
    div.append(highlight_button);
    div.append(contador_likes);
    div.append(contador_dislikes);
    div.append(textPiu);
    div.append(username);
    div.append(profilePhoto);

    return div;
}

function NovoPiudoServidor(contentPiu, input_username, input_profilePhoto, contador_likes,contador_dislikes){

    var div=$("<article>").addClass("basics_Piu");
    var dislike_button = $("<button>").addClass("basics_Piu_dislike_button");
    var like_button = $("<button>").addClass("basics_Piu_like_button");
    var highlight_button= $("<button>").addClass("basics_Piu_highlight_button");
    var contador_likes= $("<span>").addClass("basics_contadorLikes");
    var contador_dislikes= $("<span>").addClass("basics_contadorDislikes");
    var textPiu= $("<p>").addClass("basics_Piu_p").text(contentPiu); 
    var username= $("<span>").addClass("basics_usernamePiu").text(input_username);
    var profilePhoto= $("<img>").addClass("basics_photoProfile_piu").attr('src',input_profilePhoto);

    dislike_button.on("click",function(e){
        e.preventDefault();

    });    
    like_button.on("click",function(e){
        e.preventDefault();
    });
    highlight_button.on("click",function(e){
        e.preventDefault();
    });

    if(input_profilePhoto == ""){ 
       profilePhoto.attr("src", false); }//backgroun-image default

    contador_likes.text("0");
    contador_dislikes.text("0");

    div.append(dislike_button);
    div.append(like_button);
    div.append(highlight_button);
    div.append(contador_likes);
    div.append(contador_dislikes);
    div.append(textPiu);
    div.append(username);
    div.append(profilePhoto);



    return div;
}

function NovoPiudoServidor2(contentPiu, input_username, input_profilePhoto, contador_likes,contador_dislikes){

    var div=$("<article>").addClass("basics_Piu");
    var dislike_button = $("<button>").addClass("basics_Piu_dislike_button");
    var like_button = $("<button>").addClass("basics_Piu_like_button");
    var highlight_button= $("<button>").addClass("basics_Piu_highlight_button");
    var contador_likes= $("<span>").addClass("basics_contadorLikes");
    var contador_dislikes= $("<span>").addClass("basics_contadorDislikes");
    var textPiu= $("<p>").addClass("basics_Piu_p").text(contentPiu); 
    var username= $("<span>").addClass("basics_usernamePiu").text(input_username);
    var profilePhoto= $("<img>").addClass("basics_photoProfile_piu").attr('src',input_profilePhoto);

    dislike_button.on("click",function(e){
        e.preventDefault();
        adiconarDislike($(this));
    });    
    like_button.on("click",function(e){
        e.preventDefault();
        adiconarLike($(this));
    });

    highlight_button.on("click",function(e){
        e.preventDefault();
        $(this).parent().remove();       
    });

    if(input_profilePhoto == ""){ 
       profilePhoto.attr("src", false); }//backgroun-image default

    contador_likes.text("0");
    contador_dislikes.text("0");

    div.append(dislike_button);
    div.append(like_button);
    div.append(highlight_button);
    div.append(contador_likes);
    div.append(contador_dislikes);
    div.append(textPiu);
    div.append(username);
    div.append(profilePhoto);



    return div;
}

function removePiu(variable){
    variable.parent().remove();
}

function editPiu(variable){
    var contentPiu= variable.parent().find("p").text();
    var piuBox= variable.parent();

    var edit=$("<textarea>").addClass(".basics_piu_box").attr('for','piu_box');
    var input=$("<input>").addClass("basics_submit_piu").attr('type', 'submit');
    var newContent= edit.val(contentPiu);

    piuBox.append(edit);
    piuBox.append(input);

    $("input").on('click', function(e){
        e.preventDefault();
        contentPiu.text(newContent);
    });
    
};

function  adiconarLike(variable){
    //OBS:So pode adicinar + de um like/dislike por Piu cada usuario
    var contador=variable.parent().find(".basics_contadorLikes");
    likes = contador.text();

    if (likes == 1){
        likes--;
        //habilitar o botao de dislike
        variable.parent().find(".basics_Piu_dislike_button").attr("disabled", false);
    }

    else{
        likes++;
        //deshabilitar o botao de dislike
        variable.parent().find(".basics_Piu_dislike_button").attr("disabled", true);
    }
   contador.text(likes);
};

function adiconarDislike(variable){
    var contador=variable.parent().find(".basics_contadorDislikes");
    dislikes = contador.text();
    
    if (dislikes == 1){
        dislikes--;
        //habilitar o botao de like
        variable.parent().find(".basics_Piu_like_button").attr("disabled", false);        
    }
    else{
        dislikes++;
        //deshabilitar o botao de like
        variable.parent().find(".basics_Piu_like_button").attr("disabled", true);
    }
   contador.text(dislikes);
console.log("contador:" + contador.text());
};

function destacarPiu(variable){
    //DESTACAR
    var piuASerPosicionado= variable.parent();
    var caixaDePublicacoes= variable.parents().find(".basics_divPius");
    
    var contentPiu= piuASerPosicionado.find(".basics_Piu_p").text();
    var username= piuASerPosicionado.find(".basics_usernamePiu").text();
    var profilePhoto= piuASerPosicionado.find(".basics_photoProfile_piu").attr("src");
    var contador_likes= piuASerPosicionado.find(".basics_contadorLikes").text();
    var contador_dislikes= piuASerPosicionado.find(".basics_contadorDislikes").text();

    var piuReposicionado= NovoPiudoServidor2( contentPiu, username, profilePhoto, contador_likes, contador_dislikes);
    piuASerPosicionado.toggle();
    piuReposicionado.toggleClass("highlightPiu");
    piuReposicionado.addClass("piu_destacado");
    caixaDePublicacoes.prepend(piuReposicionado);    
    
    return piuASerPosicionado;
};

