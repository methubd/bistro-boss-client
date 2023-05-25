import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className="pt-8">
            {title &&
            <Cover 
            img={img}
            title={title}
            details="lorem50"
            ></Cover>}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-16'>
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4">Order Your Fav Food</button></Link>
        </div>
    );
};

export default MenuCategory;