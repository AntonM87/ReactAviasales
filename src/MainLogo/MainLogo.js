import logo from '../logo.png';

export default function MainLogo() {
    return (
        <div className='main__logo'>
            <img className='main__logo__img' alt='logo' src={logo} />
        </div>
    )
}