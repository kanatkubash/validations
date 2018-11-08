const { Base } = require('../Base');
const canDo = require('../canDo').default;
const { expect } = require('chai');

class TestClass extends Base {
  constructor() {
    super();
    this.testProperty = 1;
  }

  @canDo('testProperty')
  testMethod() {
    return 'ok';
  }
}

describe('canDo', () => {
  it('should pass', () => {
    var testClass = new TestClass();
    testClass.testProperty = 100;
    var result = testClass.testMethod();
    expect(result).to.be.eql('ok');
    expect(testClass.warning).to.be.eql('');
  });
  it('should warn', () => {
    var testClass = new TestClass();
    testClass.testProperty = 10;
    testClass.testMethod();
    expect(testClass.warning).to.be.eql('warning: 10 not 100');
    testClass.testProperty = 20;
    testClass.testMethod();
    expect(testClass.warning).to.be.eql('warning: 20 not 100');
  });
});
