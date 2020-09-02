import React, {useEffect, useState} from 'react';
import './AdminPage.css';
import Form from "../../components/UI/Form/Form";
import axiosBase from "../../axiosBase";

const AdminPage = props => {
    const [editPage, setEditPage] = useState({
        title: '',
        content: ''
    });

    const [page, setPage] = useState('home');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
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
    }
    return (
        <section className="Edit-page">
            <Form
                choice={onChoicePage}
                value={page}
                title={editPage.title}
                model={editPage.content}
                changedField={e => onChangeEditPage(e)}
                changedContent={onChangeContent}
            />
        </section>
    );
};

export default AdminPage;