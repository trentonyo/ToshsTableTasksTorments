(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersEditInfoBand'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<input name=\"editAttack\" id=\"editAttack-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":53}}}) : helper)))
    + "\" type=\"number\" min=\"0\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"attack") || (depth0 != null ? lookupProperty(depth0,"attack") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"attack","hash":{},"data":data,"loc":{"start":{"line":1,"column":84},"end":{"line":1,"column":94}}}) : helper)))
    + "\">\r\n<label for=\"editAttack-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":2,"column":23},"end":{"line":2,"column":36}}}) : helper)))
    + "\">ATK</label> |\r\n\r\n<input name=\"editDefense\" id=\"editDefense-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":4,"column":42},"end":{"line":4,"column":55}}}) : helper)))
    + "\" type=\"number\" min=\"0\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"defense") || (depth0 != null ? lookupProperty(depth0,"defense") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"defense","hash":{},"data":data,"loc":{"start":{"line":4,"column":86},"end":{"line":4,"column":97}}}) : helper)))
    + "\">\r\n<label for=\"editDefense-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":5,"column":24},"end":{"line":5,"column":37}}}) : helper)))
    + "\">DEF</label> |\r\n\r\n<input name=\"editSpeed\" id=\"editSpeed-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":7,"column":38},"end":{"line":7,"column":51}}}) : helper)))
    + "\" type=\"number\" min=\"0\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"speed") || (depth0 != null ? lookupProperty(depth0,"speed") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speed","hash":{},"data":data,"loc":{"start":{"line":7,"column":82},"end":{"line":7,"column":91}}}) : helper)))
    + "\">\r\n<label for=\"editSpeed-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":8,"column":22},"end":{"line":8,"column":35}}}) : helper)))
    + "\">SPD</label> |\r\n\r\n<input name=\"editHealthPool\" id=\"editHealthPool-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":10,"column":48},"end":{"line":10,"column":61}}}) : helper)))
    + "\" type=\"number\" min=\"0\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"healthPool") || (depth0 != null ? lookupProperty(depth0,"healthPool") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"healthPool","hash":{},"data":data,"loc":{"start":{"line":10,"column":92},"end":{"line":10,"column":106}}}) : helper)))
    + "\">\r\n<label for=\"editHealthPool-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":11,"column":27},"end":{"line":11,"column":40}}}) : helper)))
    + "\">HP</label>";
},"useData":true});
})();