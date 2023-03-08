(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestsInfoBand'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"staticInfoband\">Level "
    + alias4(((helper = (helper = lookupProperty(helpers,"suggestedLevel") || (depth0 != null ? lookupProperty(depth0,"suggestedLevel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"suggestedLevel","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":49}}}) : helper)))
    + " | "
    + alias4(((helper = (helper = lookupProperty(helpers,"rewardXp") || (depth0 != null ? lookupProperty(depth0,"rewardXp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rewardXp","hash":{},"data":data,"loc":{"start":{"line":1,"column":52},"end":{"line":1,"column":64}}}) : helper)))
    + " XP | "
    + alias4(((helper = (helper = lookupProperty(helpers,"rewardGold") || (depth0 != null ? lookupProperty(depth0,"rewardGold") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rewardGold","hash":{},"data":data,"loc":{"start":{"line":1,"column":70},"end":{"line":1,"column":84}}}) : helper)))
    + " gold</div>\r\n<div id=\"editInfoband\" class=\"hidden\">\r\n    Level <input id=\"suggestedLevel\" type=\"number\" min=\"1\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"suggestedLevel") || (depth0 != null ? lookupProperty(depth0,"suggestedLevel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"suggestedLevel","hash":{},"data":data,"loc":{"start":{"line":3,"column":66},"end":{"line":3,"column":84}}}) : helper)))
    + "\"> |\r\n    <input id=\"rewardXp\" type=\"number\" min=\"0\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"rewardXp") || (depth0 != null ? lookupProperty(depth0,"rewardXp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rewardXp","hash":{},"data":data,"loc":{"start":{"line":4,"column":54},"end":{"line":4,"column":66}}}) : helper)))
    + "\"> XP |\r\n    <input id=\"rewardGold\" type=\"number\" min=\"0\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"rewardGold") || (depth0 != null ? lookupProperty(depth0,"rewardGold") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rewardGold","hash":{},"data":data,"loc":{"start":{"line":5,"column":56},"end":{"line":5,"column":70}}}) : helper)))
    + "\"> gold\r\n</div>";
},"useData":true});
})();