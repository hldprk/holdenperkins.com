



import React, { Component } from 'react';
import '../App.css'
import {SiReact, SiBulma} from 'react-icons/si'
import {Heading, Section} from 'react-bulma-components';

export class MyFooter extends Component{

    render() {
    
        return( 
		<Section>
			<Heading subtitle size={5} className='has-text-centered'>
				Built with <SiReact/> React and <SiBulma/> Bulma.
			</Heading>
		</Section>
		)

    }

}
