import Graph from "./Graph";

const Visitors=(props)=>{
    return (
        <div className="visitorsBlock">
            <>Website Visitors</>
            <h2>{props.visitors}</h2>
            <Graph/>
        </div>
    );
}

export default Visitors;