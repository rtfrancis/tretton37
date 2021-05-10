import HeaderStyles from "./Header.module.css"

function Header(){
    return(
        <div className={HeaderStyles.header}>
            <a href="/"><h1>tretton37</h1></a>
        </div>
    )
}

export default Header;