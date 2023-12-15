import { useState } from 'react';
import edit from '../../../../assets/icons/edit.svg'
const General = () => {
    // const [isCopied, setIsCopied] = useState(false);

    // // This is the function we wrote earlier
    // async function copyTextToClipboard(text) {
    //     if ('clipboard' in navigator) {
    //         return await navigator.clipboard.writeText(text);
    //     } else {
    //         return document.execCommand('copy', true, text);
    //     }
    // }

    // // onClick handler function for the copy button
    // const handleCopyClick = () => {
    //     // Asynchronously call copyTextToClipboard
    //     copyTextToClipboard(copyText)
    //         .then(() => {
    //             // If successful, update the isCopied state value
    //             setIsCopied(true);
    //             setTimeout(() => {
    //                 setIsCopied(false);
    //             }, 1500);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    return (
        <>
            {/* delete league */}
            <div className='flex flex-col gap-20'>
                <div className="p-20 bg-white flex justify-between items-center rounded-3">
                    <h2 className="font-sans font-semibold text-lg text-text_dark_grey ">Delete League</h2>
                    <button className="py-10 px-23 bg-base text-white rounded-3">Pay Team</button>
                </div>
                <div className="p-20 bg-white flex justify-between items-center rounded-3">
                    <h2 className="font-sans font-semibold text-lg text-text_dark_grey ">Cricket</h2>
                    <button className="py-10 px-23 bg-white text-white rounded-3"><img src={edit} alt="" /></button>
                </div>
                <div className="p-20 bg-white  rounded-3">
                    <h2 className="font-sans font-semibold text-lg text-text_dark_grey ">Invite Code</h2>
                    {/* <div className='py-10 ps-20 font-sans text-sm text-[#000] bg-light_sky mt-[15px] cursor-copy	'>
                        BC357183-ED2F-4396-83F5-BC30431977BD
                    </div> */}
                    <input type="text" className=" w-full border-0 py-10 ps-20 font-sans text-sm text-[#000] bg-light_sky mt-[15px] cursor-copy" value=" BC357183-ED2F-4396-83F5-BC30431977BD" />


                </div>
                <div className="p-20 bg-white  rounded-3">
                    <h2 className="font-sans font-semibold text-lg text-text_dark_grey ">Invite URL</h2>
                    <div className='py-10 ps-20 font-sans text-sm text-[#000] bg-light_sky mt-[15px]'>
                        https://calcuttaleague.com/joinLeague?inviteCode=BC357183-ED2F-4396-83F5-BC30431977BD
                    </div>


                </div>
            </div>
        </>
    );
};

export default General;