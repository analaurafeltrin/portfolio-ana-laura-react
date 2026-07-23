import './styles.css'
import downloadIcon from '../../assets/icon/download.png'
import arrowIcon from '../../assets/icon/arrow.png'
import LinkedinIcon from '../../assets/icon/linkedin.png'
import gitHubIcon from '../../assets/icon/github.png'
import InstagramIcon from '../../assets/icon/instagram.png'

const buttonConfig = {
  downloadCompleteResume: {
    icon: downloadIcon,
    href: '/curriculo.pdf',
    download: 'curriculo-ana-laura-feltrin.pdf',
    text: 'Baixar currículo completo',
    colorClass: 'defaultButton downloadButtonPurple',
  },
  linkedin: {
    icon: arrowIcon,
    href: 'https://www.linkedin.com/in/analaurafeltrin/',
    text: 'Confira meu Linkedin',
    colorClass: 'defaultButton linkedinButton',
  },
}

const socialButtons = [
  {
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/analaurafeltrin/',
    alt: 'LinkedIn',
  },
  {
    icon: gitHubIcon,
    href: 'https://github.com/analaurafeltrin',
    alt: 'GitHub',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/psi.analaurafeltrin',
    alt: 'Instagram',
  },
]

const ButtonLink = ({ href, download, icon, alt, text, colorClass }) => (
  <div className={colorClass}>
    <a href={href} download={download} target='_blank' rel='noreferrer'>
      <img src={icon} alt={''} />
      {text}
    </a>
  </div>
)

const Button = ({ buttonType, url, text }) => {
  if (buttonType === 'social') {
    return (
      <div className='socialContainer'>
        {socialButtons.map(btn => (
          <div key={btn.href} className='socialButton'>
            <a href={btn.href} target='_blank' rel='noreferrer'>
              <img src={btn.icon} alt={btn.alt} />
            </a>
          </div>
        ))}
      </div>
    )
  }
  if (buttonType === 'projects') {
    return (
      <ButtonLink
        href={url}
        icon={gitHubIcon}
        alt='GitHub'
        text={text || 'Ver no GitHub'}
        colorClass='projectButton'
      />
    )
  }
  const config = buttonConfig[buttonType]
  if (!config) return null

  return <ButtonLink {...config} />
}

export default Button
