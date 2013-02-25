Glance
======

Lightweight local storage engine prototype. Uses local storage, serialization. Stores JSON objects.

Getting Started
---------------

* Dependencies on Modernizer, randomUUID, Underscore, and localStorage.

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

Usage
-----

How it works currently. Requires jQuery, Modernizer, randomUUID, Underscore.

	/* Main.js */
	$(document).ready(function() {
	  // Handler for .ready() called.

	  	// For demo purposes we flush the data.
	  	// Glance.clear();
	  	if(Glance.catalog.entries.length <= 0) {
			Glance.add(Glance.entry('IOS Programming', 'A book about IOS stuff.'));
			Glance.add(Glance.entry('Overdosed America', 'A book about drugs in the USA.'));
			Glance.add(Glance.entry('The Happiness Project', 'A book about happiness.'));
		}

		var books = Glance.findAll();
		var len = books.length;
		var cat = $('.catalog');
		if(len > 0) {
			_.each(books, function(element, index, list){
				cat.append(
		    	$('<li>').append(
		        $('<a>').attr('href','/detail/' + element.pk).append(
		            $('<span>').attr('class', 'tab').append(element.title)
		)));   
			});
		}
	});
