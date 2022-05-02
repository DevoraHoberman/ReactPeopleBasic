import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        people: []
    }

    onFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    }
    onLastNameChange = e => {
        this.setState({ lastName: e.target.value });
    }
    onAgeChange = e => {
        this.setState({ age: e.target.value });
    }
    onAddButtonClick = () => {
        const { firstName, lastName, age, people } = this.state;
        const person = {
            firstName,
            lastName,
            age
        }
        const copy = [person, ...people];
        this.setState({ people: copy, firstName: '', lastName: '', age: '' });

    }
    onClearButtonClick = () => {
        this.setState({ firstName: '', lastName: '', age: '', people: [] });
    }

    generateTable = () => {
        const { people } = this.state;
        if (people.length === 0) {
            return <h1 className='text-center'>No person added. Be the first!</h1>
        }
        else {
            return (
                <div>
                    <table className='table table-hover table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PersonRow people={people} />
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className=''>
                    <PersonForm
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        age={this.state.age}
                        firstNameTextChange={this.onFirstNameChange}
                        lastNameTextChange={this.onLastNameChange}
                        ageTextChange={this.onAgeChange}
                        addButton={this.onAddButtonClick}
                        clearButton={this.onClearButtonClick}
                    />
                </div>
                {this.generateTable()}
            </div>
        );
    }
}

export default PeopleTable;