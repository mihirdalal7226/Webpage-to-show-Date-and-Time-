let time;
let date;
let temp;
let temp2;
function inTwoDigits(temp){
        if(temp<10){
                return '0'+temp;
        }
        return temp;
}
setInterval(() => {
        let a = new Date();
        temp=inTwoDigits(a.getSeconds());
        temp2=inTwoDigits(a.getMinutes());
        time = a.getHours() + ':' + temp2 + ':' + temp;
        date = a.toLocaleDateString();
        document.getElementById('time').innerHTML = time + ' on ' + date;
}, 1000);