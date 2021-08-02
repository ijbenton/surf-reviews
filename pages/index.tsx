import { GetStaticProps } from 'next';
import SurfboardList from '../components/SurfboardList/SurfboardList';

const Home = ({ data }) => {
  console.log(data);
  return (
    <div>
      <SurfboardList items={data} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/surfboards');
  const data = await res.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default Home;
