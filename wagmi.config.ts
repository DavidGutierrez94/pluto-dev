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
            [avalancheFuji.id]: '0x373Abf195913E6642f8460A5b807022a58dFA311',
            
          },
        },
      ],
    }),
    react(),


  ],
})
