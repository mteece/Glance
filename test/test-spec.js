describe("An example suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("Glance object suite", function() {
  it("contains spec with an expectation", function() {
	
	expect(_.isObject(Glance)).toBe(true);
  });
});


describe("Glance Add suite", function() {
  it("contains spec with an expectation", function() {
    ///expect(true).toBe(true);
	
	if(Glance.catalog.entries.length <= 0) {
		Glance.add(Glance.entry('IOS Programming', 'A book about IOS stuff.'));
		Glance.add(Glance.entry('Overdosed America', 'A book about drugs in the USA.'));
		Glance.add(Glance.entry('The Happiness Project', 'A book about happiness.'));
	}
	
	expect( Glance.catalog.entries.length > 0 ? true : false ).toBe(true);
	
  });
});