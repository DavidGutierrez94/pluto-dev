import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EnsRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const ensRegistryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_token', internalType: 'address', type: 'address' },
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'numberOfTrades', internalType: 'uint256', type: 'uint256' },
      { name: 'estimatedROI', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createProposal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'proposals',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'numberOfTrades', internalType: 'uint256', type: 'uint256' },
      { name: 'estimatedROI', internalType: 'uint256', type: 'uint256' },
      { name: 'status', internalType: 'enum PLUTODAO.Status', type: 'uint8' },
      { name: 'votesForYes', internalType: 'uint256', type: 'uint256' },
      { name: 'votesForNo', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'shares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalShares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_proposalId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_vote',
        internalType: 'enum PLUTODAO.VotingOptions',
        type: 'uint8',
      },
    ],
    name: 'vote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

/**
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const ensRegistryAddress = {
  43113: '0x373Abf195913E6642f8460A5b807022a58dFA311',
} as const

/**
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const ensRegistryConfig = {
  address: ensRegistryAddress,
  abi: ensRegistryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// pluto
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const plutoAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_token', internalType: 'address', type: 'address' },
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'numberOfTrades', internalType: 'uint256', type: 'uint256' },
      { name: 'estimatedROI', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createProposal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proposalCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'proposals',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'proposer', internalType: 'address', type: 'address' },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'numberOfTrades', internalType: 'uint256', type: 'uint256' },
      { name: 'estimatedROI', internalType: 'uint256', type: 'uint256' },
      { name: 'status', internalType: 'enum PLUTODAO.Status', type: 'uint8' },
      { name: 'votesForYes', internalType: 'uint256', type: 'uint256' },
      { name: 'votesForNo', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'shares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalShares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_proposalId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_vote',
        internalType: 'enum PLUTODAO.VotingOptions',
        type: 'uint8',
      },
    ],
    name: 'vote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useReadEnsRegistry = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useReadEnsRegistryOwner = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"proposalCount"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useReadEnsRegistryProposalCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'proposalCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"proposals"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useReadEnsRegistryProposals = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
  functionName: 'proposals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"shares"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useReadEnsRegistryShares = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
  functionName: 'shares',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"token"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useReadEnsRegistryToken = /*#__PURE__*/ createUseReadContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"totalShares"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useReadEnsRegistryTotalShares =
  /*#__PURE__*/ createUseReadContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'totalShares',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useWriteEnsRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"createProposal"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useWriteEnsRegistryCreateProposal =
  /*#__PURE__*/ createUseWriteContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'createProposal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useWriteEnsRegistryDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useWriteEnsRegistryRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useWriteEnsRegistryTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"vote"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useWriteEnsRegistryVote = /*#__PURE__*/ createUseWriteContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
  functionName: 'vote',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useSimulateEnsRegistry = /*#__PURE__*/ createUseSimulateContract({
  abi: ensRegistryAbi,
  address: ensRegistryAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"createProposal"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useSimulateEnsRegistryCreateProposal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'createProposal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useSimulateEnsRegistryDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useSimulateEnsRegistryRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useSimulateEnsRegistryTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensRegistryAbi}__ and `functionName` set to `"vote"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useSimulateEnsRegistryVote =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    functionName: 'vote',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useWatchEnsRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensRegistryAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Avalanche Fuji Snow Scan__](https://testnet.snowscan.xyz/address/0x373Abf195913E6642f8460A5b807022a58dFA311)
 */
export const useWatchEnsRegistryOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ensRegistryAbi,
    address: ensRegistryAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plutoAbi}__
 */
export const useReadPluto = /*#__PURE__*/ createUseReadContract({
  abi: plutoAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"owner"`
 */
export const useReadPlutoOwner = /*#__PURE__*/ createUseReadContract({
  abi: plutoAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"proposalCount"`
 */
export const useReadPlutoProposalCount = /*#__PURE__*/ createUseReadContract({
  abi: plutoAbi,
  functionName: 'proposalCount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"proposals"`
 */
export const useReadPlutoProposals = /*#__PURE__*/ createUseReadContract({
  abi: plutoAbi,
  functionName: 'proposals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"shares"`
 */
export const useReadPlutoShares = /*#__PURE__*/ createUseReadContract({
  abi: plutoAbi,
  functionName: 'shares',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"token"`
 */
export const useReadPlutoToken = /*#__PURE__*/ createUseReadContract({
  abi: plutoAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"totalShares"`
 */
export const useReadPlutoTotalShares = /*#__PURE__*/ createUseReadContract({
  abi: plutoAbi,
  functionName: 'totalShares',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plutoAbi}__
 */
export const useWritePluto = /*#__PURE__*/ createUseWriteContract({
  abi: plutoAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"createProposal"`
 */
export const useWritePlutoCreateProposal = /*#__PURE__*/ createUseWriteContract(
  { abi: plutoAbi, functionName: 'createProposal' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"deposit"`
 */
export const useWritePlutoDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: plutoAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWritePlutoRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: plutoAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWritePlutoTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: plutoAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"vote"`
 */
export const useWritePlutoVote = /*#__PURE__*/ createUseWriteContract({
  abi: plutoAbi,
  functionName: 'vote',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plutoAbi}__
 */
export const useSimulatePluto = /*#__PURE__*/ createUseSimulateContract({
  abi: plutoAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"createProposal"`
 */
export const useSimulatePlutoCreateProposal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plutoAbi,
    functionName: 'createProposal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulatePlutoDeposit = /*#__PURE__*/ createUseSimulateContract({
  abi: plutoAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulatePlutoRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plutoAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulatePlutoTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: plutoAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link plutoAbi}__ and `functionName` set to `"vote"`
 */
export const useSimulatePlutoVote = /*#__PURE__*/ createUseSimulateContract({
  abi: plutoAbi,
  functionName: 'vote',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plutoAbi}__
 */
export const useWatchPlutoEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: plutoAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link plutoAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchPlutoOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: plutoAbi,
    eventName: 'OwnershipTransferred',
  })
