function CharacterInformation({ cardName, character }) {
    var detailObject = {};

    switch (cardName) {
        case 'Properties':
            detailObject = {
                Gender: character.gender,
                species: character.species
            }
            break;
        case 'Origin':
            detailObject = {
                Name: character.origin.name,
                Dimension: character.origin.dimension
            }
            break;
        case 'Location':
            detailObject = {
                Name: character.location.name,
                Dimension: character.location.dimension
            }
            break;
        default:
            break;

    }
    return (
        <div> <h2 className="text-xl font-semibold mb-2">{cardName}</h2>
            {Object.entries(detailObject).map(([key, value]) => (
                <div className='flex items-center'>
                    <p className='text-base'>{key}: </p>
                    <p className='text-sm ml-4'>{value || '-'}</p>
                </div>
            ))}
        </div>
    );
}

export default CharacterInformation;