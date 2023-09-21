import boxes from '../assets/secion0/boxes.png'
import logo from '../assets/secion0/logo.png'
const Section = () => {
	return (
		<div className='bgSection'>
			<div className='img_custom'>
				<img src={logo} alt='' />
				<img src={boxes} alt='' />
				<div className='section_text'>
					<span className='title'>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</span>
					<span className='subtitle'>
						Побеждайте легко, побеждайте стильно с новыми коллекционными
						изданиями «Аллодов Онлайн»!
					</span>
				</div>
			</div>
		</div>
	)
}

export default Section
