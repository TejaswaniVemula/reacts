import {Link,Outlet} from 'react-router-dom'
const style = {
  backgroundColor: '#6acfc7ff',
  fontSize: '16px',
  padding: '10px',
  borderRadius: '5px',
  color: '#ecdede34',
  display: 'flex',
  gap: '20px', 
  alignItems: 'center', 
  
};

function Layout(){
    return(
        <>
        <div>
            
            <nav style={style}>
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="Blog" className='nav-link'>Blog</Link>
                <Link to="Contact" className='nav-link'>Contact</Link>
            </nav>
            <Outlet/>
        </div>
        </>
    )
}
export default Layout;