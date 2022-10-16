import './app-info.scss';

const AppInfo = ({musicians, increased}) => {
    return(
        <div className="app-info">
            <h1>Перечень музыкантов которые ничего</h1>
            <h2>Их общее число: {musicians}</h2>
            <h2>Печеньку получат: {increased}</h2>
        </div>
    );
}

export default AppInfo;