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
    if (name.includes(".") && Object.keys(errors).length !== 0) {
        const nestedPaths = name.split(".")
        const newPathNameErrors = errors[nestedPaths[0]] && errors[nestedPaths[0]][nestedPaths[1]]

        return newPathNameErrors && <span className={`${nestedPaths[1] && nestedPaths[1]}--error`}>{newPathNameErrors.message}</span>;
    } else {
        return errors[name] && <span className={`${name}--error`} > {errors[name].message}</span >;
    }
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
export const numberVal = (required, minLength, maxLength, pattern) => {
    return {
        required: {
            value: required,
            message: "Required field !"
        },
        // minLength: {
        //     value: minLength,
        //     message: `Pass min ${minLength} number !`
        // },
        // maxLength: {
        // value: maxLength,
        // message: `Max ${maxLength} numbers !`
        // },
        pattern: {
            value: pattern,
            message: `Between 1-10 !`
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
