"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,l,o){t.default.MODEL_FACTORY_INJECTIONS=!0;var a=t.default.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:n.default});(0,l.default)(a,o.default.modulePrefix),e.default=a}),define("dummy/components/content-backdrop",["exports","ember-side-menu/components/content-backdrop"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/fa-icon",["exports","ember-font-awesome/components/fa-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/fa-list",["exports","ember-font-awesome/components/fa-list"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/fa-stack",["exports","ember-font-awesome/components/fa-stack"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/menu-style-option",["exports","ember","dummy/templates/components/menu-style-option"],function(e,t,n){e.default=t.default.Component.extend({layout:n.default,tagName:"a",classNameBindings:["isActive:current-demo"],isActive:t.default.computed("option","activeOption",function(){var e=this.get("option"),t=this.get("activeOption");return e.id===t.id}),click:function(){var e=this.get("option");this.sendAction("action",e)}})}),define("dummy/components/side-button",["exports","ember","dummy/templates/components/side-button"],function(e,t,n){e.default=t.default.Component.extend({layout:n.default,tagName:"a",classNames:["side-button"],classNameBindings:["isActive:active","side"],isActive:t.default.computed("side","actualSide",function(){return this.get("side")===this.get("actualSide")}),click:function(){this.set("actualSide",this.get("side"))}})}),define("dummy/components/side-menu-link-to",["exports","ember-side-menu/components/side-menu-link-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/side-menu-toggle",["exports","ember-side-menu/components/side-menu-toggle"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/side-menu",["exports","ember-side-menu/components/side-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n,l){function o(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.hideSha?a.match(l.versionRegExp)[0]:t.hideVersion?a.match(l.shaRegExp)[0]:a}e.appVersion=o;var a=n.default.APP.version;e.default=t.default.Helper.helper(o)}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var l=n.default.APP,o=l.name,a=l.version;e.default={name:"App Version",initialize:(0,t.default)(o,a)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function l(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var l;if("undefined"!=typeof window)l=window;else if("undefined"!=typeof global)l=global;else{if("undefined"==typeof self)return;l=self}var o,a=n.default.exportApplicationGlobal;o="string"==typeof a?a:t.default.String.classify(n.default.modulePrefix),l[o]||(l[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete l[o]}}))}}e.initialize=l,e.default={name:"export-application-global",initialize:l}}),define("dummy/initializers/side-menu",["exports","ember-side-menu/initializers/side-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var l=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});l.map(function(){}),e.default=l}),define("dummy/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return{options:[{id:"slide",text:"Slide"}]}},setupController:function(e,t){this._super.apply(this,arguments),this.controller.set("activeOption",t.options[0]),this.controller.set("side","left")},actions:{changeSide:function(e){this.set("side",e)},changeMenu:function(e){this.controllerFor("application").set("activeOption",e)}}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/side-menu",["exports","ember-side-menu/services/side-menu"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"D2RNIn6R",block:'{"statements":[["block",["side-menu"],null,[["width","side"],["300px",["get",["side"]]]],3],["append",["unknown",["content-backdrop"]],false],["text","\\n\\n"],["open-element","div",[]],["static-attr","id","outer-container"],["flush-element"],["text","\\n  "],["append",["helper",["side-menu-toggle"],null,[["side"],[["get",["side"]]]]],false],["text","\\n\\n  "],["open-element","main",[]],["static-attr","id","page-wrap"],["flush-element"],["text","\\n    "],["open-element","h1",[]],["flush-element"],["open-element","a",[]],["static-attr","href","https://github.com/tsubik/ember-side-menu"],["flush-element"],["text","ember-side-menu"],["close-element"],["close-element"],["text","\\n    "],["block",["side-button"],null,[["side","actualSide"],["left",["get",["side"]]]],2],["text","\\n    "],["block",["side-button"],null,[["side","actualSide"],["right",["get",["side"]]]],1],["text","\\n\\n    "],["open-element","h2",[]],["static-attr","class","description"],["flush-element"],["text","\\n      Mobile friendly Ember menu component using CSS transitions. More effects and SVG path animations coming soon.\\n    "],["close-element"],["text","\\n\\n    "],["open-element","nav",[]],["static-attr","class","demo-buttons"],["flush-element"],["text","\\n"],["block",["each"],[["get",["model","options"]]],null,0],["text","    "],["close-element"],["text","\\n\\n    "],["open-element","p",[]],["flush-element"],["text","\\n      Demo page design is literally taken from "],["open-element","a",[]],["static-attr","href","https://github.com/negomi/react-burger-menu"],["flush-element"],["text","react-burger-menu"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["append",["helper",["menu-style-option"],null,[["option","activeOption","action"],[["get",["option"]],["get",["activeOption"]],"changeMenu"]]],false],["text","\\n"]],"locals":["option"]},{"statements":[["text","Right"]],"locals":[]},{"statements":[["text","Left"]],"locals":[]},{"statements":[["text","  "],["open-element","nav",[]],["static-attr","class","sm-item-list"],["flush-element"],["text","\\n    "],["open-element","a",[]],["static-attr","href",""],["flush-element"],["text","\\n      "],["open-element","i",[]],["static-attr","class","fa fa-fw fa-star-o"],["flush-element"],["close-element"],["text","\\n      "],["open-element","span",[]],["flush-element"],["text","Favorites"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","a",[]],["static-attr","href",""],["flush-element"],["text","\\n      "],["open-element","i",[]],["static-attr","class","fa fa-fw fa-bell-o"],["flush-element"],["close-element"],["text","\\n      "],["open-element","span",[]],["flush-element"],["text","Alerts"],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","a",[]],["static-attr","href",""],["flush-element"],["text","\\n      "],["open-element","i",[]],["static-attr","class","fa fa-fw fa-envelope-o"],["flush-element"],["close-element"],["text","\\n      "],["open-element","span",[]],["flush-element"],["text","Messages"],["close-element"],["close-element"],["text","\\n    "],["open-element","a",[]],["static-attr","href",""],["flush-element"],["text","\\n      "],["open-element","i",[]],["static-attr","class","fa fa-fw fa-comment-o"],["flush-element"],["close-element"],["text","\\n      "],["open-element","span",[]],["flush-element"],["text","Comments"],["close-element"],["close-element"],["text","\\n    "],["open-element","a",[]],["static-attr","href",""],["flush-element"],["text","\\n      "],["open-element","i",[]],["static-attr","class","fa fa-fw fa-bar-chart-o"],["flush-element"],["close-element"],["text","\\n      "],["open-element","span",[]],["flush-element"],["text","Analytics"],["close-element"],["close-element"],["text","\\n    "],["open-element","a",[]],["static-attr","href",""],["flush-element"],["text","\\n      "],["open-element","i",[]],["static-attr","class","fa fa-fw fa-newspaper-o"],["flush-element"],["close-element"],["text","\\n      "],["open-element","span",[]],["flush-element"],["text","Reading List"],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/menu-style-option",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Uq+TBFIE",block:'{"statements":[["append",["unknown",["option","text"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/menu-style-option.hbs"}})}),define("dummy/templates/components/side-button",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"WZm70NMy",block:'{"statements":[["yield","default"],["text","\\n"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/side-button.hbs"}})}),define("dummy/templates/components/side-menu-toggle",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"yAP2pt3e",block:'{"statements":[["block",["if"],[["has-block","default"]],null,1,0]],"locals":[],"named":[],"yields":["default"],"blocks":[{"statements":[["text","  "],["open-element","span",[]],["static-attr","class","toggle-bars"],["flush-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","  "],["yield","default"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/side-menu-toggle.hbs"}})}),define("dummy/templates/components/side-menu",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"eI4KBY60",block:'{"statements":[["yield","default"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/side-menu.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var t=document.querySelector('meta[name="dummy/config/environment"]').getAttribute("content"),n=JSON.parse(unescape(t)),l={default:n};return Object.defineProperty(l,"__esModule",{value:!0}),l}catch(e){throw new Error('Could not read config from meta tag with name "dummy/config/environment".')}}),runningTests||require("dummy/app").default.create({name:"ember-side-menu",version:"0.0.14"});