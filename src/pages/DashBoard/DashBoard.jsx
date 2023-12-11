
const DashBoard = () => {
    return (
        <div>
            {/* header */}
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text_dark_grey">Welcome</p>
                    <h2 className="text-2xl text_dark_grey  font-semibold ">John Smith</h2>
                </div>
                <div className="">
                    <button className="py-14 px-20 bg-primary">Start a League</button>
                    <button className="py-14 px-20 bg-primary">Join a League</button>

                </div>

            </div>


        </div>
    );
};

export default DashBoard;