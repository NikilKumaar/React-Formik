import { useContext } from "react";
import MainSpace from "../Components/MainSpace";
import Book from "../Components/Book";
import { AppCtx } from "../Context/AppContext";

export default function BooksPage(){

    const {data}=useContext(AppCtx);
    return(
       //Body component is fixed as the children for mainSpace and mapped with necessary values being passed to it
      <MainSpace>      
        {data && data?.map((value,index)=>(
          <Book className="book" key={index}
          bookName={value.bookName}
          bookAuthor={value.bookAuthor}
          bookNumber={value.bookNumber}
          bookDate={value.bookDate}
          index={index}
                data={data}
          />
        ))}
       
      </MainSpace>
    )
}