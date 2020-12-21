import useClock from '../Hooks/useClock';

function BetterClock() {
    const {timeString} = useClock();

    return (
        <div>
            <h1 style={{color: "red"}}>{timeString}</h1>
        </div>
    );
}

export default BetterClock;