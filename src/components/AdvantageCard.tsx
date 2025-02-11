type AvantageType = {
    icon: string;
    title: string;
    description: string;
}

export default function AdvantageCard({avantage} : {avantage : AvantageType}) {
  return (
    <div className="bg-neutral-50 space-y-[10px] p-6 rounded-card text-neutral-400 w-[282px]">
      <div className="icon p-[10px] w-fit bg-neutral-600 rounded-lg"><img src={avantage.icon} alt={"icone of " + avantage.title} className="w-[30px]"/></div>
      <h3 className="subTitle">Set up your wallet</h3>
      <p className="text-sm">{avantage.description}</p>
    </div>
  )
}

