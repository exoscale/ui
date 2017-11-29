export default [
{"id":"host","type":"schema","links":{"self":"http:\/\/192.168.64.190:8080\/v3\/schemas\/host","collection":"http:\/\/192.168.64.190:8080\/v3\/hosts"},"actions":{},"pluralName":"hosts","resourceFields":{"agentId":{"type":"reference[agent]","create":false,"update":false,"nullable":true,"maxLength":255},"agentState":{"type":"string","create":false,"update":false,"nullable":true,"maxLength":128},"clusterId":{"type":"reference[cluster]","create":true,"update":false,"maxLength":255},"created":{"type":"date","create":false,"update":false,"nullable":true,"maxLength":255},"description":{"type":"string","create":true,"update":true,"nullable":true,"maxLength":1024},"externalId":{"type":"string","create":false,"update":false,"nullable":true,"maxLength":128},"hostTemplateId":{"type":"reference[hostTemplate]","create":true,"update":false,"nullable":true,"maxLength":255},"id":{"type":"int","create":false,"update":false,"nullable":true},"kind":{"type":"string","create":false,"update":false,"nullable":true,"maxLength":255},"localStorageMb":{"type":"int","create":true,"update":true,"nullable":true,"maxLength":255},"memory":{"type":"int","create":true,"update":true,"nullable":true,"maxLength":255},"milliCpu":{"type":"int","create":true,"update":true,"nullable":true,"maxLength":255},"name":{"type":"string","create":true,"update":true,"nullable":true},"removeTime":{"type":"date","create":false,"update":false,"nullable":true,"maxLength":255},"removed":{"type":"date","create":false,"update":false,"nullable":true,"maxLength":255},"stackId":{"type":"reference[stack]","create":true,"update":false,"nullable":true,"maxLength":255},"state":{"type":"enum","create":false,"update":false,"maxLength":128,"options":["activating","active","creating","deactivating","error","erroring","inactive","provisioning","removed","removing","requested","updating"]},"uuid":{"type":"string","create":false,"update":false,"nullable":true,"maxLength":128},"transitioning":{"type":"enum","create":false,"update":false,"options":["yes","no","error"]},"transitioningMessage":{"type":"string","create":false,"update":false,"nullable":true},"info":{"type":"json","create":false,"update":false},"hostname":{"type":"string","create":true,"update":false,"required":true},"driver":{"type":"string","create":true,"update":false},"agentIpAddress":{"type":"string","create":false,"update":false,"nullable":true},"instanceIds":{"type":"array[reference[instance]]","create":false,"update":false},"imported":{"type":"boolean","create":false,"update":false,"default":false},"labels":{"type":"map[string]","create":true,"update":true},"publicEndpoints":{"type":"array[publicEndpoint]","create":false,"update":false,"nullable":true},"authCertificateAuthority":{"type":"string","create":true,"update":false,"nullable":true},"authKey":{"type":"string","create":true,"update":false,"nullable":true},"engineInstallUrl":{"type":"string","create":true,"update":false,"nullable":true},"dockerVersion":{"type":"string","create":true,"update":false,"nullable":true},"engineOpt":{"type":"map[string]","create":true,"update":false,"nullable":true},"engineInsecureRegistry":{"type":"array[string]","create":true,"update":false,"nullable":true},"engineRegistryMirror":{"type":"array[string]","create":true,"update":false,"nullable":true},"engineLabel":{"type":"map[string]","create":true,"update":false,"nullable":true},"engineStorageDriver":{"type":"string","create":true,"update":false,"nullable":true},"engineEnv":{"type":"map[string]","create":true,"update":false,"nullable":true},"amazonec2Config":{"type":"amazonec2Config","create":true,"update":true,"nullable":true},"azureConfig":{"type":"azureConfig","create":true,"update":true,"nullable":true},"digitaloceanConfig":{"type":"digitaloceanConfig","create":true,"update":true,"nullable":true},"packetConfig":{"type":"packetConfig","create":true,"update":true,"nullable":true}},"collectionFilters":{"agentId":{"modifiers":["eq","ne","null","notnull"]},"agentState":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"clusterId":{"modifiers":["eq","ne","null","notnull"]},"created":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"creatorId":{"modifiers":["eq","ne","null","notnull"]},"description":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"externalId":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"hostTemplateId":{"modifiers":["eq","ne","null","notnull"]},"id":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"kind":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"localStorageMb":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"memory":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"milliCpu":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"name":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"removeAfter":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"removeTime":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"removed":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"revision":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"stackId":{"modifiers":["eq","ne","null","notnull"]},"state":{"modifiers":["eq","ne","null","notnull"]},"uri":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"uuid":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]}},"resourceActions":{"evacuate":{"input":null,"output":"host"},"provision":{"input":null,"output":"host"},"dockersocket":{"input":null,"output":"hostAccess"},"activate":{"input":null,"output":"host"},"update":{"input":null,"output":"host"},"create":{"input":null,"output":"host"},"error":{"input":null,"output":"host"},"remove":{"input":null,"output":"host"},"deactivate":{"input":null,"output":"host"}},"collectionActions":{},"collectionFields":{},"resourceMethods":["GET","PUT","DELETE"],"collectionMethods":["GET","POST"],"baseType":"schema"},
{"id":"hostTemplate","type":"schema","links":{"self":"http:\/\/192.168.64.190:8080\/v3\/schemas\/hosttemplate","collection":"http:\/\/192.168.64.190:8080\/v3\/hosttemplates"},"actions":{},"pluralName":"hostTemplates","resourceFields":{"clusterId":{"type":"reference[cluster]","create":true,"update":false,"maxLength":255},"created":{"type":"date","create":false,"update":false,"nullable":true,"maxLength":255},"description":{"type":"string","create":true,"update":true,"nullable":true,"maxLength":1024},"driver":{"type":"string","create":true,"update":false,"required":true,"maxLength":255},"flavorPrefix":{"type":"string","create":true,"update":false,"nullable":true,"maxLength":255},"id":{"type":"int","create":false,"update":false,"nullable":true},"kind":{"type":"string","create":false,"update":false,"nullable":true,"maxLength":255},"name":{"type":"string","create":true,"update":true,"unique":true,"required":true,"maxLength":255},"removeTime":{"type":"date","create":false,"update":false,"nullable":true,"maxLength":255},"removed":{"type":"date","create":false,"update":false,"nullable":true,"maxLength":255},"state":{"type":"enum","create":false,"update":false,"maxLength":128,"options":["active","creating","removed","removing","requested"]},"uuid":{"type":"string","create":false,"update":false,"nullable":true,"maxLength":128},"transitioning":{"type":"enum","create":false,"update":false,"options":["yes","no","error"]},"transitioningMessage":{"type":"string","create":false,"update":false,"nullable":true},"secretValues":{"type":"map[json]","create":true,"update":false,"readOnCreateOnly":true},"publicValues":{"type":"map[json]","create":true,"update":false}},"collectionFilters":{"clusterId":{"modifiers":["eq","ne","null","notnull"]},"created":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"creatorId":{"modifiers":["eq","ne","null","notnull"]},"description":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"driver":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"flavorPrefix":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"id":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"kind":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"name":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"removeTime":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"removed":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"state":{"modifiers":["eq","ne","null","notnull"]},"uuid":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]}},"resourceActions":{"create":{"input":null,"output":"hostTemplate"},"remove":{"input":null,"output":"hostTemplate"}},"collectionActions":{},"collectionFields":{},"resourceMethods":["GET","PUT","DELETE"],"collectionMethods":["GET","POST"],"baseType":"schema"},
{"id":"machineDriver","type":"schema","links":{"self":"http:\/\/192.168.64.190:8080\/v3\/schemas\/machinedriver","collection":"http:\/\/192.168.64.190:8080\/v3\/machinedrivers"},"actions":{},"pluralName":"machineDrivers","resourceFields":{"created":{"type":"date","create":false,"update":false,"nullable":true,"maxLength":255},"description":{"type":"string","create":true,"update":true,"nullable":true,"maxLength":1024},"id":{"type":"int","create":false,"update":false,"nullable":true},"kind":{"type":"string","create":false,"update":false,"nullable":true,"maxLength":255},"name":{"type":"string","create":false,"update":false,"nullable":true,"maxLength":255},"removeTime":{"type":"date","create":false,"update":false,"nullable":true,"maxLength":255},"removed":{"type":"date","create":false,"update":false,"nullable":true,"maxLength":255},"state":{"type":"enum","create":false,"update":false,"maxLength":128,"options":["activating","active","creating","deactivating","error","erroring","inactive","removed","removing","requested","updating"]},"uuid":{"type":"string","create":false,"update":false,"nullable":true,"maxLength":128},"transitioning":{"type":"enum","create":false,"update":false,"options":["yes","no","error"]},"transitioningMessage":{"type":"string","create":false,"update":false,"nullable":true},"url":{"type":"string","create":true,"update":true,"required":true},"externalId":{"type":"string","create":true,"update":true,"nullable":true},"builtin":{"type":"boolean","create":true,"update":false},"defaultActive":{"type":"boolean","create":false,"update":false},"activateOnCreate":{"type":"boolean","create":true,"update":false},"checksum":{"type":"string","create":true,"update":true,"nullable":true},"uiUrl":{"type":"string","create":true,"update":true,"nullable":true}},"collectionFilters":{"created":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"creatorId":{"modifiers":["eq","ne","null","notnull"]},"description":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"id":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"kind":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"md5checksum":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"name":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"removeTime":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"removed":{"modifiers":["eq","ne","lt","lte","gt","gte","null","notnull"]},"state":{"modifiers":["eq","ne","null","notnull"]},"uri":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]},"uuid":{"modifiers":["eq","ne","prefix","like","notlike","null","notnull"]}},"resourceActions":{"reactivate":{"input":null,"output":"machineDriver"},"activate":{"input":null,"output":"machineDriver"},"update":{"input":null,"output":"machineDriver"},"create":{"input":null,"output":"machineDriver"},"error":{"input":null,"output":"machineDriver"},"remove":{"input":null,"output":"machineDriver"},"deactivate":{"input":null,"output":"machineDriver"}},"collectionActions":{},"collectionFields":{},"resourceMethods":["GET","PUT","DELETE"],"collectionMethods":["GET","POST"],"baseType":"schema"},
]