import { getDownloadURL, ref } from 'firebase/storage';
import React from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { storage } from '../../Adapters/firebase';


export const PDFViewer = () => {
    const { id, name } = useParams()
    const [pdf, setPdf] = React.useState<string>();
    const [loader, setLoader] = React.useState<boolean>(true)

    const getURL = React.useCallback(async()=>{
        await getDownloadURL(ref(storage, `projects/${id}/${name}`)).then((url)=>{
            setPdf(url)
            setLoader(false)
        })
    }, [setPdf, setLoader, id, name])

    React.useEffect(()=>{
        getURL()
    }, [getURL])

    return(
        <>
            {
                loader ? 
                <div className="container text-center">
                    <Spinner animation="border" />
                </div>
                :
                <embed
                    src={pdf}
                    type="application/pdf"
                    style={{
                        width: '100vw',
                        height: '100vh'
                    }}
                ></embed>                
            }
        </>
    )
}
