



import React, { Component } from 'react';
import Heading from 'react-bulma-components/lib/components/heading/heading';
import Footer from 'react-bulma-components/lib/components/footer';



export class MyFooter extends Component{


    render() {
    
        return <Footer>
            <Heading subtitle size={8} className='code has-text-centered'>Made with React and Bulma, using data fetched via the GitHub API.</Heading>
        </Footer>

    }

}
