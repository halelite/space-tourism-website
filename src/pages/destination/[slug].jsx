import Nav from "../../../components/Nav"
import {Bellefair} from 'next/font/google';
import {Barlow} from 'next/font/google';
import DestinationMenu from "../../../components/DestinationMenu";

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  style: 'normal'
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: 'normal'
})

function Destination({data}) {
    return (
        <div className="des-container">
            <Nav />
            <main>
                <div className="container">
                    <h4><span>01</span>PICK YOUR DESTINATION</h4>
                    <div className="content">
                        <div className="image">
                            <img src={data.images.png}
                        width={150}
                        height={150}
                        alt="moon" />
                        </div>
                        <div className="explanation">
                            <DestinationMenu />
                            <div className="text">
                                <h2 className={bellefair.className}>{data.name}</h2>
                                <p className={barlow.className}>{data.description}</p>
                            </div>
                            <div className="line"></div>
                            <div className="statistics">
                                <div className="distance">
                                    <h5>AVG. DISTANCE</h5>
                                    <h4 className={bellefair.className}>{data.distance}</h4>
                                </div>
                                <div className="travel-time">
                                    <h5>Est. travel time</h5>
                                    <h4 className={bellefair.className}>{data.travel}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getStaticPaths() {

    // paths: [
    //         {params: {slug: 'moon'}},
    //         {params: {slug: 'mars'}},
    //         {params: {slug: 'europa'}},
    //         {params: {slug: 'titna'}}
    //     ],

    const res = await fetch(`${NEXT_PUBLIC_BASE_URL}assets/data.json`);
    const data = await res.json();

    const paths = data.destinations.map(item => ({
        params: {slug: item.name[0].toLowerCase() + item.name.slice(1)}
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {

    const name = params.slug[0].toUpperCase() + params.slug.slice(1);

    const res = await fetch(`${NEXT_PUBLIC_BASE_URL}assets/data.json`);
    const data = await res.json();

    const items = data.destinations.find(item => item.name == name);

    if(!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data: items
        }
    }
}

export default Destination