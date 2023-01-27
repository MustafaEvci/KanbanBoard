import React, { useEffect, useState,useRef } from "react";
import '../styles/search.css';
import Loading from "./LoaderComponent.js";
import { useGlobalContext } from '../context';

/**
 *
 * @param props
 * @param props.classes
 * @param props.setValue
 * @param props.value
 * @returns {JSX.Element}
 */
export default function SearchComponent(props) {
    const {setSearchTerm,setResultTitle,loading,books,title} = useGlobalContext();
    const [loremBoard,setLoremBoard]=useState("Lorem Board");
    const searchText = useRef('');

    useEffect(() => searchText.current.focus(), []);
    useEffect(() => setLoremBoard(books.author_name), [books]);

    const handleSubmit = (e) => {
      e.preventDefault();
      let tempSearchTerm = searchText.current.value.trim();
      if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
        setSearchTerm("the lost world");
        console.log("search term",tempSearchTerm)
        setResultTitle("Please Enter Something ...");
      } else {
        setSearchTerm(searchText.current.value);
        console.log("search term else",tempSearchTerm)
      }
    };
    return (
        <div className="generalDiv"> 
            <div className="loremBoard">
                <h1 style={{fontWeight: "400"}}>{title}</h1> 
            </div>
            <div className="searchBarDiv">
                <p style={{color:"#1f282f"}}>books of</p> 
                {/* <TextField id="standard-basic" variant="standard" /> */}
                <input type = "text" className="inputType" ref = {searchText} />
                <button className="button" type="submit"onClick={handleSubmit}>submit</button>
                {loading===true&&
                <div style={{display:"flex",marginLeft:"20px"}}>
                      <Loading />
                      <p style={{paddingLeft:"20px"}}>Loading..</p>
                  </div>
                  }
            </div>
        </div>
    )
}