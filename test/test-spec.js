/**
describe("An example suite", function() {
  it("contains spec with an expectation", function() {
	expect(true).toBe(true);
  });
});  
*/

describe('Glance', function() {
	var ds = window.localStorage, g;
	
	beforeEach(function() {
		g = new Glance();
		
		g.save({title: 'IOS Programming', description: 'A book about IOS stuff.'});
		g.save({title: 'Overdosed America', description:'A book about drugs in the USA.'});
		g.save({title: 'The Happiness Project', description:'A book about happiness.'});
		
		spyOn(g, 'save').andCallThrough();
	});
	
	afterEach(function() {
		ds.clear();
	});
	
	describe("#glance", function() {
		it('should return true as the storage should exist', function() {
			expect(_.isObject(g)).toBe(true);
		});
	});
	
	describe('#save', function() {
		it('should return false when saving', function() {
			var obj = {id: '632E9E77-1579-458D-95D5-8B93A4D67C1C', name: 'Matt'};
			var result = g.save(obj);
			expect(result).toBe(false);
			expect(g.save.mostRecentCall.args[0]).toEqual(obj);
		});
		
		it('should return result(s) when saving', function() {
			expect( g.selectAll().length === 3 ? true : false ).toBe(true);
		});
		
		it('should return count() when saving', function() {
			expect( g.count() === 3 ? true : false ).toBe(true);
		});
	});
	
	describe('#remove', function() {
		it('should return count() when removing', function() {
			expect( g.count() === 3 ? true : false ).toBe(true);
			g.remove({title:'The Happiness Project'});
			expect( g.count() === 2 ? true : false ).toBe(true);
		});
	});
	
	describe('#select', function() {
		it('should return true when selecting', function() {
			expect( g.select({title: 'The Happiness Project'}) ? true : false).toBe(true);
		});
	});
	
	describe('#flush', function() {
		it('should return count() when flushing', function() {
			g.flush();
			expect( g.count() === 0 ? true : false).toBe(true);
		});
	});
});