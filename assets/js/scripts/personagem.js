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
            //console.log(e);
            if(e.status) {
                $("#resultado").html("<div class='alert alert-danger'>"+e.responseJSON+"</div>");
                return false;
            }
        }
    });
};

Criar = function(dados) {
    //Verificar se o usuário está autenticado..
    Autenticado();

    $.ajax({
        url: Global.urlBase + "/personagem/criar",
        type: "POST",
        headers: { 'Authorization': 'Bearer ' + Global.token, 'Content-Type': 'application/x-www-form-urlencoded' },
        data: JSON.parse('{"Nickname":"'+dados.Nome+'" ,"Classe":"'+dados.Classe+'"}'),
        cache: false,
        async: false,
        success: function(json) {
            //Armazenando dados dos personagens..
            Global.dados = json;
        },
        error: function(e) {
            //Verificando erro..
            if(e.status) {
                $("#resultado").html("<div class='alert alert-danger'>"+e.responseJSON+"</div>");
                return false;
            }
        }
    });
};

Recriar = function(dados) {
    //Verificar se o usuário está autenticado..
    Autenticado();

    $.ajax({
        url: Global.urlBase + "/personagem/recriar",
        type: "POST",
        headers: { 'Authorization': 'Bearer ' + Global.token, 'Content-Type': 'application/x-www-form-urlencoded' },
        data: JSON.parse('{"Nickname":"'+dados.Nome+'"}'),
        cache: false,
        async: false,
        success: function(json) {
            //Armazenando dados dos personagens..
            Global.dados = json;
        },
        error: function(e) {
            //Verificando erro..
            if(e.status) {
                $("#resultado").html("<div class='alert alert-danger'>"+e.responseJSON+"</div>");
                return false;
            }
        }
    });
};

Excluir = function(dados) {
    //Verificar se o usuário está autenticado..
    Autenticado();

    $.ajax({
        url: Global.urlBase + "/personagem/excluir",
        type: "POST",
        headers: { 'Authorization': 'Bearer ' + Global.token, 'Content-Type': 'application/x-www-form-urlencoded' },
        data: JSON.parse('{"Nickname":"'+dados.Nome+'"}'),
        cache: false,
        async: false,
        success: function(json) {
            //Armazenando dados dos personagens..
            Global.dados = json;
        },
        error: function(e) {
            //Verificando erro..
            if(e.status) {
                $("#resultado").html("<div class='alert alert-danger'>"+e.responseJSON+"</div>");
                return false;
            }
        }
    });
};
