/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useWeb3React } from '@web3-react/core';
import images from '../../images'
import styles from './styles'
import { ChainName } from '../../constants'
import { DAPP_SUPPORT_CAHIN } from '../../constants/index'

const CurrentNetwork = () => {
  const { chainId } = useWeb3React();

  const pathname = location.pathname.replace("/", "")
  const supportStatus = DAPP_SUPPORT_CAHIN[pathname].filter((supportChainId) =>
    supportChainId === chainId
  ).length

  return (
    <div sx={styles.chainWrapper}>
      <img src={
        !chainId || !supportStatus
          ? images.iconSnapshot
          : chainId === 56
            ? images.iconBinanceGold
            : images.iconEthereumDark
      } alt='Chain Icon' />
      <span sx={styles.chainNameWrapper}>
        {
          chainId && supportStatus
            ? ChainName[chainId]
            : 'Wrong Network'}
      </span>
    </div>
  );
}

export default CurrentNetwork;
