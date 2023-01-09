interface FiltroProgramacaoHookDataProps {}

interface FiltroProgramacaoHandlesProps {}

export interface FiltroProgramacaoHookProps {
	data: FiltroProgramacaoHookDataProps
	handles: FiltroProgramacaoHandlesProps
}

const useFiltroProgramacaoHook = (): FiltroProgramacaoHookProps => {
	return {
		data: {},
		handles: {},
	}
}

export default useFiltroProgramacaoHook
