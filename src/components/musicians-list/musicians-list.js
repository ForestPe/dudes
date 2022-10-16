import MusiciansListItem from '../musicians-list-item/musicians-list-item';

import './musicians-list.scss';

const MusiciansList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <MusiciansListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )   
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default MusiciansList;