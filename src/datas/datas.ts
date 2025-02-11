import { snopDog, astroPortrait, monkeySoldier, astroJump} from "../assets/images/index"
import { cloudDonwload, wallet, saleTag, bitcoin } from "../assets/svg"

const type = {
    art: "art",
    celebrities: "celebrities",
    gaming: "gaming",
    sport: "sport"
}

export const collections = [
    {
        id: 1,
        name: "CyberPunck",
        price: 68,
        img: monkeySoldier,
        type: type.celebrities
    },
    {
        id: 2,
        name: "Durolost  Boll - Upper",
        price: 68,
        img: astroJump,
        type: type.art
    },
    {
        id: 3,
        name: "Space X Wiper",
        price: 68,
        img: astroPortrait,
        type: type.gaming
    },
    {
        id: 4,
        name: "Snoop Dogg",
        price: 68,
        img: snopDog,
        type: type.celebrities
    },
]

export const avantages = [
    {
        id: 1,
        icon: wallet,
        title: "Set up your wallet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        id: 2,
        icon: cloudDonwload,
        title: "Add your NFT’s",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        id: 3,
        icon: saleTag,
        title: "Promote your NFT’s",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
        id: 4,
        icon: bitcoin,
        title: "Sell your NFT’s",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    }
]