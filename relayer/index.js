const dotenv = require('dotenv');
const { Web3 } = require('web3');
const { abi: voucherAbi } = require('./voucherAbi.json');
const { abi: factoryAbi } = require('./factoryAbi.json');
const cors = require('cors');
const express = require('express');

dotenv.config();

const app = express();
const port = 3002;

app.use(express.json()); // Parse JSON request bodies
app.use(cors());

const alchemyUrl = process.env.ALCHEMY_URL;
const privateKey = process.env.PRIVATE_KEY;
const factoryAddress = process.env.CONTRACT_ADDRESS;

const web3 = new Web3(alchemyUrl);
const from = web3.eth.accounts.privateKeyToAccount(privateKey).address;
const factoryContract = new web3.eth.Contract(factoryAbi, factoryAddress);

async function getVoucherAddressByName(name) {
  try {
    const voucherAddress = await factoryContract.methods.getVoucherAddressByName(name).call();
    console.log(`Voucher address for ${name}: ${voucherAddress}`);
    return voucherAddress;
  } catch (error) {
    console.error(`Error getting voucher address for ${name}:`, error);
    throw error;
  }
}

async function claimFunction(code, dest, voucherAddress) {
  console.log('code:', code);
  console.log('dest:', dest);
  console.log('voucherAddress:', voucherAddress);

  const voucherContract = new web3.eth.Contract(voucherAbi, voucherAddress);
  const claimData = voucherContract.methods['claimVoucher(string,address)'](code, dest).encodeABI();
  const gasPrice = await web3.eth.getGasPrice();

  const transaction = {
    from,
    to: voucherAddress,
    data: claimData,
    gas: 300000,
    gasPrice: gasPrice,
  };

  const signedTx = await web3.eth.accounts.signTransaction(transaction, privateKey);
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

  return receipt;
}

// Endpoint API for claiming the voucher
app.post('/claim', async (req, res) => {
  const { code, name, dest } = req.body;
  console.log('Request body:', req.body);

  if (!code || !name || !dest) {
    return res.status(400).json({ message: 'Invalid request. Code, name, and dest are required.' });
  }

  try {
    const voucherAddress = await getVoucherAddressByName(name);
    if (!voucherAddress || voucherAddress === '0x0000000000000000000000000000000000000000') {
      return res.status(404).json({ message: 'Voucher not found' });
    }
    const receipt = await claimFunction(code, dest, voucherAddress);
    res.status(200).json({ message: 'Claim successful', receipt });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Claim failed', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
