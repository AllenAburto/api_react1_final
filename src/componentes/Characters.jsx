import PropTypes from 'prop-types'

export const Characters = ( { characters = [] }) => {
return (
    <div className="row">
        {
            characters.map((item, index) => (
                <div key={index} className="col mb-4 mt-2">
                    <div className='card' style={{maxWidth: "350px" , minHeight: "575px"}}>
                        <img src={ item.image } alt="" />
                        <div className='card-body'> 
                            <h5 className='card-title fs-3'>{item.name}</h5>
                            <hr />
                            <p>Especie:  {item.species}</p>
                            <p>Género:   {item.gender}</p>
                            <p>Locación: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}

    </div>
)}

Characters.propTypes = {
    characters: PropTypes.array
};