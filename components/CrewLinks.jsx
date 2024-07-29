import ActiveLink from "./ActiveLink";
import crewStyles from '@/styles/CrewLinks.module.css';

function CrewLinks() {
    return (
        <>
        <ul className={`${crewStyles.ul} crew-pagination`}>
            <li className={crewStyles.li}>
               <ActiveLink href='/crew/douglas_hurley' />
            </li>
            <li className={crewStyles.li}>
                <ActiveLink href='/crew/mark_shuttleworth'  />
            </li>
            <li className={crewStyles.li}>
                <ActiveLink href='/crew/victor_glover'  />
            </li>
            <li className={crewStyles.last_li}>
                <ActiveLink href='/crew/anousheh_ansari'  />
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

export default CrewLinks