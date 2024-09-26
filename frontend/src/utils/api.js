// import { sleep } from ".";

const API_URLS = {
  courses: "/api/courses/",
  users: "/api/users/",
  customers: "/api/customers/",
};

async function responseCheck(response) {
  if (!response.ok) {
    const res = await response.json();
    throw { ...res, status: response.status, foo:'bar' };
  }
  return response.json();
}

// Course services
export async function getAllCourses() {
  // await sleep(1000);
  const response = await fetch(API_URLS.courses);
  return await responseCheck(response);
}

export async function createCourse(data) {
  // await sleep(1000)
  const response = await fetch(API_URLS.courses, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await responseCheck(response);
}

export async function updateCourse(data, slug) {
  // await sleep(1000)
  const response = await fetch(API_URLS.courses + slug, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await responseCheck(response);
}

export async function getCourse(slug) {
  const response = await fetch(API_URLS.courses + slug);
  return await responseCheck(response);
}

// Auth services
export async function login(data) {
  const response = await fetch(API_URLS.users + "signin", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await responseCheck(response);
}

export async function logout() {
  const response = await fetch(API_URLS.users + "signout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await responseCheck(response);
}

export async function userProfile() {
  const response = await fetch(API_URLS.users + "profile");
  return await responseCheck(response);
}

export async function updateUserProfile(data) {
  const response = await fetch(API_URLS.users + "profile", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await responseCheck(response);
}

// Customer serives
export async function getAllCustomers() {
  const response = await fetch(API_URLS.customers);
    return await responseCheck(response);
}
export async function customerRegister(data) {
    const response = await fetch(API_URLS.customers + "register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      return await responseCheck(response);
}
