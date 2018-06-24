# Route to Remote Angular Module

This project was created to demonstrate how to load remote angular modules dynamically at runtime.
So the idea is to have one host app and multiple plugins(angular modules hosted remotely), 
The host app once it loaded to the browser queries the server for plugins config, located at http://localhost:4200/assets/app-config.json

## Remote plugin configuration:
```json
{
  "name": "TestRemote1Module", // name of the plugin
  // loader settings
  "loader" : { 
	// the path in angular host app, which get created dynamically during angular app initialization
	"path": "test-remote1", 
	// the name of angular module, which should be associated with the path above
	"module": "TestRemote1Module",
	// selector of root component of the module
	"selector": "lib-test-remote1",
	// remote url where the module is located
	"url": "http://localhost:4200/assets/test-remote1/bundles/test-remote1.umd.js",
	// dependencies which are required by the module
	"deps": ["@angular/core", "@angular/common", "@angular/router"]
  }
},
```
	
The project contains... 
 a)main "host" application, which has just one lazy module called "Local Module".
 b)three angular client library projects called test-remote1, test-remote2, test-remote3. Each of the projects have just one regular angular module called like TestRemote1Module.

Local Module has just one component with hard coded links to the remote modules for testing. 

## Building and Running...
1) run 'npm install'
2) run 'ng build test-remote1'
3) run 'ng build test-remote2'
4) run 'ng build test-remote3'
5) run 'ng serve' for a dev server. Navigate to 'http://localhost:4200/'

Hope You'll find this useful. 
WBR, Alex Voitov.




