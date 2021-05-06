import CardStyles from "./Card.module.css";

function EmployeeCard(props) {
    // console.log("props in card", props)
    const { image, link, office, full, name, flag } = props.props;
    const officeArray = office.split("")
    
    return(
        <div className={CardStyles.card}>
            <div className={CardStyles.cardContent}>
                <div className={CardStyles.imageContainer}>
                    <img className={CardStyles.image} src={image}/>
                </div>
                <div className={CardStyles.textContainer}>
                    <div className={CardStyles.name}>{full.first} </div>
                    <div className={CardStyles.last}>{full.last}</div>
                    {/* {full.second ? <div>{full.second}</div> : null } */}
                    {/* <div>{full.last}</div> */}
                    <div className={CardStyles.office}>{flag} <span>{office}</span></div>
                </div>
            </div>
            
        </div>
    )
}

export default EmployeeCard