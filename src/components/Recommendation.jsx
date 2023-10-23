const Recommendation = ()=>{

    // _____________________________________________________________________________
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;

    if (!isSpring) {
       return <div>Ce n'est pas le moment de remporter</div>
    }
    // _____________________________________________________________________________

    return <div>C'est le temps de remporter !</div>
};

export default Recommendation;