import Vito from '../assets/section1/Vito.png'
import Box from '../assets/section1/box.png'
import List from './List'
const Section2 = () => {
	return (
		<div className='bg_section_2'>
			<div className='container'>
				<div >
					<img className='vito' src={Vito} alt='' srcset='' />
				</div>
				<div className='tableRoot'>
					<h1>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h1>
					<List />
					<div className='vitoBoxBtn'>
						<img src={Box} alt='box' srcset='' />
						<div className='price'>
							<span>399</span>
							<button>ПРИОБРЕСТИ</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Section2
