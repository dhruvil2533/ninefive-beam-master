import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { database, storage } from "../../Adapters/firebase";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Accordion, Carousel, Spinner } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { getDownloadURL, ref } from "firebase/storage";
import { DesciplineList } from "../../Constants/DesciplineList";
import SoftwareList from "../../Constants/SoftwareList";
import { Tooltip } from "@mui/material";
import { Padding, WhatsApp } from "@mui/icons-material";
import { IconButton, Link as MaterialLink } from "@mui/material";
import services from "../../Constants/Services.json";
import BIMServices from "../../Constants/BIMServices";
import BIMConsultation from "../../Constants/BIMConsultation";
import CADService from "../../Constants/CADServices";
import VisualServices from "../../Constants/3DVisualServices";
import ModelingServices from "../../Constants/3DModelingServices";
import img1 from "./sub_images/scan-to-bim.jpg";
import Tabs from "./tabs";

const one = () => (
  <div className="Dis_container">
    <div className="container">
      <h1
        className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
        data-aos="fade-right"
        data-aos-delay={100}
      >
        Scan To BIM
      </h1>
      <p>
        Whether you need to convert scans of your existing buildings and
        structures or retrieve as-built information post-construction, we have
        the perfect solution for you. Our Scan to BIM process is versatile and
        capable of producing detailed 3D models of various existing structures,
        such as commercial buildings, educational institutions, historical
        monuments, hotels, and train stations. Booming Scan to BIM service
        provider For AEC proffessionals in USA, UK, Middel East and Australia.
        Promiscuous portfolio with 100+ successful Scan to BIM projects
        delivered. Our Scan-to-BIM service is designed to facilitate all your
        site improvement and project alteration ideas, regardless of whether
        it's a 60-year-old commercial building site or a 100-year-old historical
        monument. As one of the leading Scan-to-BIM companies in the industry,
        we offer exceptional laser scanning in construction and 3D building
        scanning services. We take a pragmatic approach to ensure that we live
        up to your renovation aspirations. Our comprehensive Scan-to-BIM service
        includes 3D BIM modeling, MEP creation, and conversion of laser scan raw
        data into BIM models. Our Scan-to-BIM services include a range of
        deliverables, including 2D and 3D drawings, BIM models, clash detection
        reports, and virtual reality walkthroughs. These deliverables provide
        our clients with a comprehensive understanding of the building's
        existing condition, allowing them to make informed decisions about their
        project.We deliver best-in-class solutions using laser scan raw data
        (point cloud data) to provide high-quality 3D models ranging from LOD
        200 to LOD 400 in Revit.
      </p>
    </div>
  </div>
);
const two = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      As-Build Models
    </h1>
    <p>
      Transform your building's as-built conditions into a precisely drawn 3D
      model by digitizing and documenting its virtual rendition. As-built
      diagrams are typically produced during or after the construction phase and
      serve as a record of any deviations from the architect's original
      drawings. These 2D documents capture construction details such as walls,
      doors, windows, millwork, and plumbing fixtures, and can be utilized for
      future renovations, retrofits, or restorations of the building. We can
      transform existing 2D as-built documents into 3D BIM Modeling Services,
      which provide the necessary data to visualize as-built floor plans and any
      plumbing and electrical fittings. Our team of experienced engineers,
      drafters, and 3D modelers can make the process of creating 3D as-built
      models seem effortless. If you provide us with your existing as-built
      diagrams in CAD or PDF format, we can create a 3D model from scratch that
      includes precise measurements, dimensions, elevations, textures of various
      elements, and placement of electrical fittings.
    </p>
  </div>
);
const three = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      BIM MEP Services
    </h1>
    <p>
      BIM is increasingly being utilized by MEP contractors, MEP consultants,
      and Design-Build firms to enhance the design, detailing, estimation,
      fabrication, and installation of MEP (mechanical, electrical, and
      plumbing) building systems. MEP modeling facilitates collaboration,
      streamlines projects, and reduces risk and waste throughout the project
      life cycle. MEP 3D modeling, CAD services, and MEP coordination ensure
      effective synchronization between all the components of a building. Our
      MEP BIM modeling services cater to various sectors, including healthcare,
      residential, commercial, and industrial properties, as well as hotels and
      resorts. BIM MEP services are essential for ensuring efficient and
      accurate design, installation, and maintenance of building systems. At
      NineFive BIM, we specialize in providing high-quality BIM MEP services to
      clients across various industries. Our team of experienced engineers and
      designers uses cutting-edge software to create detailed 3D models of
      building systems, which can be used to identify and resolve potential
      issues before construction begins. This results in reduced costs,
      increased productivity, and improved collaboration between all
      stakeholders involved in the project. Whether you require MEP design,
      drafting, or coordination services, our team is dedicated to delivering
      customized solutions that meet your specific needs and requirements.
    </p>
  </div>
);
const four = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Architectural and Structural BIM
    </h1>
    <p>
      BIM is a digital process that involves the creation of 3D models of a
      building's physical and functional characteristics. BIM services have
      become a vital part of the architecture, engineering, and construction
      (AEC) industry, as it enables architects and engineers to create and
      manage building designs more efficiently. NineFive BIM is a provider of
      professional and high-quality 3D BIM modeling services to a diverse range
      of clients, including home builders, retailers, architects, engineers, and
      general contractors.We take a comprehensive approach to BIM, covering all
      disciplines, including architecture, interiors, structure, MEPF, and site
      development, to deliver projects in their entirety. This approach enables
      the design team to adopt an integrated design approach. Our team of BIM
      experts is skilled in delivering 3D BIM services from LOD100 to LOD500 for
      various building types, including commercial malls, recreational parks,
      hospitals, airports, railways, residential townships, infrastructure, and
      industrial production plants. We adhere to LOD specifications across the
      globe to ensure consistent modeling standards.
    </p>
  </div>
);
const five = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Clash Detection & Coordination
    </h1>
    <p>
      Clash detection and coordination services are essential for any
      construction project as they help to identify and resolve potential
      conflicts between different building systems before the construction
      process begins. These conflicts could include issues such as two systems
      occupying the same space or interference between different building
      systems. Failure to detect these conflicts in advance could result in
      costly rework, construction delays, and potential safety hazards. At
      NineFive BIM, we offer specialized clash detection and coordination
      services to our clients using advanced software tools such as Autodesk
      Navisworks and Revit. Our team of experienced engineers and designers
      works closely with clients and other stakeholders involved in the project,
      such as architects, MEP engineers, structural engineers, and contractors,
      to develop an efficient and accurate coordination plan. Our clash
      detection and coordination services involve the creation of 3D models of
      all building systems involved in the project. These models are then
      integrated and analyzed to identify potential clashes between different
      building systems. Our team uses their expertise to evaluate each clash
      scenario and develop a comprehensive resolution plan. Once the plan is
      finalized, it is shared with all stakeholders, and necessary modifications
      are made to the design to resolve the conflicts. In conclusion, our clash
      detection and coordination services are an essential part of the BIM
      process that helps to ensure a successful construction project. By
      partnering withour outsourcing company, clients can benefit from our
      expertise and experience in delivering high-quality and cost-effective
      services that are tailored to meet their specific needs and requirements.
    </p>
  </div>
);
const six = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Revit Family Creation
    </h1>
    <p>
      Revit is a powerful software used in the architecture, engineering, and
      construction (AEC) industry for designing and documenting building
      projects. One of the key features of Revit is its ability to create custom
      families, which are the building blocks of any Revit project. Revit
      families are parametric objects that can be easily modified, copied, and
      reused throughout the project.
    </p>
  </div>
);
const seven = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      PDF or CAD to BIM
    </h1>
    <p>
      Building Information Modeling (BIM) has become crucial for AEC
      professionals as it creates 3D digital building models for construction
      simulation and design evaluation before construction begins. However,
      creating a BIM model from existing documentation can be a time-consuming
      process. This is where PDF or CAD to BIM services come in. PDF to BIM and
      CAD to BIM services both involve converting 2D drawings or plans into 3D
      BIM models. The process for PDF to BIM typically requires redrawing plans
      in BIM software to create the 3D model, while the CAD to BIM process
      involves importing the CAD file into BIM software to create the model.
      Both processes can be time-consuming and require skilled operators with
      knowledge of both the original file format (PDF or CAD) and the BIM
      software. However, these services offer significant benefits in terms of
      accuracy, collaboration, and cost-effectiveness, making them an essential
      component of the construction industry.
    </p>
  </div>
);
const eight = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      BIM Implementation & Execution Consultation
    </h1>
    <p>
      BIM is a digital representation of the physical and functional
      characteristics of a building or infrastructure project. It encompasses
      the use of intelligent 3D models that incorporate detailed information
      about the project's various components, such as geometry, spatial
      relationships, quantities, and properties. BIM acts as a shared knowledge
      resource for all project stakeholders, facilitating collaboration,
      decision-making, and efficient project management. At NineFive BIM, we
      offer comprehensive BIM implementation services tailored to your specific
      project requirements. Our team of experienced BIM consultants possesses
      in-depth knowledge and expertise in implementing BIM workflows across
      various construction disciplines. Whether you are a small-scale contractor
      or a large architectural firm, we can assist you in integrating BIM
      processes effectively.
    </p>
  </div>
);
const nine = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Time Simulation & Cost estimation
    </h1>
    <p>
      Introducing our comprehensive BIM Time Simulation and Cost Estimation
      services, designed to enhance project planning, optimize schedules,
      control costs, and streamline construction processes. By leveraging
      advanced BIM technology and industry expertise, we provide you with
      accurate assessments of construction phases, identify clashes, optimize
      schedules, and ensure reliable and detailed cost estimates. With our
      integrated BIM Time Simulation and Cost Estimation services, you can
      achieve greater project efficiency, minimize delays, control costs, and
      ensure successful project delivery.
    </p>
  </div>
);
const ten = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Green Energy Building
    </h1>
    <p>
      As BIM Green Energy Building Consultation, we specialize in providing
      cutting-edge BIM services with a strong focus on green energy and
      sustainability. As a leading outsourcing company in the architectural and
      construction industry, we are dedicated to helping our clients create
      energy-efficient and environmentally friendly buildings through innovative
      BIM solutions. Contact us today to discuss your green energy building
      project requirements. Let us assist you in creating energy-efficient,
      sustainable buildings that make a positive impact on the environment and
      the community. Together, we can build a greener future.
    </p>
  </div>
);
const eleven = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Space & Facility management
    </h1>
    <p>
      BIM Space & Facility Management Consultation is a service that leverages
      the power of BIM technology to help organizations effectively manage their
      built environments. It combines the principles of BIM, space management,
      and facility management to create a holistic approach towards optimizing
      space utilization, improving maintenance processes, and maximizing the
      performance of facilities. At NineFive BIM, we take a client-centric
      approach to BIM Space & Facility Management Consultation. We work closely
      with our clients to understand their unique requirements, challenges, and
      goals. Our experienced team of BIM specialists, space planners, and
      facility management experts collaborate to develop tailored solutions that
      meet the specific needs of each client.
    </p>
  </div>
);
const twelve = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Scheduling and Quantity take-Off
    </h1>
    <p>
      At NineFive BIM, we specialize in BIM scheduling consultation services for
      the construction industry. Our expertise allows us to optimize project
      timelines, improve resource allocation, and enhance project coordination.
      By leveraging the power of BIM technology, we create comprehensive
      schedules tailored to your specific needs. Our experienced team
      collaborates closely with you to develop customized solutions. Accurate
      quantity take-offs are crucial for estimating project costs, determining
      material requirements, and facilitating effective procurement.We offer
      comprehensive quantity take-off consultation services, leveraging BIM
      technology and our domain expertise to deliver precise and reliable
      results.
    </p>
  </div>
);
const thirteen = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      2D CAD Drafting
    </h1>
    <p>
      NineFive BIM, your premier destination for 2D CAD drafting services. With
      our extensive expertise and commitment to excellence, we provide top-notch
      drafting solutions to clients worldwide. Whether you're an architecture
      firm, engineering company, construction business, or any other industry
      that requires accurate and precise technical drawings, we are here to meet
      your needs. Our 2D CAD drafting service offers a range of benefits to
      streamline your design process and enhance project outcomes. At NineFive,
      we are committed to delivering high-quality 2D CAD drafting services that
      exceed your expectations. Our focus on accuracy, attention to detail, and
      customer satisfaction sets us apart as a trusted outsourcing partner.
      Contact us today to discuss your project requirements and discover how we
      can contribute to your success.
    </p>
  </div>
);
const fourteen = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Architectural & Structural Drafting
    </h1>
    <p>
      NineFive BIM, the epitome of excellence in delivering exquisite
      architectural and structural drafting services. Equipped with a team of
      seasoned drafters and designers, we offer unrivaled outsourcing solutions
      to esteemed architects, engineers, contractors, and construction firms
      spanning the globe. Our paramount objective is to aid you in the
      metamorphosis of your visionary concepts into impeccably intricate and
      precise drawings, seamlessly optimizing the design and construction
      journey.
    </p>
  </div>
);
const fifteen = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      CAD Conversions
    </h1>
    <p>
      In the realm of precise design work, CAD stands as a vital tool. However,
      collaboration and development can be impeded by outdated paper-based or
      incompatible digital drawings. Fear not, for our CAD conversion services
      come to the rescue, surmounting these obstacles and ushering in a seamless
      era of collaboration and development. At NineFive BIM, we pride ourselves
      on our expertise in providing superior CAD conversion services to a wide
      spectrum of industries. Our team of highly skilled CAD specialists excels
      in the conversion of blueprints, drawings, and sketches from diverse
      sources, into industry-standard CAD formats such as AutoCAD (DWG/DXF),
      SolidWorks, Revit, among others. Whether you have physical paper drawings,
      scanned images, or obsolete digital files, we possess the capability to
      convert them into fully editable and compatible CAD formats. Our CAD
      conversion process is meticulous, ensuring accuracy and precision at every
      step. We prioritize customer satisfaction and strive to exceed your
      expectations with our CAD conversion services. Our commitment to accuracy,
      quality, and timely delivery sets us apart in the outsourcing industry.
      Trust us to handle your CAD conversion requirements, and we guarantee
      exceptional results that empower your design processes. Contact us today
      to discuss your CAD conversion needs, and let's embark on a journey of
      digitizing and optimizing your engineering designs.
    </p>
  </div>
);
const sixteen = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      CAD As-build
    </h1>
    <p>
      CAD As-built is the process of creating accurate and detailed digital
      representations of existing buildings, infrastructure, or any physical
      structure. It involves capturing the current state of a facility,
      including architectural, structural, mechanical, electrical, and plumbing
      elements, and converting them into precise CAD (Computer-Aided Design)
      drawings. We understand the importance of having up-to-date as-built
      drawings for your projects. Whether you're renovating an existing
      facility, expanding a structure, or simply need accurate documentation for
      maintenance purposes, our CAD As-built service offers a cost-effective
      solution tailored to your specific requirements. With our CAD As-built
      service, you can unlock numerous benefits for your projects, including
      accurate documentation, improved decision-making, streamlined
      collaboration, and enhanced facility management. Our commitment to
      quality, efficiency, and customer satisfaction has made us a preferred
      outsourcing partner for CAD As-built services. Contact us today to discuss
      your project requirements and discover how our CAD As-built service can
      support your business goals. Our team of experts is ready to assist you in
      achieving precise and comprehensive documentation of your built
      environment. Partner with NineFive BIM and experience the difference in
      CAD As-built outsourcing.
    </p>
  </div>
);
const seventeen = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      SD/CD Sets
    </h1>
    <p>
      Elevate your architectural and engineering endeavors with NineFive BIM,
      the foremost outsourcing company in the industry. We pride ourselves on
      delivering unparalleled solutions through our exquisite offerings in
      schematic design sets and construction documentation sets. With our team
      of seasoned professionals and an unwavering commitment to industry
      standards, we provide an exceptional level of excellence in design and
      documentation services tailored to our clients' distinct requirements. Our
      schematic design sets service is tailored to assist architects, designers,
      and developers in the initial stages of a project. We collaborate closely
      with our clients to develop innovative and functional design concepts that
      align with their vision and project requirements. Our experienced team
      combines creativity with technical expertise to produce detailed sketches,
      floor plans, elevations, and 3D renderings that help bring ideas to life.
      We emphasize effective communication and rapid prototyping to ensure
      client satisfaction before proceeding to the next phase. As a trusted
      outsourcing partner, we excel in providing construction documentation sets
      that serve as an essential resource for contractors, engineers, and
      construction teams. Our meticulous attention to detail guarantees accurate
      and comprehensive documentation that adheres to local building codes,
      regulations, and industry standards. We create detailed architectural,
      structural, electrical, and mechanical drawings, along with
      specifications, schedules, and material lists. Our goal is to facilitate
      seamless construction processes, minimize errors, and enhance project
      efficiency. In conclusion, at NineFive BIM, we offer an array of services
      in SD/CD sets, meticulously crafted to empower our clients in executing
      their projects with utmost success. Our unwavering dedication to quality,
      precision, and timely delivery sets us apart, enabling us to surpass
      client expectations and propel their projects to new heights of
      achievement. Embrace the opportunity to partner with us, and together, we
      will revolutionize your architectural and engineering endeavors, fostering
      innovation and efficiency at every step.
    </p>
  </div>
);
const eighteen = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Shop Drawings
    </h1>
    <p>
      Shop drawings are detailed illustrations, diagrams, and plans that depict
      the specific dimensions, materials, and installation instructions for
      various components of a construction project. These drawings serve as a
      crucial bridge between the design phase and the actual construction
      process, ensuring seamless coordination and effective communication
      between architects, engineers, contractors, and fabricators. Partner with
      NineFive BIM for your Shop Drawings Services needs and experience the
      advantages of working with a reliable and skilled team. Contact us today
      to discuss your project requirements and receive a personalized quote.
    </p>
  </div>
);
const nineteen = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Redline Markups
    </h1>
    <p>
      They are the industry-standard annotations and revisions made on
      electronic documents, usually in the form of red or colored lines, to
      indicate changes, suggestions, or feedback. Redline Markups enable
      multiple stakeholders to collaborate on documents, ensuring a smooth
      exchange of ideas and effective version control. Our Redline Markup
      Services provide you with a dedicated team of experienced professionals
      adept at handling a variety of document types, including contracts, legal
      agreements, technical specifications, marketing materials, and more. Our
      skilled experts meticulously review and annotate your documents, precisely
      capturing all requested revisions, comments, and suggestions. Partner with
      us for your Redline Markup needs, and experience streamlined document
      collaboration, improved communication, and enhanced efficiency within your
      organization. Our commitment to excellence and customer satisfaction makes
      us the ideal outsourcing choice for your business. Contact us today to
      discuss your requirements and let us transform your document workflows.
    </p>
  </div>
);
const Twenty = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Interior & Exterior 3D Rendering
    </h1>
    <p>
      Welcome to NineFive BIM, where we specialize in providing high-end
      Interior and Exterior 3D Rendering Services. Our team of skilled experts
      is dedicated to bringing your design visions to life through a harmonious
      blend of creativity, cutting-edge technology, and meticulous attention to
      detail. Whether you are an esteemed architect, visionary interior
      designer, ambitious real estate developer, or even a discerning homeowner,
      our rendering services are tailored to elevate your projects and captivate
      your audience. At NineFivew BIM, we possess an exceptional knack for
      transforming your blueprints, sketches, or CAD files into awe-inspiring,
      realistic visualizations of interior spaces. Utilizing advanced rendering
      techniques, our talented artists meticulously craft immersive virtual
      environments that enable you to experience the essence of your designs
      before they manifest in the physical realm. We painstakingly render every
      element, including lighting, textures, furniture, and decor, ensuring that
      every aspect of your interior concept is accurately portrayed. Our
      superior-quality renders serve as invaluable tools for presentations,
      marketing materials, and client approvals, empowering you to showcase your
      ideas with unwavering confidence. With our exterior 3D rendering services,
      we go above and beyond in highlighting the beauty and functionality of
      your architectural projects. Be it residential buildings, commercial
      complexes, or breathtaking landscape designs, our team strives to create
      visually striking and hyper-realistic renders that encapsulate the essence
      of your exterior spaces. We meticulously consider elements such as
      materials, landscaping, lighting, and environmental factors to provide an
      unparalleled level of realism in our renders. These captivating visuals
      serve as indispensable marketing assets, enabling potential clients and
      investors to envision the final outcome of your project and make informed
      decisions with utmost certainty. At NineFive BIM, we take immense pride in
      delivering Interior and Exterior 3D Rendering Services of the highest
      caliber, surpassing expectations at every turn. Whether you require
      captivating visuals for marketing purposes, design validation, or client
      presentations, our skilled team is dedicated to transforming your ideas
      into stunning visual masterpieces. Experience the epitome of rendering
      excellence with NineFivew BIM by contacting us today, and witness the
      unrivaled beauty of your projects coming to life.
    </p>
  </div>
);
const Twentyone = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      3D Walkthrough
    </h1>
    <p>
      We excel in providing state-of-the-art 3D Walkthrough Services. Our team
      of talented professionals harnesses the power of creativity, technology,
      and expertise to breathe life into your architectural designs, real estate
      projects, and product visualizations. We are committed to pushing the
      boundaries of what's possible and transforming the way you showcase your
      ideas, impress your clients, and captivate your target audience with our
      immersive 3D walkthroughs. When it comes to captivating your audience,
      showcasing your designs, and boosting your marketing efforts, our 3D
      Walkthrough Services are the perfect solution. With our expertise and
      commitment to quality, we bring your projects to life, offering a
      realistic and interactive experience that will leave a lasting impression.
      Contact us today to discover how we can elevate your projects and help you
      stand out in a visually demanding world.
    </p>
  </div>
);
const Twentytwo = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Floor Plan Rendering
    </h1>
    <p>
      Our Floor Plan Rendering Services are designed to transform your 2D
      blueprints into immersive and photorealistic 3D representations. Our
      skilled team of rendering artists and designers utilizes the latest
      software and techniques to create stunning visualizations that showcase
      the potential of your space. Whether you need floor plans for residential,
      commercial, or industrial properties, we can cater to your specific
      requirements. By availing our services, you can expect a range of
      benefits. Firstly, our renderings provide a realistic depiction of the
      property, allowing clients and stakeholders to visualize the space
      accurately. This aids in making informed decisions regarding design
      choices, layout optimization, and overall functionality. Furthermore, our
      floor plan renderings incorporate a high level of detail, including
      architectural elements, interior furnishings, lighting effects, and
      textures. This attention to detail adds depth and realism to the
      visualizations, enhancing their overall appeal. These realistic
      representations help attract potential buyers, investors, and tenants,
      giving you a competitive edge in the market.Whether you need floor plan
      renderings for marketing purposes, presentations, or project planning, our
      services can fulfill your needs. With our expertise, state-of-the-art
      technology, and commitment to excellence, we guarantee exceptional results
      that exceed your expectations. Take a look at our portfolio to see the
      quality of our work and get in touch with us to discuss your floor plan
      rendering requirements. Let our outsourcing company assist you in bringing
      your visions to life through stunning and captivating floor plan
      renderings.
    </p>
  </div>
);
const Twentythree = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Landscape & Outdoor Rendering
    </h1>
    <p>
      Landscape and outdoor rendering is a crucial aspect of architectural
      visualization that allows clients to envision their projects in a
      realistic and immersive way. Whether you're an architect, landscape
      designer, real estate developer, or homeowner, our rendering services can
      provide you with a powerful tool to communicate your ideas and make
      informed decisions. With our expertise in 3D rendering and visualization
      techniques, we can transform your design concepts into captivating,
      high-quality images and animations. Our team utilizes cutting-edge
      software and technologies to create detailed renderings that capture every
      aspect of your outdoor spaces, including architectural elements,
      vegetation, lighting, textures, and atmospheric effects. By outsourcing
      your landscape and outdoor rendering needs to our company, you can benefit
      from several advantages. Firstly, our dedicated team of professionals has
      extensive experience in the field, ensuring that the final output meets
      your specific requirements and exceeds your expectations. Additionally,
      outsourcing your rendering services can save you valuable time and
      resources. Instead of investing in expensive software, hardware, and
      training, you can rely on our company's infrastructure and expertise. This
      allows you to focus on other essential aspects of your projects while we
      handle the rendering process efficiently and effectively. Furthermore, our
      outsourcing services offer a cost-effective solution, enabling you to
      reduce overhead expenses associated with in-house rendering capabilities.
      We provide flexible pricing options tailored to your project's scope and
      scale, ensuring that you receive a high return on your investment. Whether
      you need still images, virtual tours, or interactive presentations, our
      Landscape & Outdoor Rendering Services are designed to provide you with
      visually stunning representations that enhance your project's
      marketability, attract clients, and facilitate better decision-making.
      Partner with our outsourcing company today and unlock the potential of
      your landscape designs through our expert rendering services. Let us
      transform your ideas into captivating visual experiences that bring your
      outdoor spaces to life. Contact us now to discuss your project and
      discover how we can exceed your expectations.
    </p>
  </div>
);
const Twentyfour = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Furniture & Product Rendering
    </h1>
    <p>
      Our Furniture & Product Rendering Services cater to a wide range of
      industries, including furniture manufacturers, interior designers,
      architects, e-commerce businesses, and product developers. Whether you
      need captivating visualizations for marketing materials, product catalogs,
      or online platforms, our team of skilled designers and artists is here to
      bring your concepts to life. Using state-of-the-art software and advanced
      rendering techniques, we create highly detailed and lifelike 3D models of
      furniture and products. Our talented professionals possess a keen eye for
      aesthetics and pay meticulous attention to every aspect of the rendering
      process. From texture and materials to lighting and shadows, we ensure
      that each visual representation exudes realism and captures the essence of
      your designs. By leveraging our Furniture & Product Rendering Services,
      you gain numerous benefits. Firstly, our renderings provide a tangible
      sense of how your furniture or products will look in various environments,
      enabling you to make informed decisions before manufacturing or launching.
      This saves you time, effort, and resources by minimizing the need for
      physical prototypes and revisions. Additionally, our renderings allow you
      to showcase your offerings with unparalleled visual impact. High-quality,
      photorealistic images and animations enhance your marketing efforts,
      enabling you to engage customers, generate excitement, and drive sales.
      Whether you require static images, dynamic animations, or virtual reality
      experiences, we can deliver tailored solutions to suit your specific
      requirements. Contact us today to discuss your rendering needs, and let us
      embark on a creative journey together, bringing your ideas to life with
      our top-notch Furniture & Product Rendering Services.
    </p>
  </div>
);
const Twentyfive = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      AR & VR Services
    </h1>
    <p>
      Augmented Reality (AR) is a technology that superimposes
      computer-generated elements onto the real world, enhancing the user's
      perception and interaction with their physical surroundings.By employing
      AR, we enable our clients to experience architectural designs in a highly
      immersive and interactive manner. Through the use of specialized devices
      like smartphones or tablets, users can visualize virtual models overlaid
      onto real-world environments, allowing them to explore and evaluate design
      concepts with unparalleled realism. With AR, clients gain a deeper
      understanding of spatial relationships, materials, lighting, and other
      crucial elements, empowering them to make informed decisions throughout
      the design and construction processes. Virtual Reality (VR) transports
      users into entirely virtual environments, creating a fully immersive
      experience that simulates real-world settings. With our VR services,
      clients can step into their architectural designs and experience them from
      every angle, offering an unprecedented level of engagement. By donning VR
      headsets, users can walk through virtual buildings, inspect interior and
      exterior spaces, and even interact with virtual objects. This technology
      provides an invaluable tool for design validation, collaboration, and
      stakeholder communication, as it allows all parties involved to visualize
      and comprehend complex architectural concepts with remarkable clarity. Our
      team of skilled professionals specializes in leveraging AR and VR
      technologies to bring architectural designs to life. Whether it's
      presenting a concept to clients, collaborating with project stakeholders,
      or conducting design reviews, our AR and VR solutions enable seamless
      communication and efficient decision-making. We are committed to
      harnessing the power of these immersive technologies to enhance the
      efficiency, accuracy, and overall quality of our clients' projects. With
      our AR and VR services, you can expect a transformative experience that
      goes beyond traditional architectural visualization. Embrace the future of
      design and construction with our BIM outsourcing company, and unlock the
      true potential of your projects through the power of AR and VR.
    </p>
  </div>
);
const Twentysix = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Revit modeling service
    </h1>
    <p>
      Revit modeling services play a crucial role in the field of architectural,
      engineering, and construction industries. As an outsourcing company, we
      specialize in providing high-quality Revit modeling services that cater to
      the specific needs and requirements of our clients. Revit is a powerful
      Building Information Modeling (BIM) software that allows professionals to
      create detailed 3D models of buildings, infrastructure, and construction
      projects. Our team of experienced Revit modelers possesses deep knowledge
      and expertise in utilizing this software to its full potential, ensuring
      accurate and efficient modeling solutions. With our Revit modeling
      services, we assist architects, engineers, contractors, and developers in
      visualizing their designs and bringing them to life. Our skilled modelers
      meticulously create 3D models that encompass architectural elements,
      structural components, MEP (mechanical, electrical, plumbing) systems, and
      other intricate details. By utilizing Revit's intelligent parametric
      objects, we enable easy modification and coordination throughout the
      design and construction process. By outsourcing your Revit modeling needs
      to our experienced team, you can benefit from enhanced design
      visualization, improved collaboration, reduced errors, and increased
      efficiency in your projects. We prioritize quality, adherence to project
      timelines, and cost-effectiveness, ensuring that our clients receive
      top-notch Revit modeling services tailored to their unique project needs.
    </p>
  </div>
);
const Twentyseven = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      CAD Modeling Service
    </h1>
    <p>
      CAD modeling services provide businesses with professional expertise in
      creating detailed and accurate computer-aided design (CAD) models for a
      wide range of industries. Whether it's architectural, mechanical,
      electrical, or industrial design, CAD modeling plays a crucial role in
      visualizing concepts, simulating real-world scenarios, and aiding in the
      manufacturing process. We offer comprehensive CAD modeling services to
      help businesses streamline their design processes and bring their ideas to
      life. Our team of skilled CAD designers and engineers are equipped with
      the latest software tools and technologies to deliver high-quality and
      precise 2D and 3D models. Our CAD modeling services encompass a broad
      spectrum of solutions tailored to meet the specific needs of our clients.
      We specialize in creating detailed architectural models that accurately
      represent building structures, floor plans, and interior designs. This
      enables architects, developers, and construction firms to visualize and
      communicate their ideas effectively, leading to better decision-making and
      improved project outcomes. For mechanical and industrial designs, our CAD
      modeling services provide a cost-effective solution for prototyping,
      product development, and manufacturing processes. Our team can create
      intricate 3D models of machinery, components, and assemblies, allowing for
      thorough analysis, optimization, and evaluation before production begins.
      This ensures that potential issues are identified early on, reducing
      time-to-market and minimizing costly errors. Electrical CAD modeling is
      another area of expertise we offer, catering to the needs of electronics
      and electrical engineering industries. Our skilled professionals can
      create detailed circuit diagrams, wiring layouts, and panel designs,
      facilitating efficient planning, installation, and maintenance of
      electrical systems. By outsourcing your CAD modeling needs to our company,
      you can benefit from reduced costs, increased productivity, and access to
      a highly skilled team of experts. We prioritize quality and accuracy in
      our work, ensuring that our CAD models meet the highest industry
      standards.
    </p>
  </div>
);
const Twentyeight = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Sketch Up modeling Service
    </h1>
    <p>
      Our talented SketchUp artists work closely with you to understand your
      project requirements, ensuring that every aspect is accurately captured in
      the model. Whether it's an intricate building facade, intricate furniture
      design, or intricate landscape elements, our attention to detail ensures
      the utmost precision in our models. Using SketchUp's powerful tools and
      features, we create highly detailed 3D models with accurate dimensions,
      textures, materials, and lighting effects. Our models not only showcase
      the aesthetics of your designs but also provide a realistic sense of scale
      and spatial relationships, enabling you to visualize the final outcome
      before any construction or manufacturing begins. By outsourcing your
      SketchUp modeling requirements to us, you can benefit from cost-effective
      solutions without compromising on the quality of work. Our competitive
      pricing packages ensure that you receive exceptional value for your
      investment, allowing you to allocate your resources efficiently. Choose
      our SketchUp modeling services and experience the seamless integration of
      creativity, precision, and innovation. Let us assist you in bringing your
      ideas to life, giving you a competitive edge in your industry. Contact us
      today to discuss your project requirements, and let us embark on a
      collaborative journey towards realizing your design aspirations.
    </p>
  </div>
);
const Twentynine = () => (
  <div className="Dis_container">
    <h1
      className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
      data-aos="fade-right"
      data-aos-delay={100}
    >
      Rhino Modeling Service
    </h1>
    <p>
      At NineFive BIM, we are proud to offer high-quality Rhino modeling
      services to meet the diverse needs of our clients. Rhino, also known as
      Rhinoceros or Rhino3D, is a powerful 3D computer-aided design (CAD)
      software widely used in industries such as architecture, industrial
      design, engineering, and product development. With our expertise in Rhino,
      we can help you bring your creative concepts to life and transform them
      into realistic 3D models. Our team of skilled and experienced Rhino
      modelers possesses a deep understanding of the software's capabilities and
      its application in various industries. They are proficient in utilizing
      Rhino's extensive toolset, which includes advanced surfacing, NURBS
      (Non-Uniform Rational B-Splines) modeling, mesh editing, and parametric
      design functionalities. Whether you require precise geometric designs,
      intricate organic shapes, or complex surface modeling, our experts can
      deliver exceptional results with utmost precision. Whether you are an
      architectural firm, product designer, engineering company, or a creative
      professional seeking Rhino modeling services, we have the expertise and
      resources to cater to your needs. With our commitment to excellence and
      attention to detail, we strive to exceed your expectations and deliver
      outstanding 3D models that bring your ideas to life. Contact us today to
      discuss your Rhino modeling requirements and explore how our outsourcing
      services can benefit your business.
    </p>
  </div>
);

// const thirteen = () => (
//   <div className="Dis_container">Space & Facility management</div>
// );
// const fourteen = () => (
//   <div className="Dis_container">Space & Facility management</div>
// );

//  Tabs Array
const tabsone = [
  {
    label: "Scan To BIM", // define Label
    Component: one, // assign Component
  },
  {
    label: "As-Build Models", // Add more
    Component: two,
  },
  {
    label: "BIM MEP Services",
    Component: three,
  },
  {
    label: "Architectural and Structural BIM",
    Component: four,
  },
  {
    label: "Clash Detection & Coordination",
    Component: five,
  },
  {
    label: "Revit Family Creation",
    Component: six,
  },
  {
    label: "PDF or CAD to BIM",
    Component: seven,
  },
];
const tabstwo = [
  {
    label: "BIM Implementation & Execution Consultation",
    Component: eight,
  },
  {
    label: "Time Simulation & Cost estimation",
    Component: nine,
  },
  {
    label: "Green Energy Building",
    Component: ten,
  },
  {
    label: "Space & Facility management",
    Component: eleven,
  },
  {
    label: "Scheduling and Quantity take-Off",
    Component: twelve,
  },
];
const tabsthree = [
  {
    label: "2D CAD Drafting",
    Component: thirteen,
  },
  {
    label: "Architectural & Structural Drafting",
    Component: fourteen,
  },
  {
    label: "CAD Conversions",
    Component: fifteen,
  },
  {
    label: "CAD As-build",
    Component: sixteen,
  },
  {
    label: "SD/CD Sets",
    Component: seventeen,
  },
  {
    label: "Shop Drawings",
    Component: eighteen,
  },
  {
    label: "Redline Markups",
    Component: nineteen,
  },
];
const tabsfour = [
  {
    label: "Interior & Exterior 3D Rendering",
    Component: Twenty,
  },
  {
    label: "3D Walkthrough",
    Component: Twentyone,
  },
  {
    label: "Floor Plan Rendering",
    Component: Twentytwo,
  },
  {
    label: "Landscape & Outdoor Rendering",
    Component: Twentythree,
  },
  {
    label: "Furniture & Product Rendering",
    Component: Twentyfour,
  },
  {
    label: "AR & VR Services",
    Component: Twentyfive,
  },
];
const tabsfive = [
  {
    label: "Revit modeling service",
    Component: Twentysix,
  },
  {
    label: "CAD Modeling Service",
    Component: Twentyseven,
  },
  {
    label: "Sketch Up modeling Service",
    Component: Twentyeight,
  },
  {
    label: "Rhino Modeling Service",
    Component: Twentynine,
  },
];
export const SubService = () => {
  // const [selectedTab1, setSelectedTab1] = useState(0);
  const [selectedTab2, setSelectedTab2] = useState(0);
  const { service, name } = useParams();
  const [bimService, setBimService] = useState(false);
  const [bimConsultation, setBimConsultation] = useState(false);
  const [cadService, setCadService] = useState(false);
  const [visualsService, setVisualsService] = useState(false);
  const [modelingService, setModelingService] = useState(false);
  // const string = `${name}`;
  // const regexPattern = /\s+/g;
  // const ans = string.replace(regexPattern, "");
  // const isBimService = true;

  if (name === "BIM Services" && !bimService) {
    setBimService(true);
  }
  if (name === "BIM Consultation" && !bimConsultation) {
    setBimConsultation(true);
  }
  if (name === "CAD Drafting Services" && !cadService) {
    setCadService(true);
  }
  if (name === "3D Visuals & Rendering Services" && !visualsService) {
    setVisualsService(true);
  }
  if (name === "3D modeling Services" && !modelingService) {
    setModelingService(true);
  }

  // css of discription
  const para = {
    fontSize: "15px",
  };

  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="section_Padding"></div>
      <div className="section_Padding"></div>
      <div className="container">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                BIM Services
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body show">
                <Tabs
                  selectedTab={selectedTab2}
                  onClick={setSelectedTab2}
                  tabs={tabsone}
                  type="pills"
                />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                BIM Consultation
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Tabs
                  selectedTab={selectedTab2}
                  onClick={setSelectedTab2}
                  tabs={tabstwo}
                  type="pills"
                />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                CAD Drafting Services
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Tabs
                  selectedTab={selectedTab2}
                  onClick={setSelectedTab2}
                  tabs={tabsthree}
                  type="pills"
                />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                BIM Consultation
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Tabs
                  selectedTab={selectedTab2}
                  onClick={setSelectedTab2}
                  tabs={tabsfour}
                  type="pills"
                />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                3D modeling Services
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Tabs
                  selectedTab={selectedTab2}
                  onClick={setSelectedTab2}
                  tabs={tabsfive}
                  type="pills"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        

      <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container mt-5 mb-5">
        <h4
          className="redText col-12 fw-bold mb-5 text-center display-5"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          {name}
        </h4>
        {bimService &&
          BIMServices.map((data, key) => {
            return (
              <div className="row sub_ser">
                <div className="col-6 text-center">
                  <img src={data.img} className="" alt="" />
                </div>
                <div
                  key={key}
                  className="col-6 container sub-services-container mt-2 mb-5"
                >
                  <div>
                    <h6
                      className={`text-start heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
                      data-aos="fade-right"
                      data-aos-delay={100}
                    >
                      {data.name}
                    </h6>
                    <p
                      style={para}
                      className={`text-start text-justify mt-2 lead`}
                      data-aos="fade-right"
                      data-aos-delay={100}
                    >
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        {bimConsultation &&
          BIMConsultation.map((data, key) => {
            return (
              <div className="row sub_ser">
                <div className="col-6 text-center">
                  <img src={data.img} alt="" />
                </div>
                <div
                  key={key}
                  className="col-6 container sub-services-container mt-2 mb-5"
                >
                  <h6
                    className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.name}
                  </h6>
                  <p
                    className={` text-start text-justify mt-5 lead`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        {cadService &&
          CADService.map((data, key) => {
            return (
              <div className="row sub_ser">
                <div className="col-6 text-center">
                  <img src={data.img} alt="" />
                </div>
                <div
                  key={key}
                  className="col-6 container sub-services-container mt-2 mb-5"
                >
                  <h6
                    className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.name}
                  </h6>
                  <p
                    className={`text-start text-justify mt-5 lead`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        {visualsService &&
          VisualServices.map((data, key) => {
            return (
              // <div
              //   key={key}
              //   className="container sub-services-container mt-5 mb-5"
              // >
              //   <h6
              //     className={`text-center mt-5 mb-3 fw-bold letter-spacing2 display-6`}
              //     data-aos="fade-right"
              //     data-aos-delay={700}
              //   >
              //     {data.name}
              //   </h6>
              //   <h6
              //     className={`text-justify mt-5 lead`}
              //     data-aos="fade-right"
              //     data-aos-delay={700}
              //   >
              //     {data.description}
              //   </h6>
              // </div>
              <div className="row sub_ser">
                <div className="col-6 text-center">
                  <img src={data.img} alt="" />
                </div>
                <div
                  key={key}
                  className="col-6 container sub-services-container mt-2 mb-5"
                >
                  <h6
                    className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.name}
                  </h6>
                  <p
                    className={`text-start text-justify mt-5 lead`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        {modelingService &&
          ModelingServices.map((data, key) => {
            return (
              // <div
              //   key={key}
              //   className="container sub-services-container mt-5 mb-5"
              // >
              //   <h6
              //     className={`text-center mt-5 mb-3 fw-bold letter-spacing2 display-6`}
              //     data-aos="fade-right"
              //     data-aos-delay={700}
              //   >
              //     {data.name}
              //   </h6>
              //   <h6
              //     className={`text-justify mt-5 lead`}
              //     data-aos="fade-right"
              //     data-aos-delay={700}
              //   >
              //     {data.description}
              //   </h6>
              // </div>
              <div className="row sub_ser">
                <div className="col-6 text-center">
                  <img src={data.img} alt="" />
                </div>
                <div
                  key={key}
                  className="col-6 container sub-services-container mt-2 mb-5"
                >
                  <h6
                    className={`text-center heading-text mt-5 mb-3 fw-bold letter-spacing2 display-6`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.name}
                  </h6>
                  <p
                    className={`text-start text-justify mt-5 lead`}
                    data-aos="fade-right"
                    data-aos-delay={100}
                  >
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div> */}
      <div className="section_Padding"></div>

      <div className="section_Padding"></div>
      <div className="container-fluid mt-3 mb-3 p-0"></div>
      <MaterialLink href="https://wa.me/7016591928" target="_blank">
        <IconButton
          size="large"
          className="bg-dark text-success"
          style={{ position: "fixed", bottom: 40, right: 40 }}
        >
          <WhatsApp />
        </IconButton>
      </MaterialLink>
      {/* <Footer /> */}
    </div>
  );
};

// type ImageProps = {
//   path: string;
// };

// const Image = (props: ImageProps) => {
//   const [image, setImage] = React.useState<string>("");

//   const getImage = React.useCallback(async () => {
//     await getDownloadURL(ref(storage, props.path)).then((url) => {
//       setImage(url);
//     });
//   }, [props.path]);

//   React.useEffect(() => {
//     getImage();
//   }, [getImage]);

//   return (
//     <img src={image} alt="" className="img-thumbnail border-0 p-1 w-100" />
//   );
// };

// type DescriptionType = {
//   title: string;
//   description: string;
//   image?: string[];
//   descipline?: number[];
//   services?: string[];
//   software?: number[];
//   others?: string;
// };

// export const SubService = () => {
//   const { service, name } = useParams();
//   const route = useLocation().pathname.replaceAll("%20", " ");
//   const [loader, setLoader] = React.useState<boolean>(true);
//   const [images, setImages] = React.useState<JSX.Element[]>();
//   const [currentService, setCurrentService] = React.useState<number>(
//     Number(service) + 1
//   );
//   const [description, setDescription] = React.useState<DescriptionType>({
//     title: "",
//     description: "",
//     image: [],
//     descipline: [],
//     services: [],
//     software: [],
//     others: "",
//   });

//   const setData = React.useCallback(async () => {
//     const querySnapshot = await getDocs(
//       query(collection(database, "sub-services"), where("name", "==", name))
//     );
//     querySnapshot.forEach(async (obj) => {
//       setDescription(obj.data().description);
//     });
//     setLoader(false);
//   }, [name, setDescription]);

//   React.useEffect(() => {
//     setData();
//   }, [setData]);

//   const getImages = React.useCallback(async () => {
//     const array: JSX.Element[] = [];
//     description.image?.forEach(async (value) => {
//       array.push(<Image path={value} />);
//     });
//     await setImages(array);
//   }, [description.image]);

//   React.useEffect(() => {
//     getImages();
//   }, [getImages]);
//   return (
//     <>
//       <Header />
//       <div className="container-fluid mt-3 mb-3 p-0">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-4">
//               <Accordion defaultActiveKey={`${currentService}`}>
//                 {services.map((obj, key) => {
//                   return (
//                     <Accordion.Item key={`${obj.id}`} eventKey={`${obj.id}`}>
//                       <Accordion.Header>
//                         <h5 className="text-center drawerLargeFont fw-bold orangeText">
//                           {obj.name}
//                         </h5>
//                       </Accordion.Header>
//                       <Accordion.Body className="card p-0">
//                         <ul className="nav flex-column">
//                           {obj.subservice.map((value) => {
//                             return (
//                               <li
//                                 key={value}
//                                 className={`
//                                                                         nav-item p-3 border border-start-0 border-end-0
//                                                                         ${
//                                                                           route ===
//                                                                           `/sub-service/${key}/${value}`
//                                                                             ? "blueBG"
//                                                                             : "blueText"
//                                                                         }
//                                                                     `}
//                               >
//                                 <Link
//                                   className={`
//                                                                             drawerSmallFont text-decoration-none
//                                                                             ${
//                                                                               route ===
//                                                                               `/sub-service/${key}/${value}`
//                                                                                 ? "text-white"
//                                                                                 : "blueText"
//                                                                             }
//                                                                         `}
//                                   onClick={() => setCurrentService(obj.id)}
//                                   to={`/sub-service/${key}/${value}`}
//                                 >
//                                   {value}
//                                 </Link>
//                               </li>
//                             );
//                           })}
//                         </ul>
//                       </Accordion.Body>
//                     </Accordion.Item>
//                   );
//                 })}
//               </Accordion>
//             </div>
//             <div className="col-lg-8">
//               {/* {
//                     loader &&
//                     <div className='container text-center'>
//                         <Spinner variant="success" animation='border' style={{height: '10rem', width:'10rem'}} />
//                     </div>
//                     } */}
//               <>
//                 <div className="container text-center w-50"></div>
//                 <h5
//                   className="brownText text-justify"
//                   data-aos="fade-right"
//                   data-aos-delay={400}
//                 >
//                   {ReactHtmlParser(description.description)}
//                 </h5>
//                 <div className="container-fluid mt-5 text-center">
//                   <Carousel>
//                     {images?.map((value, key) => {
//                       return (
//                         <Carousel.Item key={key} interval={1000}>
//                           {value}
//                         </Carousel.Item>
//                       );
//                     })}
//                   </Carousel>
//                 </div>
//                 <div className="row h6 mt-5 fw-bold blueText">
//                   <h4
//                     className="redText col-12 fw-bold mb-5 text-center"
//                     data-aos="zoom-in"
//                     data-aos-delay={400}
//                   >
//                     Descipline
//                   </h4>
//                   {description.descipline?.map((value, key) => {
//                     return (
//                       <div
//                         className="col-lg-4 p-3"
//                         key={key}
//                         data-aos="fade-left"
//                         data-aos-delay={500}
//                       >
//                         <div className="row rounded border-0 shadow p-2">
//                           <div className="col-4">
//                             <img
//                               src={`/images/Descipline/${value}.svg`}
//                               alt=""
//                               className="img-thumbnail border-0"
//                             />
//                           </div>
//                           <div className="col-8 h-100 align-middle p-1">
//                             <div className="d-inline-block h-100"></div>
//                             <h6 className="fw-bold">
//                               {DesciplineList[value - 1]}
//                             </h6>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//                 <div className="row h6 mt-5 fw-bold blueText">
//                   <h4
//                     className="redText col-12 fw-bold mb-5 text-center"
//                     data-aos="zoom-in"
//                     data-aos-delay={400}
//                   >
//                     Software
//                   </h4>
//                   {description.software?.map((value, key) => {
//                     return (
//                       <div
//                         className="col-lg-3 mb-3 p-3 text-center"
//                         key={key}
//                         data-aos="fade-right"
//                         data-aos-delay={500}
//                       >
//                         <div className="container">
//                           <Tooltip title={SoftwareList[value - 1]}>
//                             <img
//                               src={`/images/Softwares/${value}.svg`}
//                               alt=""
//                               className="img-thumbnail  shadow-lg w-100"
//                             />
//                           </Tooltip>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//                 {description.services && (
//                   <div className="row h6 mt-5 mb-5 fw-bold blueText">
//                     <h4
//                       className="redText col-12 fw-bold mb-5 text-center"
//                       data-aos="zoom-in"
//                       data-aos-delay={400}
//                     >
//                       Services
//                     </h4>
//                     {description.services?.map((value, key) => {
//                       return (
//                         <div
//                           className="col-lg-6 mb-3"
//                           key={key}
//                           data-aos="fade-right"
//                           data-aos-delay={500}
//                         >
//                           - {value}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//                 {description.others && (
//                   <div className="h5 text-justify mt-4">
//                     {ReactHtmlParser(description.others)}
//                   </div>
//                 )}
//               </>
//             </div>
//           </div>
//         </div>
//       </div>
//       <MaterialLink href="https://wa.me/7016591928" target="_blank">
//         <IconButton
//           size="large"
//           className="bg-dark text-success"
//           style={{ position: "fixed", bottom: 400, right: 40 }}
//         >
//           <WhatsApp />
//         </IconButton>
//       </MaterialLink>
//       <Footer />
//     </>
//   );
// };
