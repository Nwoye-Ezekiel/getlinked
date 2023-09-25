import FAQs from './sections/faqs';
import Hero from './sections/hero';
import Rules from './sections/rules';
import Prizes from './sections/prizes';
import Footer from './sections/footer';
import Privacy from './sections/privacy';
import Timeline from './sections/timeline';
import Criteria from './sections/criteria';
import Partners from './sections/partners';
import Introduction from './sections/introduction';

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
      <FAQs />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </>
  );
};

export default Home;
