import Timeline from './Timeline';
import Criteria from './Criteria';
import FAQs from './FAQs';
import Hero from './Hero';
import Introduction from './Introduction';
import Rules from './Rules';

const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
      <FAQs />
      <Timeline />
    </div>
  );
};

export default Home;
