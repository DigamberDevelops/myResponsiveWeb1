

export default function App(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-custom-colours-100 p-4 box-border">
            <div className="w-[90%] aspect-[9/16] md:aspect-[4/2.2] lg:aspect-[19/9] bg-custom-colours-300 rounded-3xl ring-1 ring-custom-colours-100 overflow-hidden flex flex-col items-center pt-3 my-7">
               
                    <div className="rounded-2xl text-center bg-custom-colours-200 mx-auto max-w-2xl my-4">
                        <p className="text-lg text-accent leading-relaxed px-4 pb-0.5">Want simple health tips? Head to our blog.</p>
                    </div>
                    <div className="text-center mt-2 pt-2">
                        <p className="text-3xl md:text-4xl lg:text-6xl text-gray-800 font-roboto tracking-tight">Take a look at the latest articles!</p>
                    </div>
                    <div className=" flex-1 w-[90%] aspect-[9/16] md:aspect-[4/1.4] lg:aspect-[16/9] bg-custom-colours-100 rounded-2xl overflow-y-auto h-full my-4 px-4 
        /* Flex settings start here */
        flex flex-col md:flex-row items-center justify-center gap-8 
        /* Adjust padding: Top padding for mobile, remove it for desktop to center properly */
        pt-6 pb-6 md:pt-6">



           <div className="h-auto w-fit max-w-full bg-custom-colours-100 rounded-2xl  my-2 mx-2 flex flex-wrap flex-col md:flex-col lg:flex-col items-center justify-center  px-1 pt-1 pb-1 md:pt-0">
                <div className="aspect-[1164/612] mt-1">
                <img src="https://simple.life/images/coverImage/diarrhea-text.png" alt="image3" /></div>
                <div className="w-full flex-1 flex-col items-left justify-center mt-2 bg-custom-colours-300 rounded-2xl pt-2 px-3">
                    <p className="mb-3">
                        <span className="text-1xl leading-relaxed text-essence font-bold">Febraury 02, 2026</span><br /><br />
                        <span className="text-1xl leading-relaxed text-grey-100 font-bold leading-none">Does diarrhea cause weight loss and why does it happen?</span>
                    </p>
                </div>
            </div>






            <div className="h-auto w-fit max-w-full bg-custom-colours-100 rounded-2xl  my-2 mx-2 flex flex-wrap flex-col md:flex-col lg:flex-col items-center justify-center  px-1 pt-1 pb-1 md:pt-0">
                <div className="aspect-[1164/612] mt-1">
                <img src="https://simple.life/images/coverImage/streaks-text.png" alt="image3" /></div>
                <div className="w-full flex-1 flex-col items-left justify-center mt-2 bg-custom-colours-300 rounded-2xl pt-2 px-3">
                    <p className="mb-3">
                        <span className="text-1xl leading-relaxed text-essence font-bold">January 14, 2026</span><br /><br />
                        <span className="text-1xl leading-relaxed text-grey-100 font-bold leading-none">Streaks: the easy daily habit is your weight-loss journey.</span>
                    </p>
                </div>
            </div>




            <div className="h-auto w-fit max-w-full bg-custom-colours-100 rounded-2xl  my-2 mx-2 flex flex-wrap flex-col md:flex-col lg:flex-col items-center justify-center  px-1 pt-1 pb-1 md:pt-0">
                <div className="aspect-[1164/612] mt-1">
                <img src="https://simple.life/images/coverImage/year-in-review-2025-text.png" alt="image3" /></div>
                <div className="w-full flex-1 flex-col items-left justify-center mt-2 bg-custom-colours-300 rounded-2xl pt-2 px-3">
                    <p className="mb-3">
                        <span className="text-1xl leading-relaxed text-essence font-bold">December 29, 2026</span><br /><br />
                        <span className="text-1xl leading-relaxed text-grey-100 font-bold leading-none">Simple Life App: A year in review 2026</span>
                    </p>
                </div>
            </div>
                    </div>
                
            </div>
        </div>
    );
}

// min-h-screen flex items-center justify-center bg-gray-100 p-8 box-border
// w-[90%] max-w-[1100px] aspect-[16/9] bg-white rounded-2xl shadow-2xl ring-1 ring-gray-100 overflow-hidden flex items-center justify-center
// w-[95%] h-[95%] flex items-start justify-center
// bg-purple-50 rounded-lg p-6
// text-purple-600