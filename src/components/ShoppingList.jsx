import { plantList } from "../datas/planList";
import PlantItem from "./PlantItem"; // Component Item
import '../styles/ShoppingList.css';
import { useState } from "react";
import Categories from "./Categories";

const ShoppingList = ({ cart, updateCart }) => {

    // _____________________________________________________________________________
    // État local : activeCategory contrôle la catégorie active sélectionnée par l'utilisateur
    const [activeCategory, setActiveCategory] = useState('');
    // _____________________________________________________________________________

    // _____________________________________________________________________________
    // Extraire les catégories uniques de la liste de plantes
    const categories = plantList.reduce((acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []);
    // _____________________________________________________________________________

    // _____________________________________________________________________________
    // Fonction pour ajouter une plante au panier
    const addToCart = (name, price) => {
        // Rechercher si la plante à ajouter est déjà présente dans le panier
        const currentPlantSaved = cart.find(plant => plant.name === name);

        // Si la plante est déjà présente dans le panier
        if (currentPlantSaved) {
            // Filtrer le panier pour retirer la plante avec le même nom
            const cartFilteredCurrentPlant = cart.filter(plant => plant.name !== name)

            // Mettre à jour le panier avec la plante existante en ajoutant 1 à la quantité
            updateCart([
                ...cartFilteredCurrentPlant,// Toutes les plantes sauf celle avec le même nom
                { name, price, amount: currentPlantSaved.amount + 1 } // La plante mise à jour avec une quantité plus élevée
            ])

        } else {
            // Si la plante n'est pas déjà dans le panier, l'ajouter avec une quantité de 1
            updateCart([
                ...cart,
                { name, price, amount: 1 }
            ]);
        }

    }
    // _____________________________________________________________________________

    // _____________________________________________________________________________
    // Filtrer les plantes en fonction de la catégorie active
    const plantListFiltred = activeCategory ?
        plantList.filter(plant => plant.category === activeCategory) : plantList;
    // _____________________________________________________________________________


    return (
        <div className="lmj-shopping-list">
            < Categories
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <ul className='lmj-plant-list' >
                {
                    plantListFiltred.map(({ id, cover, name, water, light, price, category }) => (
                        <div key={id} >
                            <PlantItem
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
};

export default ShoppingList;