// Import necessary dependencies
const {
  BN,
  constants,
  expectEvent,
  expectRevert,
  time,
} = require("@openzeppelin/test-helpers");

const TokenFactory = artifacts.require("TokenFactory");
const Token = artifacts.require("Token");

module.exports = async function (deployer, network, accounts) {
  if (network == "development") {
    console.log("Token Factory is being deployed...");
    await deployer.deploy(TokenFactory);
    let tokenFactoryInstance = await TokenFactory.deployed();
    console.log(
      "Token Factory has been deployed at address: ",
      tokenFactoryInstance.address
    );
    console.log("Token Factory owner: ", await tokenFactoryInstance.owner());
  } else if ("network == dashboard") {
    console.log("Token is being deployed...");
    await deployer.deploy(TokenFactory);
    let tokenFactoryInstance = await TokenFactory.deployed();
    console.log(
      "Token Factory has been deployed at address: ",
      tokenFactoryInstance.address
    );
    console.log("Token Factory owner: ", await tokenFactoryInstance.owner());
  }
};
