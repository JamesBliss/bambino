import colour from '../colour';

const theme = {
  buttons: {
    'default': {
      background: colour.black,
      borderColor: colour.black,
      color: colour.white
    },
    'default-solid': {
      background: colour.black,
      borderColor: colour.black,
      color: colour.white,
      hover: {
        background: colour.black40,
        borderColor: colour.black40,
        color: colour.white
      },
      active: {
        background: colour.black60,
        borderColor: colour.black60,
        color: colour.white
      },
      disabled: {
        background: colour.black25,
        borderColor: colour.black25,
        color: colour.white
      }
    },
    'default-clear': {
      background: 'transparent',
      borderColor: colour.black,
      color: colour.black,
      hover: {
        background: 'transparent',
        borderColor: colour.black40,
        color: colour.black40
      },
      active: {
        background: 'transparent',
        borderColor: colour.black60,
        color: colour.black60
      },
      disabled: {
        background: 'transparent',
        borderColor: colour.black25,
        color: colour.black25
      }
    },
    'default-floating': {
      background: 'transparent',
      borderColor: 'transparent',
      color: colour.black,
      hover: {
        background: 'transparent',
        borderColor: 'transparent',
        color: colour.black
      },
      active: {
        background: 'transparent',
        borderColor: 'transparent',
        color: colour.black
      },
      disabled: {
        background: 'transparent',
        borderColor: 'transparent',
        color: colour.black
      }
    },
    'inverse': {
      background: colour.white,
      borderColor: colour.white,
      color: colour.black
    },
    'inverse-solid': {
      background: colour.white,
      borderColor: colour.white,
      color: colour.black,
      hover: {
        background: colour.black25,
        borderColor: colour.black25,
        color: colour.black
      },
      active: {
        background: colour.black60,
        borderColor: colour.black60,
        color: colour.black
      },
      disabled: {
        background: colour.black40,
        borderColor: colour.black40,
        color: colour.black
      }
    },
    'inverse-clear': {
      background: 'transparent',
      borderColor: colour.white,
      color: colour.white,
      hover: {
        background: 'transparent',
        borderColor: colour.black60,
        color: colour.black60
      },
      active: {
        background: 'transparent',
        borderColor: colour.black40,
        color: colour.black40
      },
      disabled: {
        background: 'transparent',
        borderColor: colour.black25,
        color: colour.black25
      }
    },
    'inverse-floating': {
      background: 'transparent',
      borderColor: 'transparent',
      color: colour.white,
      hover: {
        background: 'transparent',
        borderColor: 'transparent',
        color: colour.white
      },
      active: {
        background: 'transparent',
        borderColor: 'transparent',
        color: colour.white
      },
      disabled: {
        background: 'transparent',
        borderColor: 'transparent',
        color: colour.white
      }
    },
    'error': {
      background: colour.red,
      borderColor: colour.red,
      color: colour.white,
      hover: {
        background: colour.red60,
        borderColor: colour.red60,
        color: colour.white
      },
      active: {
        background: colour.red40,
        borderColor: colour.red40,
        color: colour.white
      },
      disabled: {
        background: colour.red25,
        borderColor: colour.red25,
        color: colour.white
      }
    },
    'warning': {
      background: colour.amber,
      borderColor: colour.amber,
      color: colour.white,
      hover: {
        background: colour.amber60,
        borderColor: colour.amber60,
        color: colour.white
      },
      active: {
        background: colour.amber40,
        borderColor: colour.amber40,
        color: colour.white
      },
      disabled: {
        background: colour.amber25,
        borderColor: colour.amber25,
        color: colour.white
      }
    },
    'success': {
      background: colour.green,
      borderColor: colour.green,
      color: colour.white,
      hover: {
        background: colour.green60,
        borderColor: colour.green60,
        color: colour.white
      },
      active: {
        background: colour.green40,
        borderColor: colour.green40,
        color: colour.white
      },
      disabled: {
        background: colour.green25,
        borderColor: colour.green25,
        color: colour.white
      }
    }
  },
  cards: {
    default: colour.white,
    error: colour.red,
    warning: colour.amber,
    success: colour.green,
    inactive: colour.darkgray
  },
  input: {
    background: colour.white,
    colour: colour.charcoal,
    border: colour.lightgray,
    placeholder: colour.lightgray,
    disabled: colour.darkgray,
    error: colour.red,
    focus: '#80bdff'
  },
  select: {
    background: colour.white,
    colour: colour.charcoal,
    border: colour.lightgray,
    placeholder: colour.lightgray,
    disabled: colour.darkgray,
    error: colour.red,
    focus: '#80bdff'
  },
  textArea: {
    background: colour.white,
    colour: colour.charcoal,
    border: colour.lightgray,
    placeholder: colour.lightgray,
    disabled: colour.darkgray,
    error: colour.red,
    focus: '#80bdff'
  }
};

export default theme;