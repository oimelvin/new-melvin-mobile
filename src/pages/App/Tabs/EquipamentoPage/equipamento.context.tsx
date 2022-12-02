import { Equipamento } from '@models/Equipamento'
import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useState,
} from 'react'

interface EquipamentoContextProps {
	equipamento: Equipamento | null
	setEquipamento(equipamento: Equipamento): void
}

const EquipamentoContext = createContext({} as EquipamentoContextProps)

export const EquipamentoProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [equipamento, setEquipamento] = useState<Equipamento | null>(null)

	return (
		<EquipamentoContext.Provider
			value={{
				equipamento,
				setEquipamento,
			}}
		>
			{children}
		</EquipamentoContext.Provider>
	)
}

const useEquipamento = () => {
	const context = useContext(EquipamentoContext)

	if (!context) {
		throw new Error(
			'useEquipamento deve ser utilizado dentro de um EquipamentoProvider'
		)
	}

	return context
}

export default useEquipamento
