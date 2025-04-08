import { BrandBlockLogo } from "@/components/01_atoms/brand-block-logo";
import { ProgressGauge } from "@/components/01_atoms/progress-gauge";

export default async function Quests() {
return <main className="container flex flex-col w-full  gap-4">
  <h1 className="text-2xl font-bold">Quests</h1>
  
    <ul className="flex flex-col gap-2">
      <li>
        <div className="gap-2 bg-gray-900 p-2 grid ">
          <div className="grid grid-cols-[1fr_max-content] w-full items-center">
            <h2 className="text-xl font-bold">Verify your account</h2>
            <BrandBlockLogo></BrandBlockLogo>
          </div>
          <div className="gap-4 grid grid-cols-[max-content_1fr_max-content] items-center">
            <p>Progress</p>
            <ProgressGauge progress={0.3} />
            <p>30%</p>
          </div>
        </div>
      </li>
      <li>
        <div className="gap-2 bg-gray-900 p-2 grid ">
          <div className="grid grid-cols-[1fr_max-content] w-full items-center">
            <h2 className="text-xl font-bold">Deposit USDC on Bridge</h2>
            <BrandBlockLogo></BrandBlockLogo>
          </div>
          <div className="gap-4 grid grid-cols-[max-content_1fr_max-content] items-center">
            <p>Progress</p>
            <ProgressGauge progress={1} />
            <p>100%</p>
          </div>
        </div>
      </li>
      <li>
        <div className="gap-2 bg-gray-900 p-2 grid ">
          <div className="grid grid-cols-[1fr_max-content] w-full items-center">
            <h2 className="text-xl font-bold">Complete an XUSDC to XPR Swap</h2>
            <BrandBlockLogo></BrandBlockLogo>
          </div>
          <div className="gap-4 grid grid-cols-[max-content_1fr_max-content] items-center">
            <p>Progress</p>
            <ProgressGauge progress={0} />
            <p>0%</p>
          </div>
        </div>
      </li>
      <li>
        <div className="gap-2 bg-gray-900 p-2 grid ">
          <div className="grid grid-cols-[1fr_max-content] w-full items-center">
            <h2 className="text-xl font-bold">Mint some XMD</h2>
            <BrandBlockLogo></BrandBlockLogo>
          </div>
          <div className="gap-4 grid grid-cols-[max-content_1fr_max-content] items-center">
            <p>Progress</p>
            <ProgressGauge progress={0} />
            <p>0%</p>
          </div>
        </div>
      </li>
      <li>
        <div className="gap-2 bg-gray-900 p-2 grid ">
          <div className="grid grid-cols-[1fr_max-content] w-full items-center">
            <h2 className="text-xl font-bold">Create a Limit Order on DEX</h2>
            <BrandBlockLogo></BrandBlockLogo>
          </div>
          <div className="gap-4 grid grid-cols-[max-content_1fr_max-content] items-center">
            <p>Progress</p>
            <ProgressGauge progress={0} />
            <p>0%</p>
          </div>
        </div>
      </li>
      <li>
        <div className="gap-2 bg-gray-900 p-2 grid ">
          <div className="grid grid-cols-[1fr_max-content] w-full items-center">
            <h2 className="text-xl font-bold">Redeem XUSDC</h2>
            <BrandBlockLogo></BrandBlockLogo>
          </div>
          <div className="gap-4 grid grid-cols-[max-content_1fr_max-content] items-center">
            <p>Progress</p>
            <ProgressGauge progress={0} />
            <p>0%</p>
          </div>
        </div>
      </li>
      <li>
        <div className="gap-2 bg-gray-900 p-2 grid ">
          <div className="grid grid-cols-[1fr_max-content] w-full items-center">
            <h2 className="text-xl font-bold">Deposit XUSDC to Lending Platform</h2>
            <BrandBlockLogo></BrandBlockLogo>
          </div>
          <div className="gap-4 grid grid-cols-[max-content_1fr_max-content] items-center">
            <p>Progress</p>
            <ProgressGauge progress={0.05} />
            <p>5%</p>
          </div>
        </div>
      </li>
      <li>
        <div className="gap-2 bg-gray-900 p-2 grid ">
          <div className="grid grid-cols-[1fr_max-content] w-full items-center">
            <h2 className="text-xl font-bold">Deposit XUSDC & XPR to Pools (receive LP token)</h2>
            <BrandBlockLogo></BrandBlockLogo>
          </div>
          <div className="gap-4 grid grid-cols-[max-content_1fr_max-content] items-center">
            <p>Progress</p>
            <ProgressGauge progress={0.21} />
            <p>21%</p>
          </div>
        </div>
      </li>
    </ul>
  
</main>
}