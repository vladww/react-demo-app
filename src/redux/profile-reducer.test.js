import profileReducer, { addPost, deletePost } from './profile-reducer'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

let state = {
  posts: [
    {id: 1, name:'Dima', age:'30', message:'Hi, how are you?', likesCount:'4'},
    {id: 2, name:'Vova', age:'32', message:'It\'s a nice thing!', likesCount:'15'},
    {id: 3, name:'Alex V.', age:'18', message:'Hello friend!  ', likesCount:'1'},
    {id: 4, name:'Nikolay S.', age:'21', message:'Wow, cool!', likesCount:'23'},
    {id: 5, name:'Semyon Popov', age:'45', message:'Hi!', likesCount:'110'},
  ]
}

it('length of posts should be incremented', () => {
  let action = addPost('ololo')

  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(6)
})


it('new post text should be correct', () => {
  let action = addPost('ololo')

  let newState = profileReducer(state, action)

  expect(newState.posts[5].message).toBe('ololo')
})

it('post should be deleted', () => {
  let action = deletePost(1)

  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(4)
  expect(newState.posts[0].message).toBe('It\'s a nice thing!')
  expect(newState.posts[3].message).toBe('Hi!')
})

it("post length shouldn't be changed after deleting with not existing ID", () => {
  let action = deletePost(1000)

  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(5)
})