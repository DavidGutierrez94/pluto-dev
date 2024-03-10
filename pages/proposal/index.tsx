import { NextPage } from "next/types"
import DepositCard from "../../components/depositCard"
import { useReadPlutoProposalCount } from "../../src/generated";
import { plutoAbi } from "../../abi/abi";
import { useReadContract } from 'wagmi'

const ProposalCountComponent = () => {
    const result = useReadContract({

        address: '0x373Abf195913E6642f8460A5b807022a58dFA311',
        functionName: 'proposalCount',
      })
   
    return <div className="text-xl mb-4"> {String(result.data)}</div>;
   };
const Proposal: NextPage = () => {

    return (
        <div>
     
        <h1 className="text-xl mb-4"># Proposals: <ProposalCountComponent></ProposalCountComponent></h1>
        <p>Let&apos;s build a DeFi Funded Trader platform</p>
        <h2 className="text-4xl font-bold mb-4">Deposit Funds</h2>
        <DepositCard></DepositCard>

        </div>
    )
}

export default Proposal
