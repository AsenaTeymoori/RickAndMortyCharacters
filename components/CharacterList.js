// components/CharacterList.js
import { useState } from 'react';
import { useRouter } from "next/router";
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../pages/api/queries';
import Image from "next/image"


function CharacterList() {
  const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);


  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage, perPage: 20 }, 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const characters = data.characters.results;
  const totalPages = data.characters.info.pages;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openCharacterDetail = (character) => {
    router.push({
      pathname: "/details",
      query: { key: character.id },
    });
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {characters.map((character) => (
          <div key={character.id} className="bg-white w-full md:w-1/4 lg:w-1/4 relative  flex flex-col justify-center items-center mb-6"  onClick={() => openCharacterDetail(character)}>
           <div className='relative cursor-pointer'>{character.status==='Dead' && ( <div className="rotate-45 bg-white absolute text-sm font-semibold mt-2 -right-4 px-4">{character.status}</div>)}
           <Image src={character.image} alt={character.name}  width={200} height={200} className='border border-black-400 rounded-xl' /></div>
            <div className="cursor-pointer text-sm font-semibold mt-2">{character.name}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center items-center space-x-2">
        <button
          className="border text-black border-black-400 hover:bg-gray-700 hover:text-white font-semibold py-1 px-2 rounded"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-l">
           {currentPage} of {totalPages}
        </span>
        <button
          className="border text-black border-black-400 hover:bg-gray-700 hover:text-white font-semibold py-1 px-2 rounded"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
        </div>
  );
}

export default CharacterList;
