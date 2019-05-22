const assert = require('assert');

describe('Ethereum provider', function() {
  it('Should return the accounts', async function() {
    const accounts = await ethereum.send('eth_accounts');
    assert(accounts.length !== 0, 'No account was returned');
  });
});

contract('Greeter', function() {
  it('Should give the correct greeting', async function() {
    const Greeter = artifacts.require('Greeter');
    const greeter = await Greeter.new('Hello, Buidler!');

    assert.equal(await greeter.greet(), 'Hello, Buidler!');
  });
});
