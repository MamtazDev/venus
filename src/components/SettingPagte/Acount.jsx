import { useRef, useState } from 'react';
import delet from '../../assets/icons/delete1.png'
const Acount = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChooseButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedFile(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleRemoveButtonClick = () => {
        setSelectedFile(null);
        fileInputRef.current.value = ''; // Clear the file input
    };

    return (
        <>
            <div className="bg-white p-30 max-w-[800px] w-[100%]">
                <h4 className="text6">Account Setting</h4>
                <p className="text4 mb-[30px] mt-[5px]" style={{ color: "#9AA8D1" }}>View and update your account details</p>
                <form action="" className="flex flex-col gap-[24px]">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
                        <div>
                            <label className="">First name</label>
                            <input required type="text" placeholder="Enter your first name" className="border border-[#E1E1E1] w-full input_field input mt-[12px]" />
                        </div>
                        <div>
                            <label className="">Last name</label>
                            <input required type="text" placeholder="Enter your last name" className="border border-[#E1E1E1] w-full input_field input mt-[12px]"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Image</label>
                        <div className='flex  items-center justify-between'>
                            <div className='flex gap-15 mt-[12px]'>
                                {selectedFile && (
                                    <img
                                        src={selectedFile}
                                        alt='Selected'
                                        className='w-[24px] h-[24px] object-cover rounded-full'
                                    />
                                )}
                                <button
                                    type='button'
                                    className="px-14 h-[33px] bg-white border border-[#E1E1E1] rounded-8 choose_btn"
                                    onClick={handleChooseButtonClick}
                                >
                                    Choose
                                </button>
                                <input
                                    type='file'
                                    name=''
                                    className='hidden'
                                    id=''
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                />
                                {selectedFile && (
                                    <button className='flex items-center' onClick={handleRemoveButtonClick}>
                                        <img src={delet} alt='delete' />
                                        Remove
                                    </button>
                                )}
                            </div>
                            <p className='text-base font-sans font-normal text-[#636363] '>JPG, GIF or PNG, 3MB Max</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
                        <div>
                            <label className="">Username</label>
                            <input required type="text" placeholder="Enter your username" className="border border-[#E1E1E1] w-full input_field input mt-[12px]" />
                        </div>
                        <div>
                            <label className="">Email</label>
                            <input required type="text" placeholder="Enter your email address" className="border border-[#E1E1E1] w-full input_field input mt-[12px]"
                            />
                        </div>
                    </div>

                    <div className="">
                        <div>
                            <label className="">Username</label>
                            <textarea required type="text" placeholder="Write a about....." className="border border-[#E1E1E1] h-[139px] w-full  p-14 rounded-8     mt-[12px]" />
                        </div>

                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
                        <div>
                            <label className="">Phone Number</label>
                            <input required type="text" placeholder="Enter your number" className="border border-[#E1E1E1] w-full input_field input mt-[12px]" />
                        </div>
                        <div>
                            <label className=" form-control">
                                <div className="label pt-0 pb-0" style={{ paddingTop: "0", paddingBottom: "0" }}>
                                    <span className="label-text pt-0 pb-0">Location</span>
                                </div>
                                <select className="w-full opacity-[0.3] select border-none  mt-[12px]">
                                    <option selected>USA</option>
                                    <option selected>USA</option>
                                    <option selected>USA</option>
                                    <option selected>USA</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className="flex gap-20">
                        <button className="py-10 px-[22px] bg-base text-white text2 rounded-3 " style={{ color: "#fff" }}> Save changes</button>
                        <button className="rounded-3 bg-[#E9E9F7] py-10 px-[45px] font-medium">Cancel</button>
                    </div>

                </form>


            </div>


        </>
    );
};

export default Acount;