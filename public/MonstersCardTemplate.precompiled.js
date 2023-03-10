(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['MonstersCard'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "full static";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <span class=\"subtitle nowrap\">(Defeat "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"monsterQty") || (depth0 != null ? lookupProperty(depth0,"monsterQty") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"monsterQty","hash":{},"data":data,"loc":{"start":{"line":8,"column":50},"end":{"line":8,"column":64}}}) : helper)))
    + ")</span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"MonstersInfoBand"),depth0,{"name":"MonstersInfoBand","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":18,"column":8}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"MonstersInfoBand"),depth0,{"name":"MonstersInfoBand","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        ";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <option value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeId") || (depth0 != null ? lookupProperty(depth0,"monsterTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeId","hash":{},"data":data,"loc":{"start":{"line":30,"column":31},"end":{"line":30,"column":48}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeName") || (depth0 != null ? lookupProperty(depth0,"monsterTypeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeName","hash":{},"data":data,"loc":{"start":{"line":30,"column":50},"end":{"line":30,"column":69}}}) : helper)))
    + "</option>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":41,"column":4},"end":{"line":51,"column":4}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <a href=\"/Monsters/view/"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":43,"column":32},"end":{"line":43,"column":45}}}) : helper)))
    + "\">\r\n            <button class=\"viewDetails\"></button>\r\n        </a>\r\n        <div class=\"button_container\">\r\n            <button onClick=\"toggleEditMode(this, {'entity': 'Monsters', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":47,"column":80},"end":{"line":47,"column":93}}}) : helper)))
    + "'}, true)\" id=\"toggleEdit-Monsters-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":47,"column":128},"end":{"line":47,"column":141}}}) : helper)))
    + "\">Edit</button>\r\n            <button onClick=\"updateEntity(this, {'entity': 'Monsters', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":48,"column":78},"end":{"line":48,"column":91}}}) : helper)))
    + "'} )\" id=\"update-Monsters-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":48,"column":117},"end":{"line":48,"column":130}}}) : helper)))
    + "\" class=\"hidden\">Submit</button>\r\n            <button onClick=\"deleteEntity(this, {'entity': 'Monsters', 'id': '"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":49,"column":78},"end":{"line":49,"column":91}}}) : helper)))
    + "'} )\">Delete</button>\r\n        </div>\r\n    ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"card monster jsp-monster-light-backgroundColor jsp-monster-light-thickerBorderColor "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"view") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":96},"end":{"line":1,"column":127}}})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"title animate-background-gradient jsp-global-black-textColor\" data-jsp-palette=\"monster\">\r\n        <div id=\"Monsters-Name-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":44}}}) : helper)))
    + "\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterName") || (depth0 != null ? lookupProperty(depth0,"monsterName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterName","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":27}}}) : helper)))
    + "\r\n        </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"monsterQty") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":9,"column":15}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n    <div class=\"description stats jsp-quest-dark-textColor\" id=\"Monsters-Stats-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":12,"column":79},"end":{"line":12,"column":92}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"questId") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":18,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"hidden description stats jsp-quest-dark-textColor\" id=\"Monsters-EditStats-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":20,"column":90},"end":{"line":20,"column":103}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"MonstersEditInfoBand"),depth0,{"name":"MonstersEditInfoBand","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n\r\n    <div class=\"description jsp-quest-dark-textColor\" id=\"Monsters-Type-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":24,"column":72},"end":{"line":24,"column":85}}}) : helper)))
    + "\">\r\n        <div class=\"subtitle stats\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeName") || (depth0 != null ? lookupProperty(depth0,"monsterTypeName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeName","hash":{},"data":data,"loc":{"start":{"line":25,"column":36},"end":{"line":25,"column":55}}}) : helper)))
    + "</div>\r\n    </div>\r\n    <div class=\"hidden description jsp-quest-dark-textColor\" id=\"Monsters-EditType-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":27,"column":83},"end":{"line":27,"column":96}}}) : helper)))
    + "\">\r\n        <select id=\"monster-types-list-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":28,"column":39},"end":{"line":28,"column":52}}}) : helper)))
    + "\" name=\"monsterTypeId\" data-current=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterTypeId") || (depth0 != null ? lookupProperty(depth0,"monsterTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterTypeId","hash":{},"data":data,"loc":{"start":{"line":28,"column":89},"end":{"line":28,"column":106}}}) : helper)))
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"monsterTypesList") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":31,"column":21}}})) != null ? stack1 : "")
    + "        </select>\r\n    </div>\r\n\r\n    <div class=\"description jsp-quest-dark-textColor\" id=\"Monsters-Desc-"
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterId") || (depth0 != null ? lookupProperty(depth0,"monsterId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterId","hash":{},"data":data,"loc":{"start":{"line":35,"column":72},"end":{"line":35,"column":85}}}) : helper)))
    + "\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"monsterDesc") || (depth0 != null ? lookupProperty(depth0,"monsterDesc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monsterDesc","hash":{},"data":data,"loc":{"start":{"line":36,"column":8},"end":{"line":36,"column":23}}}) : helper)))
    + "\r\n    </div>\r\n\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"suppressDetailsButton") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":40,"column":4},"end":{"line":51,"column":11}}})) != null ? stack1 : "")
    + "\r\n\r\n</div>";
},"usePartial":true,"useData":true});
})();