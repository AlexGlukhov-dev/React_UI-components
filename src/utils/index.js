export const addZero = num => {
    if(num.toString().length < 2) {
        return `0${num}`;
    }else {
        return num;
    }
}