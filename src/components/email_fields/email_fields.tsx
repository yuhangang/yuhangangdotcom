
import React from 'react';
import CountrySelector from './country_select';
import styles from './email_fields.module.scss';



const EmailField = () => {
 const button =<div>
 <br></br>
   <button className={styles.button}>SEND</button>
   </div>;
  return (
    
<div className={styles.container}>

<div >
<input className={styles.textfield} type="text" id="input-first-name" placeholder="Name"></input>
<br></br>
<input className={styles.textfield} type="text" id="input-email" placeholder="Email Address"></input>
<br></br>
<CountrySelector ></CountrySelector>
</div>
  
  <textarea className={styles.contenttextfield} rows={5} cols={5} id="input-address" placeholder="Message"></textarea>
  
  
    
</div>
   
  );
};

export default EmailField;