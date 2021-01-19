import authReducer from "../../reducers/auth";

test('Should set uid for login the user ', () => {

  const action = {
    type:'LOGIN',
    uid:'123'
  }
  const state = authReducer({}, action)
  expect(state.uid).toBe(action.uid)
})

test('Should remove uid for logout the user ', () => {
  const action = {
    type:'LOGIN'    
  }
  const state = authReducer({uid:'123'}, action)
  expect(state).toEqual({})
})