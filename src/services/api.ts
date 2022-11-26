import axios from 'axios'

export interface HttpError {
	message: string
	response: {
		status: number
	}
}

export interface HttpResponse<T> {
	result: T
}

export interface Items<T> {
	items: T[]
}

const api = axios.create({
	baseURL: 'http://melvinwebhost-380627449.us-east-1.elb.amazonaws.com/api/',
})

/*api.interceptors.response.use(
  response => response,
  (error: HttpError) => {
    if (error.response) {
      addError({
        message: error.message,
        type: 'error',
      })
      console.error(`${error.response.status} - ${error.message}`)
    }

    return false
  }
)*/

export const configAuthorization = async (token: string): Promise<void> => {
	if (token) {
		api.defaults.headers.common['Authorization'] = `Bearer ${token}`
	} else {
		delete api.defaults.headers.common['Authorization']
	}
}

export const configTenant = async (tenant: number): Promise<void> => {
	if (tenant > 0) {
		api.defaults.headers.common['Abp.TenantId'] = tenant
	} else {
		delete api.defaults.headers.common['Abp.TenantId']
	}
}

export default api
