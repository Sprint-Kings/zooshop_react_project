import CategoryPage from "../CategoryPage/CategoryPage";
import HeaderImage from "../header-image/HeaderImage";

const Frisbee = () => {
    return (
        <div>
        <HeaderImage image={'/dryFood.png'}/>
        <CategoryPage category={'Фрисби'}/>
        </div>
    )
}

export default Frisbee;