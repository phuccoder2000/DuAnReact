import NavDropdown from 'react-bootstrap/NavDropdown'


const Language = (props) => {
<<<<<<< HEAD
    const { t, i18n } = useTranslation();
    const handleChaneLanguage = (language) => {
        i18n.changeLanguage(language)
        console.log(i18n.changeLanguage)
    }
=======
>>>>>>> parent of b035ad4 (design and api dashboard)
    return (
        <>
            <NavDropdown title="Việt Nam" id="basic-nav-dropdown2" className='languages'>
                <NavDropdown.Item >English</NavDropdown.Item>
                <NavDropdown.Item >Việt Namt</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}
export default Language