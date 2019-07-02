import React from 'react'
import LanguageContext from '../context/LanguageContext'

class LanguageSelector extends React.Component {
    static contextType = LanguageContext

    render() {
        return (
            <div>Select a language
                <i style={ { marginLeft: '12px' } } className='flag us'
                   onClick={ () => this.context.onLanguageChange( 'english' ) }/>
                <i className='flag pt'
                   onClick={ () => this.context.onLanguageChange( 'portuguese' ) }/>
            </div>
        )
    }
}

export default LanguageSelector