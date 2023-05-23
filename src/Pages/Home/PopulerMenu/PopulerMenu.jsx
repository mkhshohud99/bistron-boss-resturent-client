import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopulerMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populerItems = data.filter(item => item.category === 'popular');
                setMenu(populerItems)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menus"
                subHeading="Let's check it out"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-12">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="uppercase btn btn-outline border-0 border-b-4">Veiw All Menu</button>
        </section>
    );
};

export default PopulerMenu;