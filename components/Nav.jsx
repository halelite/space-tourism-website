import styles from '@/styles/Nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

function Nav() {

    const router = useRouter();
    const menuRef = useRef();
    const [menuActive, setMenuActive] = useState(false);
    const destinationLinks = router.asPath == '/destination/moon' || router.asPath == '/destination/mars' || router.asPath == '/destination/europa' || router.asPath == '/destination/titan';
    const crewLinks = router.asPath == '/crew/douglas_hurley' || router.asPath == '/crew/mark_shuttleworth' || router.asPath == '/crew/victor_glover' || router.asPath == '/crew/anousheh_ansari';
    const technologyLinks = router.asPath == '/technology/launch_vehicle' || router.asPath == '/technology/spaceport' || router.asPath == '/technology/space_capsule';

    function toggleMenu() {
        setMenuActive(!menuActive);
    }

    return (
        <>
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img className={styles.logoImg} src='/assets/shared/logo.svg' alt="logo" />
                <div className={styles.line}></div>
            </div>
            <ul ref={menuRef} className={`${styles.navLinks} ${menuActive ? 'menuActive' : ''}`}>
                <div className={styles.close}>
                    <img onClick={toggleMenu} className={styles.closeIm} src="/assets/shared/icon-close.svg" alt="close" />
                </div>
                <li className={`${styles.navLinks_li} ${router.pathname == '/' ? 'active' : ''}`}>
                    <Link className={styles.link} href='/'>
                        <span className={styles.number}>00</span>HOME
                    </Link>
                </li>
                <li className={`${styles.navLinks_li} ${destinationLinks ? 'active' : ''}`}>
                    <Link className={styles.link} href='/destination/moon'>
                        <span className={styles.number}>01</span>DESTINATION
                    </Link>
                </li>
                <li className={`${styles.navLinks_li} ${crewLinks ? 'active' : ''}`}>
                    <Link className={styles.link} href='/crew/douglas_hurley'>
                        <span className={styles.number}>02</span>CREW
                    </Link>
                </li>
                <li className={`${styles.last_li} ${technologyLinks ? 'active' : ''}`}>
                    <Link className={styles.link} href='/technology/launch_vehicle'>
                        <span className={styles.number}>03</span>TECHNOLOGY
                    </Link>
                </li>
            </ul>
            <div className={styles.menu}>
                <img onClick={toggleMenu} className={styles.menuImg} src="/assets/shared/icon-hamburger.svg" alt="menu" />
            </div>
        </nav>
        <style jsx>
        {`
            .menuActive {
                transform: translateX(0);
            }

            .active {
                border-right: 3px solid #FFFFFF;
            }

            @media screen and (min-width: 768px) {
                li:first-child span {
                    display: none;
                }
                
                .active {
                    border-bottom: 3px solid #FFFFFF;
                    border-right: none;
                }
            }

            @media screen and (min-width: 1024px) {
                li:first-child span {
                    display: inline;
                }
            }
        `}
        </style>
        </>
    )
}

export default Nav