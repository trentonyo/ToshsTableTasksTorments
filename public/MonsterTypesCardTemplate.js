(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonsterTypesCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "full static";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":24,"column":4}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a href=\"/MonsterTypes/view/"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monsterTypeId") || (depth0 != null ? lookupProperty(depth0,"monsterTypeId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monsterTypeId","hash":{},"data":data,"loc":{"start":{"line":21,"column":36},"end":{"line":21,"column":53}}}) : helper)))
    + "\">\r\n            <button class=\"viewDetails\"></button>\r\n        </a>\r\n    ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card monster jsp-monster-medium-backgroundColor jsp-monster-light-backgroundColor jsp-monster-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":131},"end":{"line":1,"column":161}}})) != null ? stack1 : "")
    + "\" id=\"MonsterType-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeId") || (depth0 != null ? lookupProperty(depth0,"monsterTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeId","hash":{},"data":data,"loc":{"start":{"line":1,"column":179},"end":{"line":1,"column":196}}}) : helper)))
    + "\">\r\n\r\n    <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"monster\" id=\"MonsterTypes-Name-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeId") || (depth0 != null ? lookupProperty(depth0,"monsterTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeId","hash":{},"data":data,"loc":{"start":{"line":3,"column":127},"end":{"line":3,"column":144}}}) : helper)))
    + "\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeName") || (depth0 != null ? lookupProperty(depth0,"monsterTypeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeName","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":27}}}) : helper)))
    + "\r\n    </div>\r\n\r\n    <div id=\"description_container jsp-monster-dark-textColor\">\r\n        <br>\r\n        <br>\r\n    </div>\r\n\r\n    <div class=\"button_container\">\r\n        <button onClick=\"toggleEditMode(this, {'entity': 'MonsterTypes', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeId") || (depth0 != null ? lookupProperty(depth0,"monsterTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeId","hash":{},"data":data,"loc":{"start":{"line":13,"column":80},"end":{"line":13,"column":97}}}) : helper)))
    + "'}, true)\" id=\"toggleEdit-MonsterTypes-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeId") || (depth0 != null ? lookupProperty(depth0,"monsterTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeId","hash":{},"data":data,"loc":{"start":{"line":13,"column":136},"end":{"line":13,"column":153}}}) : helper)))
    + "\">Edit</button>\r\n        <button onClick=\"updateEntity(this, {'entity': 'MonsterTypes', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeId") || (depth0 != null ? lookupProperty(depth0,"monsterTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeId","hash":{},"data":data,"loc":{"start":{"line":14,"column":78},"end":{"line":14,"column":95}}}) : helper)))
    + "'} )\" id=\"update-MonsterTypes-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeId") || (depth0 != null ? lookupProperty(depth0,"monsterTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeId","hash":{},"data":data,"loc":{"start":{"line":14,"column":125},"end":{"line":14,"column":142}}}) : helper)))
    + "\" class=\"hidden\">Submit</button>\r\n        <button onClick=\"deleteEntity(this, {'entity': 'MonsterTypes', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeId") || (depth0 != null ? lookupProperty(depth0,"monsterTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeId","hash":{},"data":data,"loc":{"start":{"line":15,"column":78},"end":{"line":15,"column":95}}}) : helper)))
    + "'} )\">Delete</button>\r\n    </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"suppressDetailsButton") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":24,"column":11}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n";
},"useData":true});
})();