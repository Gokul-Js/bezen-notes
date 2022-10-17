import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
          <footer>
            <p style={{ marginLeft: "650px"}}>Copyright &copy; {year} | All Right Reserved </p>
          </footer>
        </>
    )

}

export default Footer