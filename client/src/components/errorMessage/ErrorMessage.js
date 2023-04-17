import img from './error404.jpg'

const ErrorMessage = () => {
    return (
        <img style={{display: 'block', width: 'inherit', height: 'inherit', objectFit: 'contain', margin: '0 auto'}} alt='error' src={img}/>
    )
}

export default ErrorMessage;