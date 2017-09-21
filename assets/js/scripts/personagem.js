Carregar = function() {
    //Verificar se o usuário está autenticado..
    Autenticado();

    $.ajax({
        url: Global.urlBase + "/personagem/listar",
        type: "GET",
        headers: { 'Authorization': 'Bearer ' + Global.token, 'Content-Type': 'application/x-www-form-urlencoded' },
        cache: false,
        async: false,
        success: function(json) {
            //Armazenando dados dos personagens..
            Global.dados = json;
        },
        error: function(e) {
            //Verificando erro..
            if(e.status) {
                alert(e.responseJSON.Message);
                return false;
            }
        }
    });
};
