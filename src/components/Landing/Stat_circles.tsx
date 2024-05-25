
import React from 'react';
// import Ellipse_2 from "../../public/assets/Ellipse/Ellipse_2.svg";
const Stats=()=>{

    return (
        <div className='flex flex-col md:flex-row'>
            <div className=' flex px-1 py-4' >
                <div className="px-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 sm:w-100 sm:h-100" viewBox="0 0 115 115" fill="none">
                <path d="M109 57.5C109 46.5569 105.514 35.8982 99.0481 27.0697C92.5821 18.2412 83.4719 11.7019 73.0387 8.40012C62.6056 5.09833 51.3919 5.2057 41.0239 8.70667C30.6559 12.2076 21.6726 18.9202 15.3768 27.8709C9.08095 36.8216 5.7999 47.545 6.00944 58.4862C6.21899 69.4273 9.90824 80.0173 16.5422 88.7203C23.1761 97.4234 32.4099 103.787 42.9043 106.888C53.3988 109.99 64.6083 109.668 74.9074 105.969" stroke="#F8D93E" stroke-width="11" stroke-linecap="round"/>
                <text x="35" y="65" fill="black" className="font-semibold text-2xl">94%</text> 
                </svg>
                </div>                
                <div className="flex flex-wrap justify-center items-center w-full px-2">
                    <p className="font-semibold text-xl">Increase in business productivity</p>
                </div>
            </div>
            <div className='flex px-1 py-4'>
                <div className='px-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 sm:w-100 sm:h-100" viewBox="0 0 115 115" fill="none">
                    
                    <path d="M106 56C106 47.7775 103.972 39.6818 100.096 32.4302C96.22 25.1785 90.6153 18.9947 83.7785 14.4265C76.9417 9.85833 69.0838 7.04673 60.9009 6.24078C52.7179 5.43483 44.4625 6.6594 36.8658 9.80604C29.2692 12.9527 22.5658 17.9242 17.3495 24.2803C12.1332 30.6365 8.56488 38.1809 6.96074 46.2455C5.3566 54.31 5.76611 62.6458 8.15299 70.5142C10.5399 78.3827 14.8304 85.5411 20.6447 91.3554" stroke="#F8D93E" stroke-width="11" stroke-linecap="round"/>
                    <text x="35" y="65" fill="black" className="font-semibold text-2xl">64%</text> 
                    </svg>
                </div>
                <div className="flex flex-wrap justify-center items-center w-full px-2">
                    <p className="font-semibold text-xl">Business use cloud computing</p>
                </div>
            </div>

            <div className='flex px-1 py-4'>
                <div className='px-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 sm:w-100 sm:h-100" viewBox="0 0 115 115" fill="none">
                
                <path d="M6.00002 36.0505C10.3991 25.6496 18.1896 17.0442 28.103 11.6355C38.0164 6.22678 49.4689 4.33328 60.5957 6.2633C71.7224 8.19332 81.8682 13.8332 89.3809 22.2646C96.8937 30.696 101.331 41.4224 101.97 52.6972" stroke="#F8D93E" stroke-width="11" stroke-linecap="round"/>
                <text x="30" y="65" fill="black" className="font-semibold text-2xl">40%</text> 
                </svg>
                </div>
                <div className="flex flex-wrap justify-center items-center w-full px-2">
                    <p className="font-semibold text-xl">High performers run AI workloads</p>
                </div>
            </div>
            
      

        </div>
    )
}

export default Stats;

