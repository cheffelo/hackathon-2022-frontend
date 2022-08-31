
const MealCard = ({key, name, image}) =>{
    return(
        <div>
            <div className="">
                <div className="flex-col">
                    <img src={image} alt={name} width="100"/>
                    <span className="card-title">{name}</span>
                </div>
                </div>
                <div className="card-action">
                    <a href="#">This is a link</a>
                </div>
            </div>
    )
}

export default MealCard;

