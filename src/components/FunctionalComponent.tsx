import React from 'react';

type MyProps = {
    theWeather: string
}

const FunctionalComponent = (props: MyProps) => {
    return(
        <div>
            <h1>Fetch Challenge</h1>
            <p>This is the weather at your current location: </p>
            <p>{props.theWeather}</p>
        </div>
    )
}

export default FunctionalComponent