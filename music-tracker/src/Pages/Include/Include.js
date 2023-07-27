import './Include.css'
import { Genre } from "../../Components/Genre/Genre"
import axios from "axios";
import {React, useState, use, useEffect} from "react";







export const Include = () => {
    const baseURL = "https://api.spotify.com";
    const token = 'BQC47WR6Q980VC8SCyHRKeKhDEIC6ncXc0e8czwdxrxMbcUPj4JllNYsB0mcFYb6p46n4piADZYp57og_WZhzmfWzE8TKJ8bbCmyXDMtkWYQCia5JPM'
    const [post, setPost] = useState(null);
    const config = {headers: {Authorization: `Bearer ${token}`}};
    useEffect(() => {
    axios
        .get(baseURL, config)
        .then((response) => {
            console.log("AAAAHHH")
            setPost(response.data).catch(console.log);
            });
        }, [config]);
        
    return(
        
        <div>

        <Genre />

            {/* <div>
            <h1>{post[0].name}</h1>
            </div> */}
        </div>

    )
}