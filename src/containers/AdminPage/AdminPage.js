import React, {useEffect, useState} from 'react';
import './AdminPage.css';
import Form from "../../components/UI/Form/Form";
import axiosBase from "../../axiosBase";
import {Sugar} from "react-preloaders";

const AdminPage = props => {
    const [editPage, setEditPage] = useState({
        title: '',
        content: ''
    });

    const [page, setPage] = useState('home');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosBase.get(`/${page}.json`);
            setEditPage(response.data);
        }
        fetchData().finally(() => setLoading(false));
    }, [page]);

    const onChoicePage = async e => {
        const value = e.target.value;
        setPage(value);
    };

    const onChangeEditPage = e => {
        const name = e.target.name;
        const value = e.target.value;
        setEditPage(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onChangeContent = editor => {
        setEditPage(prevState => ({
            ...prevState,
            content: editor
        }));
    };

    const onSubmitEditPage = async e => {
        e.preventDefault();
        if(editPage.title === '' || editPage.content === '') return;
        try {
            const editPageCopy = {...editPage};
            await axiosBase.put(`/${page}.json`, editPageCopy);
        } finally {
            props.history.replace(`${page === 'home' ? '/' : `/pages/${page}`}`)
        }
    };

    return (
        <section className="Edit-page">
            <Sugar customLoading={loading}/>
            <Form
                choice={onChoicePage}
                value={page}
                title={editPage.title}
                model={editPage.content}
                submit={e => onSubmitEditPage(e)}
                changedField={e => onChangeEditPage(e)}
                changedContent={onChangeContent}
            />
        </section>
    );
};

export default AdminPage;