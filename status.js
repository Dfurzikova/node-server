const startTimestamp = Date.now();
const sec = 1000;
const min = sec * 60;
const hour = min * 60;

function zeroNum(val){
    return val < 10 ? '0' + val : val;
}
    
module.exports = function () {
    const ms = Date.now() - startTimestamp;

    return [
        Math.floor(ms / hour), // hour
        Math.floor(ms / min) % 60, // minutes
        Math.floor(ms / sec) % 60, // seconds
    ].map(zeroNum).join(':');
};
