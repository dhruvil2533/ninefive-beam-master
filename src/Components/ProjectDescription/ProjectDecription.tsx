import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { database } from '../../Adapters/firebase'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

type DescriptionType = {
    id:string;
    name: string;
    pdfs: string[];
}

export const ProjectDescription = () => {
    const { id } = useParams()
    const [description, setDescription] = React.useState<DescriptionType>()
    const [loader, setLoader] = React.useState<boolean>(true)

    const getData = React.useCallback(async()=>{
        const document = await getDoc(doc(database, 'projects', `${id}`))
        setDescription({
            id: document.id,
            name: document.data()?.name,
            pdfs: document.data()?.pdfs
        })
        setLoader(false)
    }, [setDescription, setLoader, id])

    React.useEffect(()=>{
        getData()
    }, [getData])

    return(
        <>
           <Header />
           <div className="container-fluid mt-5 mb-5">
               {
                    loader ? 
                    <div className="container text-center">
                        <Spinner animation="border" />
                    </div>
                    :
                    <>
                        <h3 className='text-center blueText mt-5 mb-5 fw-bolder letter-spacing2'>
                            {description?.name}    
                        </h3>
                        <div className="container-fluid">
                            <h6>
                                Here below, we have some items to be look out for the specific project
                            </h6>
                            <ul className='list-group list-group-flush'>
                                {
                                    description?.pdfs.map((value, key)=>{
                                        return(
                                            <li 
                                            className='list-group-item p-3'
                                            key={key}>
                                                <Link
                                                    to={`/pdf-viewer/${id}/${value}`}
                                                    className="orangeText"
                                                    target='_blank'
                                                >
                                                    {value}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </>
               }
           </div>
           <Footer /> 
        </>
    )
}