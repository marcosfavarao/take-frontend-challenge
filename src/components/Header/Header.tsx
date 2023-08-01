import logoDryve from '../../common/assets/svgs/logo-dryve.svg'
import iconHouse from '../../common/assets/svgs/icon-house.svg'
import iconNotification from '../../common/assets/svgs/icon-notification.svg'
import iconSettings from '../../common/assets/svgs/icon-settings.svg'
import iconProfile from '../../common/assets/svgs/icon-profile.svg'

import { HeaderContainer, HeaderLocation, HeaderActions } from './Header.styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderLocation>
          <a href="https://www.dryve.com.br/" target="_blank" rel="noreferrer">
            <img src={logoDryve} alt="" />
          </a>
          <div>
            <img src={iconHouse} alt="" />
            <span>Dryve - Ribeirão Preto</span>
          </div>
        </HeaderLocation>

        <HeaderActions>
          <a href="">
            <img src={iconNotification} alt="" title="Notificações" />
          </a>
          <a href="">
            <img src={iconSettings} alt="" title="Configurações" />
          </a>
          <a href="">
            <img src={iconProfile} alt="" title="Perfil" />
          </a>
        </HeaderActions>
      </HeaderContainer>
    </>
  )
}
