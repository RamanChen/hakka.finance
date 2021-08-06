import React from 'react'
import DappLayout from '../containers/DappLayout'
import Staking from '../components/StakingPage'

const StakingPage = () => {
  return (
    <DappLayout
      title ={'staking'}
    >
      <Staking />
    </DappLayout>
  )
}

export default StakingPage