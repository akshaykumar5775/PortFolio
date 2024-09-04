import React from 'react';

const Footer = () => {
  return (
    <footer className='footer' style={{
      marginTop: 20,
      marginBottom: 0,
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      textAlign: 'center',
      fontSize: '14px',
      color: '#666'
    }}>
      <p className='footer-text'>
        &copy; {new Date().getFullYear()} Akshay Kumar Arora. Percieved by @JavaScript_Mastery.&emsp;&emsp;
        <a href='#' style={{textDecoration: 'none', color: '#337ab7'}}>Terms of Use</a> | 
        <a href='#' style={{textDecoration: 'none', color: '#337ab7'}}>Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;