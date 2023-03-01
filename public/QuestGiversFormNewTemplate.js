(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestGiversFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form_card jsp-global-light-backgroundColor\"><form id=\"add_new_quest_giver\">\r\n    <div class=\"new add title questGiver\">\r\n        New Quest Giver\r\n    </div>\r\n    <div class=\"new add animate-background-gradient jsp-quest-dark-textColor\" data-jsp-palette=\"quest\">\r\n        <label for=\"questGiver-questGiverName\">Quest Giver Name:</label>\r\n        <br>\r\n        <input type=\"text\" id=\"questGiver-questGiverName\" placeholder=\"Farmer John\">\r\n    </div>\r\n</form></div>";
},"useData":true});
})();