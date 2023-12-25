//@ui5-bundle ns/incidents/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"ns/incidents/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(n){"use strict";return n.extend("ns.incidents.Component",{metadata:{manifest:"json"}})});
},
	"ns/incidents/i18n/i18n.properties":'# This is the resource bundle for ns.incidents\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Incident-Management\n\n#YDES: Application description\nappDescription=A Fiori application.\n\nflpTitle=Incident Management\n',
	"ns/incidents/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"ns.incidents","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.12.1","toolsId":"c8a865dc-8dfb-4b63-9980-5c6b45c1d0e4"},"dataSources":{"mainService":{"uri":"odata/v4/processor/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"incidents-display":{"semanticObject":"incidents","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.3","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ns.incidents.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"pattern":":?query:","name":"IncidentsList","target":"IncidentsList"},{"pattern":"Incidents({key}):?query:","name":"IncidentsObjectPage","target":"IncidentsObjectPage"}],"targets":{"IncidentsList":{"type":"Component","id":"IncidentsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Incidents","variantManagement":"Page","navigation":{"Incidents":{"detail":{"route":"IncidentsObjectPage"}}},"initialLoad":"Enabled","controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"IncidentsObjectPage":{"type":"Component","id":"IncidentsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Incidents","controlConfiguration":{"conversation/@com.sap.vocabularies.UI.v1.LineItem#i18nCoversation":{"tableSettings":{"type":"ResponsiveTable","creationMode":{"name":"Inline"}}}}}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"incidents"}}'
}});
