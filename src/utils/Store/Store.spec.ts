import Store from './Store';
import chai, { assert } from 'chai';
import spies from 'chai-spies';
const expect = require('chai').expect;

describe('utils/Store', () => {
  it('should set state', () => {
    const store = new Store({});
    store.set('userId', 123);
    assert.deepEqual(store.getState(), { userId: 123 });
  });
  it('should emit event after store was update', () => {
    const store = new Store({ userId: -1 });
    chai.use(spies);
    const spyAgain = chai.spy();

    store.on('EVENT_UPDATE', spyAgain);

    store.set('userId', 123);
    //spyAgain.should.have.been.called();
    expect(spyAgain).to.have.been.called();
    expect(spyAgain).to.have.been.called.with();
  });
  it('should update store', () => {
    const store = new Store({ userId: -1 });
    store.set('userId', 123);

    assert.deepEqual(store.getState(), { userId: 123 });
  });
  it('should clean store', () => {
    const store = new Store({ userId: -1 });
    store.removeState();

    assert.deepEqual(store.getState(), {});
  });
});
