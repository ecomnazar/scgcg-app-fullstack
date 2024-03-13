import { RotatingLines } from 'react-loader-spinner'

export const Loading = () => {
    return (
        <RotatingLines
            visible={true}
            strokeWidth="5"
            width='18'
            ariaLabel="rotating-lines-loading"
            strokeColor='#FFFFFF'
        />
    )
}
