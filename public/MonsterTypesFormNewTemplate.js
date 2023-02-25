(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonsterTypesFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form_card\"><form id=\"add_new_quest_giver\">\r\n    <div class=\"new add title monsterType\">\r\n        New Monster Type\r\n    </div>\r\n    <div class=\"new add background-gradient\">\r\n        <label for=\"monsterType-monsterTypeName\">Monster Type Name:</label>\r\n        <br>\r\n        <input type=\"text\" id=\"monsterType-monsterTypeName\" placeholder=\"Undead\">\r\n    </div>\r\n</form></div>";
},"useData":true});
})();