import { GetStaticProps } from 'next';
import SurfboardList from '../components/SurfboardList/SurfboardList';
import { server } from '../config';

const Home = ({ surfboards }) => {
  return (
    <div>
      <SurfboardList items={surfboards} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/surfboards`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { surfboards: data.data },
  };
};

export default Home;
