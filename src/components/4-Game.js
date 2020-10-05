import React from "react";
import PropTypes from "prop-types";
import {Radar} from 'react-chartjs-2';




function Game(props){
  const data =  {
      labels: ['Story', 'Gameplay', 'Style', 'Challenge', 'Replay Value', 'Social', 'Innovation', 'Freedom'],
      datasets: [
        {
          label: `${props.title}`,
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [`${props.stats[0]}`, `${props.stats[1]}`, `${props.stats[2]}`, `${props.stats[3]}`, `${props.stats[4]}`, `${props.stats[5]}`, `${props.stats[6]}`, `${props.stats[7]}`]
      }
    ]
  };
  return (
    <React.Fragment>
      <div onClick = {() => props.whenGameClicked(props.id)}>
        <h3>{props.title} - {props.year}</h3>
    
        <Radar data={data} />
      </div>
      <hr/>
    </React.Fragment>
  );
}


Game.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  stats: PropTypes.array,
  story: PropTypes.number,
  id: PropTypes.string,
  whenGameClicked: PropTypes.func
};

export default Game;