import { GetCharacterDetails } from '../pages/api/queries';
import { useQuery } from '@apollo/client';
import Image from "next/image"
import Episodes from './episodes';
import CharacterInformation from './charactersInformation';




function CharacterDetail({ characterId }) {

  const { loading, error, data } = useQuery(GetCharacterDetails, {
    variables: { characterId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const character = data.character;

  const statusDynamicClass = character.status === 'Dead' ? "bg-red-600" : "bg-green-600";
  const statusStaticClass = "rounded-md text-white px-2 text-sm font-semibold -mt-3";
  const imgDynamicClass = character.status === 'Dead' ? " border-red-600" : character.status === 'Alive' ? " border-green-600" : "";
  const imgStaticClass = "border rounded-full";


  return (
    <div className="fixed inset-0 flex mt-8 justify-center w-full overflow-auto">
      <div className="p-4 w-full m-4">
        <div>
          <div key={character.id} className="bg-white w-full relative  flex flex-col justify-center items-center mb-6" >

            <Image src={character.image} alt={character.name} width={200} height={200} className={`${imgDynamicClass} ${imgStaticClass}`} />
            <div className='relative'>{character.status !== 'unknown' && (<div className={`${statusDynamicClass} ${statusStaticClass}`}>{character.status}</div>)}</div>
            <div className=" text-2xl font-semibold mt-5">{character.name}</div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 bg-white rounded shadow-xl p-4">
              <CharacterInformation cardName={'Properties'} character={character}></CharacterInformation>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 bg-white rounded shadow-xl p-4">
            <CharacterInformation cardName={'Origin'} character={character}></CharacterInformation>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 bg-white rounded shadow-xl p-4">
            <CharacterInformation cardName={'Location'} character={character}></CharacterInformation>
            </div>
          </div>

        </div>
        <div className="w-full bg-white rounded shadow-x p-4 relative mt-2 shadow-2xl">
          <h2 className="text-xl font-semibold mb-2">Episode</h2>
          <Episodes character={character}></Episodes>
        </div>

      </div>
    </div>
  );
}

export default CharacterDetail;