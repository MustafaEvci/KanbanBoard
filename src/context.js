import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
//https://openlibrary.org/search?language=eng&author=OL26320A
const URL =  "http://openlibrary.org/search.json?author=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const [title, setTitle] = useState("Kanban Board");

    const fetchBooks = useCallback(async() => {
        
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;
            console.log("docs",data);

            if(docs){
                const newAuthor = docs.slice(0, 20).map((authorSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year,title,publish_year,number_of_pages_median} = authorSingle;


                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        publish_year:Math.max.apply(Math,publish_year),
                        first_publish_year: first_publish_year,
                        number_of_pages_median:number_of_pages_median,
                        title: title
                    }
                });
                setBooks(newAuthor);
                setTitle(newAuthor[0]?.author || "Kanban Board")
                

                if(newAuthor.length > 1){
                    setResultTitle("Your Search Result");
                   
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books,setSearchTerm, searchTerm,resultTitle, setResultTitle,setTitle,
            title
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};