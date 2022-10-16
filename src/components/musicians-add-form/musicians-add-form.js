import { Component } from 'react';

import './musicians-add-form.scss';

class MusiciansAddForm extends Component {

    state = {
        name: '',
        salary: ''
    }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.salary && this.state.name.length > 3) {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        }

    }

    render() {
        const {name, salary} = this.state;

        return(
            <div className="app-add-form">
                <h3>Добавьте нового музыканта</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className='form-control new-post-label'
                        placeholder='Имя чувака?' 
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className='form-control new-post-label'
                        placeholder='З/П в $?' 
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button type='submit'
                            className='btn btn-outline-light'>Добавить</button>
                </form>
            </div>
        );
    }

}

export default MusiciansAddForm;