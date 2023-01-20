//CSS
import ContainerStyle from '../styles/ContainerStyle'

const Container = ({ children }) => {
    return (
        <ContainerStyle >
            {children}
        </ContainerStyle>
    )
}

export default Container