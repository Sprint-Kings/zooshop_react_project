import './unauthorized.css';

const Unauthorized = () => {
    return (
        <div className='unauthorized-container'>
            <div className='unauthorized-message'>
                <h2>Похоже, время вашей сессии истекло. Пожалуйста, перезайдите в свой аккаунт</h2>
            </div>
        </div>
    )
}

export default Unauthorized;