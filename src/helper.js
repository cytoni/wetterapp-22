const wochentage = (dt) => {
    const tage = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const d = new Date(dt * 1000) ;
    return tage[d.getDay()];
    };
//console.log(wochentage(1663927200));
    export default wochentage;
