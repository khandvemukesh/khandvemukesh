import {PathImgData} from './Constent';
const BoxUi =(props)=>{    
    return(
        <>
        <div className="shadow border-[#ccc] z-40 border-4 min-h-[100px] mt-4 gap-4 rounded hover:scale-125 overflow-hidden transition-all duration-500 cursor-pointer border-indigo-500/100 z-40">
            <img src={PathImgData + props.image} alt="Movies"/>
            <div className="flex justify-center p-2 bg-[#161237]">
                <span className="p-1 text-[#fff] text-[10px] md:text-[10px] font-bold text-center ">{props.title}</span>
               
            </div>
            <div className="flex justify-between p-2">
              <span className="p-1 text-[10px] text-[#ff6f00] md:text-[10px] font-bold text-[#ff6f00]">{props.rating}</span>
              <span className="p-1 text-[10px] text-[#ff6f00] md:text-[10px] font-bold text-[#ff6f00]">{props.overview}</span>
           </div>
        </div>
        </>
    )
}
export default BoxUi