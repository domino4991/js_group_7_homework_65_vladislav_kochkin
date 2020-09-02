import React from 'react';
import './Form.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';

import FroalaEditorComponent from 'react-froala-wysiwyg';
import {PAGES_URL} from "../../../constants";

const Form = props => {
    return (
        <form className="Form">
            <label htmlFor="select-pages" className="Form__label">Pages</label>
            <select
                id="select-pages"
                name="page"
                className="Form__field"
                value={props.value}
                onChange={props.choice}
            >
                {PAGES_URL.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
            <label htmlFor="title" className="Form__label">Title</label>
            <input
                id="title"
                name="title"
                className="Form__field"
                value={props.title}
                onChange={props.changedField}
                type="text"
                placeholder="Enter title"
            />
            <h5 className="Form__label">Content</h5>
            <FroalaEditorComponent
                tag="textarea"
                model={props.model}
                onModelChange={props.changedContent}
            />
            <button type="submit" className="Form__send-btn">Save</button>
        </form>
    );
};

export default Form;