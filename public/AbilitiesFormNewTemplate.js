(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['AbilitiesFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form_card\"><form id=\"add_new_ability\">\n    <div class=\"new add title ability\">\n        New Ability\n    </div>\n    <div class=\"new add background-gradient\">\n        <label for=\"ability-abilityName\">Ability Name:</label>\n        <br>\n        <input type=\"text\" id=\"ability-abilityName\" placeholder=\"Fireball\">\n    </div>\n\n    <div class=\"new add background-gradient\">\n        <label for=\"ability-abilityDesc\">Ability Description:</label>\n        <br>\n        <textarea id=\"ability-abilityDesc\"></textarea>\n    </div>\n</form></div>";
},"useData":true});
})();