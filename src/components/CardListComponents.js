import React, { useEffect, useState } from "react";
import '../styles/cardList.css';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmptyComponent from './EmptyComponent';
import { Card } from "@mui/material";
import WaitComponent from "./WaitComponent.js";
import CardComponent from "./CardComponent";
import { useGlobalContext } from '../context';

/**
 *
 * @param props
 * @param props.classes
 * @param props.setValue
 * @param props.value
 * @returns {JSX.Element}
 */
export default function CardListComponents(props) {
    const {books,loading,setTitle,searchTerm,resultTitle} = useGlobalContext();
    const [booksObjects,setBooksObjects]=useState({});
    const [click,setClick]=useState(false);

    useEffect(() => {
        setBooksObjects({})
      }, [books]);
      console.log("book Objects",booksObjects)
            books.forEach(book => {
            if(booksObjects.hasOwnProperty(book.publish_year)){
                booksObjects[book.publish_year].push(book)
            }
            else
            {   
                booksObjects[book.publish_year]=[book]        
            } 
        });

          function random_bg_color() {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            return bgColor;
            }
        
    if(loading) return <WaitComponent/>;

    if(searchTerm==="the lost world"){
        {setTitle("Kanban Board")}
        return <EmptyComponent />
    } 
    else if(resultTitle==="No Search Result Found!"){
        {setTitle("Kanban Board")}
        return <EmptyComponent />
    } 
    
    else{
        return (
            <div  style={{
                justifyContent: "flex-start",
                display: "flex",
                marginTop: "20px"
            }}>

            {Object.keys(booksObjects).map((key, index) => {
                return (        
                    <div>
                        <Card key={key} className="yearCard" sx={{ maxHeight: 500, width:280,overflowY:"auto"}}>
                            <CardContent key={index} className="container" style={{borderColor:random_bg_color()}} id="cardContent">
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",    marginBottom:"15px"}}>
                                    <Typography sx={{ fontSize: 20 ,fontWeight:20}} color="text.secondary" >
                                        {key}
                                    </Typography>
                                    <MoreVertIcon style={{float:"right"}}></MoreVertIcon>
                                </div>
                                    {booksObjects[key].map((value, index) => {
                                        return (
                                            <CardComponent
                                                keyValue={value.cover_id}
                                                value={value}
                                                title={value.title}
                                                click={click}
                                            />
                                          );
                                    })}
                            </CardContent>
                        </Card>
                    </div>
                )
            })}
          </div>
        )
    }
}