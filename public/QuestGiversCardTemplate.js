(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['QuestGiversCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a href=\"/QuestGivers/view/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":1,"column":48},"end":{"line":1,"column":64}}}) : helper)))
    + "\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "full static";
},"5":function(container,depth0,helpers,partials,data) {
    return "<span class=\"page_subtitle\">- Quest Giver</span>";
},"7":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":5},"end":{"line":1,"column":77}}})) != null ? stack1 : "")
    + " -->\r\n    <div class=\"card questGiver jsp-quest-light-backgroundColor jsp-quest-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":99},"end":{"line":2,"column":129}}})) != null ? stack1 : "")
    + "\" id=\"QuestGivers-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":2,"column":147},"end":{"line":2,"column":163}}}) : helper)))
    + "\">\r\n        <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"quest\" id=\"QuestGivers-Name-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":3,"column":128},"end":{"line":3,"column":144}}}) : helper)))
    + "\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverName") || (depth0 != null ? lookupProperty(depth0,"questGiverName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverName","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":30}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":98}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"button_container\">\r\n            <button onClick=\"toggleEditMode(this, {'entity': 'QuestGivers', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":9,"column":83},"end":{"line":9,"column":99}}}) : helper)))
    + "'}, true)\" id=\"toggleEdit-QuestGivers-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":9,"column":137},"end":{"line":9,"column":153}}}) : helper)))
    + "\">Edit</button>\r\n            <button onClick=\"updateEntity(this, {'entity': 'QuestGivers', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":10,"column":81},"end":{"line":10,"column":97}}}) : helper)))
    + "'} )\" id=\"update-QuestGivers-"
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":10,"column":126},"end":{"line":10,"column":142}}}) : helper)))
    + "\" class=\"hidden\">Submit</button>\r\n            <button onClick=\"deleteEntity(this, {'entity': 'QuestGivers', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"questGiverId") || (depth0 != null ? lookupProperty(depth0,"questGiverId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"questGiverId","hash":{},"data":data,"loc":{"start":{"line":11,"column":81},"end":{"line":11,"column":97}}}) : helper)))
    + "'} )\">Delete</button>\r\n        </div>\r\n    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":14,"column":31}}})) != null ? stack1 : "");
},"useData":true});
})();