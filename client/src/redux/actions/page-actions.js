export const CHANGE_PAGE = 'CHANGE_PAGE'


export const changePageAction = (payload) => {
    return{
        type: CHANGE_PAGE,
        payload
    }
}