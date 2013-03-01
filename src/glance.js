/*
 * typeahead.js
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

var Glance = (function() {
	var ds = window.localStorage, methods;
	
	function Glance() {
		this.storage = 'store';
		this.data = { 'entries': [] };
		if (window.localStorage && window.JSON) {
			var retrievedObject = localStorage.getItem(this.storage);
			if(retrievedObject) {
				this.data = decode(retrievedObject);
			} else {
				// We don't have a 'key' so put the object into DOM storage.
				ds.setItem(this.storage, encode(this.data));
			}
		}
	}
	
	if ((window.localStorage && window.JSON) && window._) {
		methods = {
			/* Private methods. */
			
			_fetch: function(obj) {
				var idx = _.indexOf(this.data.entries, obj);
				return idx;
			},
			
			_fetchById: function(uuid) {
				return _.findWhere(this.data.entries, {id: uuid});
			},
			
			/* Public methods. */
			
			save: function(obj) {
				if(obj.id) {
					var index = this._fetch(obj);
					if(index >= 0) {
						this.data.entries[index] = obj;
						localStorage.setItem(this.storage, encode(this.data));
						return obj;
					} else {
						return false;
					}
				} else {
					obj.id = UUID.generate();
					this.data.entries.push(obj);
					localStorage.setItem(this.storage, encode(this.data));
					return obj;
				}		
			},
			
			remove: function(obj) {
				var arr = _.without(this.data.entries, _.findWhere(this.data.entries, obj));
				if(arr.length > 0) {
					this.data.entries = arr;
					localStorage.setItem(this.storage, encode(this.data));
				}
			},
			
			select: function(props) {
				return _.findWhere(this.data.entries, props);
			},
			
			selectAll: function() {
				return this.data.entries;
			},
			
			count: function() {
				return this.data.entries.length;
			},
			
			flush: function() {
				this.data = { 'entries': [] };
				localStorage.setItem(this.storage, encode(this.data));
			}
		};
	} else {
		methods = {
			save: function() {},
			remove: function() {},
			select: function() {},
			selectAll: function() {},
			count: function() {},
			flush: function() {}
		};
	}
	
	_.extend(Glance.prototype, methods);
	
	return Glance;
	
	function encode(val) {
		return JSON.stringify(val);
	}
	
	function decode(val) {
		return JSON.parse(val);
	}
})();