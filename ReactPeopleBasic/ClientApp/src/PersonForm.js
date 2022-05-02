import React from 'react'

class NumberForm extends React.Component {

    render() {
        const { firstName, lastName, age,
            firstNameTextChange, lastNameTextChange, ageTextChange,
            addButton, clearButton } = this.props;

        return (
            <div className='jumbotron'>
                <div className='row'>
                    <div className='col-md-2'>
                        <input className='form-control' value={firstName} onChange={firstNameTextChange} placeholder='Enter First Name' />
                    </div>
                    <div className='col-md-2'>
                        <input className='form-control' value={lastName} onChange={lastNameTextChange} placeholder='Enter Last Name' />
                    </div>
                    <div className='col-md-2'>
                        <input className='form-control' value={age} onChange={ageTextChange} placeholder='Enter Age' />
                    </div>
                    <div className='col-md-2'>
                        <button onClick={addButton} className='btn btn-primary btn-block'>Add</button>
                    </div>
                    <div className='col-md-2'>
                        <button onClick={clearButton} className='btn btn-warning btn-block'>Clear All</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NumberForm;