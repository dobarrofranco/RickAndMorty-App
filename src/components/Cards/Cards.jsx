import Card from '../Card/Card';
import './Cards.modules.css'

export default function Cards({characters, onClose}) {
   return(
      <div className='cards'>
         {characters.map(element => {
            return <Card
            onClose={onClose}
            key={element.id}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            />
         })}
      </div>
   ) 
}
