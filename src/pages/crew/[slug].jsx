import { useState } from "react";
import CrewLinks from "../../../components/crewLinks";
import Nav from "../../../components/Nav";
import {Bellefair} from 'next/font/google';
import {Barlow} from 'next/font/google';

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  style: 'normal'
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: 'normal'
});

function Crew({data}) {

    const [isAnoushe, setAnoushe] = useState(data.name == 'Anousheh Ansari');
    console.log(isAnoushe);

    return (
        <div className="crew-container">
            <Nav />
            <main>
                <div className="container">
                    <h4><span>02</span>MEET YOUR CREW</h4>
                    <div className="content">
                        <div className="explanation">
                            <div className="info">
                                <div className="name">
                                    <h5 className={bellefair.className}>{data.role}</h5>
                                    <h1 className={bellefair.className}>{data.name}</h1>
                                </div>
                                <div className="description">
                                    <p className={barlow.className}>{data.bio}</p>
                                </div>
                            </div>
                            <CrewLinks /> 
                        </div>
                        <div className="image">
                            <img className={isAnoushe ? 'anoushe' : ''} src={data.images.png} alt="crew" 
                            height={340}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getStaticPaths() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/assets/data.json`);
    const data = await res.json();

    const paths = data.crew.map(item => {
        let words = item.name.split(" ");
        for(let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toLowerCase() + words[i].slice(1);
        }
        words = words.join("_");

        return {params: {slug: words}}
        
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {

    let name = params.slug.split("_");
    for(let i = 0; i < name.length; i++) {
        name[i] = name[i][0].toUpperCase() + name[i].slice(1);
    }
    name = name.join(" ");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/assets/data.json`);
    const data = await res.json();

    const items = data.crew.find(item => item.name == name);

    return {
        props: {
            data: items
        }
    }

}

export default Crew