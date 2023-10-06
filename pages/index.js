import Head from 'next/head';
import CharacterList from '../components/CharacterList';

function Home() {
  return (
    <div>
      <Head>
        <title>Epigra</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4 flex justify-center">Rick and Morty Characters</h1>
        <CharacterList />
      </div>
    </div>
  );
}

export default Home;
