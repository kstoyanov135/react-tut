const Header = ({title}) => {

    return (
        <header>
            <h1>{title}Groceries List</h1>
        </header>
    )
}
Header.defaultProps = {
    title: ""
}

export default Header;