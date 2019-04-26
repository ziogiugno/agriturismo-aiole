import React from 'react'
import it from 'react-intl/locale-data/it'
import en from 'react-intl/locale-data/en'
import de from 'react-intl/locale-data/de'
import fr from 'react-intl/locale-data/fr'
import { addLocaleData, IntlProvider } from 'react-intl'
import localEng from '../../../../data/en.json'
import localIta from '../../../../data/it.json'
import localFra from '../../../../data/fr.json'
import localDeu from '../../../../data/de.json'
import { Context } from '../Context'
import Provider from './Provider'
import { Global } from './styles'
import './layout.css'

addLocaleData([...it, ...en, ...fr, ...de])

const messages = {
	en: localEng,
	it: localIta,
	fr: localFra,
	de: localDeu
}

const Layout = ({ children }) => (
	<Provider>
		<Context.Consumer>
			{({ lang }) => (
				<IntlProvider locale={lang} messages={messages[lang]}>
					<Global lang={lang}>
						{children}
					</Global>
				</IntlProvider>
			)
			}
		</Context.Consumer>
	</Provider>
)

export { Layout }
