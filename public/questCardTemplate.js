(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['questCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "!!!";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"questName") || (depth0 != null ? lookupProperty(depth0,"questName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questName","hash":{},"data":data,"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":17}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"available") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":45}}})) != null ? stack1 : "")
    + "</h1>\r\n<p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"questDesc") || (depth0 != null ? lookupProperty(depth0,"questDesc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questDesc","hash":{},"data":data,"loc":{"start":{"line":2,"column":3},"end":{"line":2,"column":16}}}) : helper)))
    + "</p>";
},"useData":true});
})();