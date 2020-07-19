import React from 'react';


const Ability = ({ability,key}) => {
    return (<li>
			    <span key={key} className="ability-title">{ability}</span>
			</li>
    );
}

export default Ability;