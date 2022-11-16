import { Ativo } from '@models/Ativo'
import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useState,
} from 'react'

interface AtivoContextProps {
  ativo: Ativo | null
  setAtivo(ativo: Ativo): void
}

const AtivoContext = createContext({} as AtivoContextProps)

export const AtivoProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [ativo, setAtivo] = useState<Ativo | null>(null)

	return (
		<AtivoContext.Provider
			value={{
				ativo,
				setAtivo,
			}}
		>
			{children}
		</AtivoContext.Provider>
	)
}

const useAtivo = () => {
	const context = useContext(AtivoContext)

	if (!context) {
		throw new Error('useAtivo deve ser utilizado dentro de um AtivoProvider')
	}

	return context
}

export default useAtivo
