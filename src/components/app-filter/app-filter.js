import './app-filter.scss';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все чуваки'},
        {name: 'rise', label: 'Претенденты на печеньку'},
        {name: 'more1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        
        return (
            <button type="button"
                    className={`btn ${clazz}`}  
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;