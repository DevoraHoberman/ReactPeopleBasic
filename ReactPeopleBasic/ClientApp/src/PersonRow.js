import React from 'react';

class PersonRow extends React.Component {

    generateRows = (person, key) => {
        let classNames = ''
        if (person.age > 65) {
            classNames += 'table-danger'
        }
        return (
            <tr key={key} className={classNames}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.age}</td>
            </tr>
        );
    }

    render() {
        const { people } = this.props;
        return (
            people.map((p, i) => this.generateRows(p, i))
        )   
    }
}
export default PersonRow;
