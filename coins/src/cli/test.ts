import {getPairPrices} from "../adapters/lps/uniswap/uniswap"

async function main() {
    await getPairPrices("bsc", "0xca143ce32fe78f1f7019d7d551a6402fc5350c73", "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2")
}
main()