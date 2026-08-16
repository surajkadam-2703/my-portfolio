
export const setDigitalClockTime= ()=>{
    let date= new Date();

    let hours= String(date.getHours()).padStart(2,"0");
    let minutes= String(date.getMinutes()).padStart(2,"0");
    let seconds= String(date.getSeconds()).padStart(2,"0");
    
    return `${hours}:${minutes}:${seconds}`;
}

