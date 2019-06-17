import { COLORS } from '../../theme';

export default {
    FormInputWrap: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
    },
    FormInput : {
        border: `solid 1px ${COLORS.grey}`,
        padding:'2px 10px',
        margin: '5px 0',
        height: '32px',
        width: '100%',
    },
    button : {
        background: COLORS.primary,
        border: 0,
        height: '32px',
        width: '100%',
        margin: '5px 0',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    errorMsg: {
        color: 'red'
    },
    successMsgWrap: {
        width: '100%',
        fontSize: '12px',
        color: COLORS.primary,
        margin: '5px 0',
        textAlign: 'left',
    }
  };
  