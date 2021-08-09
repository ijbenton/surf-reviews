import { server } from '../src/lib/config';
import HomeView from '../src/views/Home/Home';

interface HomeProps {
  items: [];
}

const Home = ({ items }: HomeProps) => <HomeView items={items} />;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/surfboards`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { items: data.data },
  };
};

export default Home;
