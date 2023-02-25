(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['AbilitiesFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form_card\"><form id=\"add_new_ability\">\r\n    <div class=\"new add title ability\">\r\n        New Ability\r\n    </div>\r\n    <div class=\"new add background-gradient\">\r\n        <label for=\"ability-abilityName\">Ability Name:</label>\r\n        <br>\r\n        <input type=\"text\" id=\"ability-abilityName\" placeholder=\"Fireball\">\r\n    </div>\r\n\r\n    <div class=\"new add background-gradient\">\r\n        <label for=\"ability-abilityDesc\">Ability Description:</label>\r\n        <br>\r\n        <textarea id=\"ability-abilityDesc\"></textarea>\r\n    </div>\r\n</form></div>";
},"useData":true});
})();