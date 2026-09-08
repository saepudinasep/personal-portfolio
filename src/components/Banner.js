import { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const toRotate = ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer'];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(500);
    }
  }, [text, loopNum, isDeleting]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='aligh-items-center'>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className='tagline'>Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Asep`}{' '}
                    <span
                      className='txt-rotate'
                      dataPeriod='1000'
                      data-rotate='[ "Frontend Developer", "Backend Developer", "Full-Stack Developer" ]'
                    >
                      <span className='wrap'>{text}</span>
                    </span>
                  </h1>
                  <p>
                    Full Stack Developer dengan pengalaman hands-on dalam pengembangan aplikasi web
                    dan integrasi sistem terpusat berbasis ReactJS, Golang, Laravel, dan Google
                    Workspace API. Terbukti berpengalaman dalam merancang logika backend,
                    pengelolaan basis data (PostgreSQL/MySQL), serta pengujian sistem (UAT) untuk
                    mendukung efisiensi operasional. Memiliki pengalaman kerja di industri jasa
                    keuangan, terbiasa menjaga kelancaran alur kerja operasional dan stabilitas
                    aplikasi di lingkungan enterprise. Aktif membagikan pemahaman teknis database
                    melalui kanal{' '}
                    <a
                      href='https://www.youtube.com/@warungcodingtv'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      @warungcodingtv
                    </a>{' '}
                    (fokus edukasi SQL). Berkomitmen tinggi untuk terus mengembangkan sistem
                    berskala besar yang efisien dan aman.
                  </p>
                  <button onClick={() => console.log('connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img src={headerImg} alt='Header Img' />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
