import { mockIntegrations } from "../data/mockIntegrations"

export function fetchIntegrations() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockIntegrations)
    }, 800)
  })
}

export function retryIntegration(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        status: "RUNNING"
      })
    }, 1000)
  })
}
