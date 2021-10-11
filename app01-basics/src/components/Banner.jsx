import M2I from '../assets/logo/M2I_logo.jpg'
import '../styles/Banner.css'

export default function Banner() {
    return (
        <>
            <div className="header">
                <img src={M2I} alt="Logo M2i Formation" />
                <h2>M2i Formation</h2>
            </div>
        </>
    )
}