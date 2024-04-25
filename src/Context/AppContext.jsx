import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//AppCtx is exported as createContext
export const AppCtx=createContext(null);
//createContext is imported

//using children property so that all the children can use these context values
export default function AppContext({children}){
    //books array of objects
    const books=[{
        bookName:"Poverty, by America",
        bookAuthor:"Desmond, Matthew",
        bookNumber:9780593239919,
        bookDate:2023,
    },
    {
        bookName:"Pageboy: A Memoir",
        bookAuthor:"Page, Elliot",
        bookNumber:	9781250878359,
        bookDate:2023,
    },
    {
        bookName:"Mobility: A Novel",
        bookAuthor:"Kiesling, Lydia",
        bookNumber:9781638930563,
        bookDate:2023,
    },
    {
        bookName:"New Millennium Boyz",
        bookAuthor:"Alex Kazemi",
        bookNumber:9781637583920,
        bookDate:2023,
    },
    {
        bookName:"Normal Rules Don't Apply: Stories",
        bookAuthor:"Atkinson, Kate",
        bookNumber:9780385549509,
        bookDate:2024,
    }
]
   //authors array of objects
    const authors=[{     
        bookAuthor:"Mathew Desmond",
        authorDoy:1980,
        authorBio:"Matthew Desmond is a sociologist and the Maurice P. During Professor of Sociology at Princeton University, where he is also the principal investigator of the Eviction Lab.[2][3] Desmond was elected to the American Philosophical Society in 2022.[4] He was formerly the John L. Loeb Associate Professor of the Social Sciences at Harvard University."
    },
    {  
        bookAuthor:"Elliot Page",
        authorDoy:1987,
        authorBio:"Elliot Page (formerly Ellen Page; born February 21, 1987[1]) is a Canadian actor and producer. He[a] has received various accolades, including nominations for an Academy Award, two British Academy Film Awards, a Golden Globe Award, a Primetime Emmy Award and a Screen Actors Guild Award."
    },
    {     
        bookAuthor:"Lydia Kiesling",    
        authorDoy:1992,
        authorBio:"Lydia Kiesling is an American author and literary critic. Her debut novel, The Golden State, was published in September 2018 by MCD Books, a division of Farrar, Straus, and Giroux.[1] From 2016 to 2019 she was the editor of the San Francisco-based literary magazine The Millions."
    },
    {      
        bookAuthor:"Alex Kazemi",
        authorDoy:1994,
        authorBio:"Alex Kazemi (born June 22, 1994) is a Canadian pop artist, author, journalist and chief executive officer of VOID Collective. He is best known as the writer of Pop Magick: A Simple Guide to Bending Your Reality, released in February 2020 with a foreword by Rose McGowan."
    },
    {
        bookAuthor:"Kate Atkinson",
        authorDoy:1951,
        authorBio:"Kate Atkinson MBE (born 20 December 1951) is an English writer of novels, plays and short stories.[1] She is known for creating the Jackson Brodie series of detective novels, which has been adapted into the BBC One series Case Histories.[1][2] She won the Whitbread Book of the Year prize in 1995 in the Novels category for Behind the Scenes at the Museum, winning again in 2013 and 2015 under its new name the Costa Book Awards."
    }]

    //necessary states is used and is passed as a value to the AppCtx.Provider
    const navigate=useNavigate();
    const [data,setData]=useState(books);
    const [info,setInfo]=useState(authors);
    const [topBar,setTopBar]=useState("books");
    const [useIndex,setUseIndex]=useState();
    const [toEdit,setToEdit]=useState();
    const [remaining,setRemaining]=useState();
    return(
        <AppCtx.Provider
        value={{
           data,
           setData,
           info,
           setInfo,
           navigate,
           setTopBar,
           topBar,
           useIndex,
           setUseIndex,
           toEdit,
           setToEdit,
           remaining,
           setRemaining
            }}>
            {children}
        </AppCtx.Provider>
    )
}