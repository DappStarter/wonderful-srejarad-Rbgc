require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar purpose include clip obscure toss'; 
let testAccounts = [
"0xa3e5e7f74dccfe507b7d6bbf384f8ce5ea7e93d5d02f792bd5b09f2b65cd2716",
"0xf245b077094cb5dfd0b85cb823f270832e836e3e3918719dc8bce4676a066be0",
"0x4546237095cc5b42b10a7bcc8b866db2f13b4d82b6021fa12574bd19e8f00012",
"0x0c20596d60091ad5f3092cd6c4d70a719e2491896e5db3177e578f0087b370ca",
"0x3d0e29a83e4dc87d6b65bbb59195d47e79415a3eefd1d8412881cfa8133d1dc8",
"0x801028586e4df1c731221a31be6cf015c8f83bc2d7ece8153a638d2fb2d08309",
"0xa6c695bd9f2801c8d0877c3a7ecc1b6620263bbdfe6a00a3075668fc7bb8ac0f",
"0xa364b3b71dc06f00d8cab14a50264e31d1e05e8cd4a5ac5162862489ee41c376",
"0x8fd9c53c9505130699e4552074d7757b99db994b6bad51ca8f13b60190df8705",
"0x27562c6a09cfb2c6225fca6d8abb9aea63dd1fd1582e531c3493b5e359908db6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

