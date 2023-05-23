import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading="check it out"
            heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center  py-8 px-16 pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sunt, consequuntur et hic qui dolore nemo. A est nemo, magni temporibus nobis quo! Veritatis nisi, ipsum tempora similique perspiciatis reprehenderit, quos voluptatibus omnis tenetur voluptate illum et debitis distinctio nulla consequuntur dicta harum ipsa possimus quia explicabo cum velit! Dolores.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;