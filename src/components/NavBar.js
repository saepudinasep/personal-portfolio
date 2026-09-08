import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const updateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='#home'
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => updateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='#skills'
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => updateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href='#projects'
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => updateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icons'>
              <a href='#a'>
                <img src={NavIcon1} alt=''></img>
              </a>
              <a href='#'>
                <img src={NavIcon2} alt=''></img>
              </a>
              <a href='#'>
                <img src={NavIcon3} alt=''></img>
              </a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
