import { getImageUrl } from './utils.js';

function Img5({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Profile1() {
    return (
        <div>
            <Img5
                size={100}
                person={{ 
                name: 'Katsuko Saruhashi', 
                imageId: 'YfeOqp2'
                }}
            />
        </div>  
    );
}

export default Profile1;