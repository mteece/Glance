Glance
======

Lightweight local storage engine prototype. Uses local storage, serialization. Stores JSON objects.

Getting Started
---------------

* Dependencies on Modernizer, randomUUID, localStorage.

Need some support to abstract it. It is currently rough and still tied to its one time use. Basically make it more flexible. Add Grunt JS, builds, tests, etc. Like to make it function independent of Modernizer and Underscore. Any help is appreciated.

Conceptual
----------

Look at https://github.com/LiosK/UUID.js for UUID

	interface Storage {
		readonly attribute unsigned long length;
		[IndexGetter] DOMString key(in unsigned long index);
		[NameGetter] DOMString getItem(in DOMString key);
		[NameSetter] void setItem(in DOMString key, in DOMString data);
		[NameDeleter] void removeItem(in DOMString key);
		void clear();
	};

Logic is store JSON objects. Serialize in and out. Grab Underscore. Create a catalog object var catalog = {}. Add things by unique id.

	console.log(this.entry());
	console.log(this.entry('abc', 'the title', 'the description'));


Data looks like.

	catalog = {
		'entries': [
			{pk: "7384D2E2-D2D4-4440-BC0A-D1C83A0DCA5E", title: "", description: ""}
			{pk: "7384D2E2-D2D4-4440-BC0A-D1C83A0DCA5E", title: "", description: ""}
		]
	}