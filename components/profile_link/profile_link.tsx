import styles from "./profile_link.module.scss";
const twitter_url: string = "https://twitter.com/angyuhang98";
const github_url: string = "https://github.com/yuhangang";
const linkedin_url: string =
  "https://www.linkedin.com/in/yuhang-ang-b8510010b/";
const instagram_url: string = "https://instagram.com/yuhangang";

const ProfileLinks = () => (
  <div className={styles.profileLink}>
    <a className={styles.social_media_link} href={github_url} target="_blank">
      <div
        className={`${styles.social_media_background}${styles.rounded_circle}`}
      >
        <div className={styles.sb_table}>
          <div className={styles.sb_table_cell}>
            <img src={"./icons/github-1.svg"}></img>
          </div>
        </div>
      </div>
    </a>
    <a className={styles.social_media_link} href={twitter_url} target="_blank">
      <div
        className={`${styles.social_media_background}${styles.rounded_circle}`}
      >
        <div className={styles.sb_table}>
          <div className={styles.sb_table_cell}>
            <img src={"./icons/twitter-3.svg"}></img>
          </div>
        </div>
      </div>
    </a>
    <a className={styles.social_media_link} href={linkedin_url} target="_blank">
      <div
        className={`${styles.social_media_background}${styles.rounded_circle}`}
      >
        <div className={styles.sb_table}>
          <div className={styles.sb_table_cell}>
            <img src={"./icons/linkedin-icon-2.svg"}></img>
          </div>
        </div>
      </div>
    </a>
    <a
      className={styles.social_media_link}
      href={instagram_url}
      target="_blank"
    >
      <div
        className={`${styles.social_media_background}${styles.rounded_circle}`}
      >
        <div className={styles.sb_table}>
          <div className={styles.sb_table_cell}>
            <img src={"./icons/instagram-2016.svg"}></img>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default ProfileLinks;
