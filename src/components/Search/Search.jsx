import React from 'react'
import "./Search.scss"
import { useNavigate } from "react-router-dom"

const Search = () => {

    const navigate = useNavigate();

    const HandlerSubmit = (e) => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        if (keyword.length === 0) {
            alert("Write something...")
        } else if (keyword.length < 4) {
            alert("Write at least 4 characters...")
        } else {
            e.currentTarget.keyword.value = '';
            navigate(`/results?keyword=${keyword}`)
        }
    }

    return (
        <form action="" onSubmit={HandlerSubmit}>
            <label for="search"></label>
            <input type="text" id="keyword" name="keyword" placeholder="Search..." autoFocus required />
            <button type="submit">Go</button>
        </form>
    )
}

export default Search