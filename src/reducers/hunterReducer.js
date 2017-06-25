export const hunterReducer = (prevState = {names:[]}, action) => {
    switch (action.type) {
        case 'ADD':
            const newNames = prevState.names.slice();
            if (!newNames.includes(action.newName)) {
                newNames.push(action.newName);
            }
            const res = {
                ...prevState,
                name: "",
                //                prevState,
                names: newNames
            };
            if (!res.names.includes(action.newName)) {
                res.names.push(action.newName);
            }

            console.log("hunterReducer", res);
            return res;
    }
    return prevState;
};