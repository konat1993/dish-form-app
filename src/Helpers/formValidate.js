import React from "react";

export const namePattern = /^([^0-9]*)$/i;
export const specificWordPattern = /\b(?!none)\S+/g

export const errorStyles = (errors, name) => {
    const errorExists = errors[name]?.message
    if (errorExists) {
        return {
            border: "2px solid rgb(204, 17, 17)",
            borderRadius: "3px"
        }
    }
};
export const errorLabel = (errors, name) => {
    return errors[name] && <span className={`${name}--error`} > {errors[name].message}</span >;
};

export const nameVal = (required, minLength, maxLength, pattern) => {
    return {
        required: {
            value: required,
            message: "Required field !"
        },
        minLength: {
            value: minLength,
            message: "Too short !"
        },
        maxLength: {
            value: maxLength,
            message: "Too long !"
        },
        pattern: {
            value: pattern,
            message: "Numbers are not valid !"
        }
    };
};
export const numberVal = (required, maxLength, obj) => {
    const { pattern, minNumber = 1, maxNumber } = obj
    return {
        required: {
            value: required,
            message: "Required field !"
        },
        maxLength: {
            value: maxLength,
            message: `Max ${maxLength} digits !`
        },
        pattern: {
            value: pattern,
            message: `Between ${minNumber} - ${maxNumber} !`
        },

    };
};

export const selectVal = () => {
    return {
        pattern: {
            value: specificWordPattern,
            message: "Required field !"
        }
    }
};
