import './unauthorized.css';

const Unauthorized = ({message = 'Похоже, время вашей сессии истекло. Пожалуйста, перезайдите в свой аккаунт'}) => {
    return (
        <div className='unauthorized-container'>
            <div className='unauthorized-message'>
                <h2>{message}</h2>
            </div>
        </div>
    )
}

export default Unauthorized;