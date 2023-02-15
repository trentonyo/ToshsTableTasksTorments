(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lootItemCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootName") || (depth0 != null ? lookupProperty(depth0,"lootName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootName","hash":{},"data":data,"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":16}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"lootValue") || (depth0 != null ? lookupProperty(depth0,"lootValue") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootValue","hash":{},"data":data,"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":31}}}) : helper)))
    + " gold)</h1>\r\n<p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"lootDesc") || (depth0 != null ? lookupProperty(depth0,"lootDesc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lootDesc","hash":{},"data":data,"loc":{"start":{"line":2,"column":3},"end":{"line":2,"column":15}}}) : helper)))
    + "</p>";
},"useData":true});
})();