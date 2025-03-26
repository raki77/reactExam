import { people } from './data';
import { getImageUrl } from './utils';

function List1() { 
    const listItems = people.map(person => 
        <li key={person.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <img 
            src={getImageUrl(person)}
            alt={person.name}
            width={70}
            height={70}
            style={{ marginRight: '1rem', borderRadius: '8px' }}
        />
        <p style={{ margin: 0 }}>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
        </li>
    ); 

    return (
        <article>
            <h1>Scientists</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>{listItems}</ul>
        </article>
    );
} 
// function List1() { 
//     const listItems = people.map(person => 
//         <li key={person.id}>
//             <img 
//                 src={getImageUrl(person)}
//                 alt={person.name}
//             />
//             <p>
//                 <b>{person.name}:</b>
//                 {' ' + person.profession + ' '}
//                 known for {person.accomplishment}
//             </p>
//         </li>
//     ); 
//     return (
//         <article>
//             <h1>Scientists</h1>
//             <ul>{listItems}</ul>
//         </article>
//     );
// }
export default List1;