import ActiveLink from "./ActiveLink";
import techStyles from '@/styles/TechLinks.module.css';
import {Bellefair} from 'next/font/google';

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  style: 'normal'
});

function TechLinks() {

    return (
        <>
        <ul className={`${techStyles.ul} tech-pagination`}>
            <li className={techStyles.li}>
                <ActiveLink className={techStyles.a} href='/technology/launch_vehicle'>
                    <h4 className={bellefair.className}>1</h4>
                </ActiveLink>
            </li>
            <li className={techStyles.li}>
                <ActiveLink className={techStyles.a} href='/technology/spaceport'>
                    <h4 className={bellefair.className}>2</h4>
                </ActiveLink>
            </li>
            <li className={`${techStyles.li} ${techStyles.last_li}`}>
                <ActiveLink className={techStyles.a} href='/technology/space_capsule'>
                    <h4 className={bellefair.className}>3</h4>
                </ActiveLink>
            </li>
        </ul>
        <style jsx global>{`
            li:has(> .active) {
                background-color: #FFFFFF;
                opacity: 100%;
            }
        `}</style>
        </>
    )
}

export default TechLinks