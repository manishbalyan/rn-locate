import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "./actionTypes";


export const AddPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}

export const DeletPlace = () => {
    return {
        type: DELETE_PLACE
    }
}

export const SelectPlace = (key) => {
    return {
        typr: SELECT_PLACE,
        placeKey: key
    }
}

export const DeselectPlace = () => {
    return {
        type: DESELECT_PLACE
    }
}