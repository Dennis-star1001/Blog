import { useEffect, useState } from "react";

import BlogList from "./BlogList";
import useFetch from "./useEffect";



const Home = () => {

   
const {data, isPending, error} = useFetch('http://localhost:8000/blogs');
    return (

        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data}  />}

        </div>

    );

}



export default Home;