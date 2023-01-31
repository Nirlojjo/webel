// import React, { useState } from "react";
// import axios from "axios";

// function FileUploader() {
//     const [file, setFile] = useState(null);
//     const [uploadedUrl, setUploadedUrl] = useState(null);
//     const [title, setTitle] = useState("");
//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     };
//     const handleTitleChange = (event) => {
//         setTitle(event.target.value);
//     };
//     const handleUpload = async () => {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("upload_preset", "webelReact");

//         try {
//             const response = await axios.post(
//                 "https://api.cloudinary.com/v1_1/ankur02sarkar/image/upload",
//                 formData
//             );

//             const { url, public_id } = response.data;
//             setUploadedUrl(url);

//         } catch (err) {
//             console.error(err);
//         }
//     };
//     console.log(title);
//     return (
//         <div>
//             <input type="file" onChange={handleFileChange} />
//             <input type="text" onChange={handleTitleChange} value={title} />
//             <button onClick={handleUpload}>Upload</button>
//             {uploadedUrl && <img src={uploadedUrl} alt="Uploaded" />}

//         </div>
//     );
// }

// export default FileUploader;






/////////////////////////////////////



import React, { useState, useEffect } from "react";
import axios from "axios";

function FileUploader() {
    const [file, setFile] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState(null);
    const [title, setTitle] = useState("");
    const [notices, setNotices] = useState([]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "webelReact");

        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/ankur02sarkar/image/upload",
                formData
            );

            const { url, public_id } = response.data;
            setUploadedUrl(url);

            const newNotice = {
                _id: (notices.length + 1).toString(),
                title,
                pic: url,
            };
            setNotices([...notices, newNotice]);
            localStorage.setItem("notices", JSON.stringify([...notices, newNotice]));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const savedNotices = JSON.parse(localStorage.getItem("notices"));
        if (savedNotices) {
            setNotices(savedNotices);
        }
    }, []);

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <input type="text" onChange={handleTitleChange} value={title} />
            <button onClick={handleUpload}>Upload</button>
            {uploadedUrl && <img src={uploadedUrl} alt="Uploaded" />}
        </div>
    );
}

export default FileUploader;