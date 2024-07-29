import Nav from "../../components/Nav";
import {Bellefair} from 'next/font/google';
import {Barlow} from 'next/font/google';
import Link from "next/link";

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

function Home() {
  return (
    <div className="main-container">
      <Nav />
      <main>
        <div className="texts">
          <h4>SO, YOU WANT TO TRAVEL TO</h4>
          <h1 className={bellefair.className}>SPACE</h1>
          <p className={barlow.className}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="button">
          <Link href='/destination/moon'>
            <h3 className={bellefair.className}>EXPLORE</h3>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home