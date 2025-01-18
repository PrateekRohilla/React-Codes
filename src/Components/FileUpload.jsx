import react, {useState} from 'react'

const FileUpload = () => {

    const [file, setFile] = useState(null);

    const handleFile = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    }

    return(
        <>
            <h3>upload your image</h3>
            <input type="file" accept='image/*' onChange={handleFile}/>
            {file && <img src={URL.createObjectURL(file)} alt='uploaded' />}
        </>
    )

}

export default FileUpload;