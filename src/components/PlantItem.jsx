import '../styles/PlantItem.css';
import CareScale from './CareScale';

const PlantItem = ({id, cover, name, water, light})=> {

    // _____________________________________________________________________________
    // Test Event:
    // const handleClick = (plantName)=> {
    //     alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
    //     console.log(`✨ Ceci est un clic ✨${plantName}`);}
    // _____________________________________________________________________________

    return(
        <li key={id} className='lmj-plant-item' /*onClick={() => handleClick(name)} */ >
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}

            <div>
                <CareScale careType='water' scaleValue={water}  />
                <CareScale careType='light' scaleValue={light}  />
            </div>

        </li>
    );
};

export default PlantItem;