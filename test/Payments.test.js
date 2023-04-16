const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Payments', function () {
  let acc1;
  let acc2;
  let payments;
  beforeEach(async function () {
    [acc1, acc2] = await ethers.getSigners();
    const Payments = await ethers.getContractFactory('Payments', acc1);
    payments = await Payments.deploy();
    await payments.deployed();
    console.log(payments.address);
  });

  it('should be deployed', async function () {
    expect(payments.address).to.be.properAddress;
    console.log('success!');
  });

  it('should have 0 ether by default', async function () {
    const balance = await payments.currentBalance();
    expect(balance).to.eq(0);
    console.log(balance);
  });

  it('should be possib le to send funds', async function () {
    const tx = await payments.pay('hello from hardhat', { value: 100 });
    await tx.wait();

    const balance = await payments.currentBalance();
    console.log(acc1);
  });
});
