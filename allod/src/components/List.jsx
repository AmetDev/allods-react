import first from '../assets/section1/1.png'
import second from '../assets/section1/2.png'
import third from '../assets/section1/3.png'
import fourth from '../assets/section1/4.png'
import fifth from '../assets/section1/5.png'
import sixth from '../assets/section1/6.png'
import seventh from '../assets/section1/7.png'

const list = [
	{ id: 1, title: 'Игровое время', icon: first, count: 0, days: 30 },
	{
		id: 2,
		title: 'Запечатанный набор инструментов',
		icon: second,
		count: 1,
		days: 1,
	},
	{
		id: 3,
		title: 'Хрупкая чистая руна 10-й ступени',
		icon: third,
		count: 1,
		days: 0,
	},
	{
		id: 4,
		title: 'Большой символ изобилия творца',
		icon: fourth,
		count: 10,
		days: 0,
	},
	{ id: 5, title: 'Мана-батарея', icon: fifth, count: 0, days: 20 },
	{ id: 6, title: 'Модуль памяти', icon: sixth, count: 0, days: 10 },
	{ id: 7, title: 'Помощник Вито ', icon: seventh, count: 1, days: 1 },
]
const List = () => {
	return (
		<div className='listRoot'>
			<div className='descrip'>
				<span className='descrip_text'>Бесплатные сервера</span>

				<span className='descrip_text'>Подписочный сервер</span>
			</div>
			<ul className='list'>
				{list.map(el => {
					return (
						<li className='elementList' key={el.id}>
							{console.log(el.icon)}
							<div className='item_img'>
								<img className='imglist' src={el.icon} alt={el.id} />
								<span>{el.title}</span>
							</div>
							<div className='item_cout'>
								<span style={{ margin: '10px' }}>{el.count}</span>
								<span>{el.days}</span>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
export default List
