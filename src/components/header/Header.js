import "./style.css"

const Header = () => {
    return (       
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Привет, меня зовут <em>Никита</em></strong><br/>
                я программист-разработчик.
            </h1>
            <a href="./files/Резюме - Обоскалов Никита Дмитриевич.pdf" className="btn" download>Скачать резюме</a>
        </div>
    </header>
 );
}
 
export default Header;