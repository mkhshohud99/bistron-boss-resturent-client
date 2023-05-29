import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopulerMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category==='popular');


    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const populerItems = data.filter(item => item.category === 'popular');
    //             setMenu(populerItems)
    //         })
    // }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menus"
                subHeading="Let's check it out"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-12">
                {
                    popular.map(item => <MenuItem
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