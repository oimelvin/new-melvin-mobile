export interface Auth {
	result: {
		accessToken: string
		encryptedAccessToken: string
		expireInSeconds: number
		userId: number
	}
}
