import c1 from '../../../assets/icons/c1.png'

const ScoreTeam = () => {

    const data = [
        {
            country: "Scotland",
            img: c1
        },
        {
            country: "Oman",
            img: c1
        },
        {
            country: "Nepal",
            img: c1
        },
        {
            country: "Namibia",
            img: c1
        },
        {
            country: "United States Of America",
            img: c1
        },
        {
            country: "United Arab Emirates",
            img: c1
        },
    ]

    return (
        <>
            <div className="grid lg:grid-cols-3 grid-cols-1">

                {
                    data.map((data,index) => (
                        <>
                            <div key={index} className="bg-white h-[94px] flex  items-center justify-start ps-[33px] gap-8 border border-[#F4F7FE]">
                                <img src={data.img} alt="" />
                                <p className='font-medium text-xl  text-text_dark_grey font-sans'>{data.country}</p>
                            </div>
                        </>
                    ))
                }
            </div>


        </>
    );
};

export default ScoreTeam;