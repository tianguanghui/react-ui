import classnames from 'classnames'
import _styles from '../styles/_tooltip.scss'

const div = document.createElement('div')
document.body.appendChild(div)

const arrow = document.createElement('div')
arrow.className = _styles['tooltip-arrow']
div.appendChild(arrow)

const inner = document.createElement('div')
inner.className = _styles['tooltip-inner']
div.appendChild(inner)

export function show (props) {
  const { placement, style, tip, trigger } = props

  div.style = ''
  Object.keys(style).forEach(k => {
    div.style[k] = style[k]
  })

  const className = classnames(
    _styles.tooltip,
    _styles.in,
    _styles[`tooltip-${placement}`]
  )

  div.className = className

  inner.innerText = tip

  if (trigger === 'click') {
    document.addEventListener('click', hide)
  }
}

export function hide () {
  div.style.display = 'none'
  div.className = ''
  document.removeEventListener('click', hide)
}
