import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MeanuCategory from './MenuCategory/MeanuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category==='dessert');
    const soup = menu.filter(item => item.category==='soup');
    const salad = menu.filter(item => item.category==='salad');
    const pizza = menu.filter(item => item.category==='pizza');
    const offered = menu.filter(item => item.category==='offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"> </Cover>
            <SectionTitle subHeading="Don't miss" heading="today's offer"></SectionTitle>
            <MeanuCategory items={offered}></MeanuCategory>
            <MeanuCategory items={dessert} title="dessert" img={dessertImg}></MeanuCategory>
            <MeanuCategory items={pizza} title="pizza" img={pizzaImg}></MeanuCategory>
            <MeanuCategory items={soup} title="soup" img={soupImg}></MeanuCategory>
            <MeanuCategory items={salad} title="salad" img={saladImg}></MeanuCategory>
        </div>
    );
};

export default Menu;