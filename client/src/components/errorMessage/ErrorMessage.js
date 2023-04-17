import img from './error404.jpg'

const ErrorMessage = () => {
    return (
        <img style={{display: 'block', width: '100%', height: '100%', objectFit: 'cover', margin: '0 auto'}} alt='error' src={img}/>
    )
}

export default ErrorMessage;