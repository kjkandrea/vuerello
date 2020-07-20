import * as api from '../api'
import state from './state'

const actions = {
  LOGIN ({ commit }, { email, password }) {
    return api.auth.login(email, password)
      .then(({ accessToken}) => commit('LOGIN', accessToken))
  },
  ADD_BOARD (_, { title }) {
    return api.board.create(title).then(data => data.item)
  },
  FETCH_BOARDS ({ commit }) {
    return api.board.fetch().then(data => {
      commit('SET_BOARDS', data.list)
    })
  },
  FETCH_BOARD ({ commit }, { id }){
    return api.board.fetch(id).then(data => {
      commit('SET_BOARD', data.item)
    })
  },
  UPDATE_BOARD ({ state, dispatch }, { id, title, bgColor }) {
    return api.board.update(id, { title, bgColor })
      .then(() => dispatch('FETCH_BOARD', {id: state.board.id}))
  },
  DELETE_BOARD  (_, { id }) {
    return api.board.destroy(id)
  },

  ADD_LIST ({ dispatch, state }, { title, boardId, pos}) {
    return api.list.create({ title, boardId, pos})
    .then(() => dispatch('FETCH_BOARD', {id: state.board.id}))
  },
  UPDATE_LIST({ dispatch, state}, { id, pos, title }) {
    return api.list.update(id, {pos, title})
    .then(() => dispatch('FETCH_BOARD', {id: state.board.id}))
  },

  ADD_CARD ({ state, dispatch }, {title, listId, pos}) {
    return api.card.create(title, listId, pos)
      .then(() => dispatch('FETCH_BOARD', {id: state.board.id}))
  },
  FETCH_CARD({ commit }, { id }) {
    return api.card.fetch(id).then(data => {
      commit('SET_CARD', data.item)
    })
  },
  UPDATE_CARD({ state, dispatch }, { id, title, description, pos, listId}) {
    return api.card.update(id, {title, description, pos, listId})
      .then(() => dispatch('FETCH_BOARD', { id: state.board.id }))
  },
  DELETE_CARD({ state, dispatch }, {id}) {
    return api.card.destroy(id)
      .then(_ => dispatch('FETCH_BOARD', { id: state.board.id }))
  }
}

export default actions