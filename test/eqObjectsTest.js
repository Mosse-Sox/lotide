const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {

  it('returns true if two objects are the same without arrays as values', () => {
    const fruitObject = { type: "strawberry", size: "regular" };
    const anotherFruitObject = { size: "regular", type: "strawberry" };

    assert.strictEqual(eqObjects(fruitObject, anotherFruitObject), true);
  });

  it('returns false when two objects are not the same, without arrays for values', () => {
    const fruitObject = { type: "strawberry", size: "regular" };
    const differentFruitObject = { size: "regular", type: "strawberry", juiciness: "juicy" };

    assert.strictEqual(eqObjects(fruitObject, differentFruitObject), false);
  });

  it('should return true even if some values are arrays, as long as the objects have the same values', () => {
    const pantsObject = { fabric: ["jean", "cotton"], length: 30 };
    const anotherPantsObject = { length: 30, fabric: ["jean", "cotton"] };

    assert.strictEqual(eqObjects(pantsObject, anotherPantsObject), true);
  });

  it('returns false when two objects are not the same, even when some values are arrays', () => {
    const pantsObject = { fabric: ["jean", "cotton"], length: 30 };
    const differentPantsObject = { fabric: ["jean", "cotton"], length: "30", brand: "wrangler" };

    assert.strictEqual(eqObjects(pantsObject, differentPantsObject), false);
  });

});