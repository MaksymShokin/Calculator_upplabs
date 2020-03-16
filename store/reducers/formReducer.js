import {
  RESET_FORM,
  SAVE_FORM_OPTION
} from '../actions/formActions'

const initialState = {
  platform: '',
  web: {
    webDesign: '',
    webGeolocation: '',
    webLanguages: '',
    webNotifications: '',
    webParcing: '',
    webSecurity: '',
    webCommunication: '',
    webPayment: '',
    webPermissions: ''
  },
  mobile: {
    mobilePlatform: '',
    mobileDevices: {
      smartphones: false,
      tablets: false,
      smartwatches: false,
      desktop: false
    },
    mobileDesign: '',
    mobileAuthentication: '',
    mobileGeolocation: '',
    mobileAdmin: '',
    mobileNotifications: '',
    mobilePayments: '',
    mobileContent: {
      video: false,
      photo: false,
      audio: false,
      streaming: false
    },
    mobileAnalytics: ''
  }
};

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {

    case RESET_FORM:
      console.log(initialState)
      return initialState;
    case SAVE_FORM_OPTION:
      switch (action.field) {
        case 'platform':
          return {
            ...state,
            web: initialState.web,
            mobile: initialState.mobile,
            platform: action.value
          };
        case 'mobilePlatform':
          return {
            ...state,
            mobile: {
              ...state.mobile,
              mobilePlatform: action.value
            }
          };
        case 'mobileDevices':
          return {
            ...state,
            mobile: {
              ...state.mobile,
              mobileDevices: {
                ...state.mobile.mobileDevices,
                [action.value]: !(state.mobile.mobileDevices[action.value])
              }
            }
          };
        case 'mobileDesign':
          return {
            ...state,
            mobile: {
              ...state.mobile,
              mobileDesign: action.value
            }
          };
        case 'mobileAuthentication':
          return {
            ...state,
            mobile: {
              ...state.mobile,
              mobileAuthentication: action.value
            }
          };
        case 'mobileGeolocation':
          return {
            ...state,
            mobile: {
              ...state.mobile,
              mobileGeolocation: action.value
            }
          };
        case 'mobileAdmin':
          return {
            ...state,
            mobile: {
              ...state.mobile,
              mobileAdmin: action.value
            }
          };
        case 'mobileNotifications':
          return {
            ...state,
            mobile: {
              ...state.mobile,
              mobileNotifications: action.value
            }
          };
        case 'mobilePayments':
          return {
            ...state,
            mobile: {
              ...state.mobile,
              mobilePayments: action.value
            }
          };
        case 'mobileContent':
          return {
            ...state,
            mobile: {
              ...state.mobile,
              mobileContent: {
                ...state.mobile.mobileContent,
                [action.value]: !(state.mobile.mobileContent[action.value])
              }
            }
          };
        case 'mobileAnalytics':
          return {
            ...state,
            mobile: {
              ...state.mobile,
              mobileAnalytics: action.value
            }
          };
        case 'webDesign':
          return {
            ...state,
            web: {
              ...state.web,
              webDesign: action.value
            }
          };
        case 'webGeolocation':
          return {
            ...state,
            web: {
              ...state.web,
              webGeolocation: action.value
            }
          };
        case 'webLanguages':
          return {
            ...state,
            web: {
              ...state.web,
              webLanguages: action.value
            }
          };
        case 'webNotifications':
          return {
            ...state,
            web: {
              ...state.web,
              webNotifications: action.value
            }
          };
        case 'webParcing':
          return {
            ...state,
            web: {
              ...state.web,
              webParcing: action.value
            }
          };
        case 'webSecurity':
          return {
            ...state,
            web: {
              ...state.web,
              webSecurity: action.value
            }
          };
        case 'webCommunication':
          return {
            ...state,
            web: {
              ...state.web,
              webCommunication: action.value
            }
          };
        case 'webPayment':
          return {
            ...state,
            web: {
              ...state.web,
              webPayment: action.value
            }
          };
        case 'webPermissions':
          return {
            ...state,
            web: {
              ...state.web,
              webPermissions: action.value
            }
          };
        default:
          return state;
      }
      break;
    default:
      return state;
  }
};
