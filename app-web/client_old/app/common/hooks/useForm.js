import React from 'react';
import _reduce from 'lodash/reduce';

const useForm = () => {
    const fieldsRef = React.useRef({});

    const getValue = React.useCallback(elements => {
        return _reduce(elements,
            (previous, elem, key) => {
                // console.log('type', elem.type);

                if (elem.type === 'checkbox')
                    return {...previous, [key]: elem.checked};

                return {...previous, [key]: elem.value};
            },

            {},
        )
    }, []);

    const setRef = ref => {
        if (ref)
            fieldsRef.current[ref.name] = ref;
    };

    const handleSubmit = callback => event => {
        if (event)
            event.preventDefault();

        callback(getValue(fieldsRef.current));
    };

    return {
        handleSubmit,
        setRef,
    }
};

export default useForm;
