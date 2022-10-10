import MusiciansListItem from '../musicians-list-item/musicians-list-item';

import './musicians-list.css';

const MusiciansList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <MusiciansListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}/>
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default MusiciansList;