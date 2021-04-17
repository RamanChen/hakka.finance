export default {
  headerBg: {
    position: 'absolute',
    width: '100%',
    top: '0px',
    right: '0px',
    zIndex: '-1'
  },

  headerContainer: {
    display: 'flex',
    position: 'relative',
    padding: '20px 0',
    justifyContent: 'space-between',
    '@media screen and (max-width: 576px)': {
      position: 'unset',
      display: 'none'
    }
    // position: "relative",
    // top: "-253px",
    // right: 0,
  },

  mobile_header: {
    display: 'none',

    '@media screen and (max-width: 576px)': {
      display: 'flex',
      paddingBottom: '20px'
    }
  },
  logoRespon: {
    display: 'none',

    '@media screen and (max-width: 576px)': {
      display: 'block'
    }
  },

  iconMenu: {
    opacity: '0',

    '@media screen and (max-width: 576px)': {
      opacity: '1',
      cursor: 'pointer',
      paddingRight: '5%'
    }
  },
  iconMenuLeft: {
    display: 'none',
    cursor: 'pointer',
    '@media screen and (max-width: 768px)': {
      display: 'flex',
      paddingLeft: '50px'
    },
    '@media screen and (max-width: 576px)': {
      display: 'none'
    }
  },

  imgIcon: {
    cursor: 'pointer',
    transition: '.3s all',
    opacity: '.5',
    '@media screen and (max-width: 576px)': {
      display: 'none'
    },
    ':hover': {
      opacity: 1
    }
  }
}
