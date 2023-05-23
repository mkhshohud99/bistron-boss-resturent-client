import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my20">
            <SectionTitle
            subHeading="Check it out" heading="featured Items"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-12">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad perspiciatis nulla dolores quam, reprehenderit ut porro sed maxime atque similique officia suscipit laborum dignissimos excepturi dolorem debitis eveniet tempora? Veritatis recusandae distinctio aspernatur quidem ex adipisci repudiandae, aut dignissimos asperiores iusto obcaecati aliquid facere consequatur ad neque assumenda autem!</p>
                    <button className="uppercase btn btn-outline border-0 border-b-4">order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;