import { sleep } from "./sleep";

const API_URL = '/api/courses/'

async function responseCheck(response) {
    if (!response.ok) {
        const res = await response.json();
        throw { ...res, status: response.status }
      }
      return response.json();
}


export async function getAllCourses () {
    await sleep(1000)
    const response = await fetch(API_URL)
    return await responseCheck(response)
}


export async function getCourse (slug) {
    const response = await fetch(API_URL + slug)
    return await responseCheck(response)
}