import Head from 'next/head';

interface MetaProps {
  title: string;
  keywords: string;
  description: string;
}

const Meta = ({ title, keywords, description }: MetaProps): JSX.Element => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Surf Reviews',
  keywords: 'surfboards, surfing, reviews, ocean, sports, waves',
  description:
    'Find reviews on popular surfboards so you know what to expect before you buy!',
};

export default Meta;
