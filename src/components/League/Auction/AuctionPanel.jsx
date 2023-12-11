import auction1 from '../../../assets/icons/auction1.png'
import BidMember from './BidMember';
import Message from './Message';

const AuctionPanel = () => {
    return (
        <>
            <div className="px-20 pt-[24px] pb-20 bg-white">
                <div className='flex flex-col lg:flex-row lg:gap-0 gap-20 justify-between items-center'>
                    <div className='flex items-center gap-8'>
                        <img src={auction1} alt="" />
                        <p className='text-lg font-semibold text-text_dark_grey'>Alabama</p>
                    </div>
                    {/* buttons */}
                    <div className='flex gap-10 flex-wrap'>
                        <button className='py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3'>Admin Panel</button>
                        <button className='py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3'>Next Item ( Random)</button>
                        <button className='py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3'>Reset Clock</button>
                    </div>
                </div>
                {/* bid */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <div className='h-[93px] p-15  border border-[#EEE] mt-[20px]'>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm font-normal font-sans  text-[#9AA8D1] '>High Bid</p>
                            <p className='text-sm font-normal font-sans  text-dark_sky '>By</p>
                        </div>
                        <div className=' flex justify-between items-center mt-[15px]'>
                            <p className='text-xl font-medium font-sans text-text_dark_grey '>$8.00</p>
                            <p className='text-xl font-medium font-sans text-text_dark_grey '>John Smith</p>
                        </div>
                    </div>
                    <div className='h-[93px] p-15 border border-[#EEE] mt-[20px]'>
                        <div className='flex  items-center justify-between'>
                            <div>
                                <p className='text-sm font-normal font-sans text-dark_sky mb-[15px]'>Time Remaining</p>
                                <p className='text-xl font-medium font-sans text-text_dark_grey '>00.00</p>

                            </div>
                            <button className='py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3'>Undo</button>
                        </div>
                    </div>
                    {/*  */}
                    <div className='h-[110px] p-15  border border-[#EEE] '>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm font-normal font-sans  text-[#9AA8D1] '>Total Spent</p>
                            <p className='text-xl font-medium font-sans  text-text_dark_grey '>$10.00</p>
                        </div>

                    </div>
                    <div className='h-[110px] p-15  border border-[#EEE] '>
                        <div className='flex justify-center  '>
                            <div className='text-[12px] font-semibold text-white px-14 py-10 h-[36px] w-[36px] bg-dark_sky'>
                                $
                            </div>
                            <input type="number" className='bg-light_sky text-center w-full' defaultValue="0" />
                            <div className='text-[12px] font-semibold text-white px-[29px] py-[11px]   bg-dark_sky'>
                                Bid
                            </div>
                        </div>
                        <button className='w-full bg-base text-white p-10 mt-[10px]'>Show Rules</button>
                    </div>
                </div>
            </div>

            <BidMember />
            {/*  ijmessage  */}
            <Message />


        </>
    );
};

export default AuctionPanel;