import React from 'react';

interface Loaderrops {
    width: number,
    height: number
}
const Loader: React.FunctionComponent<Loaderrops> = ({
    width, height
}) => {
    return (<div className="flex justify-center">
        <img src="/assets/icons/loader.svg" alt="Loader" width={width} height={height} />
    </div>)
}
export default Loader