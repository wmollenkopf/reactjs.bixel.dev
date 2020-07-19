import React from 'react';
import Ability from './Ability';

const AbilityRow = ({abilityName,abilityDataset}) => {
    return (<>
        <h3>{abilityName}</h3>

        <div className="row">
            <div className="col-md-4">
                <ul className="no-bullets">
                    {
                        abilityDataset.column1.map((item,index) => (
                        <Ability ability={item} key={index} />
                        ))
                    }	
                </ul>
            </div>
            <div className="col-md-4">
                <ul className="no-bullets">
                    {
                        abilityDataset.column2.map((item,index) => (
                        <Ability ability={item} key={index} />
                        ))
                    }	
                </ul>
            </div>
            <div className="col-md-4">
                <ul className="no-bullets">
                    {
                        abilityDataset.column3.map((item,index) => (
                        <Ability ability={item} key={index} />
                        ))
                    }	
                </ul>
            </div>
        </div>
        </>
    );
}

export default AbilityRow;