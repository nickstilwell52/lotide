const tail = require('../tail')
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse','Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']),['Lighthouse','Labs']);
  });
  it("returns ['Lighthouse','Yo Yo'] for ['Labs', 'Lighthouse', 'Yo Yo']", () => {
    assert.deepEqual(tail(['Labs', 'Lighthouse', 'Yo Yo']),['Lighthouse','Yo Yo']);
  });
});