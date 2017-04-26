let Shape = require('@alejandro-carlos-samuel/ull-shape');
let Triangle = require('../lib/triangle.js');

describe("Shape", function() {
  it("Se crea correctamente el objeto Shape", function() {
    let a = new Shape({ width: 100, height: 50 }, 'Triangle');
    a.should.not.undefined();
  })
});

describe("Triangle", function() {
  it("Se crea correctamente el objeto Triangle", function() {
    let a = new Triangle({ width: 100, height: 50 });
    a.should.not.undefined();
  })
});

describe("getArea", function() {
  it("Se calcula correctamente el área usando Shape", function() {
    let a = new Shape({ width: 100, height: 50 }, 'Triangle');
    let s = a.getArea();
    s.should.match(2500);
  })
  it("Se calcula correctamente el área usando Triangle", function() {
    let a = new Triangle({ width: 200, height: 200 });
    let s = a.getArea();
    s.should.match(20000);
  })
});