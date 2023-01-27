import React from "react";
import emptySvg from "../images/emptySvg.svg";

/**
 *
 * @param props
 * @param props.classes
 * @param props.setValue
 * @param props.value
 * @returns {JSX.Element}
 */
export default function EmptyComponent(props) {
   
    return (
            <div  style={{ width:"60vw",
                height:"60vh",
                justifyContent: "flex-start",
                display: "flex",
                border:"2px solid #b4b4b4",
                marginTop: "20px",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
            }}>
            <div style={{width:"300px",height:"300px",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
                }}>
                <img className='img'  src={emptySvg}/>
                <p style={{fontSize:"1.50em"}}>There is no board to show</p>
            </div>
            </div>
    )
}