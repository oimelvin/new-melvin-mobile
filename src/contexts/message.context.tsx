import React, {
	createContext,
	PropsWithChildren,
	useCallback,
	useContext,
	useState,
} from 'react'

type MessageType = 'info' | 'success' | 'warning' | 'error'

type Message = {
	message: string
	type: MessageType
}

interface MessageContextProps {
	message: Message | null
	addError(message: Message): Promise<void>
}

const MessageContext = createContext({} as MessageContextProps)

export const MessageProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [message, setMessage] = useState<Message | null>(null)

	const addError = async (msg: Message) => {
		if (!msg) {
			throw new Error('message cannot be empty')
		}

		setMessage(msg)
	}

	return (
		<MessageContext.Provider
			value={{
				message,
				addError: useCallback(msg => addError(msg), []),
			}}
		>
			{children}
		</MessageContext.Provider>
	)
}

const useMessage = () => {
	const context = useContext(MessageContext)

	if (!context) {
		throw new Error(
			'useMessage deve ser utilizado dentro de um MessageProvider'
		)
	}

	return context
}

export default useMessage
