(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersInfoBand'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"attack") || (depth0 != null ? lookupProperty(depth0,"attack") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attack","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":10}}}) : helper)))
    + " ATK | "
    + alias4(((helper = (helper = lookupProperty(helpers,"defense") || (depth0 != null ? lookupProperty(depth0,"defense") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"defense","hash":{},"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":28}}}) : helper)))
    + " DEF | "
    + alias4(((helper = (helper = lookupProperty(helpers,"speed") || (depth0 != null ? lookupProperty(depth0,"speed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speed","hash":{},"data":data,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":44}}}) : helper)))
    + " SPD";
},"useData":true});
})();