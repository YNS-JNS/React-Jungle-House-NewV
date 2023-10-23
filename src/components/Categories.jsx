
const Categories = ({ categories, activeCategory, setActiveCategory }) => {

    return (
        <div>
            <select
                value={activeCategory}
                onChange={(e) => {
                    setActiveCategory(e.target.value);
                    console.log(`Nouvelle valeur de activeCategory: ${e.target.value}`);
                }}

            >
                <option value="">---</option>

                {
                    categories.map((category, index) => (
                        <option key={index} value={category} >
                            {category}
                        </option>
                    ))
                }
            </select>

            <button onClick={() => setActiveCategory('')} >Réinitialiser</button>
        </div>
    );
};

export default Categories;