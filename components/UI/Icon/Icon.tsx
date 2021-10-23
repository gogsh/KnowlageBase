import React from 'react'
import { Path, Svg } from './IconStyles'
import { Color } from '../../../types/Theme.types'

interface Props {
  type: 'door' | 'cog' | 'edit' | 'check'
  clickHandler: any
  size?: number
  color?: Color
}

function Icon({ type, clickHandler, size, color }: Props) {
  const defaultSize = 20
  const SIZE = size ? defaultSize * size : defaultSize

  function renderIcon(type) {
    switch (type) {
      case 'door':
        return (
          <Path
            d='M7.49825 0V0.88203H4.04883V18.4803H5.32408V2.15728H7.49825V20L15.951 18.4803V15.9936V1.52284L7.49825 0ZM9.05326 10.6854C8.76911 10.6854 8.53874 10.3857 8.53874 10.016C8.53874 9.64625 8.76911 9.34652 9.05326 9.34652C9.3374 9.34652 9.56777 9.64625 9.56777 10.016C9.56777 10.3857 9.3374 10.6854 9.05326 10.6854Z'
            fill={color}
          />
        )
      case 'cog':
        return (
          <Path
            d='M17.0207 11.3089L16.6775 11.1134C16.269 10.8814 16.025 10.4648 16.025 10C16.025 9.53521 16.269 9.11864 16.6775 8.88657L17.0207 8.69114C17.9576 8.15757 18.278 6.97986 17.7371 6.05671L17.0846 4.94329C16.545 4.02207 15.3451 3.70579 14.4108 4.23743L14.0676 4.43221C13.6592 4.66493 13.1705 4.66493 12.7627 4.43221C12.3542 4.1995 12.1102 3.78357 12.1102 3.31879V2.92857C12.1102 1.86529 11.232 1 10.1528 1H8.84786C7.76867 1 6.89045 1.86529 6.89045 2.92857V3.31943C6.89045 3.78421 6.64643 4.20014 6.23798 4.43286C5.82954 4.66493 5.34149 4.66557 4.93304 4.43286L4.58985 4.23743C3.65551 3.70579 2.45562 4.02207 1.91538 4.94329L1.26291 6.05671C0.722011 6.97986 1.04237 8.15821 1.97932 8.69114L2.32317 8.88657C2.73162 9.11864 2.97564 9.53521 2.97564 10C2.97564 10.4648 2.73162 10.8814 2.32317 11.1134L1.97997 11.3089C1.04303 11.8418 0.722664 13.0201 1.26356 13.9433L1.91603 15.0567C2.45627 15.9779 3.65616 16.2942 4.58985 15.7626L4.93304 15.5678C5.34149 15.3344 5.82954 15.3357 6.23798 15.5678C6.64643 15.8005 6.89045 16.2164 6.89045 16.6812V17.0714C6.89045 18.1347 7.76867 19 8.84786 19H10.1528C11.232 19 12.1102 18.1347 12.1102 17.0714V16.6806C12.1102 16.2158 12.3542 15.7999 12.7627 15.5671C13.1705 15.3351 13.6592 15.3344 14.0676 15.5671L14.4108 15.7626C15.3451 16.2936 16.545 15.9773 17.0846 15.0567L17.7371 13.9433C18.278 13.0201 17.9576 11.8418 17.0207 11.3089ZM9.50033 13.2143C7.70147 13.2143 6.23798 11.7724 6.23798 10C6.23798 8.22764 7.70147 6.78571 9.50033 6.78571C11.2992 6.78571 12.7627 8.22764 12.7627 10C12.7627 11.7724 11.2992 13.2143 9.50033 13.2143Z'
            fill={color}
          />
        )
      case 'edit':
        return (
          <Path
            d='M19.269 6.03588L18.385 6.92023L13.0809 1.61686L13.9649 0.732422C14.9413 -0.244141 16.5247 -0.244141 17.5013 0.732422L19.269 2.5006C20.2441 3.47662 20.2441 5.0594 19.269 6.03588ZM6.89321 16.642C6.64911 16.8861 6.64911 17.2814 6.89321 17.5255C7.13743 17.771 7.53297 17.771 7.77707 17.5255L17.5013 7.80405L16.6163 6.91961L6.89321 16.642ZM2.47315 12.2229C2.22893 12.4673 2.22893 12.8624 2.47315 13.1067C2.71725 13.3508 3.11279 13.3508 3.35701 13.1067L13.0809 3.38446L12.1973 2.5006L2.47315 12.2229ZM13.9637 4.26766L4.24067 13.9905C3.75243 14.4778 3.75367 15.2699 4.24067 15.7582C4.72912 16.2465 5.52003 16.2487 6.00955 15.7569L15.7326 6.03588L13.9637 4.26766ZM6.00704 18.4071C5.70807 18.1078 5.56397 17.7285 5.51035 17.3376C5.38327 17.3572 5.25528 17.3755 5.12453 17.3755C4.4567 17.3755 3.82947 17.1144 3.35701 16.642C2.88456 16.1683 2.62455 15.5419 2.62455 14.8742C2.62455 14.7524 2.64281 14.6338 2.65996 14.5155C2.25588 14.4604 1.8824 14.2834 1.58941 13.9905C1.5613 13.9626 1.55161 13.9247 1.52602 13.8941L0 20L6.09005 18.4755C6.06322 18.451 6.03284 18.4327 6.00704 18.4071Z'
            fill={color}
          />
        )
        case 'check':
          return (
            <Path
              d="M7.55387 14.9223L0.0760456 7.27979C-0.0253485 7.17617 -0.0253485 7.02073 0.0760456 6.9171L2.23067 4.71503C2.33207 4.6114 2.48416 4.6114 2.58555 4.71503L7.73131 9.97409L17.4144 0.0777202C17.5158 -0.0259067 17.6679 -0.0259067 17.7693 0.0777202L19.924 2.27979C20.0253 2.38342 20.0253 2.53886 19.924 2.64249L7.90875 14.9223C7.80735 15.0259 7.65526 15.0259 7.55387 14.9223Z"
              fill={color}
            />
          )
      default:
        return <div>invalid type</div>
    }
  }

  return (
    <Svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 20 20`}
      fill='none'
      onClick={clickHandler}>
      {renderIcon(type)}
    </Svg>
  )
}

export default Icon