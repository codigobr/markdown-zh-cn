(function(){
    var factory = function (exports) {
        var lang = {
            name : "pt_br",
            description : "Editor Markdown Online Grátis.",
            tocTitle    : "Índice",
            toolbar : {
                undo             : "Desfazer(Ctrl+Z)",
                redo             : "Refazer(Ctrl+Y)",
                bold             : "Negrito",
                del              : "Tachado",
                italic           : "Itálico",
                quote            : "Bloco de citação",
                ucwords          : "Primeira letra das palavras convertida em maiúscula",
                uppercase        : "Texto de seleção convertido em maiúsculas",
                lowercase        : "Texto de seleção convertido em minúsculas",
                h1               : "Título 1",
                h2               : "Título 2",
                h3               : "Título 3",
                h4               : "Título 4",
                h5               : "Título 5",
                h6               : "Título 6",
                "list-ul"        : "Lista não ordenada",
                "list-ol"        : "Lista ordenada",
                hr               : "Linha horizontal",
                link             : "Link",
                "reference-link" : "Link de referência",
                image            : "Imagem",
                code             : "Código embutido",
                "preformatted-text" : "Texto pré-formatado / bloco de código (recuo de tabulação)",
                "code-block"     : "Bloco de código (várias linguagens)",
                table            : "Tabelas",
                datetime         : "Data hora",
                emoji            : "Emoji",
                "html-entities"  : "Entidades HTML",
                pagebreak        : "Quebra de página",
                watch            : "Desabilitar renderização em tempo real",
                unwatch          : "Visualizar conteúdo renderizado",
                preview          : "Visualizar HTML (Pressione Shift + ESC para sair)",
                fullscreen       : "Tela cheia (Pressione ESC para sair)",
                clear            : "Limpar",
                search           : "Procurar",
                help             : "Ajuda",
                info             : "Sobre "
            },
            buttons : {
                enter  : "Ok",
                cancel : "Cancelar",
                close  : "Fechar"
            },
            dialog : {
                link : {
                    title    : "Link",
                    url      : "Endereço",
                    urlTitle : "Título",
                    urlEmpty : "Erro: Por favor, preencha o endereço do link."
                },
                referenceLink : {
                    title    : "Link de referência",
                    name     : "Nome",
                    url      : "Endereço",
                    urlId    : "ID",
                    urlTitle : "Título",
                    nameEmpty: "Erro: o nome de referência não pode estar vazio.",
                    idEmpty  : "Erro: preencha o ID do link de referência.",
                    urlEmpty : "Erro: Por favor, preencha o endereço de url do link de referência."
                },
                image : {
                    title    : "Imagem",
                    url      : "Endereço",
                    link     : "Link",
                    alt      : "Título",
                    uploadButton     : "Envio",
                    imageURLEmpty    : "Erro: o endereço da URL da imagem não pode estar vazio.",
                    uploadFileEmpty  : "Erro: o upload de imagens não pode estar vazio!",
                    formatNotAllowed : "Erro: só permite fazer upload de arquivo de imagens, formato de arquivo de imagem permitido para upload:"
                },
                preformattedText : {
                    title             : "Texto pré-formatado / códigos",
                    emptyAlert        : "Erro: Por favor, preencha o texto pré-formatado ou conteúdo dos códigos.",
                    placeholder       : "codificando ...."
                },
                codeBlock : {
                    title             : "Bloco de código",
                    selectLabel       : "Linguagens: ",
                    selectDefaultText : "selecione uma linguagem...",
                    otherLanguage     : "Outras linguagens",
                    unselectedLanguageAlert : "Erro: Selecione a linguagem do código.",
                    codeEmptyAlert    : "Erro: Por favor, preencha o conteúdo do código.",
                    placeholder       : "codificando...."
                },
                htmlEntities : {
                    title : "Entidades HTML"
                },
                help : {
                    title : "Ajuda"
                }
            }
        };

        exports.defaults.lang = lang;
    };

    // CommonJS/Node.js
    if (typeof require === "function" && typeof exports === "object" && typeof module === "object")
    {
        module.exports = factory;
    }
    else if (typeof define === "function")  // AMD/CMD/Sea.js
    {
        if (define.amd) { // for Require.js

            define(["editormd"], function(editormd) {
                factory(editormd);
            });

        } else { // for Sea.js
            define(function(require) {
                var editormd = require("../editormd");
                factory(editormd);
            });
        }
    }
    else
    {
        factory(window.editormd);
    }

})();