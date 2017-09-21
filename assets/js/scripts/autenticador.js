//Dados para serem usados em toda aplicação..
var Global = {
    urlBase: "http://localhost/PainelAPI/api",
    token: sessionStorage.getItem('token'),
    dados: ""
};

//Método para autenticar usuário..
Autenticar = function(dados) {
    //Removendo um token existente..
    sessionStorage.removeItem('token');

    //Enviando os dados..
    $.ajax({
        type: 'POST',
        url:  dados.url,
        data: JSON.parse('{"grant_type":"password", "username":"'+dados.usuario+'" ,"password":"'+dados.senha+'"}'),
        cache: false,
        async: false,
        success: function(json) {
           //Salvando o token retornado..
           Global.token = json.access_token;
           sessionStorage.setItem('token', Global.token);
           location.href="principal.html";
        },
        error: function(e) {
            //Verificando erro..
            if(e.status) {
                alert(e.responseJSON.error_description);
                return false;
            }
        }
    });      
};

Autenticado = function() {
    Global.token = sessionStorage.getItem('token');
    (!Global.token) ? location.href="index.html" : "";
}

Sair = function() {
    //Removendo um token existente..
    sessionStorage.removeItem('token');
    location.href="index.html";
}