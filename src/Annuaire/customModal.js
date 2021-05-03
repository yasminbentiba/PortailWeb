

import { Image } from "react-bootstrap";
import './custoModal.scss'

const CustomModal = ({ handleClose, show, children,users }) => {

    

    
      
        
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  const vals = {label: 'x',jhj: 23, name: 12}  ;
    return (
      <div className={showHideClassName}>
        <section className="modal-content">
          {children}
          <button className="closeatelier" type="button" onClick={handleClose}>
          <span className="x">&times;</span>
          </button>
        

      <div>  {


users.map((user, key) => (
    
    

    <div style={{ position: 'relative',
        justifyContent: 'center',
        top: '110px',
        display: 'inline-flex',
    }}>
        <a  className="typeatelierlink" href="/atelier">
            {console.log({user,key})}
            <Image
              src={
                "https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
              }
              alt="Logo"
              style={{ height: "100px", margin: "10px auto", width: "145px" ,marginLeft: "20px" }}
            />
            <h6 style={{ fontSize: "14px", textAlign: "right"}}> {user["email"]}</h6>
          </a>

        </div>



))


          }</div>
   
        
   </section>
        
      </div>
    );
  };


  export default CustomModal ;