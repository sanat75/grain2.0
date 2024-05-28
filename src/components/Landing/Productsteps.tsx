import React from "react";


const Productsteps=()=>{
    return (
    <div>
        <div className="bg-bright_yellow_theme p-4 md:p-8">
            <h1 className="text-3xl font-bold py-3">How we work</h1>
            <p className="text-base pb-6">We combine the industry's best service delivery standards with unprecedented solution personalization practices</p>
            <Stepwise_cards></Stepwise_cards>
            






        </div>
        
        
    </div>


)
}

const Stepwise_cards=()=>{
    const data=[{Step_number:"Step 1", heading:"Write to us or book a meeting ", paragraph:"we will respond within two hours and arrange a meeting with you at your earliest convenience", working: "1 Working Days"},
    {Step_number:"Step 2", heading:"Meet with our representative", paragraph:"An expert matching your market niche and industry will get in touch to discuss your requests and determine the next steps", working: "7 Working Days"},
    {Step_number:"Step 3", heading:"Receive an offer", paragraph:"You will get a service suite offering, including time and cost estimates, for each of your projects's stages", working: "3 Working Days"},
    {Step_number:"Step 4", heading:"Sign the contract", paragraph:"We start delivering the results while keeping you updated on the progress", working: "2 Working Days"}
    ]
    return (
        <div className="flex  flex-col md:grid md:grid-cols-4">
        {data.map((Step, index)=>
        <div className="flex flex-col md:flex-row ">
            <div className="flex flex-col bg-white p-4 rounded-lg md:h-1/5 md:h-auto md:w-2/3">
                <div className="flex justify-center bg-orange-100 rounded w-1/3 md:w-auto inline-block">
                    <p className="font-bold text-orange-400">{Step.Step_number}</p>
                </div>
                <div className="font-bold text-xl p-2">
                    {Step.heading}
                </div>
                <div className="px-2">
                    <p>{Step.paragraph}</p>
                </div>

            </div>
            {index!=3 && 
                <div className="flex flex-row content-center items-center justify-items-center md:flex-col md:min-w-24">

                    <div className="mx-2 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="60" height="60" ><rect x="0" y="0" width="60" height="60" fill="none"></rect><g transform="translate(25, 40)"><path d="M22.7-4.13L22.7-4.13Q23.18-4.13 23.18-3.22L23.18-3.22Q23.18-3.02 23.18-2.9 23.18-2.78 23.16-2.69 23.14-2.59 23.09-2.52 23.04-2.45 23.04-2.4 23.04-2.35 22.92-2.3 22.8-2.26 22.75-2.26 22.7-2.26 22.54-2.21 22.37-2.16 22.27-2.11L22.27-2.11Q18.67-1.2 16.08 1.56 13.49 4.32 12.67 8.06L12.67 8.06Q12.67 8.16 12.62 8.33 12.58 8.5 12.55 8.64 12.53 8.78 12.53 8.83L12.53 8.83Q12.38 9.55 11.76 9.22L11.76 9.22Q11.47 9.17 11.42 8.54L11.42 8.54Q10.8 4.66 8.11 1.75 5.42-1.15 1.73-2.11L1.73-2.11Q1.63-2.16 1.46-2.21 1.3-2.26 1.25-2.26 1.2-2.26 1.08-2.3 0.96-2.35 0.96-2.4 0.96-2.45 0.91-2.52 0.86-2.59 0.84-2.69 0.82-2.78 0.82-2.9 0.82-3.02 0.82-3.22L0.82-3.22Q0.82-4.18 1.3-4.18L1.3-4.18Q1.58-4.18 2.02-4.03L2.02-4.03Q7.58-2.5 10.7 2.16L10.7 2.16 11.04 2.64 11.04-14.98Q11.04-32.59 11.14-32.78L11.14-32.78Q11.42-33.31 12.05-33.31L12.05-33.31Q12.62-33.26 12.96-32.59L12.96-32.59 12.96 2.64 13.3 2.16Q15.5-1.2 19.3-3.02L19.3-3.02Q21.6-4.13 22.7-4.13Z" fill="#ffffff"></path></g></svg>
                    </div>
                    <div className="hidden md:inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="60" height="60" ><rect x="0" y="0" width="60" height="60" fill="none"></rect><g transform="translate(10,60 )"><path d="M3.36-11.04Q2.69-11.38 2.69-12 2.69-12.62 3.36-12.96L3.36-12.96 40.08-12.96Q36.67-15.5 34.8-19.1L34.8-19.1Q33.6-21.41 33.22-23.66L33.22-23.66Q33.22-23.76 33.19-23.86 33.17-23.95 33.17-24L33.17-24Q33.17-24.53 34.13-24.53L34.13-24.53Q34.7-24.53 34.87-24.41 35.04-24.29 35.14-23.86L35.14-23.86Q35.28-22.9 35.66-21.89L35.66-21.89Q36.72-18.67 39.17-16.15 41.62-13.63 44.88-12.53L44.88-12.53Q45.31-12.38 45.31-12 45.31-11.62 44.88-11.47L44.88-11.47Q41.62-10.37 39.17-7.85 36.72-5.33 35.66-2.11L35.66-2.11Q35.33-1.1 35.14-0.19L35.14-0.19Q35.04 0.29 34.87 0.41 34.7 0.53 34.13 0.53L34.13 0.53Q33.12 0.53 33.12 0L33.12 0Q33.12-0.14 33.41-1.2L33.41-1.2Q34.9-7.2 40.08-11.04L40.08-11.04 3.36-11.04Z" fill="#ffffff"></path></g></svg>
                    
                    </div>
                    <div className="inline-block rounded-lg bg-black text-xs text-white p-1 h-1/3 mx-1 md:h-auto  md: my-4 ">
                        <p>{Step.working}</p>
                    </div>
                </div>}
        </div>)}
        </div>
    );
}

export default Productsteps;