import React, { useState } from 'react';
import axios from 'axios';
import './fileUpload.css'

const FileUpload = () => {
    const [file, setFile] = useState();
    const [filName, setFileName] = useState("");

    const saveFile = (e)=>{
        setFile(e.target.file[0]);
        setFileName(e.target.file[0].name);
    }

    const uploadFile = async ()=>{
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", filName);
        try{
            const res = await axios.post(
                "http://localhost:3000/upload", formData
            );
            console.log(res);
        }catch (ex) {
            console.log(ex);
        }
    }

    return (
        <div className='app'>
            <input type='file' onChange={saveFile} />
            <button onClick={uploadFile}>upload</button>
        </div>
    );
};

export default FileUpload;