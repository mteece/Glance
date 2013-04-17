Glance
======

Lightweight local storage engine. Uses local storage, serialization to store JSON objects, find, and persist them.

Getting Started
---------------

Load the uncompressed or minified file.

```html
<script src="../dist/Glance.js"></script>
```

```html
<script src="../dist/Glance.min.js"></script>
```


Glance has dependencies on UUID.js, Underscore.js, and browser support for localStorage. 

* [UUID.js](https://github.com/LiosK/UUID.js)
* [Underscore.js](http://underscorejs.org/)

Usage
-----

Roadmap
-------

Interface for localStorage.

```
interface Storage {
	readonly attribute unsigned long length;
	[IndexGetter] DOMString key(in unsigned long index);
	[NameGetter] DOMString getItem(in DOMString key);
	[NameSetter] void setItem(in DOMString key, in DOMString data);
	[NameDeleter] void removeItem(in DOMString key);
	void clear();
	};
```

Conceptually the idea behind Glance is to store and persist JSON objects in localStorage with some added features to add, find, and remove them. 

JSON is serialized in/out and Underscore does a lot of the collection work. Glance is ideal for rapid prototypes, or caching for example.

Glance at its base is a collection of JSON objects. Each with unique identitfiers placed into an array, that is then added to a JSON object. Using the key/value pairs of localStorage the **key** *store* then uses **value** of the *entries* object.

```javascript
{"entries":
	[
	{"title":"IOS Programming","description":"A book about IOS stuff.","id":"0e636a7c-7a5c-4f43-a8d7-4b3c2ab72aad"},
    {"title":"Overdosed America","description":"A book about drugs in the USA.","id":"3df727d0-ac67-4908-a5ab-636c0b06a3cf"}
	]
}
```

Add some more [Jasmine](http://pivotal.github.io/jasmine/) unit tests since they are needed.

Usage
-----

In the *test* folder there are [examples](https://github.com/mteece/Glance/blob/master/test/example.html) to get started. There are also [unit tests](https://github.com/mteece/Glance/blob/master/test/test-spec.js) that have some more example usage.


```javascript
g = new Glance();
g.save({title: 'IOS Programming', description: 'A book about IOS stuff.'});
g.save({title: 'Overdosed America', description:'A book about drugs in the USA.'});
g.save({title: 'The Happiness Project', description:'A book about happiness.'});
g.select({title: 'The Happiness Project'});
```

Functions:

* Save()
 * save(JSON Object);
 * Saves the JSON object to the collection. Adding a unique indentitfier to the JSON object.
 * Returns false or the JSON object.

* Remove()
 * remove(JSON Object);
 * Goes through the *entries* collection and removes the first value that matches all of the key-value pairs listed in properties.
 * Returns nothing.
 
* Select()
 * select(JSON Object);
 * Looks through the *entries* and returns the first value that matches all of the key-value pairs listed in properties.
 * Returns null or JSON object that matches.
 
* SelectAll()
 * selectAll();
 * Returns the entire *entries* array.
 * Returns array[].
 
* Count()
 * count();
 * Returns the number of items in the collection.
 * Returns 0 or number.

* Flush()
 * flush;
 * Removes all items from the *entries* collection.
 * Returns nothing.
 

Source
------

Some useful [Grunt](http://gruntjs.com/) commands.

```
$ grunt
$ grunt jasmine
```