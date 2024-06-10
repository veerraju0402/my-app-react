import styles from './my-style.module.css'; 

const Header = () => {
    const myStyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Sans-Serif"
    };
    return (
      <>
      <h1 className={styles.bigblue}>Hello Car!</h1>;
        <h1 style={myStyle}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }


  const Header1 = () => {
    return (
      <>
        <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }


  export default Header;