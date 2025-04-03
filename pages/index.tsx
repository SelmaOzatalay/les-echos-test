import { GetServerSideProps } from 'next';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/newsletter', 
      permanent: false
    },
  };
};

export default Home;
