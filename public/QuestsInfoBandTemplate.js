(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestsInfoBand'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Level "
    + alias4(((helper = (helper = lookupProperty(helpers,"suggestedLevel") || (depth0 != null ? lookupProperty(depth0,"suggestedLevel") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"suggestedLevel","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":24}}}) : helper)))
    + " | "
    + alias4(((helper = (helper = lookupProperty(helpers,"rewardXp") || (depth0 != null ? lookupProperty(depth0,"rewardXp") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rewardXp","hash":{},"data":data,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":39}}}) : helper)))
    + " XP | "
    + alias4(((helper = (helper = lookupProperty(helpers,"rewardGold") || (depth0 != null ? lookupProperty(depth0,"rewardGold") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rewardGold","hash":{},"data":data,"loc":{"start":{"line":1,"column":45},"end":{"line":1,"column":59}}}) : helper)))
    + " gold";
},"useData":true});
})();