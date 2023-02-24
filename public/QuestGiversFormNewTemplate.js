(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestGiversFormNew'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form_card\"><form id=\"add_new_quest_giver\">\n    <div class=\"new add title questGiver\">\n        New Quest Giver\n    </div>\n    <div class=\"new add background-gradient\">\n        <label for=\"questGiver-questGiverName\">Quest Giver Name:</label>\n        <br>\n        <input type=\"text\" id=\"questGiver-questGiverName\" placeholder=\"Farmer John\">\n    </div>\n</form></div>";
},"useData":true});
})();