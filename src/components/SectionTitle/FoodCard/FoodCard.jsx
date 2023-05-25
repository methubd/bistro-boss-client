

const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="absolute right-6 top-4 px-3 py-2 rounded bg-opacity-80 bg-black text-white">${price}</p>
        <div className="card-body flex flex-col items-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-100">Add to Cart</button>
            </div>
        </div>
        </div>
    );
};

export default FoodCard;