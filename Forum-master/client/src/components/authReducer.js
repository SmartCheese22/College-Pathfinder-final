// src/redux/authReducer.js
const initialState = {
  user: null,
  isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN':
          return {
              ...state,
              user: action.payload,
              isLoggedIn: true
          };
      case 'LOGOUT':
          return {
              ...state,
              user: null,
              isLoggedIn: false
          };
      case 'UPDATE_USER_NAME':
          return {
              ...state,
              user: {
                  ...state.user,
                  name: action.payload
              }
          };
      case 'UPDATE_ADDRESS':
        return {
            ...state,
            user: {
                ...state.user,
                address: action.payload
            }
        };
      case 'UPDATE_EMAIL':
        return {
            ...state,
            user: {
                ...state.user,
                email: action.payload
            }
        };
      case 'UPDATE_COLLEGE':
        return {
            ...state,
            user: {
                ...state.user,
                college: action.payload
            }
        };
      case 'UPDATE_BRANCH':
        return {
            ...state,
            user: {
                ...state.user,
                major: action.payload
            }
        };
      case 'UPDATE_GRADUATION_YEAR':
        return {
            ...state,
            user: {
                ...state.user,
                graduationYear: action.payload
            }
        };
        
        case 'UPDATE_ACADEMICS_OPINION':
            return {
                ...state,
                user: {
                    ...state.user,
                    opinion: {
                        ...state.user.opinion,
                        [0]: action.payload 
                    }
                }
            };
  
        case 'UPDATE_EXTRA_CURRICULAR_OPINION':
            return {
                ...state,
                user: {
                    ...state.user,
                    opinion: {
                        ...state.user.opinion,
                        [1]: action.payload 
                    }
                }
            };
  
        case 'UPDATE_PLACEMENTS_OPINION':
            return {
                ...state,
                user: {
                    ...state.user,
                    opinion: {
                        ...state.user.opinion,
                        [2]: action.payload 
                    }
                }
            };
  
        case 'UPDATE_OVERALL_OPINION':
            return {
                ...state,
                user: {
                    ...state.user,
                    opinion: {
                        ...state.user.opinion,
                        [3]: action.payload 
                    }
                }
            };
  
      default:
          return state;
  }
};

export default authReducer;