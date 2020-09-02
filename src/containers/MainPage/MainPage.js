import React, {useEffect, useState} from 'react';
import './MainPage.css';
import axiosBase from "../../axiosBase";
import ReactHtmlParser from 'react-html-parser';
import {Sugar} from "react-preloaders";

const MainPage = props => {
    const [pageContent, setPageContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const id = !props.match.params.id ? null : props.match.params.id;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosBase.get(`${id ? `${id}.json` : '/home.json'}`);
            setPageContent(response.data);
        };
        fetchData().finally(() => setLoading(false));
    }, [id]);

    return (
        <section className="Main-page">
            <Sugar customLoading={loading} />
            <div className="container">
                {pageContent !== null ? (
                    <>
                        <h1 className="Title">{pageContent.title}</h1>
                        <div className="Content">{ ReactHtmlParser(pageContent.content) }</div>
                    </>
                ) : null}
            </div>
        </section>
    );
};

export default MainPage;