import React from 'react';

type Props = {
    id: bigint,
    name: string
}

const Slider = (props: Props) => {
    return(
        <div>
            { props.id } - { props.name }
        </div>
    );
}

export  default Slider;
