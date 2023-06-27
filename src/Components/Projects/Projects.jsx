// import { collection, getDocs } from 'firebase/firestore'
// import React from 'react'
// import { Spinner } from 'react-bootstrap'
// import { Link, useLocation } from 'react-router-dom'
// import { database } from '../../Adapters/firebase'
// import { Footer } from '../Footer/Footer'
// import { Header } from '../Header/Header'

// type ProjectObject = {
//     id: string;
//     name: string;
//     image: string;
// }

// export const Projects = () => {
//     const path = useLocation().pathname

//     if (path === '/projects')
//         document.title = 'ArchBuDe - Projects'

//     const [projects, setProjects] = React.useState<ProjectObject[]>([])
//     const [loader, setLoader] = React.useState<boolean>(true);

//     const getData = React.useCallback(async () => {
//         let array: ProjectObject[] = []
//         const querySnapshot = await getDocs(collection(database, 'projects'))
//         await querySnapshot.forEach(async (doc) => {
//             array.push({
//                 id: doc.id,
//                 name: doc.data().name,
//                 image: doc.data().image
//             })
//         })
//         setProjects(array);
//         setLoader(false)
//     }, [setProjects])

//     React.useEffect(() => {
//         getData()
//     }, [getData])

//     return (
//         <>
//             {
//                 path === '/projects' &&
//                 <Header />
//             }
//             <div className="row p-3 mt-5 mb-5" style={{ minHeight: '50vh' }}>
//                 <h2 className='text-center col-12 blueText mt-5 mb-5 fw-bolder letter-spacing2'>Our Projects</h2>
//                 {
//                     loader ?
//                         <div className="container text-center">
//                             <Spinner animation="grow" style={{ fontSize: '5rem' }} />
//                         </div>
//                         :
//                         projects.map((value, key) => {
//                             return (
//                                 <Link to={`/projects/${value.id}`} className="col-lg-3 p-2 text-decoration-none" data-aos="zoom-in" data-aos-delay={100} key={key}>
//                                     <div className='shadow p-3'>
//                                         <img
//                                             data-aos="fade-right"
//                                             data-aos-delay={400}
//                                             src={`/images/Projects/${value.image}`}
//                                             alt=""
//                                             className='img-thumbnail bg-transparent mt-5 mb-5 border-0 w-100'
//                                         />
//                                         <h4 data-aos="fade-right" data-aos-delay={600} className='text-center blueText mt-3 mb-5 fw-bolder'>{value.name}</h4>
//                                     </div>
//                                 </Link>
//                             )
//                         })
//                 }
//             </div>
//             {
//                 path === '/projects' &&
//                 <Footer />
//             }
//         </>
//     )
// }
