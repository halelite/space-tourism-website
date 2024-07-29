const { useRouter } = require("next/router");

function ActiveLink({href, children, className = ''}) {
    const router = useRouter();
    const isActive =  router.asPath == href;

    return (
        <>
        <a href={href} className={`${className} ${isActive ? 'active' : ''}`}>
            {children}
        </a>
        <style jsx>{`
            .active {
                color: #FFFFFF;
            }
        `}</style>
        </>
    )
}

export default ActiveLink