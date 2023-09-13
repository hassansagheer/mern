function Nav(props) {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="App.js">{props.first}</a></li>
                <li><a href="App.js">{props.second}</a></li>
                <li><a href="App.js">{props.third}</a></li>
                <li><a href="App.js">{props.fourth}</a></li>
            </ul>
        </nav>
    );
};

export default Nav;