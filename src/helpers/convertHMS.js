
export const convertHms = (secondes) => {
    var date = new Date(0);
    date.setSeconds(secondes); // specify value for SECONDS here
    return date.toISOString().substr(14, 5);
}