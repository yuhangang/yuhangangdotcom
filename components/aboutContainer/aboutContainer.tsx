import styles from "./aboutContainer.module.scss";



function AboutContainer(input:{img_url:string, position1?:number, position2?:number,children?:[JSX.Element]}):JSX.Element{
  let img:string='linear-gradient(to bottom , rgba(30,30,30,0.2),rgba(30,30,30,0.5),rgba(30,30,30,0.8), rgba(30,30,30,1)), url("' +input.img_url+'") no-repeat';
  let position:string = input.position1 && input.position2?  input.position1.toString()+'% '+input.position2.toString()+'%':'50% 50%';
  return (

  <div className={styles.reponsiveContainer}>
    <div  
    
    style={{background:`${img}`,
      backgroundPosition:position
      ,backgroundSize: 'cover' ,
      height:"100",
      
      }
      }

      >

  

    
<div className={styles.profile_card}>
{input.children}

</div>

</div>

  </div>

   
  )}
  
  export default AboutContainer;
/*
const AboutContainer = () => (
  <div className={styles.reponsiveContainer}>

  <div className={styles.bgImage}></div>

    
    <div className={styles.profile_card}>
     <header>

    <a target="_blank"> 
      <img src="/images/profile.jpg"></img>
    </a>

  

          
    <div >
    Final year computer science student studied in Monash University Malaysia. Interested in full-stack development and data science. Currently focus on web and mobile applications development. 
    <br/>
    <br/>
    Skills
    FLutter
    <br/>
    - started by finishing a online course on Udemy.  Dec 2019 - Jan 2020
    <br/>
    - choosing Flutter as platform to developed an mobile application in software development projects. May 2020 - July 2020 
    <br/>
    - actively research on UI design and state management on internet, on mobile platforms worked in progress. July 2020 - now
    <br/>
    <br/>
    Web Development
    <br/>
    - writing Javascript for web UI and backend during Internship. Dec 2019 - Feb 2020
    <br/>
    - built this my personal website using Next.js, written in TypeScript. - August 2020
    <br/>
    - learning functional programming and programming paradigm concepts in TypeScript in courses.

    Next.js
    - 
        
    
    </div>
    
  </header>
  <TimeLine></TimeLine>
    </div>
    
    
    
    
  </div>

   
  )
  
  export default AboutContainer;

*/