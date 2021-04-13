import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY' : 'd31e62f0-73b3-47e7-92c3-7bb81d95d297' }
})


export const authAPI = {
  async auth() {
    return await instance.get(`auth/me`)
  },
  async login(email, password, rememberMe = false) {
    return await instance.post(`auth/login`, { email, password, rememberMe })
  },
  async logout() {
    return await instance.delete(`auth/login`)
  },
}


export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 5) {
    let response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
    return response.data
  },
  async followUser(userId) {
    let response = await instance.post(`follow/${userId}`)
    return response.data
  },
  async unfollowUser(userId) {
    let response = await instance.delete(`follow/${userId}`)
    return response.data
  }
}


export const profileAPI = {
  async getProfile(userId = 16174) {
    return await instance.get(`profile/${userId}`)
  },
  async getStatus(userId = 16174) {
    return await instance.get(`profile/status/${userId}`)
  },
  async updateStatus(status) {
    return await instance.put(`profile/status/`, { status })
  },
}