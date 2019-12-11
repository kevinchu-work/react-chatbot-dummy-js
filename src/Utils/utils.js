
export let appendString = (str, withVar, split=' ') => {
    
    if (typeof withVar === 'undefined') {
    // if ( Object.is(withVar, undefined) ) {
        return str;
    } else {
        return str.concat(split, withVar);
    }
    
}