import { useState } from 'react';
import Nav from '../../../components/Nav';
import TechLinks from '../../../components/TechLinks';
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

function Technology({data}) {

    const [spaceport, setSpaceport] = useState(data.name == 'Spaceport');
    const [spaceCapsule, setSpaceCapsule] = useState(data.name == 'Space capsule');

    return (
        <div className="tech-container">
            <Nav />
            <main>
                <div className="container">
                    <h4><span>03</span>SPACE LAUNCH 101</h4>
                    <div className="content">
                        <div className={`${spaceport ? 'spaceport' : ''} ${spaceCapsule ? 'space-capsule' : ''} image`}>
                            <div className='mask'>
                                <div className="img-wrapper">
                                <img src={data.images.portrait} alt="vehicle"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="info">
                            <TechLinks />
                            <div className="explanation">
                                <div className="name">
                                    <h5 className={bellefair.className}>THE TERMINOLOGY…</h5>
                                    <h1 className={bellefair.className}>{data.name}</h1>
                                </div>
                                <p className={barlow.className}>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getStaticPaths() {

    return {
        paths: [
            {params: {slug: 'launch_vehicle'}},
            {params: {slug: 'spaceport'}},
            {params: {slug: 'space_capsule'}}
        ],
        fallback: false
    }
}

export async function getStaticProps({params}) {

    let name = params.slug.replace("_", ' ');
    name = name[0].toUpperCase() + name.slice(1);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/assets/data.json`);
    const data = await res.json();

    const items = data.technology.find(item => item.name == name);

    return {
        props: {
            data: items 
        }
    }
}

export default Technology