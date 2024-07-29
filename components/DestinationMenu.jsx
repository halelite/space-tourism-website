import tabStyle from '@/styles/DestinationMenu.module.css';
import ActiveLink from "./ActiveLink";

function DestinationMenu() {

    return (
        <>
        <ul className={tabStyle.ul}>
            <li className={tabStyle.li}>
                <ActiveLink href='/destination/moon' className={tabStyle.link}>MOON</ActiveLink>
            </li>
            <li className={tabStyle.li}>
                <ActiveLink href='/destination/mars' className={tabStyle.link}>MARS</ActiveLink>
            </li>
            <li className={tabStyle.li}>
                <ActiveLink href='/destination/europa' className={tabStyle.link}>EUROPA</ActiveLink>
            </li>
            <li className={tabStyle.last_li}>
                <ActiveLink href='/destination/titan' className={tabStyle.link}>TITAN</ActiveLink>
            </li>
        </ul>
        <style jsx>{`
            li:has(> .active) {
                border-bottom: 3px solid #FFFFFF;
            }
        `}</style>
        </>
    )
}

export default DestinationMenu