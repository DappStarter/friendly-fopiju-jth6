require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain social idea ensure outer ghost'; 
let testAccounts = [
"0xbb58b9e7bfa1a21a6578b1f3703b5bc84059ea508834a9a96e00af810a95a363",
"0x7df597f9da7cb0d8f1c05f954ecb007f84691bcf5dfc209a89ad01677229a95d",
"0x96f1afd65df1d668d04b51a561a1890ac820771e895e4afa916213f1d0e351e5",
"0xb27fd02069cf4f80692adcab71f983fa83343e0f7e72b3420616ec6d214d6aca",
"0x8d722a397dcf62d181ae63b1a106c5e03e707709502e3b0aa6155c3b0752a0c9",
"0x9f7f3f240b6039f716e11d02dc89ee3a3f50d47800ed2fee211f44b9d59bf83f",
"0x08fac0965ba29c70e99b5917def96a76c4f1396c2b0989bea81ea123bd0fc455",
"0x0d0c821520544407e0d35b77149a3d9aed6f7a2b073de0edbf1da44df3b71f88",
"0x89c8aaeb393afb5acabd4b08ecaff7c605ae373a1c8c18089ed22aeb79e6b829",
"0x80ef7360df9fa01e0b8ede734be0bf474088da29071ad138292c70bce2f68fdc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


