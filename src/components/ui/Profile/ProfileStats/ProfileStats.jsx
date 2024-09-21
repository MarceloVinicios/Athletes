import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {VictoryPie, VictoryChart, VictoryBar} from "victory"

const ProfileStats = ({accesses}) => {
  const {graph, setGraph} = useState([])

  useEffect(() => {

  }, [])

  const customTheme = {
    axis: {
      style: {
        tickLabels: {
          fontSize: 12,
          fill: '#ffffff',
        },
      },
    },
  };


  return (
    <div>
      Acessos: {accesses}
      <div>
        <VictoryChart
         data={[
          {x: 'Acessos', y: 4},
          {x: 'Sem acesso', y: 10}
        ]}
          theme={customTheme}
          style={{
            parent: {
              background: '#ffcc00',
            },
            labels: {
              fontSize: 12,
              fill: '#ffffff',
            },
            data: {
              fill: '#ffffff',
            }}}
        />
      </div>
    </div>
  )
}

export default ProfileStats
