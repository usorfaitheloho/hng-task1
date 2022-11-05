import PropTypes from 'prop-types';
import avatar from '../../images/avatar.jpg'
import Image from '../Image.js';
import LinkData from '../LinkData.js';
import github from '../../images/github.png';
import slack from '../../images/slack.png';
import styles from '../../css/homepage.module.css';
import Footer from '../Footer.js';

const Home = ({ links }) => {
  const linkData = links.map(({ id, title, url }) => (
        <li key={id} className={styles.list}>
        <LinkData link={url} id={id}>
          {title}
        </LinkData>
         </li>
  ));

  return (
        <>
        <main className={styles.container}>
          <div className={styles.avatar}>
            <Image src={avatar} alt="faith photo" id={styles.profile__img} />
          </div>
          <h1 className={styles.title}>Faith Usor</h1>
          <ul className={styles.lists}>
            {linkData}
          </ul>
          <div className={styles.social}>
            <LinkData link="https://github.com/usorfaitheloho@gmail.com" id="github">
              <Image src={github} alt="github" />
            </LinkData>
            <LinkData link={`${process.env.REACT_APP_NOT_SECRET_CODE}`} id="slack">
              <Image src={slack} alt="slack" />
            </LinkData>
          </div>
        </main>
        <Footer />
      </>
  );
};

Home.propTypes = {
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Home;