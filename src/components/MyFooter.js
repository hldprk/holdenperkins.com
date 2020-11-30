



import React, { Component } from 'react';
import Heading from 'react-bulma-components/lib/components/heading/heading';
import Footer from 'react-bulma-components/lib/components/footer';
import {SiReact, SiBulma} from 'react-icons/si'

export class MyFooter extends Component{


    render() {
    
        return <Footer>
            <Heading subtitle size={5} className='has-text-centered'>Built with <SiReact/> React and <SiBulma/> Bulma.</Heading>
        </Footer>

    }

}
