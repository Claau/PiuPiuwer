var userData= [];

$(function(){
    
    
    $(".register").on("click",function(e){
        console.log("register formulario cargado");
        e.preventDefault();
        inserirRegisterForm()});

    $("#Save").on("click",function(e){
        console.log("register formulario lendo");
        e.preventDefault();
        userData= readRegisterForm()});
    });
  
//FORMULARIO DE REGISTRO
function inserirRegisterForm(){ 
    $("#registerForm").css({"display": "flex"}); }
    


function readRegisterForm(){

    var username_i= $("#Username").val();
    var birthday_i= $("#Birhday").val();
    var sex_i= $("#Sex").val();
    var relationship_i= $("#Relationship").val();
    var country_i= $("#Country").val();
    var hobbies_i=  $("#Hobbies").val();
    var description_i=  $("#Description").val();
    var email_i= $("#Email").val();
    var phone_i= $("#Cell").val();
    var profilePhoto_i= $("#ProfilePhoto").val();
    var coverPhoto_i= $("#CoverPhoto").val();
    var password_i= $("#Password").val();

    //GUARDAR OS DADOS NA MEMORIA
    var userData= [];
    var importar={
        username: username_i,
        birthday: birthday_i,
        sex: sex_i,
        relationship: relationship_i,
        country: country_i,
        hobbies: hobbies_i,
        description: description_i,
        email: email_i,
        phone: phone_i,
        profilePhoto: profilePhoto_i,
        coverPhoto: coverPhoto_i,
        password: password_i
    }

    userData.push(importar);
    return userData;
}