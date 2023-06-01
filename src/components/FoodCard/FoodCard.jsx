import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const { user } = useContext(AuthContext);
    const [,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();


    const handelAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItem = {menuItemId: _id , name , image , price , email: user.email}
            fetch('http://localhost:5000/carts',
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cartItem)
                }
            )
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //refetch is use to update the number of current cart
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please! Login to Order Foood',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <p className="absolute right-0 top-1 mt-4 mr-4 px-4 py-2 bg-slate-900 text-orange-500">${price}</p>
                <img src={image} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handelAddToCart(item)} className="uppercase btn btn-outline border-0 border-orange-400  border-b-4">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;