import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { erc20Abi } from 'viem'
import { plutoAbi } from './abi/abi'
import {avalancheFuji } from 'wagmi/chains'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [    {
    name: 'erc20',
    abi: erc20Abi,
  },
{
  name: 'pluto', 
  abi: plutoAbi,
}],
  plugins: [
    etherscan({
      apiKey: process.env.ETHERSCAN_API_KEY!,
      chainId: avalancheFuji.id,
      contracts: [
        {
          name: 'EnsRegistry',
          address: {
            [avalancheFuji.id]: '0x6aE890e93b43FE5549DB21b857d3e698c4ca7A71',
            
          },
        },
      ],
    }),
    react(),


  ],
})
