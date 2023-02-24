(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonsterTypesFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form_card\"><form id=\"add_new_quest_giver\">\n    <div class=\"new add title monsterType\">\n        New Monster Type\n    </div>\n    <div class=\"new add background-gradient\">\n        <label for=\"monsterType-monsterTypeName\">Monster Type Name:</label>\n        <br>\n        <input type=\"text\" id=\"monsterType-monsterTypeName\" placeholder=\"Undead\">\n    </div>\n</form></div>";
},"useData":true});
})();