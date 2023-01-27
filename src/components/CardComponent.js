import React, {  useState } from "react";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import '../styles/cardList.css';
import {Button } from "@mui/material";


/**
 *
 * @param props
 * @param props.classes
 * @param props.setValue
 * @param props.value
 * @returns {JSX.Element}
 */
export default function CardComponents(props) {
    const [click,setClick]=useState(false);
    const [clickValue,setClickValue]=useState(0);
    const [visiblity,setVisibility]=useState("none");

    
    function resizeTitle(title){
        if(title.length>=28){
            title=title.slice(0,20)+".."
            
        }
        else if(title.length>=26){
            title=title.slice(0,20)+".."
        }
        return title
    }
    const handleClick = event => {
        if(clickValue==0){
            setClick(true);
            setVisibility("block")
            console.log("clickValue",clickValue)
            setClickValue(1);
        }
        else{
            console.log("clickValu else",clickValue)
            setClickValue(0);
            setClick(false);
            setVisibility("none")
        }
};
    return (      
        <div className="cardListHeader">
            <>
                <div key ={props.keyValue} className="cardHeader" style={{display:"flex"}}>
                    <p className="cardListP" style={{ fontSize: 14 ,fontWeight:20,color:"#71718f"}}  >
                    {click ?props.title: resizeTitle(props.title)}
                    </p>
                     <Button startIcon={click ?
                            < KeyboardArrowDownIcon sx={{color:"#70708f",paddingLeft:"45px",}}/> : < KeyboardArrowRightOutlinedIcon sx={{color:"#70708f",paddingLeft:"45px"}}/>} style={{float:"right"}} onClick={handleClick}></Button> 
                </div>
                <div>
            {click==true &&
                <div style={{paddingLeft:"8px",paddingRight:"8px"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>   
                        <div>
                            <div style={{width:"85px",height:"20px",backgroundColor:"#81c686",textAlign:"center" ,color:"white",borderRadius:"3px",fontSize: "0.80em" ,display: "flex",
                            justifyContent: "center",alignItems: "center"}}>{props.value.edition_count} Editions</div>
                        </div>
                        <div style={{float:"right"}}>
                            <p style={{color:"#b1b1b1",fontSize: "0.80em"}}>First Published: {props.value.first_publish_year}</p>
                        </div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>   
                        <LayersOutlinedIcon sx={{color:"#aeaeae"}}></LayersOutlinedIcon>
                        <p style={{color:"#b1b1b1",fontSize: "0.80em",paddingRight: "25px"}}> {props.value.number_of_pages_median} pages</p>
                        <LocalLibraryOutlinedIcon sx={{color:"#aeaeae"}}></LocalLibraryOutlinedIcon>
                        <p style={{color:"#b1b1b1",fontSize: "0.80em"}}>hours read time</p>
                    </div>
                </div>  
                }
                </div>
                </>
        </div>
    )
}