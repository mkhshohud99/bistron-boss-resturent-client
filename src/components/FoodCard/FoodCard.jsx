

const FoodCard = ({item}) => {
    const {name, image , price, recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <p className="absolute right-0 top-1 mt-4 mr-4 px-4 py-2 bg-slate-900 text-orange-500">${price}</p>
                <img src={image}alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <button className="uppercase btn btn-outline border-0 border-orange-400  border-b-4">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;