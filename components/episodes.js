import Episode from "./episode";

function Episodes({ character }) {

  return (
    <div className="flex space-x-2 m-6 overflow-x-scroll scrollbar-thin scrollbar-thumb-black justify-start ml-3">
      {character.episode.map((episode) => (
        <Episode
          key={episode.id}
          name={episode.name}
          air_date={episode.air_date}
        />
      ))}
    </div>
  );
}

export default Episodes;