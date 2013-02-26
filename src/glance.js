// Namespace for Glance.
var Glance = Glance || {};

(function() {

	Glance.init = function() {
		//debugger;
		if (window.localStorage && window.JSON) {
			// window.localStorage is available!
			this.database();
			return true;
		} else {
			console.log('NO');
			// no native support for HTML5 storage :(
			// maybe try dojox.storage or a third-party solution
			return false;
		}
	};

	Glance.catalog = {
		'entries': []
	};

	Glance.entry = function(t, d) {
		var obj = {};
		obj.pk = randomUUID();
		obj.title = t || '';
		obj.description = d || '';
		return obj;
	};
	

	Glance.database = function(){
		//debugger;

		// Retrieve the object from storage
		var retrievedObject = localStorage.getItem('catalog');
		if(retrievedObject) {
			// We have a catalog.
			this.catalog = JSON.parse(retrievedObject);
		} else {
			// We don't have a catalog Put the object into storage.
			localStorage.setItem('catalog', JSON.stringify(this.catalog));
		}
		console.log(this.catalog);
	};

	Glance.clear = function() {
		// debugger;
		if(this.catalog) {
			// Flush it.
			this.catalog.entries = [];
			// Sync the changes with localstorage.
			localStorage.setItem('catalog', JSON.stringify(this.catalog));
		}
	};
	
	Glance.remove = function(entry) {
		//debugger;
		var retrievedObject = {};
		if(entry && this.catalog) {
			var arr = _.without(this.catalog.entries, entry);
			if(arr.length > 0) {
				this.catalog.entries = arr;
				localStorage.setItem('catalog', JSON.stringify(this.catalog));
			}
		}
	};
	
	Glance.add = function(entry) {
		// debugger;
		if(entry && this.catalog) {
			// Push it to the end of the array.
			this.catalog.entries.push(entry);
			// Sync the localStorage.
			localStorage.setItem('catalog', JSON.stringify(this.catalog));
		}
		return entry;
	};

	// Returns the first value that matches all of the key-value pairs
	// Glance.find({pk: "7384D2E2-D2D4-4440-BC0A-D1C83A0DCA5E"});
 	// Glance.find({pk: "7384D2E2-D2D4-4440-BC0A-D1C83A0DCA5E", title: "ABC"});
 	Glance.find = function(props) {
 		var retrievedObject = {};
		if(props && this.catalog){
			retrievedObject = _.findWhere(this.catalog.entries, props);
		}
		return retrievedObject;
	};

	Glance.findAll = function() {
		var retrievedObjects = [];
		if(this.catalog) {
			return this.catalog.entries;
		}
		return retrievedObjects;
	};

	Glance.init();

}());
