import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { MenuWrapper, HiddenMenuWrapper } from './ArtcileMenuStyles'
import { Transition } from 'react-transition-group'

import Icon from '../../../UI/Icon/Icon'
import Checkbox from '../../../UI/Checkbox/Checkbox'

import AuthContext from '../../../../context/AuthContext'
import LanguageContext from '../../../../context/LanguageContext'

function ArtcileMenu() {
  const { logout } = useContext(AuthContext)
  const { changeLanguage, currentLang } = useContext(LanguageContext)
  const { changeTheme, themeName } = useContext(ThemeContext)
  const L = useContext(LanguageContext).translation.Article.menu
  const [showSettings, setShowSettings] = useState<boolean>(false)

  const defaultTransitionStyle = {
    transition: `all 300ms ease-in-out`,
    opacity: 0,
    marginRight: '-15px',
    zIndex: '0',
  }

  const transitionStyles = {
    entering: { opacity: 1, marginRight: '-0px' },
    entered: { opacity: 1, marginRight: '0px' },
    exiting: { opacity: 0, marginRight: '-15px' },
    exited: { opacity: 0, marginRight: '-15px', zIndex: '-1' },
  }

  return (
    <MenuWrapper>
      <Transition in={showSettings} timeout={1}>
        {state => (
          <div style={{ ...defaultTransitionStyle, ...transitionStyles[state] }}>
            <HiddenMenuWrapper>
              <Checkbox
                type={'slider'}
                onClick={changeTheme}
                value={themeName}
                checked={themeName === 'dark' ? true : false}
                sliderContent={{
                  left: <span>{L.light}</span>,
                  right: <span>{L.dark}</span>,
                }}
              />
              <Checkbox
                type={'slider'}
                onClick={changeLanguage}
                value={currentLang}
                checked={currentLang === 'ru' ? false : true}
                sliderContent={{
                  left: <span>ru</span>,
                  right: <span>eng</span>,
                }}
              />
            </HiddenMenuWrapper>
          </div>
        )}
      </Transition>

      <Icon
        type={'cog'}
        clickHandler={() => {
          setShowSettings(!showSettings)
        }}
      />
      <Icon type={'door'} clickHandler={logout} />
    </MenuWrapper>
  )
}

export default ArtcileMenu
