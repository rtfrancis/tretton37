import CardStyles from "./Card.module.css";

function EmployeeCard(props) {
    const { image, link, office, full, name, flag } = props.props;
    
    return(
        <div data-testid="fullCard" className={CardStyles.card}>
            <div className={CardStyles.cardContent}>
                <div className={CardStyles.imageContainer}>
                    <img className={CardStyles.image} src={image} alt={name}/>
                </div>
                <div className={CardStyles.textContainer}>
                    <div className={CardStyles.firstName}>{full.first} </div>
                    <div className={CardStyles.lastName}>{full.second}</div>
                    <div className={CardStyles.office}>{flag} <span>{office}</span></div>
                    <div className={CardStyles.buttonContainer}>
                        <a href={`https://tretton37.com/${link}`} target="_blank" rel="noreferrer" className={CardStyles.button}>Get to know me</a> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default EmployeeCard;