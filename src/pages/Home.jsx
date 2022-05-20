import Feature from '../components/Feature/Feature';
import Hero from '../components/Hero/Hero';
import iconChat from '../assets/icons/icon-chat.png';
import iconMoney from '../assets/icons/icon-money.png';
import iconSecurity from '../assets/icons/icon-security.png';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature
            imgSrc={iconChat}
            alt="Chat Icon"
            title="You are our #1 priority"
            content="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
          />
          <Feature
            imgSrc={iconMoney}
            alt="Money Icon"
            title="More savings means higher rates"
            content="The more you save with us, the higher your interest rate will be!"
          />
          <Feature
            imgSrc={iconSecurity}
            alt="Security Icon"
            title="Security you can trust"
            content="We use top of the line encryption to make sure your data and money
            is always safe."
          />
        </section>
      </main>
    </>
  );
};

export default Home;
