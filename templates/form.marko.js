// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud-node$1.0.0/templates/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><title>Cadastro</title><style> label{color: teal; font-size:18px;}</style></head><body style=\"background-color: #75FCA1\"><div class=container><h1>Cadastro</h1><br><form action=/alunos method=post><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "><label>Nome: </label><br><input type=text name=nome" +
    marko_attr("value", data.nome) +
    "><br><label>Email: </label><br><input type=email name=email" +
    marko_attr("value", data.email) +
    "><br><label>Escolha seu curso: </label><p><label> <input name=curso type=radio value=ADS" +
    marko_attr("checked", data.curso == "ADS") +
    "><span>Análise e Desenvolvimento de Sistemas</span></label></p><p><label> <input name=curso type=radio value=Qualidade" +
    marko_attr("checked", data.curso == "Qualidade") +
    "><span>Tec. em Qualidade</span></label></p><p><label> <input name=curso type=radio value=IPI" +
    marko_attr("checked", data.curso == "IPI") +
    "><span>Tec. em Informática para Internet</span></label></p><br><a style=\"margin-right: 15px\" class=\"waves-effect waves-light btn\" href=/ >Cancelar</a><button class=\"waves-effect waves-light btn\" type=submit>Enviar</button></form></div><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "37");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud-node$1.0.0/templates/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
