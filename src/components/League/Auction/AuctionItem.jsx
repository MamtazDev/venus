import auction1 from '../../../assets/icons/auction1.png'

const auctionData = [
    {
        img: auction1,
        title: "Alabama",
    },
    {
        img: auction1,
        title: "Houston",
    },
    {
        img: auction1,
        title: "Kansas",
    },
    {
        img: auction1,
        title: "Purdue",
    },
    {
        img: auction1,
        title: "Arizona",
    },
    {
        img: auction1,
        title: "Marquette",
    },
   
    {
        img: auction1,
        title: "Houston",
    },
   
    {
        img: auction1,
        title: "Houston",
    },
   
    {
        img: auction1,
        title: "UCLA",
    },
    {
        img: auction1,
        title: "Gonzaga",
    },
    {
        img: auction1,
        title: "Kansas St",
    },
    {
        img: auction1,
        title: "Xavier",
    },
    {
        img: auction1,
        title: "Indiana",
    },
    {
        img: auction1,
        title: "Tennessee",
    },

]
const AuctionItem = () => {
    return (
        <>
            <div className="bg-white rounded-3 p-20 ">
                <div className="flex justify-between items-center mb-[15px]">
                    <p className="text-base text-text_dark_grey font-semibold font-sans ">Action Item</p>
                    <p className="text-base text-text_dark_grey font-semibold font-sans ">PrizePool: $10</p>
                </div>
                {/* items */}
                <div className="bg-sky_bg1 p-20">
                    {
                        auctionData.map((data,index) => (
                            <>
                                <div key={index} className='flex gap-[15px] items-center mb-[18px]'>
                                    <img src={data.img} alt="auction" />
                                    <p className='text1'>{data.title}</p>
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>

        </>
    );
};

export default AuctionItem;