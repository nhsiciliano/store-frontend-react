import React from "react";
import { Link } from "react-router-dom"
import "instantsearch.css/themes/algolia-min.css"
import {
    InstantSearch,
    Hits,
    SearchBox,
    Stats,
    Configure,
    Pagination,
} from "react-instantsearch-dom"
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"
import "./Results.scss"

const Results = () => {
    const searchClient = instantMeiliSearch(
        'https://meilisearch-production-2dd4.up.railway.app',
        'Zsvhw4aWiTACfe185I4OYh688TH2wcyqCToZyjy8CI17wACZpQbXXlItzzx8Cmjs',
        {
            paginationTotalHits: 60,
            primaryKey: 'id',
        }
    );

    console.log(searchClient);

    return(
        <div className="search">
            <h1>Find Your Product</h1>
            <InstantSearch
                indexName="product"
                searchClient={searchClient}
            >
                <Configure hitsPerPage={8} />
                <Stats />
                <SearchBox className="box" />
                <Hits hitComponent={Hit} />
                <Pagination className="pag" showLast={true} />
            </InstantSearch>
        </div>
    )
}

const Hit = ({ hit }) => (
    <>
        <div className="wrapper">
            <Link className="link" to={`/product/${hit.id}`}>
                <div className="card-result" key={hit.id}>
                    <div className="image">
                        <img src={hit.image} alt="" />
                    </div>
                    <h2>{hit.title}</h2>
                    <h3>{hit.desc.substring(0, 50)}...</h3>
                    <div>price: ${hit.price}</div>
                </div>
            </Link>
        </div>
    </>
)

export default Results;
