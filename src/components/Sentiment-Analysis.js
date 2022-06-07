const Sentiment=(props)=>{
    return (
        <div className="sentimentBlock">
            <>Sentiment Analysis</>
            <h2 className="data">{props.data}</h2>
        </div>
    );
}

export default Sentiment;