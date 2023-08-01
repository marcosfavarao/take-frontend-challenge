import iconDashboard from '../../common/assets/svgs/icon-dashboard.svg'
import iconShopping from '../../common/assets/svgs/icon-shopping.svg'
import iconCalendar from '../../common/assets/svgs/icon-calendar.svg'
import iconCar from '../../common/assets/svgs/icon-car.svg'
import iconRocket from '../../common/assets/svgs/icon-rocket.svg'
import iconUser from '../../common/assets/svgs/icon-user.svg'
import iconChart from '../../common/assets/svgs/icon-chart.svg'
import iconBank from '../../common/assets/svgs/icon-bank.svg'

interface SidebarDataType {
  title: string
  path: string
  enable: boolean
  icon: string
}

export const sidebarData: SidebarDataType[] = [
  {
    title: 'Resumo',
    path: '/',
    enable: false,
    icon: iconDashboard,
  },
  {
    title: 'Oportunidades',
    path: '/sales',
    enable: false,
    icon: iconShopping,
  },
  {
    title: 'Agenda',
    path: '/calendar',
    enable: false,
    icon: iconCalendar,
  },
  {
    title: 'Veículos',
    path: '/vehicles',
    enable: true,
    icon: iconCar,
  },
  {
    title: 'Publicação',
    path: '/posts',
    enable: false,
    icon: iconRocket,
  },
  {
    title: 'Contatos',
    path: '/contacts',
    enable: false,
    icon: iconUser,
  },
  {
    title: 'Analytics',
    path: '/analytics',
    enable: false,
    icon: iconChart,
  },
  {
    title: 'Financiamento',
    path: '/financing',
    enable: false,
    icon: iconBank,
  },
]
