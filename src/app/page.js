import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Approach from '@/components/Approach';
import Expertise from '@/components/Expertise';
import Capabilities from '@/components/Capabilities';
import SuccessStories from '@/components/SuccessStories';
import TamjabWay from '@/components/TamjabWay';
import WhoWeAre from '@/components/WhoWeAre';
import HowWeWork from '@/components/HowWeWork';
import JoinTeam from '@/components/JoinTeam';
import LearnConnect from '@/components/LearnConnect';
import Footer from '@/components/Footer'; // Import here

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Approach />
      <Expertise />
      <Capabilities />
      <SuccessStories />
      <TamjabWay />
      <WhoWeAre />
      <HowWeWork />
      <JoinTeam />
      <LearnConnect />
      <Footer />
    </main>
  );
}