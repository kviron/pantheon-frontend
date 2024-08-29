import axios, { CreateAxiosDefaults } from 'axios'

export const apiUrl = (() => {
    if (window.origin === 'null' || window.origin === 'http://localhost:3031') {
        return 'http://localhost:3030'
    }
    let port = /http.*:\/\/.*:(\d+)/.exec(window.origin)?.[1]
    if (port == '3031') {
        return window.origin.replace('3031', '3030')
    }
    return ''
})()

const options: CreateAxiosDefaults = {
    baseURL: apiUrl,
    withCredentials: true
}

export const $torrentApi = axios.create(options)
