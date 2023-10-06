import Head from 'next/head';
import CharacterDetail from '@/components/CharacterDetail';
import { useRouter } from "next/router";
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import Link from "next/link";



function Home() {
  const router = useRouter();
  const data = router.query.key;
  const handleClickBack = () => {
    console.log("jdjjdjdjdj")
    router.push("/");
  };
  
  return (
    <div>
      <Head>
        <title>Epigra</title>
      </Head>
      <div className="container p-1">
        <div  onClick={handleClickBack}> <ArrowLongLeftIcon className="h-8 w-5 top-0 text-black-500"  />
        </div>
        <CharacterDetail characterId={data} />
      </div>
    </div>
  );
}

export default Home;
