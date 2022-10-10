import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import MusiciansList from '../musicians-list/musicians-list';
import MusiciansAddForm from '../musicians-add-form/musicians-add-form';

import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Ozzy Crazytrainov", salary: 800, increase: true, id: 1, like: false},
                {name: "Tony Doomov", salary: 3000, increase: false, id: 2, like: false},
                {name: "Bill Urod", salary: 5000, increase: false, id: 3, rise: false}
            ]
        }

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        })
    }

    render() {
    
        return(
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <MusiciansList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <MusiciansAddForm onAdd={this.addItem}/>
            </div>
        );
    }

}

export default App;