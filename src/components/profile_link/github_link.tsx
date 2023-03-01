import styles from './github_link.module.scss';



export default function GithubLink(link:string): JSX.Element {
    return (
        <div className={styles.homeButton} >
          <a href={link} target="_blank">
              
              <img style={{opacity:"0.9"}} src={"./icons/github-1.svg"} className={styles.innerBox}></img>
         
              <div className={styles.title}>View on Github</div>
              
              </a>
            
                </div>

    );

}