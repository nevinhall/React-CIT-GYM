
export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const signUp = (user) => {
  return {
    type: 'SIGN_UP',
    payload: { user }
  }
}


export const signIn = (user) => {
  return {
    type: 'SIGN_IN',
    payload: user
  }
}

