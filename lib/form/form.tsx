import React from 'react';
import './form.scss';
import {createScopedClasses} from '../../utils/classes';

interface Props {
    value: FormValue;
    fields: { name: string, label: string, input: { type: string } }[];
    buttons?: React.ReactElement[] | React.ReactFragment;
    onSubmit: React.FormEventHandler;
    onChange: (value: FormValue) => void;
    errors: { [key: string]: string[] };
}

export interface FormValue {
    [key: string]: any;
}

const sc = createScopedClasses('form');

const Form: React.FC<Props> = (props) => {
    const {fields, value: formData, onSubmit, onChange} = props;

    const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        onSubmit(e);
    };

    const onInputChange = (name: string, value: string) => {
        const newFormValue = {...formData, [name]: value};
        onChange(newFormValue);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <table></table>
            {fields.map((f) => {
                return (
                    <div key={f.label} className={sc('row')}>
                        <span className={sc('label')}>
                            {f.label}
                        </span>
                        <input type={f.input.type}
                               value={formData[f.name]}
                               onChange={(e) => onInputChange(f.name, e.target.value)}
                        />
                        <div>{props.errors[f.name]}</div>
                    </div>
                );
            })}
            <div>
                {props.buttons}
            </div>
        </form>
    );
};

export default Form;
