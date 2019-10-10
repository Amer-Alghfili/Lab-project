import React, {Component} from 'react';
import Input from '../input/input';

class Patient extends Component {
    state = {
        form : {
            bloodType : {
                type : 'text',
                placeholder : 'Blood Type',
                value : ''
            },
            city : {
                type : 'text',
                placeholder : 'City',
                value : ''
            },
            patientId : {
                type : 'text',
                placeholder : 'Patient ID',
                value : ''
            },
            hospital : {
                type : 'text',
                placeholder : 'Hospital',
                value : ''
            },
            description : {
                type : 'text',
                placeholder : 'Description Of The Case',
                value : ''
            },
            contactInf : {
                type : 'text',
                placeholder : 'Contact Infromation',
                value : ''            
            }
        }
    };

    render () {
        let n = 0;
        const formElements = [];
        for(let i in this.state.form) {
            formElements.push({config : this.state.form[i], id : i, keyNumber : n++});
        }
        return (
            <section>
                <form onSubmit={(event) => event.preventDefault()}>
                    {
                        formElements.map(el => (
                            <Input 
                                key={el.keyNumber}
                                type={el.config.type}
                                placeholder={el.config.placeholder}
                            />
                        ))
                    }
                </form>
            </section>
        );
    }
}

export default Patient;