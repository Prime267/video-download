import React, { useRef, useState, useEffect } from 'react';
import S3 from 'react-aws-s3';
import './Upload.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import AWS from 'aws-sdk'


let progressInterval = null;

const Upload = () => {
    const fileInput = useRef();
    const [progress, setProgress] = useState(0);
    const [fileName, setFileName] = useState('');

    const loadingFile = () => {
        progressInterval = setInterval(() => {
            setProgress(progress => progress + 1);
        }, 10);
    }

    useEffect(() => {
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, [progress]);

    const handleClick = event => {
        event.preventDefault();
        let file = fileInput.current.files[0];
        let newFileName = fileInput.current.files[0].name;
        console.log(process.env);
        const config = {
            bucketName: process.env.REACT_APP_BUCKET_NAME,
            //dirName: process.env.REACT_APP_DIR_NAME /* optional */,
            region: process.env.REACT_APP_REGION,
            accessKeyId: process.env.REACT_APP_ACCESS_ID,
            secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
        };
        const ReactS3Client = new S3(config);
        console.log(ReactS3Client);
        ReactS3Client.uploadFile(file, newFileName).then(data => {
            console.log(data);
            if (data.status === 204) {
                console.log("success");
                setFileName(newFileName)
            } else {
                console.log("fail");
            }
        });
    };
    return (
        <div className='upload-steps'>
            <form onSubmit={handleClick}>
                <label className="position">
                    Upload file:
                    <input type='file' ref={fileInput} />
                </label>
                <button className="btn btn-outline-primary" type='submit' onClick={() => loadingFile()}>Upload</button>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">{progress}%</div>
                </div>
                <br />
                { (fileName !== "") ?
                    <div className="link">
                        <a href={`https://s3.eu-central-1.amazonaws.com/video-twistrobotics-com/${fileName}`} download>{fileName}</a>
                    </div>
                    : ""
                }
            </form>
        </div>
    )
}

export default Upload;