import react from "react";

function SidebarMenu({ isOn, handleClick2 }){
    return (
        <>
    <div className={`menu ${isOn ? 'open' : 'close'}`}>
                <div>
                    <button onClick={handleClick2} className='button-into-menu'>&larr;</button>
                </div>
            </div> 
    </>
    )
}

export default SidebarMenu;