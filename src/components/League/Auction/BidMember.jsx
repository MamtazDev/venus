import active from '../../../assets/icons/greencircle.png'
const BidMember = () => {
    return (
        <div>
            {/* my team */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                <div className='px-20 pt-[24px] pb-20 bg-white rounded-3 mt-[10px]'>
                    <div className='flex justify-between  border-b border-border2'>
                        <p className='text2 pb-[15px]'>My Team</p>
                        <p className='text2 pb-[15px]'>Paid</p>
                    </div>
                    <div className='flex justify-between  border-b border-border2 pt-10 '>
                        <p className='text1 pb-[10px]'>Alabama</p>
                        <p className='text1 pb-[10px]'>$10.00</p>
                    </div>
                    <div className='flex justify-between pt-10 '>
                        <p className='text1 pb-[10px]'>Houston</p>
                        <p className='text1 pb-[10px]'>$1.00</p>
                    </div>
                </div>
                <div className='px-20 pt-[24px] pb-20 bg-white mt-[10px]'>
                    <div className='flex justify-between  border-b border-border2'>
                        <p className='text2 pb-[15px]'>Member</p>
                        <p className='text2 pb-[15px]'>Total Paid</p>
                    </div>
                    <div className='flex justify-between  pt-10 '>
                        <p className='text1 pb-[10px] flex items-center gap-[5px] '> <img src={active} alt="" /> John Smith</p>
                        <p className='text1 pb-[10px]'>$10.00</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BidMember;