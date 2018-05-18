export const updateObject = (oldObject, updatedalues) => {
    return {
        ...oldObject,
        ...updatedalues
    }
};